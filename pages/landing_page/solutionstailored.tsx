"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Building2,
  GraduationCap,
  Zap,
  Bot,
  MessageSquare,
  Workflow,
  TrendingUp,
  Globe,
  Smartphone,
  FileText,
  Wrench,
  Code,
  LucideProps,
  CheckCircle,
} from "lucide-react";
import { businessServices, studentServices, IconName } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const iconMap: Record<
  IconName,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  Zap,
  Bot,
  MessageSquare,
  Workflow,
  TrendingUp,
  Globe,
  Smartphone,
  Code,
  Wrench,
  FileText,
};

const tabs = [
  { id: 0, label: "For Business", icon: Building2, services: businessServices },
  {
    id: 1,
    label: "For Students",
    icon: GraduationCap,
    services: studentServices,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SolutionsTailored() {
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const activeServices = tabs[activeTab].services;

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#000000 0%,#04080f 50%,#000000 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Solutions
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-5"
          >
            Tailored for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Your Needs
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're a business seeking automation or a student working on
            academic projects, we have the expertise to help you succeed.
          </motion.p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex p-1 rounded-full gap-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg,rgba(6,182,212,0.25) 0%,rgba(59,130,246,0.2) 100%)",
                        border: "1px solid rgba(6,182,212,0.3)",
                      }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Service cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeServices.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -4, scale: 1.012 }}
                  className="group relative rounded-2xl p-7 flex flex-col gap-5 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(10,10,22,0.85) 0%,rgba(22,22,38,0.7) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Hover top-edge accent */}
                  <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/40 to-transparent transition-all duration-500" />

                  {/* Icon */}
                  <div
                    className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(6,182,212,0.12) 0%,rgba(59,130,246,0.12) 100%)",
                      border: "1px solid rgba(6,182,212,0.25)",
                      boxShadow: "0 4px 16px rgba(6,182,212,0.15)",
                    }}
                  >
                    <Icon size={22} className="text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Bottom divider dot accent */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1 h-1 rounded-full bg-cyan-500/60" />
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
