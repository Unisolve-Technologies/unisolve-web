import React from "react";
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs";
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

export default function SolutionsTailored() {
  const tabs = [
    {
      id: 0,
      label: "For Business",
      btnIcon: <Building2 size={18} />,
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-6">
          {businessServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className={cn(
                  "rounded-xl border bg-card text-card-foreground shadow",
                  "group relative overflow-hidden border-0 transition-all duration-500 hover:transform hover:scale-[1.02]",
                )}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="cardHeader flex flex-col space-y-1.5 p-6 relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                      border: "1px solid rgba(6,182,212,0.3)",
                      boxShadow:
                        "0 4px 16px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,212,0.1)",
                    }}
                  >
                    {/* <Icon size={26} className="text-cyan-400" /> */}
                  </div>
                  <div className="cardTitle font-semibold leading-none tracking-tight text-xl">
                    {service.title}
                  </div>
                </div>
                <div className="cardContent p-6 pt-0 relative z-10">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: 1,
      label: "For Students",
      btnIcon: <GraduationCap size={18} />,
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-6">
          {studentServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className={cn(
                  "rounded-xl border bg-card text-card-foreground shadow",
                  "group relative overflow-hidden border-0 transition-all duration-500 hover:transform hover:scale-[1.02]",
                )}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="cardHeader flex flex-col space-y-1.5 p-6 relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                      border: "1px solid rgba(6,182,212,0.3)",
                      boxShadow:
                        "0 4px 16px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,212,0.1)",
                    }}
                  >
                    <Icon size={26} className="text-cyan-400" />
                  </div>
                  <div className="cardTitle font-semibold leading-none tracking-tight text-xl">
                    {service.title}
                  </div>
                </div>
                <div className="cardContent p-6 pt-0 relative z-10">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
  ];
  return (
    <section
      id="services"
      className="py-32 bg-linear-to-b from-slate-900 via-black to-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions Tailored for
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400">
              {" "}
              Your Needs
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you're a business seeking automation or a student working on
            academic projects, we have the expertise to help you succeed.
          </p>
        </div>
      </div>

      <DirectionAwareTabs tabs={tabs} rounded="rounded-lg" />
    </section>
  );
}
