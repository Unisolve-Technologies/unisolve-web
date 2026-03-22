"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Construction, Zap } from "lucide-react";
import Link from "next/link";

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

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans"
      style={{ background: "#000008" }}
    >
      {/* Background */}
      <GridOverlay />

      {/* Ambient orbs */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "rgba(6,182,212,0.08)",
          left: "20%",
          top: "35%",
          transform: "translate(-50%,-50%)",
          filter: "blur(90px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          background: "rgba(99,102,241,0.07)",
          left: "75%",
          top: "55%",
          transform: "translate(-50%,-50%)",
          filter: "blur(90px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Top edge glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,8,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: "rgba(6,182,212,0.08)",
            border: "1px solid rgba(6,182,212,0.2)",
            color: "#67e8f9",
          }}
        >
          <Zap size={12} className="fill-cyan-400 text-cyan-400" />
          Under Development
          <span
            className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-black"
            style={{ background: "linear-gradient(90deg,#06b6d4,#6366f1)" }}
          >
            SOON
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.25)",
            boxShadow: "0 0 40px rgba(6,182,212,0.15)",
          }}
        >
          <motion.div
            animate={{ rotate: [0, -8, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          >
            <Construction size={36} className="text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.06] text-white mb-5"
        >
          Coming{" "}
          <span className="relative inline-block">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#06b6d4 0%,#6366f1 50%,#06b6d4 100%)",
                backgroundSize: "200%",
              }}
            >
              Soon
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full origin-left"
              style={{
                background: "linear-gradient(90deg,#06b6d4,#6366f1)",
                boxShadow: "0 0 12px rgba(6,182,212,0.6)",
              }}
            />
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-400 text-lg leading-relaxed mb-10"
        >
          We&apos;re crafting something extraordinary. Our projects showcase is
          being built with care — check back soon to see the work we&apos;re
          proud of.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="w-full max-w-sm mb-10"
        >
          <div className="flex justify-between text-xs text-zinc-500 mb-2 font-medium">
            <span>Work in progress</span>
            <span className="text-cyan-400">72%</span>
          </div>
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg,#06b6d4,#6366f1)",
                boxShadow: "0 0 10px rgba(6,182,212,0.5)",
              }}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-black"
            style={{
              background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
              boxShadow: "0 0 24px rgba(6,182,212,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            Get Notified <ArrowRight size={14} />
          </motion.a>

          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Back to Home
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
