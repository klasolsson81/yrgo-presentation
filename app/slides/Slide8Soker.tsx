"use client";

import { motion } from "framer-motion";

const qualifications = [
  "Studying software development",
  "Strong interest in building companies",
  "Comfortable with speed & iterations",
  "Excellent communication skills",
];

const jobDescription = [
  "Build and test prototypes and MVPs",
  "Work with founders in small teams",
];

const whatYouGet = [
  "Real product development in a venture studio",
  "Opportunity to become a future founder with us",
];

export default function Slide8Soker() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-[14px] tracking-[0.25em] uppercase mb-4"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Devotion Ventures
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold leading-[1.15] mb-12 text-center"
        style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
      >
        We&apos;re hiring
        <br />
        <span style={{ color: "#f97316" }}>Entrepreneurial Developers</span>
      </motion.h2>

      {/* Two columns: Qualifications + Job Description */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-2 gap-14 w-full mb-10"
      >
        {/* Qualifications */}
        <div>
          <div
            className="text-[12px] tracking-[0.2em] uppercase mb-5"
            style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
          >
            Qualifications
          </div>
          <div className="space-y-3">
            {qualifications.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                className="flex items-center gap-3 text-[16px]"
                style={{ color: "#d4d4e8", fontFamily: "var(--font-dm)" }}
              >
                <span style={{ color: "#f97316" }}>•</span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Job Description */}
        <div>
          <div
            className="text-[12px] tracking-[0.2em] uppercase mb-5"
            style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
          >
            Job Description
          </div>
          <div className="space-y-3">
            {jobDescription.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                className="flex items-center gap-3 text-[16px]"
                style={{ color: "#d4d4e8", fontFamily: "var(--font-dm)" }}
              >
                <span style={{ color: "#f97316" }}>•</span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* What you get */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full mb-10"
      >
        <div
          className="text-[12px] tracking-[0.2em] uppercase mb-5"
          style={{ color: "#f97316", fontFamily: "var(--font-dm)" }}
        >
          What you get
        </div>
        <div className="space-y-3">
          {whatYouGet.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.06, duration: 0.3 }}
              className="flex items-center gap-3 text-[16px]"
              style={{ color: "#d4d4e8", fontFamily: "var(--font-dm)" }}
            >
              <span style={{ color: "#22c55e" }}>✓</span>
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="rounded-xl px-10 py-6 flex items-center gap-10"
        style={{
          backgroundColor: "#111118",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="text-[14px] font-medium"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          Send your CV to:
        </div>
        <a
          href="mailto:lia@devotionventures.com"
          className="flex items-center gap-3 text-[17px] no-underline"
          style={{ color: "#e8e8f0", fontFamily: "var(--font-dm)" }}
        >
          <span>📧</span>
          <span className="font-medium">lia@devotionventures.com</span>
        </a>
        <a
          href="https://devotionventures.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[17px] no-underline"
          style={{ color: "#e8e8f0", fontFamily: "var(--font-dm)" }}
        >
          <span>🌐</span>
          <span className="font-medium">devotionventures.com</span>
        </a>
      </motion.div>
    </div>
  );
}
