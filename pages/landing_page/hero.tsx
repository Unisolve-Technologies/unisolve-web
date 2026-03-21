"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

// ── Floating particle orb ────────────────────────────────────────────────────
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

// ── Animated grid line ───────────────────────────────────────────────────────
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

// ── Stat chip ───────────────────────────────────────────────────────────────
function StatChip({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-0.5 px-6 border-r border-white/10 last:border-0"
    >
      <span className="text-xl font-black text-white tabular-nums">
        {value}
      </span>
      <span className="text-[11px] text-zinc-500 font-medium tracking-wide uppercase">
        {label}
      </span>
    </motion.div>
  );
}

// ── Vertical beam lines ──────────────────────────────────────────────────────
function VerticalBeams() {
  const beams = [15, 30, 50, 70, 85]; // % positions
  return (
    <>
      {beams.map((pos, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute top-0 bottom-0 w-px"
          style={{ left: `${pos}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.2 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                transparent 0%,
                rgba(6,182,212,${0.06 + i * 0.01}) 30%,
                rgba(6,182,212,${0.12 + i * 0.01}) 60%,
                transparent 100%
              )`,
            }}
          />
          {/* Glowing dot sliding down */}
          <motion.div
            className="absolute w-1 h-10 rounded-full left-1/2 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg,transparent,rgba(6,182,212,0.8),transparent)",
            }}
            animate={{ top: ["0%", "100%"] }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
const Hero = ({ className }: HeroProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  // Mouse parallax on headline
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(smoothY, [-300, 300], [3, -3]);
  const rotateY = useTransform(smoothX, [-600, 600], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <div
      className={cn(
        "relative w-full min-h-screen overflow-hidden font-sans selection:bg-cyan-500/30",
        className,
      )}
      style={{ background: "#000008" }}
      onMouseMove={handleMouseMove}
    >
      {/* ── Background layers ─────────────────────────────── */}
      <GridOverlay />
      <VerticalBeams />

      {/* Ambient orbs */}
      <FloatingOrb
        cx="20%"
        cy="35%"
        size={500}
        color="rgba(6,182,212,0.08)"
        delay={0}
      />
      <FloatingOrb
        cx="75%"
        cy="50%"
        size={420}
        color="rgba(99,102,241,0.07)"
        delay={2}
      />
      <FloatingOrb
        cx="50%"
        cy="80%"
        size={380}
        color="rgba(59,130,246,0.07)"
        delay={1}
      />

      {/* Top edge glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,8,0.85)_100%)]" />

      {/* ── Navbar ─────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(6,182,212,0.12)",
                border: "1px solid rgba(6,182,212,0.3)",
              }}
            >
              <Image src={Logo.src} alt="Logo" width={18} height={18} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Unisolve
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {["Services", "Technologies", "Contact", "Pricing"].map((item) => (
              <a
                key={item}
                href={
                  item === "Services"
                    ? "/services"
                    : item === "Contact"
                      ? "#contact"
                      : "#"
                }
                className="text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-black"
              style={{
                background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                boxShadow: "0 0 20px rgba(6,182,212,0.3)",
              }}
            >
              Get started <ArrowRight size={14} />
            </motion.a>

            {/* <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-full text-zinc-400 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button> */}
          </div>
        </div>
      </motion.nav>

      {/* ── Hero content ───────────────────────────────────── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: "rgba(6,182,212,0.08)",
            border: "1px solid rgba(6,182,212,0.2)",
            color: "#67e8f9",
          }}
        >
          <Zap size={12} className="fill-cyan-400 text-cyan-400" />
          AI-Powered · Always On · Built for Scale
          <span
            className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-black"
            style={{ background: "linear-gradient(90deg,#06b6d4,#6366f1)" }}
          >
            NEW
          </span>
        </motion.div>

        {/* Headline with mouse parallax */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="mb-7 max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white"
          >
            Transform Your{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#06b6d4 0%,#6366f1 50%,#06b6d4 100%)",
                  backgroundSize: "200%",
                }}
              >
                Business
              </span>
              {/* animated underline  */}
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
            </span>
            <br className="hidden sm:block" /> with{" "}
            <span className="text-white">AI Automation</span>
          </motion.h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          We deliver cutting-edge software development, AI automation, and
          intelligent solutions for businesses and students. From custom web
          apps to process automation — we make technology work for you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white"
            style={{
              background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
              boxShadow:
                "0 0 28px rgba(6,182,212,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            Start your Project <ArrowRight size={15} />
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-zinc-300 hover:text-white transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Explore Services <ArrowRight size={15} />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-0 mb-16"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "999px",
            padding: "12px 0",
          }}
        >
          <StatChip value="40+" label="Happy clients" delay={0.55} />
          <StatChip value="120+" label="Projects done" delay={0.62} />
          <StatChip value="99.9%" label="Uptime SLA" delay={0.69} />
          <StatChip value="24h" label="Response time" delay={0.76} />
        </motion.div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-6 h-9 rounded-full flex items-start justify-center pt-2"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{
                background: "linear-gradient(180deg,#06b6d4,transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
