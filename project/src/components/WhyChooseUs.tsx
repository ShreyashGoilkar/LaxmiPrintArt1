import { Zap, ShieldCheck, FileCheck, Users, Headphones, Clock } from 'lucide-react';

export function WhyChooseUs() {
  const points = [
    {
      icon: Zap,
      title: 'Lightning-Fast Turnaround',
      desc: 'Documents and photocopies printed while you wait. Thesis binding ready in under 2 hours, and bulk flex banners delivered same-day.',
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      icon: ShieldCheck,
      title: 'CMYK Calibrated Production',
      desc: 'We utilize industrial production presses with spectrophotometer calibration so your brand logos, photos, and cards never appear dull or color-shifted.',
      color: 'text-blue-600 bg-blue-600/10',
    },
    {
      icon: FileCheck,
      title: 'WhatsApp Print & Pick Up',
      desc: 'Skip the shop queue. Simply send your PDF, Doc, or CorelDraw file on WhatsApp, approve the print proof, and collect your finished prints whenever convenient.',
      color: 'text-emerald-600 bg-emerald-600/10',
    },
    {
      icon: Users,
      title: 'Student & Academic Concessions',
      desc: 'Special bulk photocopy and portfolio discounts for students of Thakur College, local architecture institutes, engineering colleges, and schools.',
      color: 'text-indigo-600 bg-indigo-600/10',
    },
    {
      icon: Headphones,
      title: 'Free File Check & Artwork Help',
      desc: 'Worried about margin cut-offs or low-res images? Our team inspects your artwork before pressing print to prevent costly misprints.',
      color: 'text-rose-600 bg-rose-600/10',
    },
    {
      icon: Clock,
      title: 'Convenient Extended Hours',
      desc: 'Open Monday through Saturday from 9:00 AM to 9:30 PM, plus Sunday morning hours (10:00 AM to 2:00 PM) for weekend emergencies.',
      color: 'text-purple-600 bg-purple-600/10',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
            The Laxmi Print Art Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Why Kandivali Chooses Us as <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Their Print Partner</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Reliable, crisp, and affordable printing right in your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-7 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pt.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
