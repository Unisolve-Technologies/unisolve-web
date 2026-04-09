"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react";
import { ShineBorder } from "../ui/shine-border";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as const, // 👈 add `as const`
    },
  }),
};

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    sub: "We reply within 24 hours",
    value: "info@unisolve.live",
    href: "mailto:info@unisolve.live",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    sub: "Mon–Fri, 9am to 6pm IST",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    sub: "Average project kick-off",
    value: "Within 48 hours",
    href: null,
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-indigo-500/10",
  },
];

const whyUs = [
  "Expert team with 5+ years of experience",
  "24/7 dedicated support",
  "On-time project delivery",
  "Competitive & transparent pricing",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, businessType: value });
  };

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbycNL6CY8TLO72u46EF-cRUyLn10FrTTBAgo5ZxmyBvmrB1iyG54Jl2YMrWo9mISk4KOQ/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script doesn't return CORS headers on POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          message: formData.subject,
        }),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          subject: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch {
      // Even with no-cors, network errors can still throw
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#000000 0%,#030a10 50%,#000000 100%)",
      }}
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get in Touch
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-5"
          >
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your business or complete your project? Get in
            touch — we&apos;ll respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left column */}
          <div className="flex flex-col gap-5 h-full">
            {/* Contact info cards */}
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(10,10,22,0.8) 0%,rgba(20,20,36,0.6) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${card.bg} border ${card.border}`}
                  >
                    <Icon size={20} className={card.color} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium mb-0.5">
                      {card.sub}
                    </p>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      {card.title}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className={`text-sm font-medium ${card.color} hover:brightness-110 transition-all`}
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${card.color}`}>
                        {card.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Why choose us */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg,rgba(10,10,22,0.8) 0%,rgba(20,20,36,0.6) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={18} className="text-cyan-400" />
                <h3 className="text-base font-bold text-white">
                  Why Choose Unisolve?
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-cyan-400 flex-shrink-0"
                    />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column — form with ShineBorder */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl h-full"
          >
            {/* ShineBorder decorative layer */}
            <ShineBorder
              borderWidth={1}
              duration={8}
              shineColor={["#06b6d4", "#3b82f6", "#8b5cf6"]}
              className="rounded-2xl"
            />

            <div
              className="relative rounded-2xl p-8 h-full flex flex-col"
              style={{
                background:
                  "linear-gradient(135deg,rgba(8,8,20,0.92) 0%,rgba(16,16,32,0.85) 100%)",
                backdropFilter: "blur(28px)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs text-zinc-400 font-medium uppercase tracking-wider"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/60 focus:ring-0 text-white placeholder:text-zinc-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs text-zinc-400 font-medium uppercase tracking-wider"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/60 focus:ring-0 text-white placeholder:text-zinc-600 transition-colors rounded-xl"
                    />
                  </div>
                </div>

                {/* Phone + Category row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs text-zinc-400 font-medium uppercase tracking-wider"
                    >
                      Mobile *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="bg-white/5 border-white/10 focus:border-cyan-500/60 focus:ring-0 text-white placeholder:text-zinc-600 transition-colors rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="businessType"
                      className="text-xs text-zinc-400 font-medium uppercase tracking-wider"
                    >
                      I am a *
                    </Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.businessType}
                      required
                    >
                      <SelectTrigger className="w-full bg-white/5 border-white/10 focus:border-cyan-500/60 text-white rounded-xl focus:ring-0">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-950 border-zinc-800">
                        <SelectItem value="business">Business Owner</SelectItem>
                        <SelectItem value="student">College Student</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="individual">Individual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="text-xs text-zinc-400 font-medium uppercase tracking-wider"
                  >
                    Your Message *
                  </Label>
                  <Textarea
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or requirements..."
                    rows={4}
                    className="bg-white/5 border-white/10 focus:border-cyan-500/60 focus:ring-0 text-white placeholder:text-zinc-600 transition-colors resize-none rounded-xl"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={
                    !isSubmitting && !isSubmitted ? { scale: 1.02 } : {}
                  }
                  whileTap={
                    !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                  }
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: isSubmitted
                      ? "linear-gradient(135deg,#16a34a,#15803d)"
                      : "linear-gradient(135deg,#06b6d4,#3b82f6)",
                    boxShadow: isSubmitted
                      ? "0 8px 24px rgba(22,163,74,0.3)"
                      : "0 8px 24px rgba(6,182,212,0.3)",
                  }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Decorative footer — fills blank space */}
              <div className="mt-8 flex-1 flex flex-col justify-end">
                {/* Subtle divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Animated radar SVG + trust chips */}
                <div className="flex items-center gap-5">
                  {/* Radar / signal animation */}
                  <div className="relative w-12 h-12 shrink-0">
                    {/* Pulsing rings */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border border-cyan-500/40"
                        animate={{
                          scale: [1, 1.8, 2.4],
                          opacity: [0.7, 0.3, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: i * 0.8,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                    {/* Center dot */}
                    <div
                      className="absolute inset-0 m-auto w-3 h-3 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                        boxShadow: "0 0 10px rgba(6,182,212,0.7)",
                      }}
                    />
                  </div>

                  {/* Trust chips */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "🔒 SSL Secure", delay: 0 },
                      { label: "⚡ Fast Delivery", delay: 0.08 },
                      { label: "🕐 24/7 Support", delay: 0.16 },
                    ].map(({ label, delay }) => (
                      <motion.span
                        key={label}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay }}
                        className="text-[11px] font-medium text-zinc-400 px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {label}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated circuit line row */}
                <div className="mt-5 relative h-6 overflow-hidden opacity-25">
                  <svg
                    viewBox="0 0 400 24"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Horizontal track */}
                    <line
                      x1="0"
                      y1="12"
                      x2="400"
                      y2="12"
                      stroke="rgba(6,182,212,0.5)"
                      strokeWidth="1"
                    />
                    {/* Vertical ticks */}
                    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                      <line
                        key={x}
                        x1={x}
                        y1="6"
                        x2={x}
                        y2="18"
                        stroke="rgba(6,182,212,0.5)"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Nodes */}
                    {[60, 150, 260, 340].map((x) => (
                      <circle
                        key={x}
                        cx={x}
                        cy="12"
                        r="3"
                        fill="rgba(6,182,212,0.8)"
                      />
                    ))}
                  </svg>
                  {/* Travelling dot */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: "#06b6d4",
                      boxShadow: "0 0 8px rgba(6,182,212,0.9)",
                    }}
                    animate={{ left: ["-2%", "102%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
