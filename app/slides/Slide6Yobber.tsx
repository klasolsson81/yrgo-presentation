"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const screenshots = [
  { src: "/screenshots/landingpage.png", alt: "Landing Page" },
  { src: "/screenshots/arbetsgivareaannonser.png", alt: "Arbetsgivarannonser" },
  { src: "/screenshots/kandidatdashboard.png", alt: "Kandidat Dashboard" },
  { src: "/screenshots/granskakandidat.png", alt: "Granska Kandidat" },
];

interface Slide6Props {
  onLightbox?: (open: boolean) => void;
}

export default function Slide6Yobber({ onLightbox }: Slide6Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const open = useCallback((i: number) => {
    setLightboxIndex(i);
    onLightbox?.(true);
  }, [onLightbox]);

  const close = useCallback(() => {
    setLightboxIndex(null);
    onLightbox?.(false);
  }, [onLightbox]);

  const nextImg = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % screenshots.length : null);
  }, []);

  const prevImg = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e: KeyboardEvent) {
      e.stopPropagation();
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImg();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImg();
      }
    }

    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, [isOpen, close, nextImg, prevImg]);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-[13px] tracking-[0.25em] uppercase mb-4"
        style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
      >
        Vad jag byggde
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
      >
        Yobber V2
      </motion.h2>

      {/* Screenshots grid – show first 3 in grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-3 gap-5 w-full mb-10"
      >
        {screenshots.slice(0, 3).map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            className="rounded-xl overflow-hidden cursor-pointer group"
            style={{
              backgroundColor: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            onClick={() => open(i)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={375}
                style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.2s" }}
                className="group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "rgba(0,0,0,0.3)", transition: "opacity 0.2s" }}
              >
                <span className="text-white text-2xl">⤢</span>
              </div>
            </div>
            <div
              className="px-4 py-2.5 text-[12px]"
              style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
            >
              {img.alt}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="pl-5 max-w-2xl"
        style={{ borderLeft: "2px solid #f97316" }}
      >
        <p
          className="text-xl font-bold leading-snug italic"
          style={{ fontFamily: "var(--font-syne)", color: "#e8e8f0" }}
        >
          &ldquo;Det vissa gör i team på 6 månader gjorde Klas ensam på 4 veckor.&rdquo;
        </p>
        <p
          className="text-[13px] mt-2"
          style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
        >
          – feedback från Devotion
        </p>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={close}
          >
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e8e8f0",
                fontSize: "20px",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            >
              ←
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e8e8f0",
                fontSize: "20px",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            >
              →
            </button>

            {/* Close hint */}
            <div
              className="absolute top-6 right-8 text-[13px]"
              style={{ color: "#8e8ea6", fontFamily: "var(--font-dm)" }}
            >
              ESC för att stänga
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-[85vw] max-h-[80vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={screenshots[lightboxIndex].src}
                  alt={screenshots[lightboxIndex].alt}
                  width={1200}
                  height={750}
                  style={{
                    maxWidth: "85vw",
                    maxHeight: "75vh",
                    width: "auto",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 16px 64px rgba(0,0,0,0.6)",
                  }}
                />
                <div
                  className="mt-4 text-[15px] flex items-center gap-4"
                  style={{ color: "#a0a0b8", fontFamily: "var(--font-dm)" }}
                >
                  <span>{screenshots[lightboxIndex].alt}</span>
                  <span style={{ color: "#6b6b80" }}>
                    {lightboxIndex + 1} / {screenshots.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip */}
            <div className="absolute bottom-8 flex gap-3">
              {screenshots.map((img, i) => (
                <div
                  key={img.src}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className="cursor-pointer rounded-lg overflow-hidden"
                  style={{
                    width: "80px",
                    height: "50px",
                    border: i === lightboxIndex ? "2px solid #f97316" : "2px solid rgba(255,255,255,0.1)",
                    opacity: i === lightboxIndex ? 1 : 0.5,
                    transition: "all 0.15s",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={50}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
