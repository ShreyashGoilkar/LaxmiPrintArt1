export const BUSINESS_INFO = {
  name: 'Laxmi Print Art',
  tagline: 'Commercial Art Printers & Stationers',
  phone: '8928890948',
  displayPhone: '+91 89288 90948',
  email: 'laxmiprintart.mum@gmail.com',
  address: 'Shop No. 4, Ground Floor, Singh Estate, Near Western Express Highway, Kandivali East, Mumbai, Maharashtra 400101',
  shortAddress: 'Singh Estate, Kandivali East, Mumbai',
  hoursWeekday: '9:00 AM – 9:30 PM (Mon – Sat)',
  hoursSunday: '10:00 AM – 2:00 PM (Sun)',
  googleMapsUrl: 'https://maps.google.com/?q=Singh+Estate+Kandivali+East+Mumbai+400101',
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(message)}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'printing' | 'large_format' | 'stationery' | 'finishing';
  startingPrice: string;
  turnaround: string;
  popular?: boolean;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'document-printing',
    title: 'Document & Project Printing',
    shortDesc: 'High-speed B&W and vivid colour printouts on premium 75 to 100 GSM paper.',
    fullDesc: 'Crisp black & white and true-to-life full colour prints for college projects, office presentations, legal agreements, and corporate manuals.',
    category: 'printing',
    startingPrice: '₹1.50 / page',
    turnaround: 'Instant / While you wait',
    popular: true,
    features: ['Single & Double-Sided options', 'Up to 1200 DPI resolution', 'Bond & Heavy paper stock available', 'Direct PDF / Word file print'],
  },
  {
    id: 'xerox-photocopy',
    title: 'High-Speed Xerox / Photocopy',
    shortDesc: 'Bulk photocopy for educational notes, legal briefs, Aadhaar/PAN cards, and forms.',
    fullDesc: 'Industrial heavy-duty digital copiers ensuring deep black contrast, auto double-sided sorting, and zero paper jams for bulk volumes.',
    category: 'printing',
    startingPrice: '₹1.00 / page',
    turnaround: 'Instant',
    popular: true,
    features: ['ID card 2-in-1 auto copying', 'Book and syllabus bulk photocopy', 'Enlarge & Reduce scale support', 'High-contrast clean output'],
  },
  {
    id: 'visiting-cards',
    title: 'Visiting Cards & Identity Cards',
    shortDesc: 'Premium 350 GSM business cards with matte, gloss, velvet, or UV spot finishing.',
    fullDesc: 'Make a stellar first impression with custom-designed visiting cards, student ID cards, conference badges, and customized printed lanyards.',
    category: 'printing',
    startingPrice: '₹299 / 100 cards',
    turnaround: '24 – 48 Hours',
    popular: true,
    features: ['350 GSM premium art card', 'Thermal Matte & Gloss Lamination', 'Round corner cutting available', 'Single or Double-sided print'],
  },
  {
    id: 'flex-banners',
    title: 'Flex Banners, Hoardings & Standees',
    shortDesc: 'Weatherproof high-resolution flex banners, rollup standees, and vinyl boards.',
    fullDesc: 'Heavy-duty outdoor flex and indoor display roll-up standees for business promotions, shop openings, festival banners, birthdays, and exhibitions.',
    category: 'large_format',
    startingPrice: '₹18 / sq. ft.',
    turnaround: 'Same Day / Next Day',
    popular: true,
    features: ['Standard & Star Flex media', 'Eyelets & Ring framing included', 'Roll-up pull standees for events', 'UV-resistant vibrant ink'],
  },
  {
    id: 'lamination-binding',
    title: 'Lamination & Spiral / Thesis Binding',
    shortDesc: 'Pouch & roll lamination, spiral, wiro, and golden embossed hardcover book binding.',
    fullDesc: 'Protect certificates and documents from moisture and tears with bubble-free lamination. Professional hardcover thesis binding with gold embossing for college students.',
    category: 'finishing',
    startingPrice: '₹20 / piece',
    turnaround: '30 mins – 2 hours',
    popular: true,
    features: ['ID Card to A3 pouch lamination', 'Spiral & Wire-O ring binding', 'University Thesis Hardbound (Gold Foil)', 'Acetate transparent protective covers'],
  },
  {
    id: 'invitations-cards',
    title: 'Wedding & Celebration Invitations',
    shortDesc: 'Royal and modern wedding cards, birthday invitations, and opening ceremony flyers.',
    fullDesc: 'Artistic wedding invitation cards, religious pooja cards, envelope printing, and digital wedding card creation in Hindi, Gujarati, Marathi, and English.',
    category: 'printing',
    startingPrice: '₹15 / card',
    turnaround: '2 – 4 Days',
    features: ['Metallic & Textured cardstocks', 'Foil stamping & embossing', 'Envelope matching address print', 'Customized digital PDF versions'],
  },
  {
    id: 'billbooks-stationery',
    title: 'Bill Books, Letterheads & Vouchers',
    shortDesc: 'Carbonless NCR duplicate/triplicate bill books, tax invoice pads, and receipt books.',
    fullDesc: 'Customized business stationery printed with your GST number, company logo, serial numbers, and perforation for seamless accounting.',
    category: 'printing',
    startingPrice: '₹180 / book',
    turnaround: '2 – 3 Days',
    features: ['NCR carbonless copy paper', 'Red ink serial numbering', 'Heavy binding & perforation', 'Single, Duplicate & Triplicate'],
  },
  {
    id: 'stamps-stickers',
    title: 'Rubber Stamps & Vinyl Stickers',
    shortDesc: 'Pre-inked polymer flash stamps, official round stamps, and die-cut product stickers.',
    fullDesc: 'Instant pre-inked rubber stamps for doctors, chartered accountants, advocates, and proprietors ready in just 1 hour, plus waterproof product label stickers.',
    category: 'finishing',
    startingPrice: '₹150 / stamp',
    turnaround: '1 – 2 Hours',
    features: ['Pre-inked no-pad stamps (10,000 impressions)', 'Pocket stamps with keychains', 'Round official seal stamps', 'Waterproof die-cut vinyl stickers'],
  },
];

export interface StationeryItem {
  name: string;
  category: 'School' | 'Office' | 'Art & Craft' | 'Paper';
  desc: string;
  tag: string;
}

export const STATIONERY_PRODUCTS: StationeryItem[] = [
  { name: 'Classmate & Navneet Notebooks', category: 'School', desc: 'Single line, four line, square, and long register notebooks.', tag: 'Bestseller' },
  { name: 'Exam Pads & Geometry Sets', category: 'School', desc: 'Sturdy transparent exam clipboards, compass sets, and rulers.', tag: 'School Prep' },
  { name: 'Parker, Reynolds & Uniball Pens', category: 'Office', desc: 'Gel pens, ball pens, rollerballs, permanent markers, and highlighters.', tag: 'Writing' },
  { name: 'Files, Folders & Document Bags', category: 'Office', desc: 'Cobra files, ring binders, button folders, and clear display book files.', tag: 'Organization' },
  { name: 'A4 & A3 Copier Paper Reams', category: 'Paper', desc: 'JK Copier, TNPL & Bilt 75/80 GSM premium paper boxes and reams.', tag: 'Bulk Pack' },
  { name: 'Art Acrylics, Canvas & Brushes', category: 'Art & Craft', desc: 'Fevicryl acrylics, stretched canvas, watercolor sets, and craft glue guns.', tag: 'Creative' },
  { name: 'Envelopes & Courier Bags', category: 'Office', desc: 'Cloth-line legal envelopes, window envelopes, and tamper-proof mailers.', tag: 'Mailing' },
  { name: 'Specialty Craft & Chart Papers', category: 'Paper', desc: 'Fluorescent charts, handmade sheet, foam sheets, and glitter foam.', tag: 'School Projects' },
];

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rohit K. Sharma',
    role: 'Local Retailer & Proprietor',
    location: 'Singh Estate, Kandivali East',
    text: 'Got 500 visiting cards and my shop bill books printed here. The paper thickness and colour reproduction were top notch. Best part is they delivered on the promised date without delays.',
    rating: 5,
  },
  {
    name: 'Neha Panchal',
    role: 'Architecture Student',
    location: 'Thakur Village / Kandivali',
    text: 'Saved me during submission week! Got my entire portfolio presentation printed on 250 GSM satin paper and wiro-bound in just 45 minutes. Super student-friendly rates.',
    rating: 5,
  },
  {
    name: 'Rajesh V. Mehta',
    role: 'Event Organizer',
    location: 'Akurli Road, Kandivali East',
    text: 'Ordered 3 large rollup standees and 200 event badges for a community festival. The prints did not pixelate and the colors looked vivid even under bright sun. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Pooja Kadam',
    role: 'High School Teacher',
    location: 'Kandivali East',
    text: 'Regularly get worksheets and examination papers photocopied in bulk here. Clean collation, fast service, and very polite owner who understands requirements immediately.',
    rating: 5,
  },
];
