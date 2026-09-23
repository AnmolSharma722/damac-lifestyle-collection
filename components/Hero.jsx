"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LeadForm from "./LeadForm";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    alt: "Dubai luxury waterfront residences",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    alt: "Golf course community living",
  },
  {
    src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1600&auto=format&fit=crop",
    alt: "Crystal lagoon residential community",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern residential tower architecture",
  },
];

const HIGHLIGHTS = [
  "Starting From 1899 AED/Month*",
  "Flexible 50/50 & 60/40 Plans",
  "Exclusive 100% DLD Waiver",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/55 to-brand-dark/20" />
        </div>
      ))}

      <button
        onClick={() => setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-2xl text-white/80 hover:text-white md:flex"
      >
        ❮
      </button>
      <button
        onClick={() => setActive((i) => (i + 1) % SLIDES.length)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-2xl text-white/80 hover:text-white md:flex"
      >
        ❯
      </button>

      <div className="relative z-10 mx-auto grid w-full max-w-content gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <h1 className="font-body text-4xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            BUY LUXURY PROPERTY IN
            <br /> DUBAI
          </h1>
          <p className="mt-4 font-display text-2xl italic text-brand-gold sm:text-3xl">
            Studios to 1 & 2-Bed Apartments
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            Buy a ready or off-plan studio, 1 or 2 bedroom apartment in Dubai&apos;s top communities, with premium amenities, prime locations and flexible payment plans — starting from 1899 AED/Month*.
          </p>

          <ul className="mt-6 space-y-2.5 text-[15px] font-semibold text-white sm:text-base">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                {h}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-gold mt-8">
            Get Prices &amp; Floor Plans
          </a>
        </div>

        {/* <div className="hidden lg:block">
          <LeadForm />
        </div> */}
        <div className="mt-4 lg:mt-0">
          <LeadForm />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-brand-gold" : "w-1.5 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
