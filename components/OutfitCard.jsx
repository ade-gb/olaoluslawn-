"use client";

import { GhostButton } from "./ui";

export const OutfitCard = ({ item, onTry, selected }) => (
  <div
    className={`glass rounded-3xl overflow-hidden border transition ${
      selected ? "border-white/60" : "border-white/10"
    }`}
  >
    <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
    <div className="p-5 space-y-2">
      <p className="text-lg font-display">{item.name}</p>
      <div className="flex items-center justify-between text-sm text-ash">
        <span>{item.category}</span>
        <span>{item.price}</span>
      </div>
      <GhostButton className="w-full mt-2" onClick={onTry}>
        Try On
      </GhostButton>
    </div>
  </div>
);
