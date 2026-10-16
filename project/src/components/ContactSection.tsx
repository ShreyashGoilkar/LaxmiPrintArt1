import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/constants';

export function ContactSection() {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('');
  const [formQty, setFormQty] = useState('');
  const [formNotes, setFormNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formService) return;

    const message = [
      'Hello Laxmi Print Art,',
      'I am submitting an enquiry from your website:',
      '',
      `Name: ${formName.trim()}`,
      formPhone.trim() ? `Phone: ${formPhone.trim()}` : null,
      `Service: ${formService}`,
      formQty.trim() ? `Quantity/Specifications: ${formQty.trim()}` : null,
      formNotes.trim() ? `Instructions/File details: ${formNotes.trim()}` : null,
      '',
      'I will attach any relevant PDF/design files directly in this chat.',
    ]
      .filter(Boolean)
      .join('\n');

    setSubmitted(true);
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Visit or Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            We&apos;re Right Here in <span className="text-blue-600">Kandivali East</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Walk into our print shop at Singh Estate, give us a quick call, or start an instant inquiry on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>Shop Location &amp; Hours</span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono-code text-slate-400 block font-semibold">Address</span>
                    <p className="text-slate-200 mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono-code text-slate-400 block font-semibold">Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:+91${BUSINESS_INFO.phone}`}
                      className="text-base font-bold text-white hover:text-blue-400 transition-colors font-mono-code block mt-0.5"
                    >
                      {BUSINESS_INFO.displayPhone}
                    </a>
                    <span className="text-xs text-slate-400">Available for calls and instant document sharing</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono-code text-slate-400 block font-semibold">Working Hours</span>
                    <div className="mt-1 space-y-1">
                      <div className="flex justify-between gap-6 text-slate-200">
                        <span>Monday – Saturday:</span>
                        <span className="font-semibold text-emerald-400">9:00 AM – 9:30 PM</span>
                      </div>
                      <div className="flex justify-between gap-6 text-slate-300">
                        <span>Sunday:</span>
                        <span className="font-semibold text-amber-400">10:00 AM – 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs uppercase font-mono-code text-slate-400 block font-semibold mb-2">Accepted Payment Modes</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Cash'].map(mode => (
                      <span key={mode} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-video sm:aspect-[21/9] bg-slate-100">
              <iframe
                title="Laxmi Print Art Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.76865239598!2d72.8587!3d19.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7194600f13b%3A0x6b7441dc94fba973!2sSingh%20Estate%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Custom Enquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase font-mono-code text-blue-600 font-bold tracking-wider">Fast Response</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">Send a Print Enquiry</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formPhone}
                    onChange={e => setFormPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    required
                    value={formService}
                    onChange={e => setFormService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  >
                    <option value="" disabled>Select service</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Stationery Order">Stationery / Office Supplies</option>
                    <option value="Other Custom Job">Other Custom Printing Job</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Quantity / Size Specifications
                </label>
                <input
                  type="text"
                  value={formQty}
                  onChange={e => setFormQty(e.target.value)}
                  placeholder="e.g. 100 Visiting Cards, A4 colour 25 pages, 6x3 flex banner"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Additional Notes or Instructions
                </label>
                <textarea
                  rows={3}
                  value={formNotes}
                  onChange={e => setFormNotes(e.target.value)}
                  placeholder="Any specific paper stock, deadline, or design requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp opened with your enquiry pre-filled! Send your message and attach any files directly.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Prepare &amp; Send WhatsApp Enquiry</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 mt-2">
                🔒 You do not need to upload files here. You can attach your PDFs, images, or CorelDraw files directly inside WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
