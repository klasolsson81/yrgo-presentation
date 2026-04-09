"use client";

import { motion } from "framer-motion";

const stack = ["React", "TypeScript", "Next.js", "Supabase", "Lovable", "Cursor", "Claude Code"];

export default function Slide4Devotion() {
  return (
    <div className="flex w-full max-w-6xl mx-auto gap-20 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <div
          className="text-[14px] tracking-[0.25em] uppercase mb-6"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          Vad är de egentligen?
        </div>

        <h2
          className="text-7xl font-bold leading-[1.05] mb-8"
          style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
        >
          Inte ett
          <br />
          techbolag.
        </h2>

        <div className="space-y-3 max-w-md" style={{ color: "#b8b8cc", fontFamily: "var(--font-dm)" }}>
          <p className="text-xl font-light leading-relaxed">
            En Venture Studio. De startar och skalar bolag för att tjäna pengar.
          </p>
          <p className="text-xl font-light leading-relaxed">
            Tech är verktyget. Business är målet.
          </p>
          <p className="text-[16px] font-light mt-4" style={{ color: "#c0c0d0" }}>
            80/20 – 20% jobb ska göra 80% av värdet.
            <br />
            AI-first. Language agnostic. Output driven.
          </p>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-[380px] flex-shrink-0"
      >
        {/* Stack pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
              className="px-4 py-2 rounded-full text-[14px]"
              style={{
                border: "1px solid rgba(249,115,22,0.4)",
                backgroundColor: "rgba(249,115,22,0.10)",
                color: "#f0c8a0",
                fontFamily: "var(--font-dm)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pl-5"
          style={{ borderLeft: "2px solid #f97316" }}
        >
          <p
            className="text-xl font-bold leading-snug"
            style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
          >
            &ldquo;De frågar inte om din stack.
            <br />
            <span style={{ color: "#f97316" }}>De frågar om du kan leverera.</span>&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
