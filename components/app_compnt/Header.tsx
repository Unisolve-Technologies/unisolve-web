"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, House, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact-us"],
  ["Careers", "/careers"],
] as const;

function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
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
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {pathname !== "/" && (
              <Link
                href="/"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
              >
                <House size={18} />
              </Link>
            )}
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/contact-us"
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

            {/* Hamburger — mobile only */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,8,0.6)", backdropFilter: "blur(4px)" }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col md:hidden"
              style={{
                background: "rgba(0,0,12,0.95)",
                borderLeft: "1px solid rgba(6,182,212,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-bold text-white text-base tracking-tight">
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Divider */}
              <div
                className="mx-6 mb-6 h-px"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 flex-1">
                {pathname !== "/" && (
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    <House size={16} />
                    Home
                  </Link>
                )}

                {NAV_LINKS.map(([label, href], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                      style={
                        pathname === href
                          ? {
                              background: "rgba(6,182,212,0.1)",
                              color: "#67e8f9",
                              border: "1px solid rgba(6,182,212,0.2)",
                            }
                          : { color: "#71717a" }
                      }
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="px-6 py-8">
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-black"
                  style={{
                    background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                    boxShadow: "0 0 24px rgba(6,182,212,0.35)",
                  }}
                >
                  Get started <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
