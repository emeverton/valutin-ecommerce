"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "Declaração de Acessibilidade >",
  "Flores e Vestidos para Meninas 💐 — Ver Coleção",
  "Mergulhe na Moda Praia 🏖️",
];

export function Topbar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPausedByButton, setIsPausedByButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPaused = isPausedByButton || isHovered;

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % messages.length);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <div
      className="sticky top-0 z-[200] flex h-8 w-full items-center justify-center border-b border-[#E8E8E8] bg-[#F9F9F9]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          className="px-12 text-center font-body text-[11px] leading-none text-[#525252]"
          initial={{ y: -16, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          exit={{
            y: 16,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          }}
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>

      <button
        aria-label={isPausedByButton ? "Retomar rotação do topbar" : "Pausar rotação do topbar"}
        className="absolute right-4 flex h-6 w-6 cursor-pointer items-center justify-center text-[#A3A3A3] transition-colors hover:text-[#525252]"
        type="button"
        onClick={() => setIsPausedByButton((paused) => !paused)}
      >
        {isPausedByButton ? <Play size={12} /> : <Pause size={12} />}
      </button>
    </div>
  );
}
