"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: "home", label: "Home", href: "/" },
  { id: "avatar", label: "Avatar", href: "/avatar" },
  { id: "outfits", label: "Outfits", href: "/outfits" },
  { id: "tryon", label: "Try-On", href: "/tryon" }
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-onyx/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-sm">
            VT
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-ash">Virtual Thread</p>
            <p className="text-xs text-ash">Digital Try-On Studio</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-sm uppercase tracking-[0.2em] transition ${
                pathname === link.href ? "text-snow" : "text-ash"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/avatar"
          className="px-4 py-2 rounded-full bg-snow text-onyx text-xs font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
        >
          Start
        </Link>
      </div>
    </nav>
  );
};
