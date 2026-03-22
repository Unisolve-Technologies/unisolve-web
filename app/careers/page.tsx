"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  Zap,
  Users,
  Globe,
  Rocket,
  Heart,
  Coffee,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  location: string;
  skills: string[];
  color: string;
  glowColor: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

// ── Data ──────────────────────────────────────────────────────────────────────
const openings: JobOpening[] = [
  {
    id: "flutter-dev",
    title: "Flutter Developer",
    department: "Mobile Engineering",
    type: "Full-time",
    location: "Remote / Hybrid",
    color: "rgba(6,182,212,0.15)",
    glowColor: "rgba(6,182,212,0.35)",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
    description:
      "Build stunning cross-platform mobile apps for iOS and Android. You'll work on real-world client projects using Flutter's latest features.",
    responsibilities: [
      "Develop high-quality Flutter apps for iOS and Android",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Integrate REST APIs and third-party SDKs",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and contribute to best practices",
    ],
    requirements: [
      "2+ years of Flutter / Dart experience",
      "Strong understanding of state management (Riverpod, Bloc, or Provider)",
      "Experience with Firebase or similar backend services",
      "Familiar with Git and agile workflows",
    ],
  },
  {
    id: "react-dev",
    title: "React Developer",
    department: "Frontend Engineering",
    type: "Full-time",
    location: "Remote",
    color: "rgba(99,102,241,0.15)",
    glowColor: "rgba(99,102,241,0.35)",
    skills: ["React", "TypeScript", "Tailwind CSS", "Zustand", "REST / GraphQL"],
    description:
      "Craft blazing-fast, accessible, and beautiful web interfaces using React and TypeScript. You'll be at the heart of our frontend team.",
    responsibilities: [
      "Build reusable component libraries and design systems",
      "Implement responsive, accessible UIs from design specs",
      "Optimise performance and core web vitals",
      "Write unit and integration tests with Vitest / React Testing Library",
      "Collaborate closely with backend engineers on API contracts",
    ],
    requirements: [
      "3+ years of React and TypeScript experience",
      "Strong command of CSS and Tailwind CSS",
      "Experience with state management libraries",
      "Familiarity with CI/CD pipelines and Git workflows",
    ],
  },
  {
    id: "nextjs-dev",
    title: "Next.js Developer",
    department: "Full-Stack Engineering",
    type: "Full-time",
    location: "Remote / Hybrid",
    color: "rgba(168,85,247,0.15)",
    glowColor: "rgba(168,85,247,0.35)",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    description:
      "Own features end-to-end in our Next.js applications. You'll leverage server components, edge functions, and the latest features of the App Router.",
    responsibilities: [
      "Design and implement server-side rendered and statically generated pages",
      "Build and maintain API routes and server actions",
      "Integrate databases with Prisma ORM",
      "Optimise for performance, SEO, and accessibility",
      "Deploy and monitor applications on Vercel",
    ],
    requirements: [
      "3+ years of Next.js and React experience",
      "Solid understanding of the App Router and Server Components",
      "Experience with relational databases and ORMs",
      "Knowledge of authentication and security best practices",
    ],
  },
  {
    id: "nodejs-dev",
    title: "Node.js Backend Developer",
    department: "Backend Engineering",
    type: "Full-time",
    location: "Remote",
    color: "rgba(34,197,94,0.15)",
    glowColor: "rgba(34,197,94,0.35)",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
    description:
      "Design and scale robust backend services that power our products. You'll architect APIs, manage databases, and ensure system reliability.",
    responsibilities: [
      "Build scalable REST and GraphQL APIs with Express / Fastify",
      "Design and maintain MongoDB and PostgreSQL schemas",
      "Implement authentication, authorisation, and security middleware",
      "Write comprehensive tests and documentation",
      "Containerise services with Docker and manage deployments",
    ],
    requirements: [
      "3+ years of Node.js and backend development experience",
      "Proficiency with MongoDB and/or PostgreSQL",
      "Experience with Docker and basic DevOps practices",
      "Strong understanding of REST API design principles",
    ],
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Digital Marketing",
    type: "Full-time",
    location: "Remote / Onsite",
    color: "rgba(251,146,60,0.15)",
    glowColor: "rgba(251,146,60,0.35)",
    skills: [
      "On-page SEO",
      "Technical SEO",
      "Google Analytics",
      "Ahrefs / SEMrush",
      "Content Strategy",
    ],
    description:
      "Drive organic growth for Unisolve and our clients. You'll develop data-driven SEO strategies that increase rankings, traffic, and conversions.",
    responsibilities: [
      "Conduct comprehensive SEO audits and competitive analyses",
      "Develop and execute keyword strategies across multiple verticals",
      "Collaborate with developers on technical SEO improvements",
      "Create monthly performance reports and growth roadmaps",
      "Build high-quality backlink profiles through outreach campaigns",
    ],
    requirements: [
      "2+ years of hands-on SEO experience",
      "Proficient with Ahrefs, SEMrush, or similar tools",
      "Understanding of Core Web Vitals and technical SEO",
      "Experience with Google Search Console and Analytics 4",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Remote / Hybrid",
    color: "rgba(244,63,94,0.15)",
    glowColor: "rgba(244,63,94,0.35)",
    skills: [
      "Google Ads",
      "Meta Ads",
      "Email Marketing",
      "Content Marketing",
      "Analytics",
    ],
    description:
      "Lead multi-channel digital marketing campaigns that deliver measurable ROI. You'll manage paid media, social, email, and content strategies.",
    responsibilities: [
      "Plan and execute paid campaigns on Google, Meta, and LinkedIn",
      "Manage marketing budgets and optimise cost per acquisition",
      "Develop content calendars and brand voice guidelines",
      "Run A/B tests on landing pages and ad creatives",
      "Track KPIs and present insights to stakeholders",
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Proven track record managing paid media budgets",
      "Analytical mindset with strong Google Analytics skills",
      "Experience in a tech or SaaS environment preferred",
    ],
  },
];

// ── Background decorations ────────────────────────────────────────────────────
function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    />
  );
}

function FloatingOrb({
  cx,
  cy,
  size,
  color,
  delay,
}: {
  cx: string;
  cy: string;
  size: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        left: cx,
        top: cy,
        transform: "translate(-50%,-50%)",
        filter: "blur(80px)",
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// ── Perk chip ─────────────────────────────────────────────────────────────────
function PerkCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 p-5 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: "rgba(6,182,212,0.1)",
          border: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        <Icon size={18} className="text-cyan-400" />
      </div>
      <p className="font-semibold text-sm text-white">{title}</p>
      <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ── Job card ──────────────────────────────────────────────────────────────────
function JobCard({ job, index }: { job: JobOpening; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4 group"
      >
        {/* Color accent bar */}
        <div
          className="hidden sm:block w-1 self-stretch rounded-full flex-shrink-0"
          style={{ background: job.glowColor }}
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: job.color,
                color: job.glowColor,
                border: `1px solid ${job.glowColor}`,
              }}
            >
              {job.department}
            </span>
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Clock size={11} /> {job.type}
            </span>
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <MapPin size={11} /> {job.location}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
            {job.title}
          </h3>

          <p className="text-sm text-zinc-400 mt-1 line-clamp-1">
            {job.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full text-zinc-400"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} className="text-zinc-500" />
          </motion.div>
        </div>
      </button>

      {/* Expandable detail section */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-6"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Responsibilities */}
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: job.glowColor }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                  Requirements
                </p>
                <ul className="space-y-2">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: job.glowColor }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply button */}
              <div className="md:col-span-2 flex justify-start mt-2">
                <motion.a
                  href={`mailto:careers@unisolve.in?subject=Application for ${job.title}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-black"
                  style={{
                    background: `linear-gradient(135deg,#06b6d4,#3b82f6)`,
                    boxShadow: `0 0 20px rgba(6,182,212,0.35)`,
                  }}
                >
                  Apply Now <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const [filter, setFilter] = useState<string>("All");

  const departments = [
    "All",
    ...Array.from(new Set(openings.map((o) => o.department))),
  ];

  const filtered =
    filter === "All" ? openings : openings.filter((o) => o.department === filter);

  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ background: "#000008" }}
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <GridOverlay />
      <FloatingOrb cx="15%" cy="25%" size={500} color="rgba(6,182,212,0.07)" delay={0} />
      <FloatingOrb cx="80%" cy="45%" size={400} color="rgba(99,102,241,0.07)" delay={2} />
      <FloatingOrb cx="45%" cy="70%" size={350} color="rgba(168,85,247,0.06)" delay={1} />

      {/* Top edge glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,8,0.85)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-36 pb-24">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              color: "#67e8f9",
            }}
          >
            <Zap size={12} className="fill-cyan-400 text-cyan-400" />
            We&apos;re Hiring · Join the Mission
            <span
              className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-black"
              style={{ background: "linear-gradient(90deg,#06b6d4,#6366f1)" }}
            >
              {openings.length} OPENINGS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.06] text-white mb-6"
          >
            Build the{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#06b6d4 0%,#6366f1 50%,#06b6d4 100%)",
                  backgroundSize: "200%",
                }}
              >
                Future
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full origin-left"
                style={{
                  background: "linear-gradient(90deg,#06b6d4,#6366f1)",
                  boxShadow: "0 0 12px rgba(6,182,212,0.6)",
                }}
              />
            </span>{" "}
            with Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Join a team of builders, designers, and dreamers creating software
            that matters. Remote-first, growth-focused, and always learning.
          </motion.p>
        </div>

        {/* ── Perks ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20"
        >
          <PerkCard icon={Globe} title="Remote First" description="Work from anywhere in the world. We value output, not location." delay={0} />
          <PerkCard icon={Rocket} title="Fast Growth" description="Accelerate your career with real-world projects and mentorship." delay={0.08} />
          <PerkCard icon={Users} title="Great Team" description="Collaborate with passionate engineers, designers, and marketers." delay={0.16} />
          <PerkCard icon={Heart} title="Work-Life Balance" description="Flexible hours and generous PTO so you can recharge." delay={0.24} />
          <PerkCard icon={Briefcase} title="Real Ownership" description="Your work ships to real users and makes a real impact." delay={0.32} />
          <PerkCard icon={Coffee} title="Learning Budget" description="Annual learning allowance for courses, books, and conferences." delay={0.4} />
        </motion.div>

        {/* ── Openings section ──────────────────────────────────── */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          >
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                Open Positions
              </p>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Current Openings
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    filter === d
                      ? {
                          background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                          color: "#000",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#71717a",
                        }
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── General application CTA ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center rounded-3xl px-8 py-14 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Glow accent */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full"
            style={{
              background: "rgba(6,182,212,0.12)",
              filter: "blur(60px)",
            }}
          />
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            Don&apos;t see your role?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Send us a General Application
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We&apos;re always on the lookout for talented people. Tell us about
            yourself and what you can bring to the team.
          </p>
          <motion.a
            href="mailto:careers@unisolve.in?subject=General Application"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-black"
            style={{
              background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
              boxShadow: "0 0 28px rgba(6,182,212,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            Get in Touch <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
