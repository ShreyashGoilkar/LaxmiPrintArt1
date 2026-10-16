import { Printer, Copy, CreditCard, Sparkles, BookOpen, Heart, FileSpreadsheet, Stamp, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/constants';

const ICON_MAP: Record<string, any> = {
  'document-printing': Printer,
  'xerox-photocopy': Copy,
  'visiting-cards': CreditCard,
  'flex-banners': Sparkles,
  'lamination-binding': BookOpen,
  'invitations-cards': Heart,
  'billbooks-stationery': FileSpreadsheet,
  'stamps-stickers': Stamp,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Full-Spectrum <span className="text-blue-600">Printing Services</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Equipped with heavy-duty Konica Minolta &amp; HP digital production presses, large format outdoor flex plotters, and precision binding machines.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={getWhatsAppUrl('Hello Laxmi Print Art, I have a custom commercial print requirement.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              <span>Need custom bulk print quote?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.id] || Printer;
            return (
              <div
                key={service.id}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top row: Icon & Popular badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Features list */}
                  <ul className="mt-4 space-y-1.5 border-t border-slate-200/70 pt-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Footer: Price & WhatsApp Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting from</span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono-code">{service.startingPrice}</span>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hello Laxmi Print Art, I want to enquire about ${service.title}. Starting price: ${service.startingPrice}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                    title={`Enquire on WhatsApp for ${service.title}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
