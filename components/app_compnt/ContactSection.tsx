"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
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
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
// import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, businessType: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      //   toast({
      //     title: 'Message Sent Successfully!',
      //     description: "We'll get back to you within 24 hours.",
      //   });

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
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-slate-900 via-black to-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              {" "}
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business or complete your project? Get in
            touch with us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    boxShadow:
                      "0 4px 16px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-slate-400 mb-2">
                    Our team is here to help
                  </p>
                  <a
                    href="mailto:info@unisolve.tech"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    info@unisolve.tech
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    boxShadow:
                      "0 4px 16px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-slate-400 mb-2">Mon-Fri from 9am to 6pm</p>
                  <a
                    href="tel:+919876543210"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Why Choose Unisolve?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-slate-300">
                    Expert team with 5+ years of experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-slate-300">24/7 dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-slate-300">
                    On-time project delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-slate-300">Competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,15,25,0.9) 0%, rgba(30,30,45,0.7) 100%)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-black/40 border-white/10 focus:border-cyan-500 transition-all"
                  style={{
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-black/40 border-white/10 focus:border-cyan-500 transition-all"
                  style={{
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="bg-black/40 border-white/10 focus:border-cyan-500 transition-all"
                  style={{
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">I am a *</Label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.businessType}
                  required
                >
                  <SelectTrigger
                    className="bg-black/40 border-white/10 focus:border-cyan-500 transition-all"
                    style={{
                      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="student">College Student</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Your Message *</Label>
                <Textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or requirements..."
                  rows={5}
                  className="bg-black/40 border-white/10 focus:border-cyan-500 transition-all resize-none"
                  style={{
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-6 text-lg transition-all group disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                  boxShadow:
                    "0 8px 24px rgba(6,182,212,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2" size={20} />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
