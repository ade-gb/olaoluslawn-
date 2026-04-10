"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell, Pill, PrimaryButton, GhostButton, SectionHeader } from "../../components/ui";
import { useAppState } from "../../components/AppContext";

const statusSteps = [
  "Scanning body proportions...",
  "Generating 3D avatar...",
  "Calibrating fabric physics..."
];

export default function AvatarPage() {
  const router = useRouter();
  const { avatarReady, setAvatarReady } = useAppState();
  const [mode, setMode] = useState("selfie");
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusText, setStatusText] = useState(statusSteps[0]);

  useEffect(() => {
    if (!isGenerating) return;

    setStatusText(statusSteps[0]);
    const timers = statusSteps.map((step, index) =>
      setTimeout(() => setStatusText(step), 1000 * (index + 1))
    );
    const doneTimer = setTimeout(() => {
      setIsGenerating(false);
      setAvatarReady(true);
    }, 1000 * statusSteps.length + 800);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(doneTimer);
    };
  }, [isGenerating, setAvatarReady]);

  const startGenerate = () => {
    if (isGenerating) return;
    setAvatarReady(false);
    setIsGenerating(true);
  };

  return (
    <PageShell>
      <div className="page-in space-y-12">
        <SectionHeader
          eyebrow="Avatar Creation"
          title="Create your 3D fit twin"
          subtitle="Upload a selfie or input measurements to generate a high-fidelity avatar."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="glass rounded-3xl p-6 space-y-6">
            <div className="flex gap-3">
              <button
                type="button"
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  mode === "selfie"
                    ? "bg-snow text-onyx border-transparent"
                    : "border-white/20 text-ash"
                }`}
                onClick={() => setMode("selfie")}
              >
                Upload Selfie
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  mode === "measurements"
                    ? "bg-snow text-onyx border-transparent"
                    : "border-white/20 text-ash"
                }`}
                onClick={() => setMode("measurements")}
              >
                Enter Measurements
              </button>
            </div>

            {mode === "selfie" ? (
              <div className="space-y-4">
                <label className="text-sm text-ash">Upload selfie</label>
                <input type="file" className="input-base w-full rounded-2xl p-4" />
                <div className="text-xs text-ash">
                  Tip: Use front light and a neutral background for best results.
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-ash">Height</label>
                  <input placeholder="180 cm" className="input-base w-full rounded-2xl p-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-ash">Weight</label>
                  <input placeholder="72 kg" className="input-base w-full rounded-2xl p-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-ash">Chest</label>
                  <input placeholder="96 cm" className="input-base w-full rounded-2xl p-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-ash">Waist</label>
                  <input placeholder="78 cm" className="input-base w-full rounded-2xl p-4" />
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <PrimaryButton onClick={startGenerate} disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Generate Avatar"}
              </PrimaryButton>
              {avatarReady && (
                <GhostButton onClick={() => router.push("/outfits")}>
                  Continue to Outfits
                </GhostButton>
              )}
            </div>

            {isGenerating && (
              <div className="mt-4 glass rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-snow animate-pulse"></div>
                  <p className="text-sm text-ash">{statusText}</p>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-white/50 animate-pulse" />
                </div>
              </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display">Avatar Preview</h3>
              <Pill>3D Render</Pill>
            </div>
            <div className="relative rounded-3xl h-96 bg-gradient-to-br from-white/10 to-white/0 border border-white/10 overflow-hidden">
              <div className="noise"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-64 rounded-[3rem] border border-white/20 bg-white/5"></div>
              </div>
              {isGenerating && <div className="scan-line" />}
            </div>
            <div className="text-sm text-ash">
              {avatarReady
                ? "Avatar ready. Fit calibration synced."
                : "Preview updates as your avatar is generated."}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
