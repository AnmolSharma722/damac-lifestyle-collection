import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import About from "@/components/About";
import BuyProperty from "@/components/BuyProperty";
import PropertyGrid from "@/components/PropertyGrid";
import Gallery from "@/components/Gallery";
import ConsultationCTA from "@/components/ConsultationCTA";
import LocationAdvantage from "@/components/LocationAdvantage";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Buy Studio, 1 & 2 Bedroom Apartments in Dubai | Sand & Rock Real Estate",
  description:
    "Buy studio, 1 & 2 bedroom apartments in Dubai's top communities. Flexible payment plans, 100% DLD waiver & expert guidance. Get prices now.",
  keywords: [
    "buy apartment in dubai",
    "buy property in dubai",
    "purchase property in dubai",
    "buy 1 bedroom apartment dubai",
    "buy 2 bedroom apartment dubai",
    "buy studio apartment dubai",
    "buy off plan property in dubai",
    "buy luxury apartment dubai",
  ],
  openGraph: {
    title: "Buy Apartments in Dubai — Studios, 1 & 2 Bedroom | Sand & Rock Real Estate",
    description:
      "Explore studio, 1 & 2 bedroom apartments to buy in Dubai's best communities. Ready & off-plan options with flexible payment plans.",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <QuickFacts />
      <About />
      <BuyProperty />
      <PropertyGrid />
      <Gallery />
      <ConsultationCTA />
      <LocationAdvantage />
      <Faq />
      <ConsultationCTA id="contact" />
      <Footer />
    </main>
  );
}
