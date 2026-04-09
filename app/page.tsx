"use client";

import { useState, useEffect, useCallback } from "react";
import Background from "./components/Background";
import SlideShell from "./components/SlideShell";
import Slide1Hook from "./slides/Slide1Hook";
import Slide2Background from "./slides/Slide2Background";
import Slide3Kodtest from "./slides/Slide3Kodtest";
import Slide4Devotion from "./slides/Slide4Devotion";
import Slide5Uppdraget from "./slides/Slide5Uppdraget";
import Slide6Yobber from "./slides/Slide6Yobber";
import Slide7Sanningen from "./slides/Slide7Sanningen";
import Slide8Soker from "./slides/Slide8Soker";
import Slide9Kontakt from "./slides/Slide9Kontakt";

const TOTAL_SLIDES = 9;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const goTo = useCallback((n: number) => {
    if (n >= 0 && n < TOTAL_SLIDES) setCurrent(n);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (lightboxOpen) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key >= "1" && e.key <= "9") {
        e.preventDefault();
        goTo(parseInt(e.key) - 1);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goTo, lightboxOpen]);

  const slides = [
    <Slide1Hook key={0} />,
    <Slide2Background key={1} />,
    <Slide3Kodtest key={2} />,
    <Slide4Devotion key={3} />,
    <Slide5Uppdraget key={4} active={current === 4} />,
    <Slide6Yobber key={5} onLightbox={setLightboxOpen} />,
    <Slide7Sanningen key={6} />,
    <Slide8Soker key={7} />,
    <Slide9Kontakt key={8} />,
  ];

  return (
    <>
      <Background />
      <SlideShell slideIndex={current} totalSlides={TOTAL_SLIDES}>
        {slides[current]}
      </SlideShell>
    </>
  );
}
