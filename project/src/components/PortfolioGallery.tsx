import { useState } from 'react';
import { Sparkles, X, ArrowUpRight, MessageCircle, Eye } from 'lucide-react';
import { getWhatsAppUrl } from '../data/constants';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'cards' | 'banners' | 'binding' | 'invitations';
  categoryLabel: string;
  image: string;
  specs: string;
  turnaround: string;
  description: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'cards-1',
    title: 'Velvet Matte Business Cards with Spot UV',
    category: 'cards',
    categoryLabel: 'Visiting Cards',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    specs: '350 GSM Art Card • Double Sided Thermal Matte • Raised Spot Gloss UV',
    turnaround: '24–48 Hours',
    description: 'High-contrast black & gold luxury corporate business cards designed for a real estate agency in Kandivali.',
  },
  {
    id: 'banner-1',
    title: 'Outdoor Commercial Flex Banner & Standee',
    category: 'banners',
    categoryLabel: 'Large Format',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    specs: 'Star Heavy Flex • Metal Eyelets • UV Weatherproof Solvent Inks',
    turnaround: 'Same Day Delivery',
    description: 'Full-bleed high-vibrancy outdoor festival and promotional hoarding banner with rust-free brass eyelets for easy hanging.',
  },
  {
    id: 'binding-1',
    title: 'University Thesis Hardbound with Golden Foil',
    category: 'binding',
    categoryLabel: 'Book Binding',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    specs: 'Hardcase Rexine Cover • Gold Foil Hot Stamping • 85 GSM Executive Bond',
    turnaround: 'Ready in 2–3 Hours',
    description: 'Official university thesis binding with crisp metallic gold lettering on navy blue and black hardcover stock.',
  },
  {
    id: 'invites-1',
    title: 'Royal Wedding & Celebration Invitation Suite',
    category: 'invitations',
    categoryLabel: 'Invitations',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    specs: '300 GSM Textured Metallic Paper • Embossed Floral Accents • Custom Envelopes',
    turnaround: '3–4 Days',
    description: 'Multi-fold luxury wedding invitation cards featuring intricate traditional borders and custom matching RSVP inserts.',
  },
  {
    id: 'cards-2',
    title: 'Custom Die-Cut Rounded Corporate ID Cards',
    category: 'cards',
    categoryLabel: 'Visiting Cards',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    specs: 'Heavy PVC Plastic • Anti-Scratch Lamination • QR Code Integration',
    turnaround: '24 Hours',
    description: 'Durable staff identification cards and visitors badges with company logo and barcode/QR verification.',
  },
  {
    id: 'binding-2',
    title: 'Twin-Loop Metal Wiro Corporate Presentation',
    category: 'binding',
    categoryLabel: 'Book Binding',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    specs: '360° Fold Metal Wire-O • Frosted Transparent Front Cover • 100 GSM Bond',
    turnaround: 'Ready in 30 Mins',
    description: 'Sleek executive document pitch deck binding allowing full 360-degree flat opening for client meetings.',
  },
];

export function PortfolioGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Our Print Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Ideas Look Better <span className="text-blue-600">in Print</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
              Inspect sample finishes from visiting cards to large outdoor hoardings and thesis books produced right in our shop.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Samples' },
              { id: 'cards', label: 'Visiting Cards' },
              { id: 'banners', label: 'Banners & Flex' },
              { id: 'binding', label: 'Binding' },
              { id: 'invitations', label: 'Invitations' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              {/* Image Container with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-blue-600 px-3 py-1.5 rounded-lg shadow-md">
                    <Eye className="w-3.5 h-3.5" /> Click to Inspect Specs
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-slate-900 shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.specs}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="text-emerald-600 font-mono-code">{item.turnaround}</span>
                  <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Have a custom design file in CorelDraw (.CDR), Illustrator (.AI), Photoshop (.PSD) or PDF?
          </p>
          <a
            href={getWhatsAppUrl('Hello Laxmi Print Art, I have custom artwork files (.CDR / .AI / .PDF) ready for production.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Send your artwork on WhatsApp for a fast pre-flight check</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 border border-slate-100"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-video bg-slate-900">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-600">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Specifications:</span>
                  <span className="font-bold text-slate-800 text-right">{activeItem.specs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Typical Turnaround:</span>
                  <span className="font-bold text-emerald-600 font-mono-code">{activeItem.turnaround}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(`Hello Laxmi Print Art, I want to order a print job similar to: ${activeItem.title} (${activeItem.specs}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Something Like This on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioGallery;
