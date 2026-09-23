// Small, self-contained inline SVG icon set — no external icon package required.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4.5-2 1.5a11.5 11.5 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 1-1 2-2 2-8 0-14-6-14-14 0-1 1-2 2-2Z" />
    </svg>
  );
}

export function DocIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12.5h5M9.5 15.5h5" />
    </svg>
  );
}

export function BedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 18v2M21 18v2" />
      <path d="M3 13V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M11 10h6a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 19a4.7 4.7 0 0 1 5-4.4" />
    </svg>
  );
}

export function RulerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(0 12 12)" />
      <path d="M7 8v3M11 8v3M15 8v3" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export function ZoomIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} strokeWidth={2} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
    </svg>
  );
}

export function BagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M6 8h12l1 12H5z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function TrainIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="5" y="4" width="14" height="13" rx="4" />
      <path d="M5 13h14M9 17l-2 3M15 17l2 3" />
      <circle cx="9" cy="10" r="0.5" fill="currentColor" />
      <circle cx="15" cy="10" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function PlaneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M3 13.5 21 7l-6.5 8.2L12 21l-1.7-5.3L5 13.5Z" />
    </svg>
  );
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="9" r="1.1" />
      <rect x="7" y="11" width="2" height="6" />
      <path d="M12.5 11h1.9v1c.5-.8 1.3-1.2 2.3-1.2 1.8 0 2.8 1.1 2.8 3.2V17h-2v-2.6c0-1-.4-1.6-1.3-1.6-.9 0-1.5.6-1.5 1.6V17h-2v-6Z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.5 9.5h1.5V7h-1.7c-1.6 0-2.5 1-2.5 2.6V11H9v2.3h1.8V17h2.2v-3.7h1.8l.3-2.3h-2.1V9.9c0-.3.1-.4.4-.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
