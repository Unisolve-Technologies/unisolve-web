// Define the valid icon names as a union type
export type IconName = 
  | 'Zap' 
  | 'Bot' 
  | 'MessageSquare' 
  | 'Workflow' 
  | 'TrendingUp' 
  | 'Globe' 
  | 'Smartphone' 
  | 'Code' 
  | 'Wrench' 
  | 'FileText';

// Define the service interface
export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export const businessServices: Service[] = [
  {
    title: 'End-to-End Business Process Automation',
    description: 'Eliminate manual work by automating repetitive processes using AI and intelligent workflows. From approvals and data entry to reporting and system sync, our solutions improve efficiency, accuracy, and scalability.',
    icon: 'Zap',
  },
  {
    title: 'AI Agents for Customer Support & Internal Operations',
    description: 'AI-powered agents that handle customer queries, internal requests, and task execution 24/7. These agents integrate seamlessly with your existing systems to reduce workload and improve response times.',
    icon: 'Bot',
  },
  {
    title: 'WhatsApp & Telegram Automation for Business Communication',
    description: 'Automated WhatsApp and Telegram systems for customer support, order updates, lead handling, HR communication, and notifications—ensuring fast, consistent, and reliable messaging.',
    icon: 'MessageSquare',
  },
  {
    title: 'Custom Workflow Automation & API Integrations',
    description: 'Custom workflows that connect your apps, CRMs, databases, and third-party APIs. From simple automations to complex multi-step logic, we ensure smooth and secure system communication.',
    icon: 'Workflow',
  },
  {
    title: 'AI-Driven Lead Generation & Sales Automation',
    description: 'Automation systems that capture, qualify, and route leads automatically using AI, helping sales teams focus on high-quality prospects and close deals faster.',
    icon: 'TrendingUp',
  },
  {
    title: 'Modern Web Development for Businesses & Startups',
    description: 'Fast, responsive, and scalable websites and web applications. From business websites to custom dashboards and SaaS platforms, we focus on performance, security, and user experience.',
    icon: 'Globe',
  },
  {
    title: 'Custom Mobile App Development (Android & iOS)',
    description: 'High-quality mobile applications for startups and businesses, focusing on usability, performance, and scalability. Apps can be integrated with AI, automation, and backend systems.',
    icon: 'Smartphone',
  },
];

export const studentServices: Service[] = [
  {
    title: 'College Project Development – Web & Mobile Applications',
    description: 'Help students develop college-approved projects based on their requirements. Projects are built using modern technologies and include basic explanations to help students understand the workflow and present confidently.',
    icon: 'Code',
  },
  {
    title: 'Final Year & Mini Project Assistance',
    description: 'Technical assistance for final year and mini projects, including feature implementation, bug fixing, and deployment support, strictly based on student requirements and university guidelines.',
    icon: 'FileText',
  },
  {
    title: 'n8n Automation for Academic & College Use',
    description: 'Build n8n-based automation workflows for college projects, such as form automation, notifications, API integration, and basic AI-powered workflows suitable for academic demonstrations.',
    icon: 'Workflow',
  },
  {
    title: 'Limited Technical Support & Debugging Assistance',
    description: 'Limited support for debugging issues, fixing errors, and improving functionality in existing college projects. Support is provided only for specific tasks or issues, not full training or tutoring.',
    icon: 'Wrench',
  },
  {
    title: 'Web Development for College & Student Projects',
    description: 'Design and develop responsive websites for college assignments, demos, and student use, focusing on functionality, performance, and clean UI.',
    icon: 'Globe',
  },
  {
    title: 'Mobile App Development for Academic Projects',
    description: 'Develop simple to intermediate mobile applications for academic projects, including backend integration and basic automation where required.',
    icon: 'Smartphone',
  },
  {
    title: 'Project Documentation & Deployment Support',
    description: 'Help with basic project documentation, deployment, and setup guidance so students can submit and demonstrate their projects smoothly.',
    icon: 'FileText',
  },
];

export const technologies = [
  {
    category: 'AI & Automation',
    items: ['n8n', 'Anthropic Claude', 'ChatGPT', 'Google Gemini'],
  },
  {
    category: 'Backend & Runtime',
    items: ['Node.js', 'Bun', 'Express.js', 'REST API', 'WebSocket', 'WebRTC'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'React Query', 'Context API'],
  },
  {
    category: 'UI & Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'Shadcn', 'GSAP', 'Motion.dev'],
  },
  {
    category: 'Desktop & Mobile',
    items: ['Electron.js', 'Tauri'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub', 'Razorpay', 'Figma', 'Blender'],
  },
];