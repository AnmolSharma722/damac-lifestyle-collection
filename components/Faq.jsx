"use client";

import { useState } from "react";
import { ChevronIcon } from "./icons";

const QUESTIONS = [
  {
    q: "What types of properties can I buy here?",
    a: "You can buy studio, 1 bedroom and 2 bedroom apartments across Dubai's top master communities, available as ready-to-move or off-plan units.",
  },
  {
    q: "What is the starting price to buy a property?",
    a: "Prices start from 1899 AED/Month* with flexible payment plans. Contact our team for exact unit-wise pricing based on community and configuration.",
  },
  {
    q: "Which Dubai communities can I buy in? ",
    a: "We currently have studio, 1 and 2 bedroom apartments available across DAMAC Lagoons, DAMAC Hills, DAMAC Hills 2, and DAMAC Riverside — each offering premium amenities, flexible payment plans and strong investment potential.",
  },
  {
    q: "What payment plans are available?",
    a: "We offer flexible payment plans including 50/50 and 60/40 options, so you can buy now and pay in structured installments through handover.",
  },
  {
    q: "Is a DLD waiver available on purchase?",
    a: "Yes, select units come with a 100% Dubai Land Department (DLD) waiver, reducing your upfront cost when you buy. Ask our team which units currently qualify.",
  },
  {
    q: "Is buying property in Dubai a good investment for NRIs and international buyers?",
    a: "Yes. Dubai allows 100% foreign ownership in designated freehold areas, has no annual property tax, and offers strong rental yields — making it a popular buy for NRI and international investors.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/45">FAQs</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-[2.75rem]">
            Find answers to your most frequently asked questions here.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-black/60">
            Explore a detailed FAQ section covering The Lifestyle Collection, available
            communities, payment plans, pricing and investment opportunities for NRIs and
            international buyers.
          </p>
          <a href="#contact" className="btn-outline-maroon mt-6">
            View all questions →
          </a>
        </div>

        <div className="divide-y divide-black/10">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`font-semibold ${isOpen ? "text-brand-maroon" : "text-brand-ink"}`}
                  >
                    {i + 1}. {item.q}
                  </span>
                  <ChevronIcon
                    className={`shrink-0 text-black/40 transition-transform ${
                      isOpen ? "-rotate-180 text-brand-maroon" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-[15px] leading-relaxed text-black/60">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
