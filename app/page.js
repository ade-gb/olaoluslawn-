import Link from "next/link";
import { HeroVisual } from "../components/HeroVisual";
import { PageShell, Pill, SectionHeader } from "../components/ui";
import { brands, outfits, steps } from "../lib/data";

export default function HomePage() {
  return (
    <PageShell>
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center page-in">
        <div className="space-y-8">
          <Pill>Virtual Fashion Studio</Pill>
          <h1 className="text-4xl md:text-6xl font-display leading-tight">
            Try Fashion Before You Buy
          </h1>
          <p className="text-ash text-lg max-w-xl">
            Virtual Thread is a digital try-on experience that blends 3D avatars with AR-like
            interaction. Explore luxury and streetwear fits with instant realism.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/avatar"
              className="px-6 py-3 rounded-full bg-snow text-onyx font-semibold tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Start Try-On
            </Link>
            <Link
              href="/tryon"
              className="px-6 py-3 rounded-full border border-white/20 text-snow font-semibold tracking-wide transition duration-300 hover:border-white/60"
            >
              Watch Demo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="glass rounded-2xl p-4">
              <p className="text-3xl font-display">48k+</p>
              <p className="text-ash text-sm">Outfits simulated weekly</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-3xl font-display">96%</p>
              <p className="text-ash text-sm">Fit accuracy on first try</p>
            </div>
          </div>
        </div>
        <HeroVisual />
      </div>

      <div className="mt-20 space-y-14">
        <SectionHeader
          eyebrow="Featured Brands"
          title="Luxury and streetwear, curated"
          subtitle="A rotating edit of fashion houses and emerging studios optimized for digital fit."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="glass rounded-2xl px-5 py-6 text-center text-sm uppercase tracking-[0.2em] text-ash"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 space-y-14">
        <SectionHeader
          eyebrow="Trending"
          title="Outfits leading the feed"
          subtitle="Real-time demand forecasts and curated capsules blended into a single lookbook."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {outfits.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="glass rounded-3xl overflow-hidden border border-white/10"
            >
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-5 space-y-2">
                <p className="text-lg font-display">{item.name}</p>
                <p className="text-ash text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 space-y-14">
        <SectionHeader
          eyebrow="How It Works"
          title="Three steps to a perfect fit"
          subtitle="Built for speed, realism, and confidence before you commit."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="glass rounded-3xl p-6 space-y-4">
              <div className="text-sm uppercase tracking-[0.3em] text-ash">0{index + 1}</div>
              <h3 className="text-xl font-display">{step.title}</h3>
              <p className="text-ash text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
