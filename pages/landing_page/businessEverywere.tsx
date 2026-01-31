import React from "react";
import AgentBeam from "./AgentBeam";

export default function BusinessEverywere() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Connect Your Business
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400">
            {" "}
            Everywhere
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Our AI agents seamlessly integrate with all major communication
          platforms, providing 24/7 automated support and engagement.
        </p>
      </div>

      <div>
        <AgentBeam />
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "⚡",
            title: "Instant Response",
            desc: "AI-powered responses within seconds across all platforms",
          },
          {
            icon: "🔄",
            title: "Seamless Integration",
            desc: "Connect all your communication channels in one unified system",
          },
          {
            icon: "📊",
            title: "Smart Analytics",
            desc: "Track engagement and optimize your communication strategy",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,15,25,0.8) 0%, rgba(30,30,45,0.6) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {/* <div className="text-4xl mb-4">{item.icon}</div> */}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
