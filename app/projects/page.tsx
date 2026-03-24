import type { Metadata } from "next";
import ProjectsClient from "./_client";

export const metadata: Metadata = {
  title: "Projects | Unisolve Technologies",
  description:
    "Explore the projects and case studies from Unisolve Technologies. Our portfolio showcase is coming soon.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
