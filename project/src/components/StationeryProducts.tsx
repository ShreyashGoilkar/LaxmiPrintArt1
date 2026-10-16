import { useState } from 'react';
import { Package, MessageCircle, Check } from 'lucide-react';
import { STATIONERY_PRODUCTS, getWhatsAppUrl } from '../data/constants';

type CategoryFilter = 'All' | 'School' | 'Office' | 'Art & Craft' | 'Paper';

export function StationeryProducts() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProducts = activeCategory === 'All'
    ? STATIONERY_PRODUCTS
    : STATIONERY_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="stationery" className="py-20 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5" />
            Everyday Essentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            School, College &amp; <span className="text-blue-600">Office Stationery</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We stock leading stationery brands including Classmate, Navneet, JK Copier, Reynolds, Parker, and Fevicryl for students, teachers, and businesses in Kandivali.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {(['All', 'School', 'Office', 'Art & Craft', 'Paper'] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In-Stock at Store
                </span>
                <a
                  href={getWhatsAppUrl(`Hello Laxmi Print Art, I want to check availability or bulk rate for ${item.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk discount banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-amber-400 text-slate-950 rounded-full mb-2">
              Institutions &amp; Offices
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Supplying to Schools, Colleges &amp; Corporates in Kandivali</h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Get customized wholesale GST billing for monthly office supplies, copier paper ream boxes, and examination stationery.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Laxmi Print Art, I represent an institution/business in Kandivali and would like a wholesale price quote for stationery supplies.')}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl text-sm font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Request Wholesale Rate</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default StationeryProducts;
