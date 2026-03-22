"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, House } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
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

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {pathname !== "/" && (
            <Link
              href={"/"}
              className="text-zinc-500 hover:text-white transition-colors duration-200"
            >
              <House size={18} />
            </Link>
          )}
          {[
            ["Services", "services"],
            ["Projects", "projects"],
            ["Contact", "contact-us"],
            ["Careers", "careers"],
          ].map((item) => (
            <Link
              key={item[0]}
              href={item[1]}
              className="text-zinc-500 hover:text-white transition-colors duration-200"
            >
              {item[0]}
            </Link>
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
  );
}

export default Header;
