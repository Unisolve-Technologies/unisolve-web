import type { Metadata } from "next";
import CareersClient from "./_client";

export const metadata: Metadata = {
  title: "Careers | Unisolve Technologies",
  description:
    "Join our team of builders, designers, and dreamers. Explore open positions in mobile engineering, frontend, backend, and digital marketing at Unisolve Technologies.",
};

export default function CareersPage() {
  return <CareersClient />;
}
