"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Send,
  Zap,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

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
        filter: "blur(85px)",
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.55, 1, 0.55] }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// ── Info card ─────────────────────────────────────────────────────────────────
function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(6,182,212,0.1)",
          border: "1px solid rgba(6,182,212,0.2)",
        }}
      >
        <Icon size={18} className="text-cyan-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="p-5 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {href ? (
        <a href={href} className="block hover:opacity-80 transition-opacity">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ContactUsClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async send — hook up to your backend / Formspree / Resend
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const inputBase = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
  } as React.CSSProperties;

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-200";

  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ background: "#000008" }}
    >
      {/* ── Background ────────────────────────────────────────── */}
      <GridOverlay />
      <FloatingOrb cx="15%" cy="30%" size={480} color="rgba(6,182,212,0.07)" delay={0} />
      <FloatingOrb cx="78%" cy="55%" size={380} color="rgba(99,102,241,0.07)" delay={2} />
      <FloatingOrb cx="48%" cy="75%" size={320} color="rgba(168,85,247,0.06)" delay={1} />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,8,0.85)_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-36 pb-24">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="text-center mb-16">
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
            Let&apos;s Build Something Together
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.06] text-white mb-5"
          >
            Get in{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#06b6d4 0%,#6366f1 50%,#06b6d4 100%)",
                  backgroundSize: "200%",
                }}
              >
                Touch
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
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? Want to join our team? Or just want to say
            hello? We&apos;d love to hear from you.
          </motion.p>
        </div>

        {/* ── Two-column layout ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* ── Left — info sidebar ───────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <InfoCard icon={Mail} label="Email us" value="info@unisolve.live" href="mailto:info@unisolve.live" delay={0} />
            <InfoCard icon={MapPin} label="Location" value="Global Remote Team" delay={0.08} />
            <InfoCard icon={Clock} label="Response time" value="Within 24 hours" delay={0.16} />
            <InfoCard icon={MessageSquare} label="Preferred contact" value="Email for fastest response" delay={0.24} />

            {/* Social / quick note */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 p-5 rounded-2xl"
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
            >
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-2">
                What happens next?
              </p>
              <ol className="space-y-2">
                {[
                  "We review your message",
                  "Our team reaches out within 24h",
                  "We schedule a call to discuss",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-black"
                      style={{ background: "linear-gradient(135deg,#06b6d4,#6366f1)" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {/* ── Right — contact form ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    border: "1px solid rgba(6,182,212,0.3)",
                  }}
                >
                  <CheckCircle2 size={30} className="text-cyan-400" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    Thanks for reaching out. We&apos;ll get back to you at{" "}
                    <span className="text-cyan-400">{form.email}</span> within 24 hours.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-black mt-2"
                  style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)" }}
                >
                  Send another message
                </motion.button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
                    Send us a message
                  </p>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Full Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                      style={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Email Address <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                      style={inputBase}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-400">
                    Subject <span className="text-cyan-500">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputBase, color: form.subject ? "#fff" : "#52525b" }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Career / Hiring">Career / Hiring</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* I am a * */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-400">
                    I am a <span className="text-cyan-500">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputBase, color: form.subject ? "#fff" : "#52525b" }}
                  >
                    <option value="" disabled>Select category…</option>
                    <option value="Business_Owner">Business Owner</option>
                    <option value="College_Student">College Student</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Working_Professional">Working Professional</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-400">
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, idea, or question…"
                    className={`${inputClass} resize-none`}
                    style={inputBase}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? {} : { scale: 1.03 }}
                  whileTap={loading ? {} : { scale: 0.97 }}
                  className="self-start flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-black mt-1 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                    boxShadow: "0 0 24px rgba(6,182,212,0.3), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        className="w-4 h-4 rounded-full border-2 border-black border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Bottom CTA strip ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div>
            <p className="font-bold text-white text-base">Prefer a direct email?</p>
            <p className="text-zinc-500 text-sm">Drop us a line anytime.</p>
          </div>
          <motion.a
            href="mailto:info@unisolve.live"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-black flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
              boxShadow: "0 0 20px rgba(6,182,212,0.3)",
            }}
          >
            <Send size={14} /> info@unisolve.live
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
