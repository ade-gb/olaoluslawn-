"use client";

export const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`px-6 py-3 rounded-full bg-snow text-onyx font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-glow ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const GhostButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`px-6 py-3 rounded-full border border-white/20 text-snow font-semibold tracking-wide transition duration-300 hover:border-white/60 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="space-y-3">
    <p className="text-ash uppercase text-xs tracking-[0.3em]">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-display">{title}</h2>
    <p className="text-ash max-w-2xl">{subtitle}</p>
  </div>
);

export const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest border border-white/20 text-ash">
    {children}
  </span>
);

export const PageShell = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">{children}</div>
);
