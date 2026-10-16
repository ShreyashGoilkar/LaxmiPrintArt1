interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showSubtitle = true, size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic CMYK Emblem */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} rounded-full p-[2px] bg-white shadow-md shadow-blue-900/10 border border-slate-200 overflow-hidden`}>
        <svg viewBox="0 0 100 100" className="w-full h-full transform hover:rotate-45 transition-transform duration-500">
          {/* Circular outer registration */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* CMYK 4 Quadrants */}
          {/* Top Left: Cyan */}
          <path d="M 50 50 L 50 6 A 44 44 0 0 0 6 50 Z" fill="#00a2e8" />
          {/* Top Right: Yellow */}
          <path d="M 50 50 L 94 50 A 44 44 0 0 0 50 6 Z" fill="#ffc90e" />
          {/* Bottom Left: Magenta */}
          <path d="M 50 50 L 6 50 A 44 44 0 0 0 50 94 Z" fill="#ec008c" />
          {/* Bottom Right: Key / Black */}
          <path d="M 50 50 L 50 94 A 44 44 0 0 0 94 50 Z" fill="#0f172a" />

          {/* Crosshairs */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />

          {/* Stylized LPA Initials */}
          <text x="32" y="38" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">L</text>
          <text x="32" y="76" fill="#ffffff" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">P</text>
          <text x="70" y="60" fill="#ffffff" fontSize="28" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">A</text>

          {/* Center Target Point */}
          <circle cx="50" cy="50" r="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className={`font-bold tracking-tight text-slate-900 ${titleSizes[size]} font-['Outfit'] flex items-center gap-1.5`}>
          <span>Laxmi</span>
          <span className="text-blue-600 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Print Art
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-semibold text-rose-600 tracking-wider uppercase mt-0.5">
            Commercial Art Printers &amp; Stationers
          </span>
        )}
      </div>
    </div>
  );
}
export default Logo;
