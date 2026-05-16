"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBanner() {
  const { hasConsented, acceptAll, rejectAll } = useCookieConsent();

  return (
    <AnimatePresence>
      {hasConsented === null ? (
        <motion.aside
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 z-[400] w-[400px] max-w-[calc(100vw-32px)] rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-xl"
          initial={{ y: 120, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeOut" },
          }}
          exit={{
            y: 120,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          <p className="absolute right-6 top-6 font-display text-base font-semibold leading-none text-gray-900">
            VALUTIN
          </p>

          <div className="pr-24">
            <h2 className="font-display text-base font-bold leading-snug text-gray-900">
              A qualidade da sua experiência online depende das suas escolhas
            </h2>
          </div>

          <p className="mt-4 font-body text-xs leading-relaxed text-gray-500">
            Usamos cookies e tecnologias similares para personalizar conteúdos,
            analisar o tráfego e oferecer a melhor experiência. Ao aceitar, você
            concorda com nossa Política de Privacidade.
          </p>

          <div className="mt-6 flex flex-row gap-2">
            <button
              className="rounded-full border border-gray-300 bg-white px-3.5 py-2 font-body text-xs font-medium text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
              type="button"
              onClick={rejectAll}
            >
              Recusar tudo
            </button>
            <button
              className="rounded-full border border-gray-300 bg-white px-3.5 py-2 font-body text-xs font-medium text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
              type="button"
            >
              Gerenciar
            </button>
            <button
              className="flex-1 rounded-full bg-brand px-3.5 py-2 font-body text-xs font-medium text-white transition-colors hover:bg-brand-hover"
              type="button"
              onClick={acceptAll}
            >
              Aceitar tudo
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
