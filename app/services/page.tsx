"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  Bot,
  Globe,
  Smartphone,
  Zap,
  MessageSquare,
  Workflow,
  Code,
  Wrench,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Cloud,
  Database,
  Lock,
  BarChart3,
  Layers,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    icon: Bot,
    title: "AI Automation",
    tag: "Most Popular",
    tagColor: "from-cyan-400 to-blue-400",
    description:
      "Deploy intelligent AI systems that automate repetitive workflows, reduce operational costs, and scale your business without scaling headcount.",
    features: [
      "Custom ML models",
      "Process automation",
      "Predictive analytics",
    ],
    glowColor: "rgba(6,182,212,0.25)",
    borderColor: "rgba(6,182,212,0.3)",
    iconBg: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    id: 2,
    icon: Globe,
    title: "Web Development",
    tag: "Trending",
    tagColor: "from-violet-400 to-purple-400",
    description:
      "Build fast, modern web applications with Next.js, React, and cutting-edge frameworks. Pixel-perfect, lightning-fast, and SEO optimized.",
    features: ["Next.js / React", "Full-stack systems", "SEO & performance"],
    glowColor: "rgba(139,92,246,0.25)",
    borderColor: "rgba(139,92,246,0.3)",
    iconBg: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile Apps",
    tag: "New",
    tagColor: "from-emerald-400 to-teal-400",
    description:
      "Cross-platform mobile applications for iOS and Android that feel native, perform flawlessly, and delight users from first launch.",
    features: ["React Native", "iOS & Android", "Offline-first design"],
    glowColor: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.3)",
    iconBg: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "AI Chatbots",
    tag: null,
    tagColor: "",
    description:
      "Intelligent conversational agents trained on your data — handle customer support, sales funnels, and internal Q&A 24/7 with zero fatigue.",
    features: ["LLM fine-tuning", "RAG pipelines", "Multi-channel deploy"],
    glowColor: "rgba(251,191,36,0.2)",
    borderColor: "rgba(251,191,36,0.25)",
    iconBg: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    id: 5,
    icon: Workflow,
    title: "Process Automation",
    tag: null,
    tagColor: "",
    description:
      "End-to-end workflow automation with n8n, Zapier, and custom pipelines. Connect your tools, eliminate silos, and reclaim hours every day.",
    features: ["No-code pipelines", "API integrations", "Scheduled triggers"],
    glowColor: "rgba(59,130,246,0.22)",
    borderColor: "rgba(59,130,246,0.28)",
    iconBg: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 6,
    icon: Shield,
    title: "Cybersecurity",
    tag: "Critical",
    tagColor: "from-red-400 to-pink-400",
    description:
      "Protect your digital assets with comprehensive security audits, penetration testing, and proactive monitoring that never sleeps.",
    features: ["Pentest & audits", "SIEM/SOC setup", "Compliance readiness"],
    glowColor: "rgba(239,68,68,0.2)",
    borderColor: "rgba(239,68,68,0.25)",
    iconBg: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
  },
];

const stats = [
  { label: "Projects Delivered", value: "120+", icon: Layers },
  { label: "Happy Clients", value: "40+", icon: Star },
  { label: "Countries Served", value: "12+", icon: Globe },
  { label: "Uptime Guaranteed", value: "99.9%", icon: TrendingUp },
];

const technologies = [
  { name: "Next.js", icon: Code },
  { name: "Python", icon: Cpu },
  { name: "AWS", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Layers },
  { name: "Stripe", icon: Lock },
  { name: "OpenAI", icon: Bot },
  { name: "Analytics", icon: BarChart3 },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your goals, constraints, and opportunities to map the perfect solution.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A detailed roadmap, tech stack, and timeline crafted specifically for your project.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Rapid, iterative development with weekly demos so you're always in the loop.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Smooth deployment, monitoring setup, and post-launch support included.",
  },
];

// ─── Animation variants ─────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function GlowOrb({
  cx,
  cy,
  color,
  size = 400,
}: {
  cx: string;
  cy: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: cx,
        top: cy,
        transform: "translate(-50%,-50%)",
        zIndex: 0,
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      {children}
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ scale: 1.04, y: -4 }}
      className="relative flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,rgba(15,15,25,0.7) 0%,rgba(30,30,45,0.5) 100%)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
        <Icon size={22} className="text-cyan-400" />
      </div>
      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
        {stat.value}
      </p>
      <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.025 }}
      className="group relative rounded-2xl p-7 flex flex-col gap-5 overflow-hidden cursor-default transition-shadow duration-300"
      style={{
        background:
          "linear-gradient(135deg,rgba(12,12,22,0.85) 0%,rgba(25,25,40,0.7) 100%)",
        backdropFilter: "blur(28px)",
        border: `1px solid ${service.borderColor}`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 0 ${service.glowColor}`,
      }}
    >
      {/* Spotlight gradient following mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${springX}px ${springY}px, ${service.glowColor}, transparent 70%)`,
        }}
      />

      {/* Tag */}
      {service.tag && (
        <span
          className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${service.tagColor} text-black`}
        >
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.iconBg} border transition-transform duration-300 group-hover:scale-110`}
        style={{ borderColor: service.borderColor }}
      >
        <Icon size={26} className={service.iconColor} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white">{service.title}</h3>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="flex flex-col gap-2 mt-1">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-zinc-300">
            <CheckCircle size={13} className={service.iconColor} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ x: 4 }}
        className={`flex items-center gap-1.5 text-sm font-semibold mt-2 ${service.iconColor} group/btn`}
      >
        Learn more{" "}
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
        />
      </motion.button>
    </motion.div>
  );
}

function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof process)[0];
  index: number;
  total: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative flex flex-col items-center text-center gap-4"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      )}

      {/* Step badge */}
      <div
        className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-cyan-300 z-10"
        style={{
          background:
            "linear-gradient(135deg,rgba(6,182,212,0.15) 0%,rgba(59,130,246,0.1) 100%)",
          border: "1px solid rgba(6,182,212,0.3)",
          boxShadow: "0 0 30px rgba(6,182,212,0.15)",
        }}
      >
        {step.step}
      </div>

      <h4 className="text-lg font-bold text-white">{step.title}</h4>
      <p className="text-zinc-400 text-sm leading-relaxed max-w-[220px]">
        {step.description}
      </p>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative bg-zinc-950 text-white overflow-x-hidden selection:bg-cyan-500/30">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Background orbs */}
        <GlowOrb cx="20%" cy="30%" color="rgba(6,182,212,0.12)" size={600} />
        <GlowOrb cx="80%" cy="60%" color="rgba(139,92,246,0.12)" size={500} />
        <GlowOrb cx="50%" cy="90%" color="rgba(59,130,246,0.1)" size={450} />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient fade at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center gap-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            What We Offer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            Services Built for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                The Future
              </span>
              {/* animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 origin-left rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            From AI automation to full-stack web apps, we deliver cutting-edge
            digital solutions that transform how businesses operate and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300"
            >
              Explore Services <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors duration-300"
            >
              Get a free quote
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-600 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-5 rounded-full border-2 border-zinc-600 flex items-center justify-center"
          >
            <div className="w-1 h-1 rounded-full bg-zinc-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────────────── */}
      <section id="services" className="relative py-24 px-4">
        <GlowOrb cx="50%" cy="50%" color="rgba(6,182,212,0.06)" size={800} />

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center mb-16 gap-3"
          >
            <SectionLabel>Our Services</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Everything Your Business Needs
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-lg max-w-2xl leading-relaxed"
            >
              Six specialised service tracks, each engineered to solve a
              specific challenge and deliver measurable ROI.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,182,212,0.04) 0%, transparent 100%)",
          }}
        />
        <GlowOrb cx="10%" cy="50%" color="rgba(6,182,212,0.08)" size={500} />

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center mb-16 gap-3"
          >
            <SectionLabel>How We Work</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Our Process
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-lg max-w-xl leading-relaxed"
            >
              A battle-tested four-step approach from idea to live product.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {process.map((step, i) => (
              <ProcessStep
                key={step.step}
                step={step}
                index={i}
                total={process.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center mb-14 gap-3"
          >
            <SectionLabel>Tech Stack</SectionLabel>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Powered by the Best
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-lg max-w-xl leading-relaxed"
            >
              We choose the right tools for each job — no over-engineering, no
              cutting corners.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-300 transition-colors duration-200 hover:text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(15,15,25,0.8) 0%,rgba(30,30,45,0.6) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <Icon size={18} className="text-cyan-400" />
                  {tech.name}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl p-10 md:p-16 flex flex-col items-center text-center gap-6 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,rgba(6,182,212,0.1) 0%,rgba(59,130,246,0.08) 50%,rgba(139,92,246,0.1) 100%)",
              border: "1px solid rgba(6,182,212,0.2)",
              boxShadow: "0 0 80px rgba(6,182,212,0.1)",
            }}
          >
            {/* Corner glow */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Ready to start?
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a free consultation and cost estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <motion.a
                href="mailto:hello@unisolve.io"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300"
              >
                Start your project <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors duration-300"
              >
                View case studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
