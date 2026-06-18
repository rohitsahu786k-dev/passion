import puppeteer, { type Browser, type Page } from 'puppeteer-core';

export interface MoneyRobotCampaignInput {
  name: string;
  moneySiteUrls: string[];
  keywords: string[];
  diagramId?: string;
  articleTitle?: string;
  articleBody?: string;
  onLog?: (message: string) => void | Promise<void>;
}

const MONEYROBOT_LOGIN_URL = process.env.MONEYROBOT_LOGIN_URL || 'https://web.moneyrobot.com/login';
const MONEYROBOT_CAMPAIGN_URL =
  process.env.MONEYROBOT_CAMPAIGN_URL || 'https://web.moneyrobot.com/app/create-a-new-seo-campaign';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function isTruthy(value: string | undefined) {
  return value === 'true' || value === '1' || value === 'yes';
}

function uniq(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

async function getChromeLaunchConfig() {
  const localChromePath = process.env.MONEYROBOT_CHROME_PATH;
  const useServerlessChromium =
    isTruthy(process.env.MONEYROBOT_USE_SPARTICUZ) || (!!process.env.VERCEL && !localChromePath);

  if (!useServerlessChromium) {
    return {
      executablePath: localChromePath || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled',
        '--disable-dev-shm-usage',
      ],
    };
  }

  const chromium = (await import('@sparticuz/chromium')).default;
  return {
    executablePath: await chromium.executablePath(),
    args: uniq([
      ...chromium.args,
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--disable-dev-shm-usage',
    ]),
  };
}

async function launchBrowser(log: (message: string) => Promise<void>): Promise<Browser> {
  const launchConfig = await getChromeLaunchConfig();
  await log(`Launching Chromium: ${launchConfig.executablePath}`);

  return puppeteer.launch({
    executablePath: launchConfig.executablePath,
    headless: process.env.MONEYROBOT_HEADLESS === 'false' ? false : 'shell',
    args: launchConfig.args,
    defaultViewport: { width: 1366, height: 900 },
  });
}

async function waitForAnySelector(page: Page, selectors: string[], timeout = 20000) {
  const selector = selectors.join(', ');
  await page.waitForSelector(selector, { timeout, visible: true });
  return selector;
}

async function fillField(page: Page, selectors: string[], value: string, options: { multiline?: boolean } = {}) {
  const selector = await waitForAnySelector(page, selectors);
  await page.evaluate(
    ({ selector: selectorList, nextValue }) => {
      const element = document.querySelector(selectorList) as HTMLInputElement | HTMLTextAreaElement | null;
      if (!element) return;
      element.focus();
      element.value = nextValue;
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    },
    { selector, nextValue: value }
  );

  if (!options.multiline) {
    await page.click(selector, { count: 3 });
    await page.keyboard.type(value, { delay: 10 });
  }
}

async function clickFirst(page: Page, selectors: string[], timeout = 10000) {
  const selector = await waitForAnySelector(page, selectors, timeout);
  await page.click(selector);
}

async function clickButtonByText(page: Page, candidates: string[]) {
  return page.evaluate((texts) => {
    const buttons = Array.from(document.querySelectorAll('button, input[type="submit"], a.btn'));
    const target = buttons.find((button) => {
      const text = `${button.textContent || ''} ${(button as HTMLInputElement).value || ''}`.toLowerCase();
      return texts.some((candidate) => text.includes(candidate));
    }) as HTMLElement | undefined;

    if (!target) return false;
    target.click();
    return true;
  }, candidates.map((candidate) => candidate.toLowerCase()));
}

async function extractVisibleError(page: Page) {
  return page.evaluate(() => {
    const selectors = [
      '.text-danger',
      '.alert-danger',
      '.validation-summary-errors',
      '.field-validation-error',
      '.toast-error',
      '[role="alert"]',
    ];
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      const text = element?.textContent?.trim();
      if (text) return text;
    }
    return null;
  });
}

async function selectDiagram(page: Page, diagramId: string, log: (message: string) => Promise<void>) {
  const selected = await page.evaluate((requestedDiagram) => {
    const selects = Array.from(
      document.querySelectorAll('select[name*="Diagram"], select[id*="Diagram"], select')
    ) as HTMLSelectElement[];

    for (const select of selects) {
      const option = Array.from(select.options).find((item) => {
        const value = item.value.toLowerCase();
        const text = item.textContent?.toLowerCase() || '';
        const requested = requestedDiagram.toLowerCase();
        return value === requested || text === requested || text.includes(requested) || requested.includes(text);
      });

      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event('input', { bubbles: true }));
        select.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }
    }
    return false;
  }, diagramId);

  await log(selected ? `Selected SEO diagram: ${diagramId}` : `SEO diagram not found, using MoneyRobot default: ${diagramId}`);
}

async function fillArticleCopy(
  page: Page,
  input: MoneyRobotCampaignInput,
  log: (message: string) => Promise<void>
) {
  if (!input.articleTitle && !input.articleBody) return;

  await log('Looking for advanced article fields...');
  const advancedClicked = await page.evaluate(() => {
    const advancedToggle = Array.from(
      document.querySelectorAll('input[type="checkbox"], button, a')
    ).find((element) => {
      const id = (element as HTMLElement).id.toLowerCase();
      const name = ((element as HTMLInputElement).name || '').toLowerCase();
      const text = element.textContent?.toLowerCase() || '';
      return id.includes('advanced') || name.includes('advanced') || text.includes('advanced');
    }) as HTMLElement | undefined;

    if (!advancedToggle) return false;
    if (advancedToggle instanceof HTMLInputElement && advancedToggle.type === 'checkbox' && advancedToggle.checked) {
      return true;
    }
    advancedToggle.click();
    return true;
  });

  if (advancedClicked) {
    await delay(1500);
  }

  if (input.articleTitle) {
    const titleFilled = await page.evaluate((title) => {
      const field = document.querySelector(
        '#ARTICLE_TITLE_FIELD, input[name="Title"], input[id="Title"], input[name*="ArticleTitle"], input[id*="ArticleTitle"]'
      ) as HTMLInputElement | null;
      if (!field) return false;
      field.value = title;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }, input.articleTitle);
    await log(titleFilled ? 'Filled article title.' : 'Article title field was not found.');
  }

  if (input.articleBody) {
    const bodyFilled = await page.evaluate((body) => {
      const editor = document.querySelector('.note-editable, [contenteditable="true"]') as HTMLElement | null;
      if (editor) {
        editor.innerHTML = body;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      }

      const textarea = document.querySelector(
        '#ARTICLE_BODY_FIELD, textarea[name="Body"], textarea[id="Body"], textarea[name*="Article"], textarea[id*="Article"]'
      ) as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = body;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
      }

      return Boolean(editor || textarea);
    }, input.articleBody);
    await log(bodyFilled ? 'Filled article body.' : 'Article body field/editor was not found.');
  }
}

export async function runMoneyRobotCampaign(
  input: MoneyRobotCampaignInput
): Promise<{ success: boolean; error?: string }> {
  const email = process.env.MONEYROBOT_EMAIL;
  const password = process.env.MONEYROBOT_PASSWORD;
  const dryRun = isTruthy(process.env.MONEYROBOT_DRY_RUN);

  const log = async (message: string) => {
    console.log(`[MoneyRobot Worker] ${message}`);
    await input.onLog?.(message);
  };

  if (!email || !password) {
    return { success: false, error: 'MoneyRobot credentials are not set in environment variables' };
  }

  let browser: Browser | null = null;

  try {
    browser = await launchBrowser(log);
    const page = await browser.newPage();
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(60000);

    await log(`Opening MoneyRobot login page: ${MONEYROBOT_LOGIN_URL}`);
    await page.goto(MONEYROBOT_LOGIN_URL, { waitUntil: 'networkidle2', timeout: 60000 });

    await log('Filling MoneyRobot credentials...');
    await fillField(page, ['input[name="Email"]', '#Email', 'input[type="email"]', 'input[name="email"]'], email);
    await fillField(page, ['input[name="Password"]', '#Password', 'input[type="password"]', 'input[name="password"]'], password);

    await log('Submitting MoneyRobot login form...');
    await Promise.allSettled([
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 }),
      clickFirst(page, ['button[type="submit"]', 'input[type="submit"]', '.btn-primary'], 10000),
    ]);

    await delay(1500);
    const currentUrl = page.url();
    const loginFormStillVisible = await page.evaluate(() => {
      const passwordInput = document.querySelector('input[type="password"]') as HTMLElement | null;
      if (!passwordInput) return false;
      const style = window.getComputedStyle(passwordInput);
      return style.visibility !== 'hidden' && style.display !== 'none';
    });
    await log(`MoneyRobot URL after login: ${currentUrl}`);

    const loginError = await extractVisibleError(page);
    if (currentUrl.toLowerCase().includes('/login') || loginFormStillVisible) {
      throw new Error(loginError || 'Login did not leave the MoneyRobot login page');
    }

    await log(`Logged in. Opening campaign page: ${MONEYROBOT_CAMPAIGN_URL}`);
    await page.goto(MONEYROBOT_CAMPAIGN_URL, { waitUntil: 'networkidle2', timeout: 60000 });

    await log('Filling campaign name, target URLs, and keywords...');
    await fillField(
      page,
      ['#CAMPAIGN_NAME_FIELD', 'input[name="CampaignName"]', '#CampaignName', 'input[name*="Campaign"]'],
      input.name
    );
    await fillField(
      page,
      [
        '#MONEY_SITE_URLS_FIELD',
        'textarea[name="MoneySiteUrls"]',
        '#MoneySiteUrls',
        'textarea[name*="Url"]',
        'textarea[id*="Url"]',
      ],
      input.moneySiteUrls.join('\n'),
      { multiline: true }
    );
    await fillField(
      page,
      [
        '#KEYWORDS_TO_RANK_FOR_FIELD',
        'textarea[name="Keywords"]',
        '#Keywords',
        'textarea[name*="Keyword"]',
        'textarea[id*="Keyword"]',
      ],
      input.keywords.join('\n'),
      { multiline: true }
    );

    if (input.diagramId) {
      await selectDiagram(page, input.diagramId, log);
    }

    await fillArticleCopy(page, input, log);

    if (dryRun) {
      await log('MONEYROBOT_DRY_RUN is enabled; campaign form was filled but not submitted.');
      return { success: true };
    }

    await log('Submitting MoneyRobot campaign...');
    const clickedByText = await clickButtonByText(page, ['create', 'submit', 'start', 'save']);
    if (!clickedByText) {
      await clickFirst(
        page,
        ['#create_campaign_btn', 'button#btnCreateCampaign', '#btnCreateCampaign', 'button[type="submit"]'],
        10000
      );
    }

    await Promise.race([
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 45000 }).catch(() => null),
      delay(15000),
    ]);

    const submissionError = await extractVisibleError(page);
    if (submissionError) {
      throw new Error(submissionError);
    }

    const successSignal = await page.evaluate(() => {
      const url = window.location.href.toLowerCase();
      const hasSuccessMessage = Boolean(
        document.querySelector('.alert-success, .toast-success, .success-message, [class*="success"]')
      );
      return url.includes('campaign') || url.includes('dashboard') || hasSuccessMessage;
    });

    await log(successSignal ? 'MoneyRobot campaign submitted successfully.' : 'Submission completed without visible errors.');
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown MoneyRobot automation error';
    await log(`Automation failed: ${message}`);
    return { success: false, error: message };
  } finally {
    if (browser) {
      await log('Closing browser.');
      await browser.close();
    }
  }
}
