"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRegionStore } from "@/store/regionStore";

const SLIDES = [
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80&fit=crop", alt: "Criança com roupa colorida" },
  { src: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1920&q=80&fit=crop", alt: "Bebê sorrindo" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1920&q=80&fit=crop", alt: "Criança em ambiente externo" },
  { src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80&fit=crop", alt: "Bebê com roupa elegante" },
  { src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1920&q=80&fit=crop", alt: "Criança feliz" },
];

const TABS = ["EUROPA", "AMÉRICA", "ÁSIA E PACÍFICO", "ÁFRICA"] as const;
type RegionTab = (typeof TABS)[number];

const COUNTRIES_BY_TAB: Record<RegionTab, string[]> = {
  "EUROPA": ["França", "Alemanha", "Itália", "Espanha", "Portugal", "Reino Unido", "Holanda", "Bélgica"],
  "AMÉRICA": ["Brasil", "Argentina", "Chile", "Colômbia", "México", "Uruguai", "Peru", "EUA", "Canadá"],
  "ÁSIA E PACÍFICO": ["Japão", "China", "Austrália", "Coreia do Sul", "Índia", "Singapura"],
  "ÁFRICA": ["África do Sul", "Marrocos", "Egito", "Nigéria"],
};

export function SplashOverlay() {
  const setRegion = useRegionStore((s) => s.setRegion);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<RegionTab>("AMÉRICA");
  const [selected, setSelected] = useState("Brasil");
  const [slideIndex, setSlideIndex] = useState(0);
  const [, setLoadedImages] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("valutin-region");
    if (saved) {
      document.getElementById("splash-backdrop")?.remove();
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [visible]);

  const handleConfirm = () => {
    localStorage.setItem("valutin-region", selected);
    setRegion({ country: selected, currency: "BRL", locale: "pt-BR", currencySymbol: "R$" });
    document.getElementById("splash-backdrop")?.remove();
    setVisible(false);
  };

  const handleTabChange = (tab: RegionTab) => {
    setActiveTab(tab);
    setSelected(COUNTRIES_BY_TAB[tab][0] ?? "");
  };

  const handleImageLoad = () => {
    setLoadedImages((currentCount) => {
      const nextCount = Math.min(currentCount + 1, SLIDES.length);

      if (nextCount === SLIDES.length) {
        setIsReady(true);
      }

      return nextCount;
    });
  };

  if (!visible) return null;

  return (
    <div
      className="overflow-hidden"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 500 }}
    >
      
      {/* Carrossel de fundo */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: isReady && index === slideIndex ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            loading="eager"
            onLoad={handleImageLoad}
            priority={true}
          />
        </div>
      ))}

      {!isReady ? <div className="absolute inset-0 bg-black" /> : null}

      {/* Overlay escuro */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Modal centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                      w-[420px] max-w-[calc(100vw-32px)]">
        <motion.div
          layout
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            {/* Logo */}
            <div className="text-center mb-6">
              <p className="font-display text-[28px] tracking-[0.15em] text-gray-900">VALUTIN</p>
              <p className="font-body text-[9px] uppercase tracking-[0.12em] text-gray-400 mt-1">
                Moda Infantil Premium
              </p>
            </div>

            <div className="h-px bg-gray-100 mb-6" />

            {!isOpen ? (
              /* Estado fechado — pílula */
              <button
                onClick={() => setIsOpen(true)}
                className="w-full flex items-center justify-between
                           border border-gray-200 rounded-full py-3 px-6
                           hover:border-brand transition-colors duration-200 cursor-pointer"
              >
                <span className="font-body text-[14px] text-gray-400">
                  Por favor, selecione sua localização
                </span>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ) : (
              /* Estado aberto — abas e países */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Abas */}
                <div className="flex border-b border-gray-200 mb-4 gap-4 overflow-x-auto">
                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`font-body text-[11px] uppercase tracking-[0.10em] pb-2 whitespace-nowrap flex-shrink-0
                        border-b-2 transition-colors duration-150 -mb-px
                        ${activeTab === tab
                          ? "border-brand text-gray-900 font-medium"
                          : "border-transparent text-gray-400"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Lista de países */}
                <div className="grid grid-cols-2 gap-x-4 max-h-[240px] overflow-y-auto">
                  {(COUNTRIES_BY_TAB[activeTab] ?? []).map((country) => (
                    <button
                      key={country}
                      onClick={() => setSelected(country)}
                      className="flex items-center gap-3 py-2.5 border-b border-gray-50
                                 text-left w-full"
                    >
                      {/* Radio button customizado */}
                      <span className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex-shrink-0
                                       flex items-center justify-center
                                       ${selected === country
                                         ? "border-brand"
                                         : "border-gray-300"
                                       }`}>
                        {selected === country && (
                          <span className="w-2 h-2 rounded-full bg-brand" />
                        )}
                      </span>
                      <span className={`font-body text-[13px] ${
                        country === "Brasil" ? "font-medium" : "font-normal"
                      } text-gray-700`}>
                        {country}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Botão confirmar */}
                <button
                  onClick={handleConfirm}
                  className="w-full h-12 bg-brand hover:bg-brand-hover text-white
                             rounded-full font-body text-[14px] font-medium
                             transition-colors duration-200 mt-6"
                >
                  Confirmar
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
