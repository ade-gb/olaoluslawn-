"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { OutfitCard } from "../../components/OutfitCard";
import { PageShell, SectionHeader } from "../../components/ui";
import { useOutfits } from "../../lib/useOutfits";
import { useAppState } from "../../components/AppContext";

export default function OutfitsPage() {
  const router = useRouter();
  const { category, setCategory, selectedId, setSelectedId } = useAppState();
  const { items, loading, error } = useOutfits();

  useEffect(() => {
    if (!loading && items.length && !items.find((item) => item.id === selectedId)) {
      setSelectedId(items[0].id);
    }
  }, [loading, items, selectedId, setSelectedId]);

  const filtered = items.filter((item) => item.category === category);

  const handleTry = (id) => {
    setSelectedId(id);
    router.push("/tryon");
  };

  return (
    <PageShell>
      <div className="page-in space-y-12">
        <SectionHeader
          eyebrow="Outfit Selection"
          title="Choose your look"
          subtitle="Switch between categories and preview fits instantly."
        />

        <div className="flex flex-wrap gap-3">
          {["Streetwear", "Luxury"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 rounded-full text-sm border transition ${
                category === cat
                  ? "bg-snow text-onyx border-transparent"
                  : "border-white/20 text-ash"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {error && (
          <div className="glass rounded-2xl px-4 py-3 text-sm text-ash">{error}</div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-96 rounded-3xl bg-white/5 border border-white/10 animate-pulse"
                />
              ))
            : filtered.map((item) => (
                <OutfitCard
                  key={item.id}
                  item={item}
                  selected={selectedId === item.id}
                  onTry={() => handleTry(item.id)}
                />
              ))}
        </div>
      </div>
    </PageShell>
  );
}
