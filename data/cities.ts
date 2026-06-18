export type City = {
  name: string;
  slug: string;
  state: string;
  phone: string;
  whatsapp: string;
  address: string;
  rating: number;
  reviewCount: number;
  landmarks: string[];
  summary: string;
};

export const cities: City[] = [
  { name: 'Delhi', slug: 'delhi', state: 'Delhi', phone: '+919999900101', whatsapp: '919999900101', address: 'Connaught Place, New Delhi', rating: 4.8, reviewCount: 185, landmarks: ['Connaught Place', 'Saket', 'Dwarka'], summary: 'Verified beauty, event, wellness, and lifestyle professionals across Delhi NCR.' },
  { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', phone: '+919999900102', whatsapp: '919999900102', address: 'Bandra West, Mumbai', rating: 4.8, reviewCount: 172, landmarks: ['Bandra', 'Andheri', 'Powai'], summary: 'Premium local professionals for events, grooming, shoots, and doorstep wellness in Mumbai.' },
  { name: 'Udaipur', slug: 'udaipur', state: 'Rajasthan', phone: '+919999900103', whatsapp: '919999900103', address: 'Fatehpura, Udaipur', rating: 4.9, reviewCount: 148, landmarks: ['Lake Pichola', 'Fateh Sagar', 'Hiran Magri'], summary: 'Curated event talent, beauty artists, photographers, and concierge support in Udaipur.' },
  { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan', phone: '+919999900104', whatsapp: '919999900104', address: 'C-Scheme, Jaipur', rating: 4.7, reviewCount: 156, landmarks: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar'], summary: 'Trusted professionals for weddings, styling, events, and lifestyle bookings in Jaipur.' },
  { name: 'Indore', slug: 'indore', state: 'Madhya Pradesh', phone: '+919999900105', whatsapp: '919999900105', address: 'Vijay Nagar, Indore', rating: 4.7, reviewCount: 138, landmarks: ['Vijay Nagar', 'Palasia', 'Rajwada'], summary: 'Verified service providers for beauty, wellness, event staffing, and brand shoots in Indore.' },
  { name: 'Goa', slug: 'goa', state: 'Goa', phone: '+919999900106', whatsapp: '919999900106', address: 'Panaji, Goa', rating: 4.8, reviewCount: 168, landmarks: ['Panaji', 'Calangute', 'Margao'], summary: 'Event-ready talent, salon artists, wellness experts, and travel concierge partners in Goa.' },
  { name: 'Pune', slug: 'pune', state: 'Maharashtra', phone: '+919999900107', whatsapp: '919999900107', address: 'Koregaon Park, Pune', rating: 4.7, reviewCount: 151, landmarks: ['Koregaon Park', 'Baner', 'Hinjewadi'], summary: 'Professional local listings for personal care, event support, photography, and wellness.' },
  { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', phone: '+919999900108', whatsapp: '919999900108', address: 'T. Nagar, Chennai', rating: 4.6, reviewCount: 143, landmarks: ['T. Nagar', 'Adyar', 'Anna Nagar'], summary: 'Girls of Passion Chennai connects users with discreet, verified adult companionship support.' },
  { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', phone: '+919999900109', whatsapp: '919999900109', address: 'Banjara Hills, Hyderabad', rating: 4.8, reviewCount: 162, landmarks: ['Banjara Hills', 'Hitech City', 'Gachibowli'], summary: 'Find vetted beauty teams, wellness experts, event talent, and shoot-ready professionals.' },
  { name: 'Noida', slug: 'noida', state: 'Uttar Pradesh', phone: '+919999900110', whatsapp: '919999900110', address: 'Sector 18, Noida', rating: 4.7, reviewCount: 134, landmarks: ['Sector 18', 'Sector 62', 'Greater Noida'], summary: 'Fast, verified provider discovery for events, grooming, photoshoots, and wellness sessions.' },
  { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh', phone: '+919999900111', whatsapp: '919999900111', address: 'Hazratganj, Lucknow', rating: 4.6, reviewCount: 129, landmarks: ['Hazratganj', 'Gomti Nagar', 'Aliganj'], summary: 'A refined directory for local beauty, lifestyle, event, and wellness service providers.' },
  { name: 'Surat', slug: 'surat', state: 'Gujarat', phone: '+919999900112', whatsapp: '919999900112', address: 'Vesu, Surat', rating: 4.7, reviewCount: 124, landmarks: ['Vesu', 'Adajan', 'City Light'], summary: 'Verified local professionals for ceremonies, styling, shoots, and home wellness in Surat.' },
  { name: 'Jodhpur', slug: 'jodhpur', state: 'Rajasthan', phone: '+919999900113', whatsapp: '919999900113', address: 'Sardarpura, Jodhpur', rating: 4.8, reviewCount: 142, landmarks: ['Sardarpura', 'Paota', 'Umaid Bhawan'], summary: 'Discover trusted event and lifestyle providers for premium local bookings in Jodhpur.' },
  { name: 'Ajmer', slug: 'ajmer', state: 'Rajasthan', phone: '+919999900114', whatsapp: '919999900114', address: 'Vaishali Nagar, Ajmer', rating: 4.6, reviewCount: 116, landmarks: ['Vaishali Nagar', 'Dargah Bazaar', 'Pushkar Road'], summary: 'Local beauty, wellness, and event professionals with approval-led quality checks.' },
  { name: 'Dehradun', slug: 'dehradun', state: 'Uttarakhand', phone: '+919999900115', whatsapp: '919999900115', address: 'Rajpur Road, Dehradun', rating: 4.7, reviewCount: 127, landmarks: ['Rajpur Road', 'Mussoorie Road', 'Clock Tower'], summary: 'Curated professionals for wellness retreats, events, shoots, and personal styling.' },
  { name: 'Rishikesh', slug: 'rishikesh', state: 'Uttarakhand', phone: '+919999900116', whatsapp: '919999900116', address: 'Tapovan, Rishikesh', rating: 4.8, reviewCount: 108, landmarks: ['Tapovan', 'Laxman Jhula', 'Muni Ki Reti'], summary: 'Wellness, event support, photography, and travel service providers for Rishikesh.' },
  { name: 'Manali', slug: 'manali', state: 'Himachal Pradesh', phone: '+919999900117', whatsapp: '919999900117', address: 'Mall Road, Manali', rating: 4.7, reviewCount: 113, landmarks: ['Mall Road', 'Old Manali', 'Hadimba Road'], summary: 'Local professionals for destination events, wellness plans, styling, and shoot support.' },
  { name: 'Daman', slug: 'daman', state: 'Daman and Diu', phone: '+919999900118', whatsapp: '919999900118', address: 'Nani Daman, Daman', rating: 4.6, reviewCount: 103, landmarks: ['Nani Daman', 'Devka Beach', 'Moti Daman'], summary: 'A practical directory for destination-event support, grooming, wellness, and local help.' },
  { name: 'Guwahati', slug: 'guwahati', state: 'Assam', phone: '+919999900119', whatsapp: '919999900119', address: 'GS Road, Guwahati', rating: 4.7, reviewCount: 128, landmarks: ['GS Road', 'Paltan Bazaar', 'Dispur'], summary: 'Verified professionals for personal care, events, photography, and wellness in Guwahati.' },
  { name: 'Kanpur', slug: 'kanpur', state: 'Uttar Pradesh', phone: '+919999900120', whatsapp: '919999900120', address: 'Swaroop Nagar, Kanpur', rating: 4.6, reviewCount: 112, landmarks: ['Swaroop Nagar', 'Civil Lines', 'Kakadeo'], summary: 'Approved local providers for styling, wellness, ceremonies, and event coordination.' },
  { name: 'Mount Abu', slug: 'mount-abu', state: 'Rajasthan', phone: '+919999900121', whatsapp: '919999900121', address: 'Nakki Lake Road, Mount Abu', rating: 4.8, reviewCount: 107, landmarks: ['Nakki Lake', 'Delwara Road', 'Sunset Point'], summary: 'Destination-friendly beauty, wellness, photography, and event support professionals.' },
  { name: 'Nathdwara', slug: 'nathdwara', state: 'Rajasthan', phone: '+919999900122', whatsapp: '919999900122', address: 'Temple Road, Nathdwara', rating: 4.7, reviewCount: 101, landmarks: ['Shrinathji Temple', 'Bus Stand', 'Haldi Ghati Road'], summary: 'Verified local support for ceremonies, personal styling, travel help, and events.' },
  { name: 'Jawai', slug: 'jawai', state: 'Rajasthan', phone: '+919999900123', whatsapp: '919999900123', address: 'Jawai Bandh Road, Pali', rating: 4.8, reviewCount: 100, landmarks: ['Jawai Bandh', 'Bera', 'Pali Road'], summary: 'Destination-event, photography, wellness, and concierge listings around Jawai.' },
  { name: 'India', slug: 'india', state: 'India', phone: '+919999900124', whatsapp: '919999900124', address: 'Pan India Network', rating: 4.8, reviewCount: 195, landmarks: ['Metro Cities', 'Tourist Hubs', 'Business Districts'], summary: 'A national marketplace for verified beauty, wellness, event talent, and lifestyle services.' }
];

export function getCity(slug: string) {
  const normalizedSlug = slug === 'maunt-abu' ? 'mount-abu' : slug;
  return cities.find((city) => city.slug === normalizedSlug);
}
