"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageShell, Pill, SectionHeader, PrimaryButton, GhostButton } from "../../components/ui";
import { useOutfits } from "../../lib/useOutfits";
import { useAppState } from "../../components/AppContext";

export default function TryOnPage() {
  const { selectedId, setSelectedId, savedLook, setSavedLook } = useAppState();
  const { items, loading, error } = useOutfits();
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [showAr, setShowAr] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!loading && items.length && !items.find((item) => item.id === selectedId)) {
      setSelectedId(items[0].id);
    }
  }, [loading, items, selectedId, setSelectedId]);

  const outfitIndex = items.findIndex((item) => item.id === selectedId);
  const outfit = items[outfitIndex] || items[0];

  const handleNext = () => {
    if (!items.length) return;
    const nextIndex = (outfitIndex + 1) % items.length;
    setSelectedId(items[nextIndex].id);
  };

  const handlePrev = () => {
    if (!items.length) return;
    const prevIndex = (outfitIndex - 1 + items.length) % items.length;
    setSelectedId(items[prevIndex].id);
  };

  const handleSave = () => {
    setSavedLook((prev) => !prev);
    setToast(savedLook ? "Look removed" : "Look saved");
  };

  const handleBuy = () => {
    setToast("Checkout initiated");
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  if (loading && !items.length) {
    return (
      <PageShell>
        <div className="page-in space-y-10">
          <div className="glass rounded-3xl p-6 animate-pulse h-[520px]" />
          <div className="glass rounded-3xl p-6 animate-pulse h-48" />
        </div>
      </PageShell>
    );
  }

  if (!outfit) {
    return (
      <PageShell>
        <div className="page-in glass rounded-3xl p-6 text-ash">
          No outfits available yet.
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="page-in space-y-12">
        <SectionHeader
          eyebrow="Virtual Try-On"
          title="Real-time fit preview"
          subtitle="Rotate, zoom, and adjust outfits with AI fit simulation."
        />

        {error && (
          <div className="glass rounded-2xl px-4 py-3 text-sm text-ash">{error}</div>
        )}

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="glass rounded-[2.5rem] p-6 relative overflow-hidden">
            <div className="noise"></div>
            <div className="flex items-center justify-between mb-4">
              <Pill>AI Fit Simulation Active</Pill>
              <span className="text-xs uppercase tracking-[0.3em] text-ash">Live Preview</span>
            </div>
            <div className="relative flex items-center justify-center h-[520px]">
              <div
                className="relative w-full max-w-sm h-full rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/0 overflow-hidden transition-transform duration-500"
                style={{
                  transform: `perspective(1200px) rotateY(${rotation * 12}deg) scale(${zoom})`
                }}
              >
                <div className="noise"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-64 rounded-[3rem] border border-white/25 bg-white/5"></div>
                </div>
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-ash">Rotate</span>
              <div className="flex gap-2">
                <GhostButton className="px-4" onClick={() => setRotation(-1)}>
                  Left
                </GhostButton>
                <GhostButton className="px-4" onClick={() => setRotation(0)}>
                  Center
                </GhostButton>
                <GhostButton className="px-4" onClick={() => setRotation(1)}>
                  Right
                </GhostButton>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-ash">Zoom</span>
              <input
                type="range"
                min="0.9"
                max="1.2"
                step="0.01"
                value={zoom}
                onChange={(event) => setZoom(parseFloat(event.target.value))}
                className="range w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-ash text-xs uppercase tracking-[0.3em]">Selected Outfit</p>
                  <h3 className="text-2xl font-display">{outfit.name}</h3>
                </div>
                <Pill>{outfit.category}</Pill>
              </div>
              <p className="text-ash">
                Fabric drape, stretch, and silhouette are simulated in real time. Fine-tune the
                fit using rotation and zoom controls.
              </p>
              <div className="flex items-center justify-between text-sm text-ash">
                <span className="pulse-dot">Real-time Fit Preview</span>
                <span>{outfit.price}</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <GhostButton onClick={handlePrev}>Previous</GhostButton>
                <GhostButton onClick={handleNext}>Next</GhostButton>
                <Link
                  href="/outfits"
                  className="px-6 py-3 rounded-full border border-white/20 text-snow font-semibold tracking-wide transition duration-300 hover:border-white/60"
                >
                  Change Outfit
                </Link>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 space-y-4">
              <p className="text-ash text-xs uppercase tracking-[0.3em]">Actions</p>
              <div className="grid gap-3">
                <PrimaryButton onClick={() => setShowAr(true)}>Try in AR</PrimaryButton>
                <GhostButton onClick={handleSave}>{savedLook ? "Look Saved" : "Save Look"}</GhostButton>
                <GhostButton onClick={handleBuy}>Buy Now</GhostButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAr && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="glass rounded-3xl p-6 max-w-md w-full relative overflow-hidden">
            <div className="noise"></div>
            <button
              type="button"
              className="absolute top-4 right-4 text-ash"
              onClick={() => setShowAr(false)}
            >
              Close
            </button>
            <h3 className="text-2xl font-display">AR Try-On</h3>
            <p className="text-ash text-sm mt-2">
              Mock AR environment - scanning room and anchoring avatar.
            </p>
            <div className="mt-6 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 relative overflow-hidden">
              <div className="scan-line"></div>
            </div>
            <div className="mt-4 text-sm text-ash">Move your device to capture depth.</div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-snow text-onyx px-4 py-3 rounded-full text-sm shadow-glow">
          {toast}
        </div>
      )}
    </PageShell>
  );
}
