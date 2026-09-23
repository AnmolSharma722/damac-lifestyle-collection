import Logo from "./Logo";
import { MailIcon } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-t-[3px] border-brand-dark bg-[#F7F6F2] shadow-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8">
        <a href="/" aria-label="Sand and Rock Real Estate — home">
          <Logo />
        </a>
        <a href="#contact" className="btn-dark">
          <MailIcon />
          Contact Us
        </a>
      </div>
    </header>
  );
}
