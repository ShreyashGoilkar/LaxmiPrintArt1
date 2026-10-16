import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/constants';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Rate Calculator', href: '#calculator', badge: 'Interactive' },
    { name: 'Stationery', href: '#stationery' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Location & Hours', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top Info Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{BUSINESS_INFO.shortAddress}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Open: {BUSINESS_INFO.hoursWeekday}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium">
            <span className="hidden lg:inline-block text-emerald-400">
              ⚡ Instant WhatsApp Printing &amp; File Delivery
            </span>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="focus:outline-none transition-transform hover:scale-[1.01]"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello Laxmi Print Art, I have a document/artwork file to print. Please advise how I can send it.')}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-sm shadow-emerald-700/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp File</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 bg-white hover:bg-blue-50/50 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Shop</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl('Hello Laxmi Print Art, I would like to inquire about printing services.')}
              target="_blank"
              rel="noreferrer"
              className="py-3 px-3 rounded-xl text-xs font-bold bg-emerald-600 text-white flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="py-3 px-3 rounded-xl text-xs font-bold border border-slate-300 text-slate-800 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
