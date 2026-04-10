export const makeMockImage = (label, accent) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 640'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${accent}' />
          <stop offset='100%' stop-color='#0f0f12' />
        </linearGradient>
      </defs>
      <rect width='480' height='640' rx='36' fill='url(#g)' />
      <rect x='30' y='40' width='420' height='560' rx='28' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.1)' />
      <text x='50%' y='52%' font-family='Manrope, sans-serif' font-size='28' fill='rgba(245,245,245,0.85)' text-anchor='middle'>${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const outfits = [
  {
    id: "st-1",
    name: "Orbit Utility Set",
    category: "Streetwear",
    image: makeMockImage("Orbit Utility Set", "#2b2b33"),
    price: "$180"
  },
  {
    id: "st-2",
    name: "Night Grid Hoodie",
    category: "Streetwear",
    image: makeMockImage("Night Grid Hoodie", "#1d1d26"),
    price: "$140"
  },
  {
    id: "st-3",
    name: "Mono Cargo Suit",
    category: "Streetwear",
    image: makeMockImage("Mono Cargo Suit", "#2f2f35"),
    price: "$210"
  },
  {
    id: "st-4",
    name: "Edge Runner Coat",
    category: "Streetwear",
    image: makeMockImage("Edge Runner Coat", "#222229"),
    price: "$260"
  },
  {
    id: "lx-1",
    name: "Aurelia Silk Set",
    category: "Luxury",
    image: makeMockImage("Aurelia Silk Set", "#3a3a45"),
    price: "$540"
  },
  {
    id: "lx-2",
    name: "Monarch Tailored",
    category: "Luxury",
    image: makeMockImage("Monarch Tailored", "#2b2b39"),
    price: "$720"
  },
  {
    id: "lx-3",
    name: "Velvet Noir",
    category: "Luxury",
    image: makeMockImage("Velvet Noir", "#32323f"),
    price: "$640"
  },
  {
    id: "lx-4",
    name: "Lumen Atelier",
    category: "Luxury",
    image: makeMockImage("Lumen Atelier", "#292933"),
    price: "$590"
  }
];

export const brands = ["Maison Sable", "Studio Noir", "Drift", "Lineage", "Aether", "Ivory Lab"];

export const steps = [
  {
    title: "Build your avatar",
    desc: "Upload a selfie or input measurements to generate a 3D body model."
  },
  {
    title: "Pick outfits",
    desc: "Browse curated drops from streetwear to luxury collections."
  },
  {
    title: "Preview in real time",
    desc: "Rotate, zoom, and simulate AR fit before you buy."
  }
];
