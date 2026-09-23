export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand font-display text-lg font-semibold text-white">
        SNR
      </div>
      <div className="leading-tight">
        <p
          className={`font-display text-[13px] font-semibold tracking-wide ${
            dark ? "text-white" : "text-brand-ink"
          }`}
        >
          SAND AND ROCK
          <br />
          REAL ESTATE
        </p>
        <p
          className={`mt-0.5 text-[9px] uppercase tracking-[0.12em] ${
            dark ? "text-white/50" : "text-black/45"
          }`}
        >
          Expert Solutions For Every Square Feet
        </p>
      </div>
    </div>
  );
}
