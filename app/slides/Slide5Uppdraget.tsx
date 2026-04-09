"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const facts = [
  { title: "FRÅN SCRATCH", lines: ["Tomt repo.", "Ingen kodbas.", "Ingen doc."] },
  { title: "NY STACK", lines: ["React, Next.js,", "TypeScript,", "Supabase."] },
  { title: "UTAN SENIOR DEV", lines: ["Handledare = CEO.", "Inga kodreviews.", "Eget ansvar."] },
];

function AnimatedCounter({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let current = 0;
    const timer = setInterval(() => {
      current += 2;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}</>;
}

export default function Slide5Uppdraget({ active }: { active?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-[14px] tracking-[0.25em] uppercase mb-8"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Mitt uppdrag
      </motion.div>

      {/* Small text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-[17px] mb-4"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Backlogg-punkter levererade
      </motion.div>

      {/* MEGA number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-[140px] leading-none font-extrabold mb-4"
        style={{
          fontFamily: "var(--font-syne)",
          color: "#f97316",
          textShadow: "0 0 120px rgba(249,115,22,0.3), 0 4px 60px rgba(249,115,22,0.15)",
        }}
      >
        <AnimatedCounter target={96} active={active ?? false} />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-xl font-light mb-14"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        av 100 punkter · 4 veckor · ensam · ny stack
      </motion.p>

      {/* Separator */}
      <div className="w-20 h-px mb-14" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

      {/* Three columns */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="grid grid-cols-3 gap-12 w-full"
      >
        {facts.map((fact, i) => (
          <div key={i} className="text-left">
            <div
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
            >
              {fact.title}
            </div>
            {fact.lines.map((line, j) => (
              <p
                key={j}
                className="text-[15px] font-light leading-relaxed"
                style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
