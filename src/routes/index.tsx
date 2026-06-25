import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import denimImg from "@/assets/product-denim.jpg";
import chainImg from "@/assets/product-chain.jpg";
import cultureImg from "@/assets/culture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tagbox — Authentic Garments for the Digital Underground" },
      {
        name: "description",
        content:
          "Tagbox is a fashion label engineering raw, sensual, future-forward garments. Edition 001 / 24 — designed to be felt.",
      },
      { property: "og:title", content: "Tagbox — Edition 001 / 24" },
      {
        property: "og:description",
        content: "Authentic garments for the digital underground. Designed to be felt.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  { name: "Onyx Tech Hoodie", material: "Recycled Heavy Fleece", price: "$185", img: hoodieImg },
  { name: "Fragment Denim", material: "Distressed Slim Fit", price: "$240", img: denimImg },
  { name: "Cyber Link Chain", material: "316L Stainless Steel", price: "$95", img: chainImg },
];

const NAV = ["Shop", "Archive", "Culture", "Cart(0)"];

function Index() {
  return (
    <div className="bg-onyx text-platinum font-sans min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference flex justify-between items-center px-6 py-8 md:px-12">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tighter uppercase text-platinum">
          Tagbox
        </a>
        <div className="hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-[0.2em] text-platinum">
          {NAV.map((item) => (
            <a key={item} href="#" className="hover:text-acid transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden text-[10px] uppercase tracking-[0.2em] text-platinum">Menu</div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Tagbox SS24 campaign — model in oversized metallic silver jacket"
            width={1920}
            height={1088}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-transparent to-onyx" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-acid animate-reveal-up [animation-delay:100ms]">
            Edition 001 / 24 — Now Live
          </p>
          <h1 className="font-display font-extrabold text-[18vw] md:text-[15vw] leading-[0.8] uppercase tracking-tighter overflow-hidden">
            <span className="block animate-reveal-clip">Tag</span>
            <span className="block text-acid animate-reveal-clip [animation-delay:200ms]">Box</span>
          </h1>
          <p className="mt-10 max-w-xs mx-auto text-xs uppercase tracking-[0.3em] font-light leading-relaxed animate-reveal-up [animation-delay:700ms]">
            Authentic garments for the digital underground. Designed to be felt.
          </p>
        </div>

        {/* Corner annotations */}
        <div className="absolute bottom-8 left-6 md:left-12 z-10 text-[10px] uppercase tracking-[0.2em] text-platinum/60 font-mono flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-acid animate-pulse-dot" />
          Live · Berlin 03:42
        </div>
        <div className="absolute bottom-8 right-6 md:right-12 z-10 text-[10px] uppercase tracking-[0.2em] text-platinum/60 text-right leading-relaxed">
          Lot N°<br />0024-SS
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-20 bg-gradient-to-b from-acid to-transparent" />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-white/5 bg-onyx-soft overflow-hidden py-5">
        <div className="flex whitespace-nowrap animate-marquee gap-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center text-sm uppercase tracking-[0.3em] font-light text-platinum/80">
              <span>Raw Tension</span>
              <span className="text-acid">◆</span>
              <span>Sealed Edges</span>
              <span className="text-acid">◆</span>
              <span>Future Forward</span>
              <span className="text-acid">◆</span>
              <span>Built to be Worn In</span>
              <span className="text-acid">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Drop */}
      <section className="px-6 py-24 md:px-12 md:py-32 bg-onyx">
        <div className="flex justify-between items-end mb-16 border-b border-platinum/10 pb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-acid mb-3">/01 — Current Drop</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
              The Underground
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-platinum/40">
            Edition 001 / 24
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {PRODUCTS.map((p) => (
            <a key={p.name} href="#" className="group relative block">
              <div className="aspect-[3/4] overflow-hidden bg-onyx-soft border border-white/5 relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1056}
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 text-[9px] font-mono uppercase tracking-widest text-acid opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  → Acquire
                </span>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm uppercase font-medium tracking-wide group-hover:text-acid transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-platinum/50 uppercase mt-1 tracking-widest">
                    {p.material}
                  </p>
                </div>
                <span className="text-sm font-display font-bold">{p.price}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Editorial / Manifesto */}
      <section className="py-32 md:py-40 bg-acid text-onyx grain relative overflow-hidden">
        <div className="px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-8 font-medium">
              /02 — Manifesto
            </p>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tighter mb-10">
              Raw.<br />
              Sexy.<br />
              Unfiltered.
            </h2>
            <p className="max-w-md text-base md:text-lg leading-relaxed mb-10 font-light">
              Tagbox is a movement toward hyper-authentic self-expression. We strip away the
              noise of fast fashion to reveal the core of individual style — garments built
              to be worn into history.
            </p>
            <button
              type="button"
              className="group px-10 py-5 bg-onyx text-platinum text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-onyx-soft transition-all duration-300 flex items-center gap-4"
            >
              <span>Discover the manifesto</span>
              <span className="text-acid transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-square bg-onyx/10 rotate-2 border-2 border-onyx overflow-hidden hover:rotate-0 transition-transform duration-700">
              <img
                src={cultureImg}
                alt="Tagbox culture — underground community"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drop notification / Newsletter */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-onyx border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-acid mb-6">
            /03 — Next Drop · 06.28 · 00:00 UTC
          </p>
          <h2 className="font-display font-extrabold text-5xl md:text-8xl uppercase tracking-tighter mb-12 leading-[0.9]">
            Get on<br />
            <span className="text-acid italic">the list.</span>
          </h2>
          <p className="text-sm md:text-base text-platinum/60 mb-12 max-w-md mx-auto font-light leading-relaxed">
            Drop notifications, archive access, and private previews. No noise.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row items-stretch max-w-xl mx-auto border-b border-platinum/20 pb-2 gap-4 md:gap-0"
          >
            <input
              type="email"
              required
              placeholder="EMAIL@DOMAIN.COM"
              className="flex-1 bg-transparent text-platinum text-sm uppercase tracking-[0.2em] py-3 px-1 placeholder:text-platinum/30 outline-none focus:border-acid"
            />
            <button
              type="submit"
              className="text-acid text-[11px] uppercase tracking-[0.3em] font-medium hover:text-platinum transition-colors px-4 py-3 self-end md:self-auto"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-onyx">
        <div className="px-6 md:px-12 py-24 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-extrabold text-3xl uppercase tracking-tighter mb-4">
              Tagbox
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-platinum/40 leading-relaxed">
              Engineered for the<br />digital underground.
            </p>
          </div>
          {[
            { title: "Shop", items: ["Outerwear", "Denim", "Knitwear", "Accessories"] },
            { title: "Studio", items: ["About", "Lookbook", "Press", "Stockists"] },
            { title: "Connect", items: ["Instagram", "TikTok", "Twitter", "Discord"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-platinum/40 mb-6">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-platinum hover:text-acid transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oversized brand mark */}
        <div className="overflow-hidden border-t border-white/5">
          <div className="font-display font-extrabold text-[28vw] leading-[0.8] uppercase tracking-tighter text-center text-acid/10 select-none -mb-[5vw] pt-4">
            TAGBOX
          </div>
        </div>

        <div className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-platinum/40 font-medium">
          <div>© 2024 TAGBOX_LABS</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-acid">Privacy</a>
            <a href="#" className="hover:text-acid">Terms</a>
            <a href="#" className="hover:text-acid">Shipping</a>
          </div>
          <div>Designed for the void</div>
        </div>
      </footer>
    </div>
  );
}
