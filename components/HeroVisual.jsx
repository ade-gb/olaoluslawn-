"use client";

import { Pill } from "./ui";

export const HeroVisual = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/10 rounded-[2.5rem] blur-2xl" />
    <div className="relative glass rounded-[2.5rem] p-8 overflow-hidden shadow-glass float">
      <div className="noise"></div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-ash text-xs uppercase tracking-[0.3em]">AI Fit</p>
          <h3 className="text-2xl font-display">Virtual Thread</h3>
        </div>
        <Pill>3D</Pill>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 h-44"></div>
        <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/0 h-44 border border-white/10"></div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-ash">
        <span>Real-time drape mapping</span>
        <span>AR ready</span>
      </div>
    </div>
  </div>
);
