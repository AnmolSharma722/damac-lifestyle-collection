import LeadForm from "./LeadForm";

const POINTS = [
  { title: "Maximum Value", desc: " Premium Dubai property opportunities" },
  { title: "100+ Properties", desc: "Handpicked buy-ready listings" },
  { title: "Expert Agents", desc: "Experienced property advisors" },
  { title: "24/7 Support", desc: "Always here when you need us" },
];

export default function ConsultationCTA({ id }) {
  return (
    <section id={id} className="section-pad scroll-mt-24">
      <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
            Free Consultation
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-brand-ink">Book a Free</span>
            <br />
            <span className="text-brand">Consultation Today</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-black/60">
            Our expert agents are ready to help you explore Dubai's best communities and find the right studio, 1 or 2 bedroom apartment for your budget and investment goals.
          </p>
          <div className="mt-5 h-[3px] w-14 bg-brand" />

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                <div>
                  <dt className="font-bold text-brand-ink">{p.title}</dt>
                  <dd className="mt-0.5 text-sm text-black/55">{p.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <LeadForm heading="Inquire Now" />
      </div>
    </section>
  );
}
