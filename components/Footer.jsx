import Logo from "./Logo";
import { BuildingIcon, MailIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from "./icons";

const OFFICES = [
  {
    label: "Dubai Office",
    address: "306, HDS tower, cluster F, JLT, Dubai — UAE",
    href: "https://maps.google.com/?q=HDS+Tower+JLT+Dubai",
  },
  {
    label: "India Office",
    address:
      "147, 1st Floor, Orchid Business Park, Badshahpur Sohna Rd, near Subhash Chowk, Central Park II, Sector 48, Gurugram, Haryana 122018",
    href: "https://maps.google.com/?q=Orchid+Business+Park+Sohna+Road+Gurugram",
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <Logo dark />

          {OFFICES.map((o) => (
            <div key={o.label}>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                <BuildingIcon className="text-brand-gold" />
                {o.label}
              </p>
              <a
                href={o.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 block max-w-xs text-sm leading-relaxed text-white/60 hover:text-white"
              >
                {o.address}
              </a>
            </div>
          ))}

          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
              <MailIcon className="text-brand-gold" />
              Online Inquiry
            </p>
            <a href="#contact" className="mt-2.5 block text-sm font-semibold text-white hover:underline">
              Contact Us
            </a>
            <a
              href="mailto:info@sandandrockrealestate.com"
              className="mt-1 block text-sm text-white/60 hover:text-white"
            >
              info@sandandrockrealestate.com
            </a>

            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold hover:text-brand-ink"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Sand &amp; Rock Real Estate. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
