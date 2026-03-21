// Define the valid icon names as a union type
export type IconName =
  | "Zap"
  | "Bot"
  | "MessageSquare"
  | "Workflow"
  | "TrendingUp"
  | "Globe"
  | "Smartphone"
  | "Code"
  | "Wrench"
  | "FileText";

// Define the service interface
export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export const businessServices: Service[] = [
  {
    title: "End-to-End Process Automation",
    description:
      "Eliminate manual work by automating repetitive processes using AI and intelligent workflows. From approvals and data entry to reporting and system sync.",
    icon: "Zap",
  },
  {
    title: "AI Agents for Customer Support",
    description:
      "AI-powered agents that handle customer queries, internal requests, and task execution 24/7, integrating seamlessly with your existing systems.",
    icon: "Bot",
  },
  {
    title: "WhatsApp & Telegram Automation",
    description:
      "Automated messaging for customer support, order updates, lead handling, and HR communication—fast, consistent, and reliable at scale.",
    icon: "MessageSquare",
  },
  {
    title: "Custom Workflow & API Integrations",
    description:
      "Connect your apps, CRMs, databases, and third-party APIs with bespoke workflows—from simple automations to complex multi-step logic.",
    icon: "Workflow",
  },
  {
    title: "AI-Driven Lead Generation & Sales",
    description:
      "Automatically capture, qualify, and route leads using AI so your sales team focuses on high-quality prospects and closes deals faster.",
    icon: "TrendingUp",
  },
  {
    title: "Modern Web Development",
    description:
      "Fast, responsive, and scalable websites and web apps—from business sites to custom dashboards and SaaS platforms built for performance and UX.",
    icon: "Globe",
  },
];

export const studentServices: Service[] = [
  {
    title: "College Project Development",
    description:
      "Full-stack projects built to your college requirements, with clear explanations so you can present and defend your work confidently at evaluation.",
    icon: "Code",
  },
  {
    title: "Final Year & Mini Project Assistance",
    description:
      "Technical help for final-year and mini projects—feature implementation, bug fixing, and deployment support within university guidelines.",
    icon: "FileText",
  },
  {
    title: "n8n Automation for Academic Use",
    description:
      "Build n8n-based automation workflows for college projects: form automation, notifications, API integration, and basic AI-powered demos.",
    icon: "Workflow",
  },
  {
    title: "Debugging & Technical Support",
    description:
      "Targeted support for fixing errors and improving functionality in existing college projects—resolved quickly so you stay on track.",
    icon: "Wrench",
  },
  {
    title: "Student Web Development",
    description:
      "Responsive, well-structured websites for college assignments and demos, built with clean UI and solid functionality to impress evaluators.",
    icon: "Globe",
  },
  {
    title: "Mobile Apps for Academic Projects",
    description:
      "Simple to intermediate mobile applications for academic submissions, with backend integration and basic automation where required.",
    icon: "Smartphone",
  },
];

export const technologies = [
  {
    category: "AI & Automation",
    items: ["n8n", "Anthropic Claude", "ChatGPT", "Google Gemini"],
  },
  {
    category: "Backend & Runtime",
    items: ["Node.js", "Bun", "Express.js", "REST API", "WebSocket", "WebRTC"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Context API",
    ],
  },
  {
    category: "UI & Styling",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn",
      "GSAP",
      "Motion.dev",
    ],
  },
  {
    category: "Desktop & Mobile",
    items: ["Electron.js", "Tauri"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Razorpay", "Figma", "Blender"],
  },
];
