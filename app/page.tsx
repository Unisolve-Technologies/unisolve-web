import type { Metadata } from "next";
import ContactSection from "@/components/app_compnt/ContactSection";
import BusinessEverywere from "@/pages/landing_page/businessEverywere";
import Hero from "@/pages/landing_page/hero";
import SolutionsTailored from "@/pages/landing_page/solutionstailored";

export const metadata: Metadata = {
  title: "Unisolve Technologies | Best IT Solutions in Kerala",
  description:
    "Unisolve Technologies provides cutting-edge IT solutions including AI automation, web development, mobile apps, and cybersecurity services in Kerala and globally.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessEverywere />
      <SolutionsTailored />
      <ContactSection />
    </>
  );
}
