"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+971", label: "UAE" },
  { code: "+91", label: "India" },
  { code: "+44", label: "UK" },
  { code: "+1", label: "USA/Canada" },
  { code: "+966", label: "KSA" },
  { code: "+974", label: "Qatar" },
  { code: "+965", label: "Kuwait" },
  { code: "+968", label: "Oman" },
  { code: "+973", label: "Bahrain" },
];

const PROPERTY_TYPES = ["Studio Apartment", "1 Bedroom", "2 Bedroom", "Townhouse/Villa"];
const BUDGETS = ["AED 700K - 1M", "AED 1M - 1.5M", "AED 1.5M - 2M", "AED 2M - 3M", "AED 3M+"];

export default function LeadForm({ id, heading }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to your CRM / lead endpoint.
    setTimeout(() => setStatus("submitted"), 600);
  }

  if (status === "submitted") {
    return (
      <div id={id} className="card-panel bg-brand-card p-7 text-center sm:p-9">
        <p className="text-lg font-semibold text-brand-ink">
          Thank you — we&apos;ve received your enquiry.
        </p>
        <p className="mt-1 text-sm text-black/60">
          One of our advisors will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="card-panel space-y-3 bg-brand-card p-7 sm:p-9">
      {heading && (
        <h3 className="mb-4 font-display text-2xl font-semibold text-brand-ink">{heading}</h3>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input required type="text" placeholder="Name*" className="field" />
        <input required type="email" placeholder="Email Id*" className="field" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select className="field pr-2" defaultValue="+971" aria-label="Country code">
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} ({c.label})
            </option>
          ))}
        </select>
        <input required type="tel" placeholder="Contact Number*" className="field" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select required className="field" defaultValue="">
          <option value="" disabled>
            Select Property Type*
          </option>
          {PROPERTY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select required className="field" defaultValue="">
          <option value="" disabled>
            Select Your Budget*
          </option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <textarea placeholder="Message*" rows={3} className="field resize-none" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
