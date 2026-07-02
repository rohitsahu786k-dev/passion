import * as fs from 'fs';
import * as path from 'path';

// Let's define the city data structure
type CityDetails = {
  name: string;
  slug: string;
  state: string;
  phone: string;
  whatsapp: string;
  address: string;
  rating: number;
  reviewCount: number;
  landmarks: string[];
  vibe: string;
  localIntro: string;
  whyChooseText: string;
  hotelContext: string;
  faqs: { q: string; a: string }[];
};

const citiesList: CityDetails[] = [
  {
    name: 'Delhi',
    slug: 'delhi',
    state: 'Delhi',
    phone: '+919999900101',
    whatsapp: '919999900101',
    address: 'Connaught Place, New Delhi',
    rating: 4.8,
    reviewCount: 185,
    landmarks: ['Connaught Place', 'Saket', 'Dwarka', 'Aerocity'],
    vibe: 'Delhi is the busy national capital, hosting business travelers, diplomats, and tourists from all over the world in luxury hotels like Aerocity and South Delhi.',
    localIntro: 'If you are visiting Delhi for business, staying in a premium hotel near Aerocity, or exploring the historic spots around Connaught Place, having a local companion can make your trip much more relaxed. We help you book verified companions who know the city well.',
    whyChooseText: 'We focus on clear communication and real profiles. Delhi NCR is huge, and our booking support helps you find companions near you quickly. Whether you are staying at a luxury hotel in Vasant Kunj or a private room in Dwarka, we keep your details safe.',
    hotelContext: 'Many visitors stay near the airport or in South Delhi hotels. We provide direct coordination so you do not have to worry about hotel entry or late hours booking.',
    faqs: [
      { q: 'Is escort service available in Delhi NCR?', a: 'Yes. Girls of Passion provides booking support across Delhi, Gurgaon, Noida, and Aerocity. Call or message us on WhatsApp to check available profiles near your hotel.' },
      { q: 'How does hotel booking work in New Delhi?', a: 'Just share your hotel area (like Saket or Connaught Place) and timing. We will suggest verified profiles available nearby for direct coordination.' },
      { q: 'Are profiles verified in Delhi?', a: 'Yes. Every companion profile is checked to make sure clients get a reliable and genuine booking experience.' },
      { q: 'Can I book a companion in Gurgaon or Noida?', a: 'Yes, our service network covers Gurgaon and Noida sectors as well. You can request availability for NCR locations anytime.' }
    ]
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    state: 'Maharashtra',
    phone: '+919999900102',
    whatsapp: '919999900102',
    address: 'Bandra West, Mumbai',
    rating: 4.8,
    reviewCount: 172,
    landmarks: ['Bandra', 'Andheri', 'Powai', 'BKC', 'Colaba'],
    vibe: 'Mumbai is the financial capital of India, famous for its Bollywood industry, Marine Drive, and upscale hotels facing the Arabian Sea.',
    localIntro: 'Whether you are staying near BKC for corporate meetings, hanging out in Bandra West, or booked at a beachside hotel in Juhu, a friendly local companion is the best way to unwind. We connect you with verified profiles in Mumbai.',
    whyChooseText: 'Our platform is known for fast WhatsApp responses and simple rules. Mumbai is a fast-paced city where timing is everything. We ensure your booking is handled quickly, with complete privacy.',
    hotelContext: 'From Juhu beach resorts to Colaba boutique hotels, our team handles coordination smoothly, respecting client preferences and safety.',
    faqs: [
      { q: 'How can I book a call girl in Mumbai?', a: 'You can browse profiles and contact us via WhatsApp. Share your current area or hotel location, and we will share available options.' },
      { q: 'Do you cover North and South Mumbai?', a: 'Yes, we provide booking assistance in Bandra, Andheri, Powai, BKC, and South Mumbai areas like Colaba.' },
      { q: 'Is cash payment accepted in Mumbai?', a: 'Yes, we offer cash payment options for client convenience and privacy.' },
      { q: 'Are the companion profiles real?', a: 'Yes. We verify all profiles to ensure they match their photos, so you get exactly what you choose.' }
    ]
  },
  {
    name: 'Udaipur',
    slug: 'udaipur',
    state: 'Rajasthan',
    phone: '+919999900103',
    whatsapp: '919999900103',
    address: 'Fatehpura, Udaipur',
    rating: 4.9,
    reviewCount: 148,
    landmarks: ['Lake Pichola', 'Fateh Sagar', 'Hiran Magri', 'Bhuwana'],
    vibe: 'Udaipur is the historic city of lakes and palaces, famous for destination weddings, luxury lake resorts, and romantic tourism.',
    localIntro: 'If you are staying at a lake-facing palace hotel near Lake Pichola or visiting Udaipur for a relaxing vacation, our verified companions can join you for dinners, sightseeing, or private company. We coordinate everything discreetly.',
    whyChooseText: 'Udaipur attracts premium tourists who expect high standards of privacy. We specialize in providing verified companions who match the relaxed, royal vibe of the city.',
    hotelContext: 'Whether you are booked at a heritage property near Fateh Sagar or a modern resort in Hiran Magri, we coordinate directly to ensure a smooth, worry-free meet.',
    faqs: [
      { q: 'Is escort service available in Udaipur resorts?', a: 'Yes. We coordinate with clients staying at lakeside resorts, heritage hotels, and private stays in Udaipur.' },
      { q: 'Can I book a companion for sightseeing in Udaipur?', a: 'Yes. Our companions are polite, well-behaved, and can join you for dinners or local sightseeing around Lake Pichola.' },
      { q: 'How do I confirm a booking in Udaipur?', a: 'Message us on WhatsApp with your travel details and profile preference. We will confirm availability and secure your booking.' },
      { q: 'What are the charges for Udaipur companions?', a: 'Rates vary based on the profile and duration. Contact our booking desk for clear details before confirmation.' }
    ]
  },
  {
    name: 'Jaipur',
    slug: 'jaipur',
    state: 'Rajasthan',
    phone: '+919999900104',
    whatsapp: '919999900104',
    address: 'C-Scheme, Jaipur',
    rating: 4.7,
    reviewCount: 156,
    landmarks: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Raja Park'],
    vibe: 'Jaipur is the capital city of Rajasthan, known for its pink-painted historic streets, forts, palaces, and busy local markets.',
    localIntro: 'Visiting the Pink City for a business trip, staying at a luxury heritage hotel in C-Scheme, or exploring local spots like Raja Park? A verified call girl booking can add comfort to your stay. We make booking easy.',
    whyChooseText: 'We focus on providing genuine companions in Jaipur. No fake pictures, no hidden charges. Our support desk operates 24/7, helping you find verified profiles near Malviya Nagar or Vaishali Nagar.',
    hotelContext: 'We coordinate with major hotels and private guest stays across Jaipur, ensuring a discreet, secure, and respectful companionship experience.',
    faqs: [
      { q: 'How to book a call girl in Jaipur?', a: 'Simply reach out to us via call or WhatsApp. Let us know your preferred hotel location, and we will show you available profiles.' },
      { q: 'Which areas do you cover in Jaipur?', a: 'We cover C-Scheme, Malviya Nagar, Vaishali Nagar, Raja Park, Mansarovar, and nearby hotel hubs.' },
      { q: 'Is my personal information safe?', a: 'Yes. We delete all booking details and chat history after coordination to protect client privacy.' },
      { q: 'Can I pay cash in Jaipur?', a: 'Yes. We offer cash-on-meet options so clients do not have to worry about online transactions.' }
    ]
  },
  {
    name: 'Indore',
    slug: 'indore',
    state: 'Madhya Pradesh',
    phone: '+919999900105',
    whatsapp: '919999900105',
    address: 'Vijay Nagar, Indore',
    rating: 4.7,
    reviewCount: 138,
    landmarks: ['Vijay Nagar', 'Palasia', 'Rajwada', 'Bhawarkua'],
    vibe: 'Indore is famous for its clean streets, street food culture, and growing IT hubs, hosting business visitors and students.',
    localIntro: 'Whether you are in Indore for business meetings near Vijay Nagar, shopping around Rajwada, or visiting local markets, we provide local booking support for verified companions. Make your Indore visit much more comfortable.',
    whyChooseText: 'We understand that local travelers and business executives value privacy. We provide handpicked profiles and fast coordination across Vijay Nagar and Palasia.',
    hotelContext: 'Indore has excellent business hotels. We maintain smooth coordination with verified hotels to make sure your booking is hassle-free.',
    faqs: [
      { q: 'Is booking support available 24/7 in Indore?', a: 'Yes. Our team is available 24/7 on WhatsApp to check available profiles and coordinate your booking.' },
      { q: 'Which parts of Indore do you cover?', a: 'We cover Vijay Nagar, Palasia, Bhawarkua, and all major commercial sectors.' },
      { q: 'Are the photos real for Indore companions?', a: 'Yes. We share checked and verified profiles so you get exactly what you see.' },
      { q: 'What is the booking process?', a: 'Select a profile, send us a WhatsApp message, share your area name, and we will confirm the booking within minutes.' }
    ]
  },
  {
    name: 'Goa',
    slug: 'goa',
    state: 'Goa',
    phone: '+919999900106',
    whatsapp: '919999900106',
    address: 'Panaji, Goa',
    rating: 4.8,
    reviewCount: 168,
    landmarks: ['Panaji', 'Calangute', 'Baga', 'Candolim', 'Margao'],
    vibe: 'Goa is India\'s beach capital, famous for parties, beach shacks, luxury holiday resorts, and a relaxed lifestyle.',
    localIntro: 'Planning a beach holiday in Calangute, staying at a luxury villa in Candolim, or visiting South Goa resorts? A verified female companion can make your holiday much more enjoyable. Book premium profiles directly through us.',
    whyChooseText: 'We are the leading booking service in Goa, catering to both domestic and international visitors. We understand travel schedules and coordinate with resorts and private villas across North and South Goa.',
    hotelContext: 'Whether you are in a beachside cottage or a 5-star hotel in Panaji, we coordinate bookings safely and quietly.',
    faqs: [
      { q: 'Can I book a companion for a resort in Goa?', a: 'Yes. We coordinate hotel and resort bookings across Calangute, Baga, Candolim, and South Goa.' },
      { q: 'Do you cover South Goa?', a: 'Yes, we cover Margao, Colva, and other South Goa areas, though North Goa has more profile choices.' },
      { q: 'What profiles are available in Goa?', a: 'We have local, independent, college-style, and premium companion options. Contact us to get the latest list.' },
      { q: 'Is WhatsApp booking available?', a: 'Yes. You can contact our Goa booking desk on WhatsApp for fast and private coordination.' }
    ]
  },
  {
    name: 'Pune',
    slug: 'pune',
    state: 'Maharashtra',
    phone: '+919999900107',
    whatsapp: '919999900107',
    address: 'Koregaon Park, Pune',
    rating: 4.7,
    reviewCount: 151,
    landmarks: ['Koregaon Park', 'Baner', 'Hinjewadi', 'Viman Nagar'],
    vibe: 'Pune is a massive IT and educational hub with a cool climate, trendy cafes, and luxury hotels in areas like Koregaon Park and Baner.',
    localIntro: 'Staying in Hinjewadi for work, visiting Viman Nagar, or hanging out in the cafes of Koregaon Park? Our premium companion service is designed for adults who want safe, high-quality private companion bookings.',
    whyChooseText: 'We focus on premium presentation and polite behavior. Our companions are ideal partners for dinners, events, or private stays in Pune. We protect your privacy at all times.',
    hotelContext: 'We support bookings in business hotels, upscale apartments, and private residences across Pune.',
    faqs: [
      { q: 'Which areas in Pune do you cover?', a: 'We cover Koregaon Park, Baner, Hinjewadi, Viman Nagar, and Kalyani Nagar.' },
      { q: 'How can I book a companion in Pune?', a: 'Connect with us on WhatsApp, share your location, choose a verified profile, and we will confirm the availability.' },
      { q: 'Do you offer cash payment on meet?', a: 'Yes, we support direct cash transactions to keep the booking private.' },
      { q: 'Are the profiles verified in Pune?', a: 'Yes, we check profiles to make sure clients have a high-quality experience.' }
    ]
  },
  {
    name: 'Chennai',
    slug: 'chennai',
    state: 'Tamil Nadu',
    phone: '+919999900108',
    whatsapp: '919999900108',
    address: 'T. Nagar, Chennai',
    rating: 4.6,
    reviewCount: 143,
    landmarks: ['T. Nagar', 'Adyar', 'Anna Nagar', 'OMR', 'Guindy'],
    vibe: 'Chennai is a coastal business hub known for its IT parks, corporate headquarters, and traditional heritage.',
    localIntro: 'Visiting Chennai for business or staying at a hotel near T. Nagar or Guindy? Finding a private, verified companion is simple with our platform. We offer discreet bookings with local companions.',
    whyChooseText: 'We maintain strict privacy rules for our clients in Chennai. We understand that discretion is key in Chennai. Our team coordinates everything cleanly so you can relax.',
    hotelContext: 'We cover corporate hotels near OMR, luxury hotels in T. Nagar, and airport road business stays.',
    faqs: [
      { q: 'Is companion booking private in Chennai?', a: 'Yes. Privacy is our top priority. All booking chats and details are kept confidential and deleted quickly.' },
      { q: 'What areas do you cover in Chennai?', a: 'We serve T. Nagar, Anna Nagar, Adyar, Guindy, OMR, and major hotel hubs.' },
      { q: 'How do I check profile availability?', a: 'Message us on WhatsApp to view available verified profiles in your area.' },
      { q: 'Can I pay cash in Chennai?', a: 'Yes, cash payment is accepted directly on the meeting.' }
    ]
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    state: 'Telangana',
    phone: '+919999900109',
    whatsapp: '919999900109',
    address: 'Banjara Hills, Hyderabad',
    rating: 4.8,
    reviewCount: 162,
    landmarks: ['Banjara Hills', 'Hitech City', 'Gachibowli', 'Jubilee Hills'],
    vibe: 'Hyderabad is a major IT destination, home to Hitech City and Banjara Hills, combining rich history with modern luxury hotels.',
    localIntro: 'If you are staying at Gachibowli for business or visiting luxury hotels in Banjara Hills, our verified companions are available to join you. We make booking private and fast.',
    whyChooseText: 'We offer an elite selection of profiles in Hyderabad. Our booking desk is fast, reliable, and helps you check available companions in your neighborhood without delay.',
    hotelContext: 'From business hotels near Hitech City to luxury stays in Jubilee Hills, we coordinate smoothly and privately.',
    faqs: [
      { q: 'Do you cover Hitech City and Gachibowli?', a: 'Yes, we provide companion bookings across all key tech and hotel hubs in Hyderabad.' },
      { q: 'How to book an escort in Hyderabad?', a: 'Call us or send a WhatsApp text. Share your preferred area, and we will send available profiles for you to choose from.' },
      { q: 'Are the companion profiles checked?', a: 'Yes. We verify all profiles to ensure a safe, high-quality, and genuine booking.' },
      { q: 'Is cash payment accepted?', a: 'Yes, we offer cash-on-meet option for all bookings in Hyderabad.' }
    ]
  },
  {
    name: 'Noida',
    slug: 'noida',
    state: 'Uttar Pradesh',
    phone: '+919999900110',
    whatsapp: '919999900110',
    address: 'Sector 18, Noida',
    rating: 4.7,
    reviewCount: 134,
    landmarks: ['Sector 18', 'Sector 62', 'Greater Noida', 'Sector 50'],
    vibe: 'Noida is a key NCR city, famous for high-rise commercial offices, shopping malls, and premium hotels near Sector 18 and Sector 62.',
    localIntro: 'Staying in Noida for business or visiting Sector 18? Our companion booking service offers a simple way to connect with verified companions. We provide quick and private booking support.',
    whyChooseText: 'We make sure NCR bookings are coordinated without any delays. If you are staying at a premium hotel in Noida, we ensure the companion reaches you safely and privately.',
    hotelContext: 'We provide booking coverage across commercial hotels in Sector 18, Sector 62, and residential zones near Greater Noida.',
    faqs: [
      { q: 'Can I book a companion in Greater Noida?', a: 'Yes. We provide verified companion booking support across Greater Noida and Noida sectors.' },
      { q: 'How do I choose a profile in Noida?', a: 'WhatsApp us your details. We will share the latest list of verified profiles active in Noida today.' },
      { q: 'Is the booking process private?', a: 'Yes, we follow a strictly confidential booking process to protect your identity.' },
      { q: 'Do you accept cash payment in Noida?', a: 'Yes, cash payment is available on meeting the companion.' }
    ]
  },
  {
    name: 'Lucknow',
    slug: 'lucknow',
    state: 'Uttar Pradesh',
    phone: '+919999900111',
    whatsapp: '919999900111',
    address: 'Hazratganj, Lucknow',
    rating: 4.6,
    reviewCount: 129,
    landmarks: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar'],
    vibe: 'Lucknow is the city of Nawabs, known for its elegant culture, historical monuments, and luxury hotels in Gomti Nagar.',
    localIntro: 'Visiting the cultural heart of Uttar Pradesh, staying in Gomti Nagar, or walking around Hazratganj? Our verified call girls can join you for a relaxing date or private evening. We coordinate everything smoothly.',
    whyChooseText: 'We respect the local cultural setting of Lucknow, ensuring all bookings are coordinated quietly, politely, and with 100% client confidentiality.',
    hotelContext: 'Lucknow has several boutique and luxury hotels in Gomti Nagar. We ensure companion bookings are coordinated safely.',
    faqs: [
      { q: 'Which areas do you cover in Lucknow?', a: 'We cover Hazratganj, Gomti Nagar, Aliganj, Indira Nagar, and nearby hotels.' },
      { q: 'How do I confirm my booking in Lucknow?', a: 'Message us on WhatsApp with your location and choice. We will check availability and confirm details.' },
      { q: 'Are the companion profiles verified in Lucknow?', a: 'Yes. We verify all companion listings to ensure photos match the profiles.' },
      { q: 'Is cash payment accepted?', a: 'Yes, cash payment is accepted directly on meeting.' }
    ]
  },
  {
    name: 'Surat',
    slug: 'surat',
    state: 'Gujarat',
    phone: '+919999900112',
    whatsapp: '919999900112',
    address: 'Vesu, Surat',
    rating: 4.7,
    reviewCount: 124,
    landmarks: ['Vesu', 'Adajan', 'City Light', 'Dumas Road'],
    vibe: 'Surat is a major textile and diamond hub, hosting business merchants and travelers in hotels near Vesu and Dumas Road.',
    localIntro: 'If you are visiting Surat for business, staying in a premium hotel near Vesu, or visiting diamond markets, our companion booking service provides a safe, simple way to find verified companions.',
    whyChooseText: 'We cater to business merchants who value privacy above all else. We offer verified profiles and direct coordination for hotel stays in Surat.',
    hotelContext: 'We cover business hotels, suites, and private stays in Vesu, Dumas Road, and Adajan areas.',
    faqs: [
      { q: 'Can I book a companion in Surat Vesu area?', a: 'Yes. We cover Vesu, Adajan, Dumas Road, and all major business hotels in Surat.' },
      { q: 'How can I contact the Surat booking desk?', a: 'You can call us directly or drop a text on WhatsApp for private coordination.' },
      { q: 'Are the profiles genuine in Surat?', a: 'Yes, we only list verified profiles to maintain high quality and trust.' },
      { q: 'Is the booking private?', a: 'Yes, your booking details are kept strictly secret and deleted after checkout.' }
    ]
  },
  {
    name: 'Jodhpur',
    slug: 'jodhpur',
    state: 'Rajasthan',
    phone: '+919999900113',
    whatsapp: '919999900113',
    address: 'Sardarpura, Jodhpur',
    rating: 4.8,
    reviewCount: 142,
    landmarks: ['Sardarpura', 'Paota', 'Umaid Bhawan area', 'Ratanada'],
    vibe: 'Jodhpur, the Blue City, is famous for its massive Mehrangarh Fort, palaces, desert tourism, and heritage resorts.',
    localIntro: 'Staying in Jodhpur for a royal holiday or private stay? Our companion booking service helps you connect with polite, verified companions for an enjoyable date. We handle all coordinates discreetly.',
    whyChooseText: 'We focus on verified profiles and clear booking estimates. Jodhpur has many heritage hotels, and we coordinate bookings safely to ensure you have a comfortable stay.',
    hotelContext: 'We coordinate bookings for hotels in Sardarpura, Ratanada, and palace-resorts in Jodhpur.',
    faqs: [
      { q: 'Is companion booking available in Jodhpur resorts?', a: 'Yes. We cover bookings for heritage resorts, private villas, and hotels in Jodhpur.' },
      { q: 'How to choose a companion in Jodhpur?', a: 'Message us on WhatsApp to see verified companion profiles active in Jodhpur today.' },
      { q: 'Do you support cash payments?', a: 'Yes, clients can pay cash directly to ensure privacy.' },
      { q: 'Is client information kept confidential?', a: 'Yes, we delete all chats and booking details to secure client privacy.' }
    ]
  },
  {
    name: 'Ajmer',
    slug: 'ajmer',
    state: 'Rajasthan',
    phone: '+919999900114',
    whatsapp: '919999900114',
    address: 'Vaishali Nagar, Ajmer',
    rating: 4.6,
    reviewCount: 116,
    landmarks: ['Vaishali Nagar', 'Dargah Bazaar', 'Pushkar Road', 'Ana Sagar'],
    vibe: 'Ajmer is a historic city famous for its holy shrines, lake views, and proximity to the tourist town of Pushkar.',
    localIntro: 'Visiting Ajmer, staying at a hotel near Ana Sagar Lake, or travelling nearby? Our booking desk makes it easy to find a local companion. We offer simple, discreet booking coordination.',
    whyChooseText: 'We ensure all bookings in Ajmer are handled politely and quietly. We check all companion profiles beforehand so clients enjoy a verified experience.',
    hotelContext: 'We support companion bookings in major hotels near Vaishali Nagar, Ana Sagar, and Pushkar Road resorts.',
    faqs: [
      { q: 'Are companion services available near Pushkar Road?', a: 'Yes. We coordinate bookings for hotels and resorts along Pushkar Road and Ajmer city.' },
      { q: 'How to book a call girl in Ajmer?', a: 'Send us a WhatsApp text with your area and hotel name. We will share verified options.' },
      { q: 'Is the booking desk active 24/7?', a: 'Yes, our WhatsApp booking desk is active 24/7 for availability checks.' },
      { q: 'Can I pay cash in Ajmer?', a: 'Yes, cash payment is accepted on the meeting.' }
    ]
  },
  {
    name: 'Dehradun',
    slug: 'dehradun',
    state: 'Uttarakhand',
    phone: '+919999900115',
    whatsapp: '919999900115',
    address: 'Rajpur Road, Dehradun',
    rating: 4.7,
    reviewCount: 127,
    landmarks: ['Rajpur Road', 'Mussoorie Road', 'Clock Tower', 'Jakhan'],
    vibe: 'Dehradun is a peaceful valley city, acting as the gateway to Mussoorie, hosting tourists, students, and wellness retreats.',
    localIntro: 'Staying on Rajpur Road or visiting the peaceful hills of Dehradun? A friendly, verified companion can make your stay much warmer. We provide direct and private booking support.',
    whyChooseText: 'We connect clients with verified profiles in Dehradun. Our booking support is fast, clean, and helps you coordinate with companions near Rajpur Road or Jakhan.',
    hotelContext: 'We coordinate with major hotels, cottages, and hill resorts in Dehradun and on the way to Mussoorie.',
    faqs: [
      { q: 'Do you cover hotels on Rajpur Road Dehradun?', a: 'Yes. We cover Rajpur Road, Jakhan, Clock Tower, and Mussoorie Road hotel hubs.' },
      { q: 'How to book a companion in Dehradun?', a: 'WhatsApp us your details. We will share verified profiles available in the valley today.' },
      { q: 'Is cash payment accepted?', a: 'Yes. Cash payment is accepted directly on meeting.' },
      { q: 'Are the profiles verified?', a: 'Yes, we verify all companion listings to ensure photos match.' }
    ]
  },
  {
    name: 'Rishikesh',
    slug: 'rishikesh',
    state: 'Uttarakhand',
    phone: '+919999900116',
    whatsapp: '919999900116',
    address: 'Tapovan, Rishikesh',
    rating: 4.8,
    reviewCount: 108,
    landmarks: ['Tapovan', 'Laxman Jhula', 'Muni Ki Reti', 'Ram Jhula'],
    vibe: 'Rishikesh is the yoga capital of India, set along the holy Ganges, attracting international travelers, rafters, and spiritual seekers.',
    localIntro: 'Staying at a resort in Tapovan or near Laxman Jhula? If you are looking for private companionship during your trip, we provide verified companion bookings in Rishikesh. Contact us for direct support.',
    whyChooseText: 'We respect client privacy in this tourist town. We offer polite, checked, and verified companions who can join you at private villas or tourist resorts.',
    hotelContext: 'We cover hotel bookings, riverside resorts, and private stays in Tapovan, Muni Ki Reti, and nearby areas.',
    faqs: [
      { q: 'Is escort service available in Tapovan Rishikesh?', a: 'Yes, we provide companion booking support across Tapovan, Muni Ki Reti, and nearby resort locations.' },
      { q: 'How do I book a companion in Rishikesh?', a: 'Call or WhatsApp our team, share your resort area, and we will send verified profiles.' },
      { q: 'Are companion profiles verified?', a: 'Yes, all profiles are checked to ensure photos are real.' },
      { q: 'Is the booking private?', a: 'Yes. Your privacy is fully protected, and details are deleted after coordination.' }
    ]
  },
  {
    name: 'Manali',
    slug: 'manali',
    state: 'Himachal Pradesh',
    phone: '+919999900117',
    whatsapp: '919999900117',
    address: 'Mall Road, Manali',
    rating: 4.7,
    reviewCount: 113,
    landmarks: ['Mall Road', 'Old Manali', 'Hadimba Road', 'Vashisht'],
    vibe: 'Manali is a high-altitude Himalayan resort town, popular for snow sports, cozy wooden cottages, and mountain vacations.',
    localIntro: 'Staying in a cozy cottage near Old Manali or a resort on Hadimba Road? A verified companion can make your mountain holiday much warmer and more pleasant. We offer discreet and simple booking support.',
    whyChooseText: 'We understand tourist schedules and coordinate with cottage stays, wooden chalets, and mountain hotels across Manali. All bookings are kept private.',
    hotelContext: 'We cover hotel bookings along Mall Road, Old Manali, Vashisht, and Solang valley highway resorts.',
    faqs: [
      { q: 'Can I book a companion for a cottage in Manali?', a: 'Yes, we coordinate private cottage, villa, and resort bookings across Manali.' },
      { q: 'How to check available profiles in Manali?', a: 'Message us on WhatsApp. We will share the latest list of verified companions active today.' },
      { q: 'Is cash payment accepted?', a: 'Yes, cash payment is accepted on the meeting.' },
      { q: 'Is booking support active in winters?', a: 'Yes, our booking support is active 24/7 throughout the year.' }
    ]
  },
  {
    name: 'Daman',
    slug: 'daman',
    state: 'Daman and Diu',
    phone: '+919999900118',
    whatsapp: '919999900118',
    address: 'Nani Daman, Daman',
    rating: 4.6,
    reviewCount: 103,
    landmarks: ['Nani Daman', 'Devka Beach', 'Moti Daman', 'Jampore Beach'],
    vibe: 'Daman is a coastal weekend getaway famous for its Portuguese forts, scenic beaches, and relaxed seaside resorts.',
    localIntro: 'Visiting Devka Beach or staying at a resort in Nani Daman? Our companion booking service helps you connect with verified, polite companions for a relaxed weekend stay. We handle bookings privately.',
    whyChooseText: 'We cater to weekend travelers from nearby states. We ensure your booking is handled fast, privately, and with verified profiles so you can enjoy your beach holiday.',
    hotelContext: 'We cover major beach resorts and hotels near Devka Beach, Moti Daman, and Jampore Beach.',
    faqs: [
      { q: 'Do you cover Devka Beach hotels in Daman?', a: 'Yes. We cover Devka Beach, Jampore Beach, Nani Daman, and nearby hotel hubs.' },
      { q: 'How to book a call girl in Daman?', a: 'Simply text us on WhatsApp, share your resort location, and we will send verified profiles.' },
      { q: 'Are the companion profiles real?', a: 'Yes. We verify all profiles to ensure the photo matches the companion.' },
      { q: 'Can I pay cash in Daman?', a: 'Yes, cash-on-meet option is available.' }
    ]
  },
  {
    name: 'Guwahati',
    slug: 'guwahati',
    state: 'Assam',
    phone: '+919999900119',
    whatsapp: '919999900119',
    address: 'GS Road, Guwahati',
    rating: 4.7,
    reviewCount: 128,
    landmarks: ['GS Road', 'Paltan Bazaar', 'Dispur', 'Khanapara'],
    vibe: 'Guwahati is the gateway to Northeast India, located on the Brahmaputra River, hosting business travelers and transit tourists.',
    localIntro: 'Staying near GS Road for work or transit? Our companion booking service offers a safe way to book verified companions. We provide fast WhatsApp support and direct coordination.',
    whyChooseText: 'We focus on safe, verified profiles in Guwahati. Our team understands local transit schedules and coordinates bookings in business hotels around GS Road and Dispur.',
    hotelContext: 'We cover hotels, guest stays, and business suites in GS Road, Paltan Bazaar, and Khanapara.',
    faqs: [
      { q: 'Which areas do you cover in Guwahati?', a: 'We cover GS Road, Paltan Bazaar, Dispur, Khanapara, and nearby business hotels.' },
      { q: 'How can I book a companion in Guwahati?', a: 'Reach out on WhatsApp, share your area name, choose a verified profile, and we will confirm details.' },
      { q: 'Do you accept cash payment?', a: 'Yes, cash payment is accepted directly on meeting.' },
      { q: 'Are profiles checked in Guwahati?', a: 'Yes, we check profiles to maintain service quality and trust.' }
    ]
  },
  {
    name: 'Kanpur',
    slug: 'kanpur',
    state: 'Uttar Pradesh',
    phone: '+919999900120',
    whatsapp: '919999900120',
    address: 'Swaroop Nagar, Kanpur',
    rating: 4.6,
    reviewCount: 112,
    landmarks: ['Swaroop Nagar', 'Civil Lines', 'Kakadeo', 'Mall Road'],
    vibe: 'Kanpur is a major industrial city in Uttar Pradesh, hosting merchants, business owners, and corporate executives.',
    localIntro: 'Visiting Kanpur for business or staying in a hotel near Swaroop Nagar or Civil Lines? A verified companion can make your industrial trip much more relaxing. Book premium profiles directly with us.',
    whyChooseText: 'We understand that local business executives require complete privacy. We ensure all bookings are coordinated quietly, with secure communication.',
    hotelContext: 'We provide booking support in major commercial hotels near Swaroop Nagar, Civil Lines, and Mall Road.',
    faqs: [
      { q: 'How to book a call girl in Kanpur?', a: 'Call us or send a message on WhatsApp. Share your current hotel area, and we will share verified profiles.' },
      { q: 'Which areas do you cover in Kanpur?', a: 'We serve Swaroop Nagar, Civil Lines, Kakadeo, and Kanpur Mall Road hotels.' },
      { q: 'Is my personal information protected?', a: 'Yes. We delete all booking records and chats after the meet to protect your identity.' },
      { q: 'Can I pay cash in Kanpur?', a: 'Yes, cash payment is accepted on meet.' }
    ]
  },
  {
    name: 'Mount Abu',
    slug: 'mount-abu',
    state: 'Rajasthan',
    phone: '+919999900121',
    whatsapp: '919999900121',
    address: 'Nakki Lake Road, Mount Abu',
    rating: 4.8,
    reviewCount: 107,
    landmarks: ['Nakki Lake', 'Delwara Road', 'Sunset Point', 'Dilwara'],
    vibe: 'Mount Abu is Rajasthan\'s only hill station, famous for its cool breeze, scenic Nakki Lake, and Dilwara temples, hosting tourists escaping the desert heat.',
    localIntro: 'Enjoying the cool breeze near Nakki Lake or staying at a hill resort in Mount Abu? If you are looking for private companionship, we offer verified companion bookings. Contact us for direct and private support.',
    whyChooseText: 'We coordinate with hill resorts and private cottages across Mount Abu. We make sure your holiday is comfortable and completely private.',
    hotelContext: 'We cover hotel bookings, mountain cottages, and resorts near Nakki Lake and Delwara Road.',
    faqs: [
      { q: 'Is escort service available near Nakki Lake Mount Abu?', a: 'Yes, we cover hotels and resorts near Nakki Lake, Delwara Road, and other tourist zones in Mount Abu.' },
      { q: 'How do I book a companion in Mount Abu?', a: 'WhatsApp us your resort name and profile choice. We will check availability and confirm details.' },
      { q: 'Are the companion profiles verified?', a: 'Yes, all profiles are verified so you get what you choose.' },
      { q: 'Is cash payment accepted?', a: 'Yes, cash payment is accepted directly on meeting.' }
    ]
  },
  {
    name: 'Nathdwara',
    slug: 'nathdwara',
    state: 'Rajasthan',
    phone: '+919999900122',
    whatsapp: '919999900122',
    address: 'Temple Road, Nathdwara',
    rating: 4.7,
    reviewCount: 101,
    landmarks: ['Shrinathji Temple', 'Bus Stand', 'Haldi Ghati Road', 'Lalbagh'],
    vibe: 'Nathdwara is a historic temple town near Udaipur, known for its Shrinathji temple, traditional art, and tourist visitors.',
    localIntro: 'Visiting Nathdwara or travelling nearby? If you are staying at a local hotel and want private companionship, we provide verified booking coordination. We keep bookings simple and private.',
    whyChooseText: 'We understand the traditional layout of Nathdwara, coordinating all companion bookings quietly, politely, and with total client confidentiality.',
    hotelContext: 'We cover bookings for local hotels, suites, and private stays in Nathdwara town and on the highway to Udaipur.',
    faqs: [
      { q: 'Do you cover hotels in Nathdwara?', a: 'Yes, we provide booking support for local hotels and private stays in Nathdwara.' },
      { q: 'How to book a companion in Nathdwara?', a: 'Contact our WhatsApp desk, share your hotel details, and we will send verified profiles.' },
      { q: 'Is cash payment accepted?', a: 'Yes, cash payment is accepted directly on meeting.' },
      { q: 'Are profiles checked?', a: 'Yes, we verify all listings to ensure photos are real.' }
    ]
  },
  {
    name: 'Jawai',
    slug: 'jawai',
    state: 'Rajasthan',
    phone: '+919999900123',
    whatsapp: '919999900123',
    address: 'Jawai Bandh Road, Pali',
    rating: 4.8,
    reviewCount: 100,
    landmarks: ['Jawai Bandh', 'Bera', 'Pali Road', 'Jawai Hills'],
    vibe: 'Jawai is famous for its leopard hills, massive Jawai Dam, and rustic wilderness tents, hosting safari travelers.',
    localIntro: 'Staying in a luxury safari camp or resort near Jawai Dam or Bera? A verified female companion can make your wilderness trip much more pleasant. We provide direct and private booking coordination.',
    whyChooseText: 'We coordinate with rustic camps, safari resorts, and private villas in Jawai and Bera. We ensure your booking is handled safely and privately.',
    hotelContext: 'We cover bookings in safari lodges, luxury tents, and hotels near Jawai Bandh and Pali Road.',
    faqs: [
      { q: 'Can I book a companion for a safari camp in Jawai?', a: 'Yes, we coordinate bookings for safari lodges, luxury tents, and resorts around Jawai and Bera.' },
      { q: 'How to check available profiles in Jawai?', a: 'Message us on WhatsApp. We will share verified companions active in the area today.' },
      { q: 'Is cash payment accepted?', a: 'Yes, cash payment is accepted directly on meeting.' },
      { q: 'Is client privacy protected?', a: 'Yes, all chats and booking details are kept strictly private.' }
    ]
  },
  {
    name: 'India',
    slug: 'india',
    state: 'India',
    phone: '+919999900124',
    whatsapp: '919999900124',
    address: 'Pan India Network',
    rating: 4.8,
    reviewCount: 195,
    landmarks: ['Delhi NCR', 'Mumbai', 'Goa', 'Jaipur', 'Udaipur', 'Bangalore'],
    vibe: 'Our nationwide network connects travelers and business executives with verified adult companions in all major Indian metro cities and tourist capitals.',
    localIntro: 'Travelling across India for leisure or business? Girls of Passion offers a trusted network of verified companions in all major hubs. We coordinate bookings smoothly wherever you go.',
    whyChooseText: 'We are India\'s premium companion booking network, focused on verified profiles, absolute privacy, and polite communication. We operate in all key tourist and business cities.',
    hotelContext: 'We coordinate with premium hotels, resorts, and villas across India, ensuring safe and hassle-free companionship.',
    faqs: [
      { q: 'In which cities is Girls of Passion active?', a: 'We are active in Delhi, Mumbai, Goa, Jaipur, Udaipur, Pune, Chennai, Hyderabad, Noida, Lucknow, and other major cities.' },
      { q: 'How to book a companion in India?', a: 'Simply reach out to us on WhatsApp, share your city and hotel location, and we will connect you with nearby verified profiles.' },
      { q: 'Are all companion profiles checked?', a: 'Yes, we verify all companion profiles nationwide to ensure quality and trust.' },
      { q: 'Do you offer cash payment across cities?', a: 'Yes, cash-on-meet option is available in all our active cities.' }
    ]
  }
];

const TEMPLATE = `import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle,
  ShieldCheck, 
  Clock, 
  Check, 
  ChevronRight, 
  Lock
} from 'lucide-react';
import { LeadForm } from '@/components/ui/LeadForm';
import { CitySchema } from '@/components/seo/CitySchema';
import { SupplementalCitySchema } from '@/components/seo/SupplementalCitySchema';

export const metadata: Metadata = buildPageMetadata({
  title: 'Premium <%= cityName %> Escort Service | 24x7 Verified Booking',
  description: 'Book premium <%= cityName %> escort service 24x7 with verified profiles, discreet support, quick WhatsApp response, hotel coordination, and private booking.',
  path: '<%= pagePath %>',
  image: '/assets/photos/luxury-escort-service-<%= citySlug %>.jpg',
  imageAlt: '<%= cityName %> escort service featured image',
  keywords: [
    '<%= cityName %> Escort Service',
    '<%= cityName %> Call Girl',
    'Call Girls in <%= cityName %>',
    'Premium <%= cityName %> Escort Service',
    '24x7 <%= cityName %> Escort Booking',
  ],
});

const companionProfiles = [
  {
    name: 'Anya',
    age: 22,
    height: '5\\'5"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-<%= citySlug %>.jpg',
    tags: ['Premium', 'Sophisticated'],
    rate: 'Premium',
  },
  {
    name: 'Zara',
    age: 24,
    height: '5\\'6"',
    nationality: 'Independent',
    image: '/assets/photos/classy-escort-service-<%= citySlug %>.jpg',
    tags: ['Elegant', 'Dinner Date'],
    rate: 'VIP',
  },
  {
    name: 'Nisha',
    age: 23,
    height: '5\\'4"',
    nationality: 'Indian',
    image: '/assets/photos/premium-escorts-<%= citySlug %>.jpg',
    tags: ['Modern', 'Friendly'],
    rate: 'High-Class',
  },
  {
    name: 'Elena',
    age: 25,
    height: '5\\'7"',
    nationality: 'Russian/Euro',
    image: '/assets/photos/vip-escort-<%= citySlug %>.jpg',
    tags: ['Exotic', 'High-Profile'],
    rate: 'Exclusive',
  },
  {
    name: 'Riya',
    age: 22,
    height: '5\\'3"',
    nationality: 'Indian',
    image: '/assets/photos/female-escort-in-<%= citySlug %>.jpg',
    tags: ['Seductive', 'Hotel Companion'],
    rate: 'Super Premium',
  },
  {
    name: 'Kiara',
    age: 24,
    height: '5\\'6"',
    nationality: 'Indian',
    image: '/assets/photos/luxury-escort-service-<%= citySlug %>.jpg',
    tags: ['Luxury', 'Elite Lifestyle'],
    rate: 'VVIP',
  },
  {
    name: 'Pooja',
    age: 23,
    height: '5\\'5"',
    nationality: 'Indian',
    image: '/assets/photos/independent-call-girls-<%= citySlug %>.jpg',
    tags: ['Private Meet', 'Independent Style'],
    rate: 'High-Class',
  },
  {
    name: 'Sonia',
    age: 25,
    height: '5\\'7"',
    nationality: 'Indian',
    image: '/assets/photos/high-class-call-girls-<%= citySlug %>.jpg',
    tags: ['Stylish', 'Corporate Events'],
    rate: 'Elite',
  }
];

export default function <%= componentName %>() {
  const phone = '<%= phone %>';
  const whatsapp = '<%= whatsapp %>';
  const whatsappUrl = \`https://wa.me/\${whatsapp}?text=Hello%20Girls%20of%20Passion%2C%20I%20want%20to%20book%20a%20verified%20<%= cityName %>%20escort%20service.\`;

  const faqs = [
    {
      question: "What is Girls of Passion?",
      answer: "Girls of Passion is a professional adult companionship booking support platform in <%= cityName %> for adults who want private, secure, and premium companion coordination."
    },
    <%= faqsJson %>
  ];

  return (
    <>
      {/* Dynamic Absolute SEO Schemas */}
      <CitySchema
        cityName="<%= cityName %>"
        phone={phone}
        address="<%= address %>"
        rating={<%= rating %>}
        reviewCount={<%= reviewCount %>}
        url="https://www.girlsofpassion.in<%= pagePath %>"
        faqs={faqs}
      />
      <SupplementalCitySchema citySlug="<%= citySlug %>" />

      {/* Main Luxury Dark wrapper for the page */}
      <div className="bg-neutral-950 text-neutral-200 selection:bg-amber-500 selection:text-black">
        
        {/* Banner Announcement */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-black">
          💎 Premium & Discreet 100% Verified Profiles in <%= cityName %>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-neutral-900 pb-20 pt-16 lg:pb-28 lg:pt-24">
          {/* Decorative Glowing Orbs */}
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
          
          <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              
              {/* Trust Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
                <ShieldCheck size={14} className="text-amber-400" />
                Elite Companionship Platform
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
                <%= cityName %> Escort Service
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Premium Adult Companionship in <%= cityName %>
                </span>
              </h1>
              
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
                Our <strong className="text-amber-400"><%= cityName %> Escort Service</strong> and <strong className="text-white"><%= cityName %> Call Girl</strong> booking are available 24/7. We help you connect with verified profiles for private booking, hotel visits, and direct contact with local companions in <%= cityName %> area.
              </p>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
                <p>
                  <%= localIntro %>
                </p>
                <p>
                  <%= vibe %>
                </p>
                <p>
                  Our goal is simple: to offer a safe, private, and premium companion booking service for adults who value clear communication, verified profiles, and direct support.
                </p>
              </div>

              {/* Hero CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={\`tel:\${phone}\`}
                  className="inline-flex items-center gap-3 rounded-lg bg-amber-500 px-7 py-4 text-sm font-bold text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  <Phone size={18} />
                  Call Now: {phone}
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/80 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-neutral-800 hover:border-neutral-600"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Booking
                </a>
              </div>

              {/* Stars summary */}
              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold text-white"><%= rating %>/5</span> Average Rating
                </div>
                <div className="h-4 w-px bg-neutral-800" />
                <div><%= reviewCount %>+ Client Reviews</div>
              </div>

            </div>

            {/* Visual Panel Right / Contact Form */}
            <div className="flex flex-col gap-6 lg:justify-center">
              
              {/* Mini Featured Profile Carousel Overlay effect */}
              <div className="relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                <Image 
                  src="/assets/photos/luxury-escort-service-<%= citySlug %>.jpg" 
                  alt="<%= cityName %> Escort Service Premium companion profile"
                  fill
                  priority
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    ★ Premium Verified
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">Featured Companion</h3>
                  <p className="text-xs text-neutral-300">Available near <%= landmarks[0] %>, <%= landmarks[1] %> & Luxury Hotels</p>
                </div>
              </div>

              {/* Premium Dark Lead Form Container */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-amber-500" />
                  Discreet Inquiry Form
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  100% confidential. Your details are secured and deleted immediately after coordinating.
                </p>
                <LeadForm defaultCity="<%= citySlug %>" />
              </div>

            </div>
          </div>
        </section>

        {/* Quick Overview Table Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Quick Overview of Our <%= cityName %> Escort Service</h2>
              <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-3 text-sm text-neutral-400">Everything you need to know about our local companionship booking support</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/30">
              <table className="w-full border-collapse text-left text-sm text-neutral-300">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80">
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Feature</th>
                    <th className="px-6 py-4 font-bold text-white tracking-wider uppercase text-xs">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Service Type</td>
                    <td className="px-6 py-4">Premium adult companionship in <%= cityName %></td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Main Location</td>
                    <td className="px-6 py-4"><%= cityName %>, <%= state %></td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Available Areas</td>
                    <td className="px-6 py-4"><%= landmarks.join(', ') %></td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Booking Options</td>
                    <td className="px-6 py-4">Call and WhatsApp booking desk</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Availability</td>
                    <td className="px-6 py-4">24x7 support, subject to profile availability</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Profile Quality</td>
                    <td className="px-6 py-4">Verified, genuine, and carefully checked profiles</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Privacy Level</td>
                    <td className="px-6 py-4">Discreet and confidential booking process</td>
                  </tr>
                  <tr className="hover:bg-neutral-900/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">Best For</td>
                    <td className="px-6 py-4">Travelers, business meetings, hotel companionship, private dates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verified Profile Cards Showcase */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Premium Gallery</span>
                <h2 className="mt-2 text-3xl font-extrabold text-white">Verified Companion Profiles in <%= cityName %></h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Browse our checked selection of independent and verified companions. Contact us for daily availability updates.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companionProfiles.map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={\`\${p.name} - <%= cityName %> Escort Companion\`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent p-4" />
                    
                    {/* Rate Tag */}
                    <span className="absolute right-4 top-4 rounded bg-black/70 px-2.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-sm border border-amber-500/20">
                      {p.rate}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{p.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-neutral-400">
                        <span>Age: {p.age}</span>
                        <span>•</span>
                        <span>{p.height}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-neutral-800/80 px-3 py-0.5 text-[10px] text-neutral-300 border border-neutral-700/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={whatsappUrl} 
                      className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-neutral-800 py-2.5 text-center text-xs font-bold text-white hover:bg-amber-500 hover:text-black transition-all"
                    >
                      Book {p.name} Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Service Highlights</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Why Choose Our <%= cityName %> Escort Booking?</h2>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
                <p>
                  <%= whyChooseText %>
                </p>
                <p>
                  Choosing the right companionship makes your travel or stay much better. We coordinate everything directly so you do not have to worry about details.
                </p>
              </div>

              {/* List */}
              <ul className="mt-6 space-y-3">
                {[
                  '100% verified and genuine profiles',
                  'Discreet and safe booking desk',
                  'Quick responses on WhatsApp',
                  'Cash payment options directly on meeting',
                  'Support across major local hotels and areas'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                      <Check size={12} className="stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight Panel */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-neutral-800 bg-neutral-900/30 p-8">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">Hotel Coordination</span>
              <h3 className="text-2xl font-bold text-white">Safe Hotel & Resort Visits</h3>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                <%= hotelContext %>
              </p>
              
              <p className="text-sm leading-relaxed text-neutral-300">
                Our support team handles all booking details quietly. We value your private time, and all communications are kept secure and deleted after the meeting is completed.
              </p>

              <div>
                <h5 className="font-semibold text-white mb-2 text-sm">Perfect for social occasions and stays:</h5>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-neutral-300">
                  {[
                    'Private hotel stay companion',
                    'Social date partner',
                    'Relaxing dinner dates',
                    'Business travel company'
                  ].map((occasion) => (
                    <div key={occasion} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {occasion}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered Section */}
        <section className="py-20 border-b border-neutral-900">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Local Coverage</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Areas We Cover in <%= cityName %></h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                We coordinate companion bookings across all key sectors, commercial hubs, and luxury hotels in <%= cityName %>:
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {<%= JSON.stringify(landmarks) %>.map((loc) => (
                <div key={loc} className="flex items-center gap-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm">{loc}</span>
                    <span className="block text-[10px] text-neutral-400">Verified Companions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-20 bg-neutral-900/20 border-b border-neutral-900">
          <div className="container-shell grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">How It Works</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Simple Call & WhatsApp Booking</h2>
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                We keep the booking process direct and easy. Follow these simple steps to secure your booking:
              </p>

              <ol className="mt-6 space-y-4">
                {[
                  'Browse the profiles and choose your favorite category.',
                  'Reach out to us via call or send a message on WhatsApp.',
                  'Share your location name, timing, and profile choice.',
                  'We will confirm availability and booking details.'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-neutral-300 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Book <%= cityName %> Escorts Today</h3>
              <p className="text-sm leading-relaxed text-neutral-300 mb-6">
                Ready to find verified companions near you? Contact our booking team for quick assistance, verified profile updates, and direct support.
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href={\`tel:\${phone}\`}
                  className="flex items-center justify-center gap-3 rounded-lg bg-amber-500 py-4 text-center text-sm font-bold text-black hover:bg-amber-400 transition-all shadow-lg"
                >
                  <Phone size={18} />
                  Call Us: {phone}
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900 py-4 text-center text-sm font-bold text-white hover:bg-neutral-800 transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-500" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Service Links */}
        <section className="py-12 bg-neutral-900/30 border-b border-neutral-900">
          <div className="container-shell">
            <h2 className="text-2xl font-bold text-white mb-6">All Services in This City</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <a href="/<%= publicSlug %>/vip-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">VIP Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 15,000</p></a>
              <a href="/<%= publicSlug %>/hotel-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Hotel Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 10,000</p></a>
              <a href="/<%= publicSlug %>/independent-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Independent Escort</p><p className="text-xs text-amber-400 mt-1">From Rs. 8,000</p></a>
              <a href="/<%= publicSlug %>/call-girl/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Call Girl Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 6,000</p></a>
              <a href="/<%= publicSlug %>/outcall-escort/" className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-amber-500/30 transition-colors"><p className="font-semibold text-white text-sm">Outcall Escort Service</p><p className="text-xs text-amber-400 mt-1">From Rs. 9,000</p></a>
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section id="faqs" className="py-20 bg-neutral-900/10">
          <div className="container-shell max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">FAQ Helpdesk</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
              <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-neutral-800/80 bg-neutral-900/25 p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 focus:outline-none">
                    <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 group-open:rotate-180 transition-transform">
                      <ChevronRight size={14} className="rotate-90 group-open:-rotate-90 transition-transform" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300 pl-1 border-l-2 border-amber-500/50">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-neutral-500 border-t border-neutral-900 pt-6">
              🛑 <strong>18+ Adult-Only Disclaimer:</strong> This service is strictly for adults aged 18 years and above. All users must follow local laws and communicate respectfully.<br className="mt-2" />
              Please review our{' '}
              <Link href="/privacy-policy/" className="underline hover:text-neutral-300">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms/" className="underline hover:text-neutral-300">
                Terms and Conditions
              </Link>.
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
`;

function generatePageContent(city: CityDetails): string {
  const publicSlug = city.slug === 'mount-abu' ? 'maunt-abu' : city.slug;
  const pagePath = '/' + publicSlug + '-escort-service/';
  const componentName = city.name.replace(/[^a-zA-Z]/g, '') + 'EscortPage';

  const faqsJson = city.faqs.map(faq => {
    return '    {\n      question: "' + faq.q.replace(/"/g, '\\"') + '",\n      answer: "' + faq.a.replace(/"/g, '\\"') + '"\n    }';
  }).join(',\n');

  let content = TEMPLATE
    .replace(/<%= cityName %>/g, city.name)
    .replace(/<%= citySlug %>/g, publicSlug)
    .replace(/<%= pagePath %>/g, pagePath)
    .replace(/<%= componentName %>/g, componentName)
    .replace(/<%= phone %>/g, city.phone)
    .replace(/<%= whatsapp %>/g, city.whatsapp)
    .replace(/<%= address %>/g, city.address)
    .replace(/<%= rating %>/g, city.rating.toString())
    .replace(/<%= reviewCount %>/g, city.reviewCount.toString())
    .replace(/<%= localIntro %>/g, city.localIntro)
    .replace(/<%= vibe %>/g, city.vibe)
    .replace(/<%= whyChooseText %>/g, city.whyChooseText)
    .replace(/<%= hotelContext %>/g, city.hotelContext)
    .replace(/<%= state %>/g, city.state)
    .replace(/<%= publicSlug %>/g, publicSlug)
    .replace(/<%= faqsJson %>/g, faqsJson)
    .replace(/<%= landmarks\[0\] %>/g, city.landmarks[0] || '')
    .replace(/<%= landmarks\[1\] %>/g, city.landmarks[1] || '')
    .replace(/<%= landmarks\.join\(\', \'\) %>/g, city.landmarks.join(', '))
    .replace(/<%= JSON\.stringify\(landmarks\) %>/g, JSON.stringify(city.landmarks));

  return content;
}

function run() {
  console.log("Generating city pages...");
  const baseDir = path.join(__dirname, '..', 'app');

  for (const city of citiesList) {
    const publicSlug = city.slug === 'mount-abu' ? 'maunt-abu' : city.slug;
    const folderName = publicSlug + '-escort-service';
    const folderPath = path.join(baseDir, folderName);
    
    if (!fs.existsSync(folderPath)) {
      console.log("Creating folder: " + folderPath);
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, 'page.tsx');
    console.log("Writing unique content to: " + filePath);
    const pageContent = generatePageContent(city);
    fs.writeFileSync(filePath, pageContent, 'utf-8');
  }

  console.log("All city pages generated successfully!");
}

run();

