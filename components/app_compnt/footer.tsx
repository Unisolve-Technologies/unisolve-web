import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-slate-950 to-black relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-xl blur-lg"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_96cded59-05f7-49db-a4ad-9afcbb3b2a09/artifacts/qyj0yasi_unisolve.jpg"
                  alt="Unisolve"
                  className="h-10 w-10 object-contain relative z-10"
                />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Unisolve
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Your universal solution for software development, AI automation,
              and digital transformation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="contact-us"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Business Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-cyan-400 shrink-0 mt-1" size={18} />
                <a
                  href="mailto:info@unisolve.live"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  info@unisolve.live
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="text-cyan-400 shrink-0 mt-1" size={18} />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="text-cyan-400 shrink-0 mt-1" size={18} />
                <span className="text-slate-400">Global Remote Team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Unisolve Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
