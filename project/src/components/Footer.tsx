import { Phone, MessageCircle, MapPin, ArrowUp, Clock } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & About Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" className="brightness-125" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your dependable neighborhood printing, photocopy, and stationery provider in Singh Estate, Kandivali East, Mumbai. Serving local residents, students, and businesses with commercial print precision.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('Hello Laxmi Print Art, I want to inquire about printing services.')}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-600/20 text-amber-400 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-code">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#top" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Printing Services</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">Price Estimator</a></li>
              <li><a href="#stationery" className="hover:text-blue-400 transition-colors">Stationery Store</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Sample Work</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Location &amp; Hours</a></li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-code">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Visiting Cards</li>
              <li>Color &amp; B/W Xerox</li>
              <li>Flex Banners &amp; Standees</li>
              <li>Thesis Hardbound Binding</li>
              <li>Pouch Lamination</li>
              <li>Rubber Stamps &amp; Seals</li>
              <li>Wedding Invitation Cards</li>
              <li>NCR Duplicate Bill Books</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-code">
              Store Info
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <a href={`tel:+91${BUSINESS_INFO.phone}`} className="hover:text-white font-mono-code">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.hoursWeekday}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Commercial Art Printers &amp; Stationers.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
