import type { Metadata } from "next";
import ServicesClient from "./_client";

export const metadata: Metadata = {
  title: "Services | Unisolve Technologies",
  description:
    "From AI automation and web development to mobile apps and cybersecurity — explore the full range of digital services offered by Unisolve Technologies.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
