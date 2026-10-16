import { useState, useMemo } from 'react';
import { Calculator, MessageCircle, FileText, CreditCard, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/constants';

type CalculatorTab = 'documents' | 'visiting-cards' | 'banners' | 'finishing';

export function PriceEstimator() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('documents');

  // Document states
  const [docColor, setDocColor] = useState<'bw' | 'color'>('bw');
  const [docSides, setDocSides] = useState<'single' | 'double'>('single');
  const [docPaper, setDocPaper] = useState<'75gsm' | '100gsm' | 'photo'>('75gsm');
  const [docPages, setDocPages] = useState<number>(20);
  const [docCopies, setDocCopies] = useState<number>(1);

  // Visiting cards states
  const [cardType, setCardType] = useState<'standard' | 'matte_double' | 'velvet_uv'>('matte_double');
  const [cardQty, setCardQty] = useState<100 | 500 | 1000>(500);
  const [cardCorners, setCardCorners] = useState<'square' | 'round'>('square');

  // Banner states
  const [bannerWidth, setBannerWidth] = useState<number>(6);
  const [bannerHeight, setBannerHeight] = useState<number>(3);
  const [bannerMedia, setBannerMedia] = useState<'normal' | 'star' | 'vinyl'>('normal');
  const [bannerQty, setBannerQty] = useState<number>(1);

  // Finishing states
  const [finishType, setFinishType] = useState<'lamination_a4' | 'lamination_a3' | 'spiral' | 'wiro' | 'hardbound'>('spiral');
  const [finishQty, setFinishQty] = useState<number>(1);

  // Calculations
  const docCalculation = useMemo(() => {
    let ratePerPage = 1.5; // default B&W single
    if (docColor === 'bw') {
      ratePerPage = docSides === 'single' ? 1.5 : 1.25; // per side
    } else {
      ratePerPage = docSides === 'single' ? 6.0 : 5.0; // per side
    }

    if (docPaper === '100gsm') ratePerPage += 1.0;
    if (docPaper === 'photo') ratePerPage += 8.0;

    const totalPages = docPages * docCopies;
    let total = totalPages * ratePerPage;

    // Volume discount
    let discount = 0;
    if (totalPages >= 200) {
      discount = 0.20; // 20%
    } else if (totalPages >= 50) {
      discount = 0.10; // 10%
    }

    const finalAmount = Math.max(10, Math.round(total * (1 - discount)));
    return {
      ratePerPage,
      totalSheets: docSides === 'double' ? Math.ceil(docPages / 2) * docCopies : totalPages,
      finalAmount,
      discountPercent: discount * 100,
    };
  }, [docColor, docSides, docPaper, docPages, docCopies]);

  const cardCalculation = useMemo(() => {
    const pricingTable = {
      standard: { 100: 299, 500: 699, 1000: 1199 },
      matte_double: { 100: 449, 500: 899, 1000: 1499 },
      velvet_uv: { 100: 699, 500: 1399, 1000: 2299 },
    };

    let base = pricingTable[cardType][cardQty];
    if (cardCorners === 'round') base += 80;
    return { finalAmount: base };
  }, [cardType, cardQty, cardCorners]);

  const bannerCalculation = useMemo(() => {
    const sqft = Math.max(1, bannerWidth * bannerHeight);
    const rates = {
      normal: 18,
      star: 28,
      vinyl: 55,
    };
    const finalAmount = Math.max(100, Math.round(sqft * rates[bannerMedia] * bannerQty));
    return { sqft, finalAmount };
  }, [bannerWidth, bannerHeight, bannerMedia, bannerQty]);

  const finishCalculation = useMemo(() => {
    const rates = {
      lamination_a4: 20,
      lamination_a3: 40,
      spiral: 35,
      wiro: 60,
      hardbound: 200,
    };
    const finalAmount = rates[finishType] * finishQty;
    return { finalAmount };
  }, [finishType, finishQty]);

  // Construct WhatsApp Quote Text
  const getPreparedWhatsAppUrl = () => {
    let summary = '';
    if (activeTab === 'documents') {
      summary = `Job: Document Printing\n- Color: ${docColor === 'bw' ? 'Black & White' : 'Full Colour'}\n- Sides: ${docSides === 'single' ? 'Single Sided' : 'Double Sided'}\n- Paper: ${docPaper}\n- Pages: ${docPages} (Copies: ${docCopies})\n- Estimated Cost: ~₹${docCalculation.finalAmount}`;
    } else if (activeTab === 'visiting-cards') {
      summary = `Job: Visiting Cards\n- Type: ${cardType.replace('_', ' ').toUpperCase()}\n- Quantity: ${cardQty} cards\n- Corners: ${cardCorners}\n- Estimated Cost: ~₹${cardCalculation.finalAmount}`;
    } else if (activeTab === 'banners') {
      summary = `Job: Flex / Banner Printing\n- Size: ${bannerWidth} ft x ${bannerHeight} ft (${bannerCalculation.sqft} sq.ft)\n- Media: ${bannerMedia.toUpperCase()}\n- Quantity: ${bannerQty}\n- Estimated Cost: ~₹${bannerCalculation.finalAmount}`;
    } else {
      summary = `Job: Finishing & Binding\n- Type: ${finishType.replace('_', ' ').toUpperCase()}\n- Quantity: ${finishQty}\n- Estimated Cost: ~₹${finishCalculation.finalAmount}`;
    }

    const message = `Hello Laxmi Print Art,\nI just calculated an estimate on your website:\n\n${summary}\n\nPlease confirm availability and I will send my print files on this chat.`;
    return getWhatsAppUrl(message);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Instant Rate Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Know Your Print Cost <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Before You Visit</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            No hidden charges. Select your exact specifications below to get an instant realistic estimate and send your files directly on WhatsApp.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'documents'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            Documents &amp; Xerox
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('visiting-cards')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'visiting-cards'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Visiting Cards
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('banners')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'banners'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Flex &amp; Banners
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('finishing')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'finishing'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            Binding &amp; Lamination
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-slate-800/60 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            {activeTab === 'documents' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Print Color</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDocColor('bw')}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        docColor === 'bw'
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      Black &amp; White (₹1.50)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDocColor('color')}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        docColor === 'color'
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      Full Colour (₹6.00)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Sides</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDocSides('single')}
                        className={`py-2.5 px-3 rounded-lg border text-xs font-medium ${
                          docSides === 'single'
                            ? 'border-blue-500 bg-blue-500/15 text-blue-300'
                            : 'border-slate-700 bg-slate-900/50 text-slate-400'
                        }`}
                      >
                        Single Side
                      </button>
                      <button
                        type="button"
                        onClick={() => setDocSides('double')}
                        className={`py-2.5 px-3 rounded-lg border text-xs font-medium ${
                          docSides === 'double'
                            ? 'border-blue-500 bg-blue-500/15 text-blue-300'
                            : 'border-slate-700 bg-slate-900/50 text-slate-400'
                        }`}
                      >
                        Double Side (Save paper)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Paper Grade</label>
                    <select
                      value={docPaper}
                      onChange={(e) => setDocPaper(e.target.value as any)}
                      className="w-full py-2.5 px-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="75gsm">Standard Copier 75 GSM</option>
                      <option value="100gsm">Premium Executive 100 GSM (+₹1)</option>
                      <option value="photo">Glossy Photo Paper 180 GSM (+₹8)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-300">Number of Pages in PDF/Document</label>
                    <span className="text-blue-400 font-bold text-base font-mono-code">{docPages} pages</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="300"
                    value={docPages}
                    onChange={(e) => setDocPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>1 page</span>
                    <span>100 pages</span>
                    <span>300+ pages (Bulk discount applies)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-300">Copies / Sets</label>
                    <span className="text-blue-400 font-bold text-base font-mono-code">{docCopies} set(s)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={docCopies}
                    onChange={(e) => setDocCopies(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'visiting-cards' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Card Paper &amp; Finish</label>
                  <div className="space-y-3">
                    {[
                      { id: 'standard', name: '350 GSM Standard Art Card', desc: 'Single-sided glossy or matte, crisp colors' },
                      { id: 'matte_double', name: 'Double-Sided Thermal Matte (Recommended)', desc: 'Soft-touch velvety finish on both sides, water-resistant' },
                      { id: 'velvet_uv', name: 'Premium Velvet + Raised Spot UV', desc: 'Glossy raised embossing on logo and name, top tier feel' },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setCardType(item.id as any)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          cardType === item.id
                            ? 'border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500'
                            : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Quantity</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[100, 500, 1000].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setCardQty(qty as any)}
                          className={`py-2 px-3 rounded-lg border text-xs font-semibold ${
                            cardQty === qty
                              ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                              : 'border-slate-700 bg-slate-900/50 text-slate-400'
                          }`}
                        >
                          {qty} Cards
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Corner Style</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setCardCorners('square')}
                        className={`py-2 px-3 rounded-lg border text-xs font-medium ${
                          cardCorners === 'square'
                            ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                            : 'border-slate-700 bg-slate-900/50 text-slate-400'
                        }`}
                      >
                        Standard Square
                      </button>
                      <button
                        type="button"
                        onClick={() => setCardCorners('round')}
                        className={`py-2 px-3 rounded-lg border text-xs font-medium ${
                          cardCorners === 'round'
                            ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                            : 'border-slate-700 bg-slate-900/50 text-slate-400'
                        }`}
                      >
                        Round Edge (+₹80)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'banners' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Width (in Feet)</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={bannerWidth}
                      onChange={(e) => setBannerWidth(Math.max(1, Number(e.target.value)))}
                      className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono-code focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Height (in Feet)</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={bannerHeight}
                      onChange={(e) => setBannerHeight(Math.max(1, Number(e.target.value)))}
                      className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono-code focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Banner Media Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'normal', name: 'Standard Flex', rate: '₹18 / sq.ft', desc: 'Standard outdoor hoardings' },
                      { id: 'star', name: 'Star Flex (Heavy)', rate: '₹28 / sq.ft', desc: 'Vivid color, tear-proof' },
                      { id: 'vinyl', name: 'Vinyl on Sunboard', rate: '₹55 / sq.ft', desc: 'Rigid board for offices & stalls' },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setBannerMedia(item.id as any)}
                        className={`p-3.5 rounded-xl border cursor-pointer ${
                          bannerMedia === item.id
                            ? 'border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500'
                            : 'border-slate-700 bg-slate-900/40 text-slate-300'
                        }`}
                      >
                        <div className="font-semibold text-xs sm:text-sm">{item.name}</div>
                        <div className="text-amber-400 font-mono-code text-xs mt-1">{item.rate}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Number of Banners</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={bannerQty}
                    onChange={(e) => setBannerQty(Math.max(1, Number(e.target.value)))}
                    className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono-code focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-xs text-slate-400 mt-2">Eyelet metal rings &amp; edge folding included for easy hanging.</p>
                </div>
              </div>
            )}

            {activeTab === 'finishing' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Select Service</label>
                  <div className="space-y-3">
                    {[
                      { id: 'spiral', name: 'Plastic Spiral Ring Binding', price: '₹35 / book', desc: 'Includes transparent acetate front & opaque back sheet' },
                      { id: 'wiro', name: 'Twin Loop Metal Wiro Binding', price: '₹60 / book', desc: 'Corporate 360° flip calendar and portfolio style' },
                      { id: 'hardbound', name: 'University Thesis Hardbound (Golden Embossed)', price: '₹200 / book', desc: 'Official black/navy/maroon hard case with gold foil lettering' },
                      { id: 'lamination_a4', name: 'A4 Document Pouch Lamination', price: '₹20 / piece', desc: '125-micron crystal clear waterproof lamination' },
                      { id: 'lamination_a3', name: 'A3 Certificate / Poster Lamination', price: '₹40 / piece', desc: 'Large format protective seal' },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setFinishType(item.id as any)}
                        className={`p-3.5 rounded-xl border cursor-pointer flex justify-between items-center ${
                          finishType === item.id
                            ? 'border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500'
                            : 'border-slate-700 bg-slate-900/40 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm">{item.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                        </div>
                        <div className="text-right pl-3">
                          <span className="text-amber-400 font-mono-code font-bold text-sm">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={finishQty}
                    onChange={(e) => setFinishQty(Math.max(1, Number(e.target.value)))}
                    className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono-code focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Real-time Quote Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-mono-code text-blue-400 tracking-wider">Estimated Quote</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Summary of Order</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Dynamic summary items */}
              <div className="space-y-3 text-sm text-slate-300 mb-6">
                {activeTab === 'documents' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Print Quality:</span>
                      <span className="font-medium text-white">{docColor === 'bw' ? 'B&W Digital Print' : 'High-Res Colour'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Layout:</span>
                      <span className="font-medium text-white">{docSides === 'single' ? 'Single Sided' : 'Double Sided'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Paper Weight:</span>
                      <span className="font-medium text-white uppercase">{docPaper}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Pages × Copies:</span>
                      <span className="font-medium text-white">{docPages} pages × {docCopies} sets</span>
                    </div>
                    {docCalculation.discountPercent > 0 && (
                      <div className="flex justify-between py-1 text-emerald-400 font-semibold">
                        <span>Bulk Order Discount:</span>
                        <span>-{docCalculation.discountPercent}% OFF</span>
                      </div>
                    )}
                  </>
                )}

                {activeTab === 'visiting-cards' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Card Finish:</span>
                      <span className="font-medium text-white capitalize">{cardType.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Total Cards:</span>
                      <span className="font-medium text-white">{cardQty} cards</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Corners:</span>
                      <span className="font-medium text-white capitalize">{cardCorners} Corners</span>
                    </div>
                  </>
                )}

                {activeTab === 'banners' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Dimensions:</span>
                      <span className="font-medium text-white">{bannerWidth} ft × {bannerHeight} ft</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Total Area:</span>
                      <span className="font-medium text-white">{bannerCalculation.sqft} sq. ft.</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Media:</span>
                      <span className="font-medium text-white capitalize">{bannerMedia} Flex</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Quantity:</span>
                      <span className="font-medium text-white">{bannerQty} banner(s)</span>
                    </div>
                  </>
                )}

                {activeTab === 'finishing' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Selected Service:</span>
                      <span className="font-medium text-white capitalize">{finishType.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Quantity:</span>
                      <span className="font-medium text-white">{finishQty} item(s)</span>
                    </div>
                  </>
                )}
              </div>

              {/* Total Calculation Display */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-slate-400 text-sm">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono-code">
                      ₹{activeTab === 'documents'
                        ? docCalculation.finalAmount
                        : activeTab === 'visiting-cards'
                        ? cardCalculation.finalAmount
                        : activeTab === 'banners'
                        ? bannerCalculation.finalAmount
                        : finishCalculation.finalAmount}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">*Taxes as applicable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Order Actions */}
            <div className="space-y-3">
              <a
                href={getPreparedWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-950/50 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm Quote &amp; Send File via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                You can attach your PDF, Word, or CDR files directly in the WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceEstimator;
