"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

const links = [
  { label: "LinkedIn", url: "linkedin.com/in/klasolsson81", href: "https://www.linkedin.com/in/klasolsson81" },
  { label: "Portfolio", url: "klasolsson.se", href: "https://klasolsson.se" },
  { label: "GitHub", url: "github.com/klasolsson81", href: "https://github.com/klasolsson81" },
  { label: "Utbildning", url: "NBI/Handelsakademin .NET 2025–2027", href: "" },
];

export default function Slide9Kontakt() {
  return (
    <div className="flex w-full max-w-5xl mx-auto gap-20 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h2
          className="text-6xl font-bold mb-12"
          style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
        >
          Hitta mig.
        </h2>

        <div className="space-y-6">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
              className="flex items-center gap-5"
            >
              <span
                className="text-[16px] w-28 flex-shrink-0"
                style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
              >
                {link.label}
              </span>
              <span className="text-[18px]" style={{ color: "#a0a0b8" }}>→</span>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] no-underline hover:underline"
                  style={{ color: "#e8e8f0", fontFamily: "var(--font-dm)" }}
                >
                  {link.url}
                </a>
              ) : (
                <span
                  className="text-[18px]"
                  style={{ color: "#b8b8cc", fontFamily: "var(--font-dm)" }}
                >
                  {link.url}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-12 text-[17px] font-light leading-relaxed"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          Frågor nu eller hör av dig efteråt.
          <br />
          Jag svarar alltid.
        </motion.p>
      </motion.div>

      {/* Right – QR */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: "#111118",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          <QRCodeSVG
            value="https://www.linkedin.com/in/klasolsson81"
            size={240}
            bgColor="transparent"
            fgColor="#ffffff"
            level="H"
          />
        </div>
        <p
          className="mt-5 text-[16px] tracking-wide"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          LinkedIn
        </p>
      </motion.div>
    </div>
  );
}
