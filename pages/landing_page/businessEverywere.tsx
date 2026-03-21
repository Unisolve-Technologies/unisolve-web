"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import AgentBeam from "./AgentBeam";
import { Zap, RefreshCw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    desc: "AI-powered responses within seconds across all platforms — no human intervention needed.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: RefreshCw,
    title: "Seamless Integration",
    desc: "Connect all your communication channels into one unified, intelligent system.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Track engagement, measure outcomes, and continuously optimise your communication strategy.",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-indigo-500/10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BusinessEverywere() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const beamRef = useRef(null);
  const beamInView = useInView(beamRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #040d18 50%, #000000 100%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AI Connectivity
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-5"
          >
            Connect Your Business{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Everywhere
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Our AI agents seamlessly integrate with all major communication
            platforms, providing 24/7 automated support and engagement.
          </motion.p>
        </motion.div>

        {/* AgentBeam — wrapped in a styled container */}
        <motion.div
          ref={beamRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={beamInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-2xl mb-20 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg,rgba(6,182,212,0.06) 0%,rgba(59,130,246,0.04) 50%,rgba(139,92,246,0.06) 100%)",
            border: "1px solid rgba(6,182,212,0.15)",
            boxShadow:
              "0 0 60px rgba(6,182,212,0.08), 0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          {/* Top edge line for depth */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <AgentBeam />
          <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(10,10,20,0.8) 0%,rgba(20,20,35,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.bg} border ${item.border}`}
                >
                  <Icon size={22} className={item.color} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
