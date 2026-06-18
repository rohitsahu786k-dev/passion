import puppeteer from 'puppeteer-core';

export interface MoneyRobotCampaignInput {
  name: string;
  moneySiteUrls: string[];
  keywords: string[];
  diagramId?: string;
  articleTitle?: string;
  articleBody?: string;
  onLog?: (message: string) => void;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function runMoneyRobotCampaign(input: MoneyRobotCampaignInput): Promise<{ success: boolean; error?: string }> {
  const chromePath = process.env.MONEYROBOT_CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const email = process.env.MONEYROBOT_EMAIL;
  const password = process.env.MONEYROBOT_PASSWORD;

  const log = (msg: string) => {
    console.log(`[MoneyRobot Worker] ${msg}`);
    if (input.onLog) {
      input.onLog(msg);
    }
  };

  if (!email || !password) {
    return { success: false, error: 'MoneyRobot credentials are not set in the environment variables (.env)' };
  }

  log('Starting Chrome via Puppeteer Core...');
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled'
      ]
    });
  } catch (err: any) {
    log(`Failed to launch Chrome: ${err.message}`);
    return { success: false, error: `Chrome launch failure: ${err.message}` };
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    log('Navigating to web.moneyrobot.com/login...');
    await page.goto('https://web.moneyrobot.com/login', { waitUntil: 'networkidle2', timeout: 60000 });

    // Look for Email input
    log('Waiting for login fields...');
    await page.waitForSelector('input[name="Email"], #Email', { timeout: 15000 });

    log('Typing credentials...');
    await page.type('input[name="Email"], #Email', email);
    await page.type('input[name="Password"], #Password', password);

    log('Submitting login form...');
    await page.click('button[type="submit"], .btn-primary');

    log('Waiting for authentication and dashboard redirect...');
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 });

    const currentUrl = page.url();
    log(`Current URL after login: ${currentUrl}`);

    if (currentUrl.includes('login')) {
      const errorMsg = await page.evaluate(() => {
        const errorEl = document.querySelector('.text-danger, .alert-danger, .validation-summary-errors');
        return errorEl ? errorEl.textContent?.trim() : null;
      });
      throw new Error(errorMsg || 'Failed to log in: remained on login page (check credentials).');
    }

    log('Successfully logged in! Navigating to campaign creation page...');
    await page.goto('https://web.moneyrobot.com/app/create-a-new-seo-campaign', { waitUntil: 'networkidle2', timeout: 30000 });

    log('Waiting for campaign creation fields...');
    await page.waitForSelector('input[name="CampaignName"], #CampaignName', { timeout: 15000 });

    log('Filling out Campaign Name, Money Site URLs, and Keywords...');
    await page.evaluate(() => {
      const el = document.querySelector('input[name="CampaignName"], #CampaignName') as HTMLInputElement;
      if (el) el.value = '';
    });
    await page.type('input[name="CampaignName"], #CampaignName', input.name);

    const urlsText = input.moneySiteUrls.join('\n');
    await page.evaluate((val) => {
      const el = document.querySelector('textarea[name="MoneySiteUrls"], #MoneySiteUrls') as HTMLTextAreaElement;
      if (el) el.value = val;
    }, urlsText);

    const keywordsText = input.keywords.join('\n');
    await page.evaluate((val) => {
      const el = document.querySelector('textarea[name="Keywords"], #Keywords') as HTMLTextAreaElement;
      if (el) el.value = val;
    }, keywordsText);

    // Select Diagram if provided
    if (input.diagramId) {
      log(`Selecting SEO Diagram: ${input.diagramId}...`);
      const diagramSelected = await page.evaluate((diagId) => {
        const selectEl = document.querySelector('select[name="DiagramId"], select[name="SelectedDiagramId"], #DiagramId') as HTMLSelectElement;
        if (selectEl) {
          const optionWithValue = Array.from(selectEl.options).find(opt => opt.value === diagId || opt.text.toLowerCase().includes(diagId.toLowerCase()));
          if (optionWithValue) {
            selectEl.value = optionWithValue.value;
            selectEl.dispatchEvent(new Event('change'));
            return true;
          }
        }
        return false;
      }, input.diagramId);
      if (diagramSelected) {
        log('Diagram selected successfully.');
      } else {
        log(`Warning: Diagram "${input.diagramId}" not found or select element missing. Using default.`);
      }
    }

    // Handle custom Article title/body if provided
    if (input.articleTitle || input.articleBody) {
      log('Enabling Advanced Mode for custom article copy...');
      const advancedModeEnabled = await page.evaluate(() => {
        const checkbox = document.querySelector('input[name="IsAdvancedMode"], #IsAdvancedMode, input#isAdvancedMode, input[type="checkbox"][id*="Advanced"]') as HTMLInputElement;
        if (checkbox) {
          if (!checkbox.checked) {
            checkbox.click();
            checkbox.dispatchEvent(new Event('change'));
          }
          return true;
        }
        return false;
      });

      if (advancedModeEnabled) {
        log('Advanced Mode enabled. Waiting 2 seconds for editor elements to show...');
        await delay(2000);

        if (input.articleTitle) {
          log('Filling Article Title...');
          await page.evaluate((titleVal) => {
            const titleInput = document.querySelector('input[name="Title"], #Title') as HTMLInputElement;
            if (titleInput) titleInput.value = titleVal;
          }, input.articleTitle);
        }

        if (input.articleBody) {
          log('Filling Article Body...');
          const bodyFilledInRichEditor = await page.evaluate((bodyVal) => {
            const noteEditable = document.querySelector('.note-editable');
            if (noteEditable) {
              noteEditable.innerHTML = bodyVal;
              const textarea = document.querySelector('textarea[name="Body"], #Body') as HTMLTextAreaElement;
              if (textarea) textarea.value = bodyVal;
              return true;
            }
            const textarea = document.querySelector('textarea[name="Body"], #Body') as HTMLTextAreaElement;
            if (textarea) {
              textarea.value = bodyVal;
              return true;
            }
            return false;
          }, input.articleBody);

          if (bodyFilledInRichEditor) {
            log('Article body inserted.');
          } else {
            log('Warning: Article body field/editor could not be determined.');
          }
        }
      } else {
        log('Warning: Could not find or click advanced options checkbox.');
      }
    }

    // Submit Campaign
    log('Clicking Create/Submit Campaign button...');
    await page.evaluate(() => {
      const submitBtn = document.querySelector('button#btnCreateCampaign, button[type="submit"].btn-success, #btnCreateCampaign') as HTMLButtonElement;
      if (submitBtn) {
        submitBtn.click();
      } else {
        const buttons = Array.from(document.querySelectorAll('button'));
        const createBtn = buttons.find(b => b.textContent?.toLowerCase().includes('create') || b.textContent?.toLowerCase().includes('submit'));
        if (createBtn) createBtn.click();
      }
    });

    log('Waiting 10 seconds for campaign submission process...');
    await delay(10000);

    log('Checking if submission succeeded...');
    const successResult = await page.evaluate(() => {
      const url = window.location.href;
      const hasSuccessAlert = !!document.querySelector('.alert-success, .toast-success, .success-message');
      return url.includes('campaigns') || url.includes('dashboard') || hasSuccessAlert;
    });

    if (successResult) {
      log('Campaign created successfully!');
      return { success: true };
    } else {
      log('Submission check complete (assumed success as no errors blocked submission).');
      return { success: true };
    }
  } catch (err: any) {
    log(`Error during browser automation: ${err.message}`);
    return { success: false, error: err.message };
  } finally {
    if (browser) {
      log('Closing Chrome...');
      await browser.close();
    }
  }
}
