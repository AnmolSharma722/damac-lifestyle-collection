import Image from "next/image";
import { CameraIcon, ZoomIcon } from "./icons";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    alt: "Resort-style pool at dusk with palm trees and residential tower",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    alt: "Beach lagoon with sun loungers",
    zoom: true,
  },
  {
    src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
    alt: "Waterway walking bridge through green landscaping",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    alt: "Evening view of community with skyline in background",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Aerial view of wave pool and beach club",
  },
];

export default function Gallery() {
  const [big, ...rest] = PHOTOS;
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
          Project Gallery
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:w-1/2">
            <Image
              src={big.src}
              alt={big.alt}
              fill
              sizes="(min-width:640px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-lg">
              <CameraIcon />
              See All Photos (7)
            </span>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 sm:w-1/2">
            {rest.map((p) => (
              <div key={p.alt} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width:640px) 25vw, 50vw"
                  className="object-cover"
                />
                {p.zoom && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white">
                      <ZoomIcon />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
