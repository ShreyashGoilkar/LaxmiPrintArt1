import { Phone, MessageCircle, Calculator, Printer, CheckCircle2, Star, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/constants';

export function Hero() {
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#calculator');
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Background print grid decoration */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

      {/* Decorative CMYK color flare */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Commercial Art Printers &amp; Stationers in Kandivali East</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Your Ideas.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-700">
                True-to-Life Print.
              </span><br />
              Flawless Finish.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From emergency urgent photocopies to 5,000 corporate visiting cards, vibrant outdoor flex banners, and thesis book binding — Laxmi Print Art brings industrial precision and honest prices to Singh Estate, Kandivali.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl('Hello Laxmi Print Art, I want to print some documents/artwork. Please tell me where to send the files.')}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-700/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send PDF on WhatsApp</span>
              </a>

              <a
                href="#calculator"
                onClick={scrollToCalculator}
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2.5 shadow-md shadow-slate-900/15 transition-all hover:scale-[1.02]"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate Print Cost</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-4 rounded-xl font-bold text-sm border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 bg-white hover:bg-blue-50/40 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Instant / Same Day</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Printer className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>1200+ DPI Precision</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Best Wholesale Rates</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Walk-in or Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-slate-300/60 border border-slate-100 relative z-20">
                {/* Header of card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-xs font-mono-code font-bold text-slate-400 ml-2">CMYK Calibrated</span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Production
                  </span>
                </div>

                {/* Popular Job Tiles */}
                <div className="grid grid-cols-2 gap-3.5 my-5">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Bestseller</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Visiting Cards</div>
                    <div className="text-xs text-slate-500 mt-0.5">350 GSM Matte Lamination</div>
                    <div className="text-xs font-bold text-slate-900 mt-2 font-mono-code">From ₹299 / 100 pcs</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">Fast Turnaround</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Flex &amp; Standees</div>
                    <div className="text-xs text-slate-500 mt-0.5">Weatherproof outdoor ink</div>
                    <div className="text-xs font-bold text-slate-900 mt-2 font-mono-code">From ₹18 / sq.ft</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Students &amp; Office</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Thesis Hardbound</div>
                    <div className="text-xs text-slate-500 mt-0.5">Golden foil embossing</div>
                    <div className="text-xs font-bold text-slate-900 mt-2 font-mono-code">Same Day Delivery</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">High Speed</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Digital Xerox</div>
                    <div className="text-xs text-slate-500 mt-0.5">Deep black contrast 75 GSM</div>
                    <div className="text-xs font-bold text-slate-900 mt-2 font-mono-code">₹1.00 / photocopy</div>
                  </div>
                </div>

                {/* Local customer rating badge */}
                <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">4.9 / 5.0 Rating</div>
                      <div className="text-[10px] text-slate-500">Trusted by 650+ local Kandivali clients</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-700">Google Verified</span>
                </div>
              </div>

              {/* Floating aesthetic card */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 hidden sm:flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  PDF
                </div>
                <div>
                  <div className="text-xs font-bold">Send File, Collect in 15 Mins</div>
                  <div className="text-[11px] text-slate-400">WhatsApp document sharing supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
