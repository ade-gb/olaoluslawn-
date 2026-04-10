"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const RouteTransition = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const timer = setTimeout(() => setActive(false), 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-0.5 bg-snow/80 shadow-glow z-50 transition-all duration-500 ${
          active ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
      <div
        className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>
      </div>
    </>
  );
};
