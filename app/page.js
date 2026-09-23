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
