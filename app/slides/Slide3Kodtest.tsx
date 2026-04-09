"use client";

import { motion } from "framer-motion";

const coreFeatures = [
  "Som admin kan jag skapa konton (admin + kund)",
  "Som kund kan jag logga in",
  "Som kund kan jag lägga upp jobb",
  "Som kund kan jag lägga till kandidater (t.ex. LinkedIn-länk)",
  "Som kund kan jag se en kompakt kanban-vy över kandidater",
  "Som kund kan jag filtrera kanban på jobb & kandidatnamn",
  "Som admin kan jag göra allt som kunder kan göra åt dem",
];

const guidelines = [
  "Supabase (auth + databas)",
  "Bygg så mycket som möjligt med AI (Lovable/Cursor/liknande)",
  "Fria antaganden ok + extra funktioner om tid",
];

const leverans = [
  "Dela admin-login med Gabriel",
  "Spela in 5 min Loom-demo",
  "Maila antaganden",
  "Fritt att skeppa ofta",
];

export default function Slide3Kodtest() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-3"
        style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
      >
        Första steget:
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-2xl font-bold mb-10"
        style={{ fontFamily: "var(--font-syne)", color: "#a0a0b8" }}
      >
        Ett kodtest. 1 vecka. Deadline.
      </motion.p>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full rounded-xl p-7 text-left"
        style={{
          backgroundColor: "#131320",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="text-[11px] tracking-[0.2em] uppercase mb-5"
          style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
        >
          KODTEST: Mini-ATS (Applicant Tracking System)
        </div>

        {/* Core features */}
        <div className="mb-5">
          <div
            className="text-[13px] tracking-[0.15em] uppercase mb-3"
            style={{ color: "#b8b8cc", fontFamily: "var(--font-dm)" }}
          >
            Core features:
          </div>
          {coreFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.05, duration: 0.3 }}
              className="flex items-start gap-3 mb-1.5 text-[14px]"
              style={{ color: "#c8c8dc", fontFamily: "var(--font-dm)" }}
            >
              <span style={{ color: "#f97316", flexShrink: 0 }}>→</span>
              {f}
            </motion.div>
          ))}
        </div>

        {/* Guidelines + Leverans side by side */}
        <div
          className="pt-4 grid grid-cols-2 gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <div
              className="text-[13px] tracking-[0.15em] uppercase mb-3"
              style={{ color: "#b8b8cc", fontFamily: "var(--font-dm)" }}
            >
              Guidelines:
            </div>
            {guidelines.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 + i * 0.05, duration: 0.3 }}
                className="flex items-start gap-3 mb-1.5 text-[13px]"
                style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
              >
                <span style={{ color: "#6b6b80" }}>•</span>
                {g}
              </motion.div>
            ))}
          </div>

          <div>
            <div
              className="text-[13px] tracking-[0.15em] uppercase mb-3"
              style={{ color: "#b8b8cc", fontFamily: "var(--font-dm)" }}
            >
              Leverans:
            </div>
            {leverans.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 + i * 0.05, duration: 0.3 }}
                className="flex items-start gap-3 mb-1.5 text-[13px]"
                style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
              >
                <span style={{ color: "#6b6b80" }}>•</span>
                {l}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.3 }}
              className="flex items-start gap-3 mb-1.5 text-[13px] font-medium"
              style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
            >
              <span>•</span>
              Deadline: 1 vecka
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 text-[16px] font-light"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Resultat: De ville träffas på video. Och sedan...
      </motion.p>
    </div>
  );
}
