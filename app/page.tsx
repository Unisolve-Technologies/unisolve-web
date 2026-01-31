import ContactSection from "@/components/app_compnt/ContactSection";
import Footer from "@/components/app_compnt/footer";
import BusinessEverywere from "@/pages/landing_page/businessEverywere";
import Hero from "@/pages/landing_page/hero";
import SolutionsTailored from "@/pages/landing_page/solutionstailored";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessEverywere />
      <SolutionsTailored />
      <ContactSection />
      <Footer />
    </>
  );
}
