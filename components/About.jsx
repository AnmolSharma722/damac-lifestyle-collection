import Logo from "@/components/Logo";

const STATS = [
  { value: "375+", label: "Buyer Inquiries Closed" },
  { value: "150+", label: "Units Currently Available" },
  { value: "4.8★", label: "Average Buyer Rating" },
  { value: "9+", label: "Nationalities Served" },
];

export default function About() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="card-panel bg-white p-7 sm:p-10 lg:p-12">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
                Welcome To The Lifestyle Collection
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
                Buy With Confidence in Dubai <br/> 

                Where Smart Buyers Find Their Home

              </h2>
            </div>

            <div>
              <p className="text-[15px] leading-relaxed text-black/65">
                Explore a curated selection of studio, 1 and 2 bedroom apartments across Dubai's most trusted master communities. From ready homes to smart off-plan launches, flexible payment plans and prime connectivity, we help you buy the right property with complete confidence and expert guidance at every step.
              </p>
              <a href="#contact" className="btn-outline-maroon mt-6">
                Why Buy With Us →
              </a>
            </div>

            <div className="rounded-2xl bg-brand-cream p-7 sm:p-9">
              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl font-bold text-brand-ink sm:text-[2.75rem]">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-black/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full  text-xs font-bold text-white">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand font-display text-lg font-semibold text-white">
                    SNR
                  </div>
                </span>
                {/* <span className="font-display text-2xl font-semibold text-brand-ink">DAMAC</span> */}
              </div>
              <div className="relative mt-2">
                <p className="font-display text-7xl font-bold leading-none text-brand-gold sm:text-8xl">
                  3+ Offices
                </p>
                {/* <span className="absolute -right-4 top-0 -rotate-12 rounded bg-brand-ink px-2 py-0.5 text-[10px] font-semibold text-white">
                  Since 1982
                </span> */}
              </div>
              <p className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-maroon">
                Dubai, Georgia & India Presence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
