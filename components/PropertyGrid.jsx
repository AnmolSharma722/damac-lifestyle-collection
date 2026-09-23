import Image from "next/image";
import { BedIcon, UsersIcon, RulerIcon, PinIcon } from "./icons";

const UNITS = [
  {
    title: "1 Bedroom Apartment – Great Investment",
    price: "From 1,899 AED/Mo*",
    beds: "1 BR",
    occupancy: "1-2",
    size: "700 Sq. Ft*",
    type: "Apartment",
    location: "Dubai, UAE",
    goldTitle: false,
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "2 Bedroom Apartment – Ideal for Families",
    price: "From 1899 AED/Month",
    beds: "2 BR",
    occupancy: "2-3",
    size: "1,100 Sq. Ft*",
    type: "Apartment",
    location: "Dubai, UAE",
    goldTitle: false,
    img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Studios & Villas – Premium Living",
    price: "From 1899 AED/Month",
    beds: "Studio / 3-4 BR",
    occupancy: "1-4",
    size: "Various Sizes",
    type: "Townhouse/Villa & Studios",
    location: "Dubai, UAE",
    goldTitle: true,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PropertyGrid() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-body text-2xl font-extrabold text-brand-ink sm:text-3xl">
          Explore The Lifestyle Collection
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {UNITS.map((u) => (
            <article key={u.title}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={u.img}
                  alt={u.title}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute -bottom-3 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-ink shadow-lg mb-7">
                  {u.price}
                </span>
              </div>
              <div className="pt-6">
                <h3
                  className={`text-base font-bold leading-snug sm:text-lg ${
                    u.goldTitle ? "text-brand-gold" : "text-brand-ink"
                  }`}
                >
                  {u.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-black/55">
                  <span className="flex items-center gap-1.5">
                    <BedIcon /> {u.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon /> {u.occupancy}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RulerIcon /> {u.size}
                  </span>
                </div>
                <p className="mt-3 text-[13px] text-black/50">Property Type : {u.type}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] text-brand">
                  <PinIcon /> {u.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
