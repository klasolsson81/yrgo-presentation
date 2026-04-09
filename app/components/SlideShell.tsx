"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideShellProps {
  slideIndex: number;
  totalSlides: number;
  children: React.ReactNode;
}

export default function SlideShell({ slideIndex, totalSlides, children }: SlideShellProps) {
  const progress = totalSlides > 1 ? slideIndex / (totalSlides - 1) : 0;

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5">
        <div
          className="text-[13px] tracking-wide"
          style={{ color: "#8e8ea6", fontFamily: "var(--font-dm)" }}
        >
          Klas Olsson &nbsp;·&nbsp; Devotion × Yrgo &nbsp;·&nbsp; 10 april 2026
        </div>
        <div
          className="text-[13px] tracking-[0.2em]"
          style={{ color: "#8e8ea6", fontFamily: "var(--font-dm)" }}
        >
          {String(slideIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </div>
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
          className="h-screen w-screen flex items-center justify-center px-16 py-20"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-[2px] z-50" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: "#f97316" }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </>
  );
}
