import { BuildingIcon, BagIcon, TrainIcon, PlaneIcon } from "./icons";

const DISTANCES = [
  { time: "10 Minutes -", place: "Downtown Dubai", icon: BuildingIcon },
  { time: "15 Minutes -", place: "City Walk & Jumeirah", icon: BagIcon },
  { time: "18 Minutes -", place: "Dubai Marina & JBR", icon: TrainIcon },
  { time: "20 Minutes -", place: "Al Maktoum International Airport", icon: PlaneIcon },
  { time: "25 Minutes -", place: "Dubai International Airport", icon: BuildingIcon },
];

export default function LocationAdvantage() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
          Location Advantage
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative">
              <iframe
                title="Community location map"
                src="https://maps.google.com/maps?q=Dubai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=Dubai"
                target="_blank"
                rel="noreferrer"
                className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand shadow"
              >
                Open in Maps ↗
              </a>
            </div>
            <div className="flex items-center justify-between bg-white px-5 py-4">
              <p className="text-sm font-medium text-brand-ink">DAMAC Lagoons, Golf City, Dubai</p>
              <a
                href="https://maps.google.com/?q=Dubai"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-brand"
              >
                Open Map ↗
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-xl font-extrabold text-brand-ink">
              Multiple Prime Dubai Communities
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-black/60">
              Our buy-ready studios, 1 and 2 bedroom apartments are located across Dubai&apos;s most desirable communities, offering convenient access to leisure, retail, business destinations and major city attractions.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {DISTANCES.map((d) => (
                <div key={d.place} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                    <d.icon />
                  </span>
                  <div>
                    <p className="font-bold text-brand-ink">{d.time}</p>
                    <p className="text-sm text-black/55">{d.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
