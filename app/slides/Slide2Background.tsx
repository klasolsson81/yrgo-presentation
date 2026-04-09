"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2003", text: "Plasman, montör", active: false },
  { year: "2025", text: "NBI/Handelsakademin", sub: ".NET Systemutveckling", active: false },
  { year: "2026", text: "LIA1 planerad HT", active: true },
];

export default function Slide2Background() {
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
          Bakgrund
        </div>

        <h2
          className="text-7xl font-bold leading-[1.05] mb-8"
          style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
        >
          22 år i
          <br />
          fordonsindustrin.
        </h2>

        <p
          className="text-xl font-light leading-relaxed max-w-md"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          Montör på Plasman. Automotive, plast,
          <br />
          produktion. Hösten 2025: omstart.
        </p>
      </motion.div>

      {/* Right – Timeline */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-[340px] flex-shrink-0"
      >
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-8 top-1.5 w-[10px] h-[10px] rounded-full"
                style={{
                  backgroundColor: item.active ? "#f97316" : "#3a3a4a",
                  boxShadow: item.active ? "0 0 12px rgba(249,115,22,0.5)" : "none",
                }}
              />
              {item.active && (
                <motion.div
                  className="absolute -left-8 top-1.5 w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: "#f97316" }}
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="flex items-baseline gap-4">
                <span
                  className="text-[13px] tracking-wider font-medium"
                  style={{
                    color: item.active ? "#f97316" : "#a0a0b8",
                    fontFamily: "var(--font-dm)",
                  }}
                >
                  {item.year}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.15)" }}>
                  ────
                </span>
                <div>
                  <span
                    className="text-[15px]"
                    style={{
                      color: item.active ? "#e8e8f0" : "#b8b8cc",
                      fontFamily: "var(--font-dm)",
                    }}
                  >
                    {item.active && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded mr-2" style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#f97316" }}>
                        NU
                      </span>
                    )}
                    {item.text}
                  </span>
                  {item.sub && (
                    <div className="text-[13px] mt-0.5" style={{ color: "#a0a0b8" }}>
                      {item.sub}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="relative -left-[21px] text-[14px] mt-4"
            style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
          >
            <span className="ml-[1px]">▼</span>
            <span className="ml-4">Samma tidslinje som ni.</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
