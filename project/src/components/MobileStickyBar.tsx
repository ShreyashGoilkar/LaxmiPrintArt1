import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/constants';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:+91${BUSINESS_INFO.phone}`}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
      >
        <Phone className="w-4 h-4 text-blue-400" />
        <span>Call Shop</span>
      </a>

      <a
        href={getWhatsAppUrl('Hello Laxmi Print Art, I want to inquire about printing services.')}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm shadow-emerald-700/20"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp Chat</span>
      </a>
    </div>
  );
}

export default MobileStickyBar;
