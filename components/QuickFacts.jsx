import { PhoneIcon } from "./icons";

const FACTS = [
  { label: "Price", value: "1899 AED/Month*" },
  { label: "Communities", value: "Top Communities" },
  { label: "Configurations", value: "Studio, 1 & 2 BR" },
  { label: "Status", value: "Ready & Off-Plan" },
  { label: "RERA No.", value: "RERA Registered" },
];

export default function QuickFacts() {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-5 py-6 sm:px-8">
        <dl className="flex flex-1 flex-wrap gap-x-8 gap-y-4">
          {FACTS.map((f, i) => (
            <div key={f.label} className={i > 0 ? "border-l border-white/10 pl-8" : ""}>
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-gold">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm font-bold text-white sm:text-base">{f.value}</dd>
            </div>
          ))}
        </dl>
        <a href="#contact" className="btn-gold shrink-0 !px-6 !py-3 text-xs sm:text-sm">
          <PhoneIcon />
          Get Instant Callback
        </a>
      </div>
    </section>
  );
}
