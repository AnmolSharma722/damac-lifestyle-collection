import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "The DAMAC Lifestyle Collection | Sand and Rock Real Estate",
  description:
    "Explore The DAMAC Lifestyle Collection in Dubai — luxury residences, premium amenities and exceptional lifestyles across Dubai's most sought-after master communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-brand-cream text-brand-ink">{children}</body>
    </html>
  );
}
