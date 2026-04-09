"use client";

import { motion } from "framer-motion";

const pros = [
  "Riktiga produkter – inte skolprojekt",
  "AI-verktyg betalas av dem",
  "Högt tempo = du lär dig fort",
  "Kontakter med founders",
  "Kan leda till jobb (3 av 7 fick erbjudande)",
  "Kortare LIA möjlig om du levererar snabbt",
];

const cons = [
  "De vill att du börjar månader innan LIA",
  "Handledare = CEO, inte senior dev",
  "De berömmer alla – oavsett kvalitet",
  "Noll onboarding",
  "Mer du levererar → mer förväntas",
  "De förväntar sig att du pitchar dem vidare – gratis",
];

export default function Slide7Sanningen() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-3 text-center"
        style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
      >
        Den ärliga sliden.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center text-[15px] font-light max-w-lg mb-12 leading-relaxed"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Jag åker hit utan betalning och berättar om dem.
        <br />
        Det är samma sak den förra studenten gjorde mot mig.
        <br />
        <span style={{ color: "#c8c8dc" }}>Draw your own conclusions.</span>
      </motion.p>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-10 w-full">
        {/* Pros */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-5"
            style={{ color: "#22c55e", fontFamily: "var(--font-dm)" }}
          >
            Fördelar
          </div>
          <div className="space-y-2.5">
            {pros.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                className="flex items-start gap-3 py-2.5 px-4 rounded-lg"
                style={{
                  borderLeft: "2px solid #22c55e",
                  backgroundColor: "rgba(34,197,94,0.03)",
                }}
              >
                <span style={{ color: "#22c55e", fontSize: "14px", flexShrink: 0 }}>✅</span>
                <span
                  className="text-[15px] font-normal"
                  style={{ color: "#d4d4e8", fontFamily: "var(--font-dm)" }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cons */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div
            className="text-[11px] tracking-[0.2em] uppercase mb-5"
            style={{ color: "#ef4444", fontFamily: "var(--font-dm)" }}
          >
            Nackdelar
          </div>
          <div className="space-y-2.5">
            {cons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                className="flex items-start gap-3 py-2.5 px-4 rounded-lg"
                style={{
                  borderLeft: "2px solid #ef4444",
                  backgroundColor: "rgba(239,68,68,0.03)",
                }}
              >
                <span style={{ color: "#ef4444", fontSize: "14px", flexShrink: 0 }}>❌</span>
                <span
                  className="text-[15px] font-normal"
                  style={{ color: "#d4d4e8", fontFamily: "var(--font-dm)" }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-10 text-center text-[16px] leading-relaxed"
        style={{ fontFamily: "var(--font-dm)" }}
      >
        <p style={{ color: "#f97316" }}>
          Passar dig om du är självgående och klarar högt tempo.
        </p>
        <p style={{ color: "#a0a0b8" }}>
          Passar INTE dig om du behöver team och mentor.
        </p>
      </motion.div>
    </div>
  );
}
