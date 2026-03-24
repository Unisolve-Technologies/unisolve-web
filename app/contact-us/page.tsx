import type { Metadata } from "next";
import ContactUsClient from "./_client";

export const metadata: Metadata = {
  title: "Contact Us | Unisolve Technologies",
  description:
    "Have a project in mind? Get in touch with the Unisolve Technologies team. We respond within 24 hours.",
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
