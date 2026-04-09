"use client";

import { motion } from "framer-motion";

export default function Slide1Hook() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-[13px] tracking-[0.25em] uppercase mb-16"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Lärdomsgatan 3 · Lindholmen · 10 april 2026
      </motion.div>

      {/* Mega title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-[96px] leading-[0.95] font-extrabold tracking-tight mb-10"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Jag är inte
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            color: "#f97316",
            textShadow: "0 0 80px rgba(249,115,22,0.3), 0 0 160px rgba(249,115,22,0.1)",
          }}
        >
          Devotion.
        </motion.span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-xl font-light leading-relaxed max-w-md mb-12"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Jag är student. Precis som ni.
        <br />
        Jag är inte här för att sälja in någon.
      </motion.p>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-[15px]"
        style={{
          border: "1px solid rgba(249,115,22,0.3)",
          backgroundColor: "rgba(249,115,22,0.05)",
          fontFamily: "var(--font-dm)",
          color: "#e8e8f0",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-[#f97316]" />
        Klas Olsson · NBI/Handelsakademin · .NET 2025–2027
      </motion.div>
    </div>
  );
}
