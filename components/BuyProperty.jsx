import Image from "next/image";
import { DocIcon } from "./icons";

const COMMUNITIES = ["DAMAC Lagoons", "DAMAC Hills", "D2 DAMAC Hills 2", "DAMAC Riverside"];

export default function BuyProperty() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="card-panel grid gap-8 bg-brand-card p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <h2 className="font-body text-2xl font-extrabold uppercase tracking-tight text-brand-ink sm:text-3xl">
              BUY LUXURY PROPERTY IN DUBAI
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/65">
              Sand & Rock Real Estate helps you buy verified, RERA-approved apartments from Dubai's most trusted developers, backed by expert local guidance.  
            </p>
            <a href="#contact" className="btn-gold mt-6">
              <DocIcon />
              Get Property Details
            </a>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop"
              alt="Dubai skyline at sunset"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-around gap-2 rounded-xl bg-white/95 px-3 py-3 text-[11px] font-bold text-brand-ink sm:text-xs">
              {COMMUNITIES.map((c) => (
                <span key={c} className="text-center leading-tight">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
