"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Gift, ShoppingBag, Star, X } from "lucide-react";
import { useEffect } from "react";

import { useDrawerStore } from "@/store/drawerStore";

const paymentMethods = ["Visa", "Master", "Amex", "Pix"];

export function CartDrawer() {
  const cartOpen = useDrawerStore((state) => state.cartOpen);
  const closeCart = useDrawerStore((state) => state.closeCart);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  useEffect(() => {
    if (!cartOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cartOpen, closeCart]);

  return (
    <AnimatePresence>
      {cartOpen ? (
        <>
          <motion.button
            aria-label="Fechar carrinho"
            className="fixed inset-0 z-[300] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            type="button"
            onClick={closeCart}
          />

          <motion.aside
            aria-label="Carrinho de compras"
            aria-modal="true"
            className="fixed bottom-0 right-0 top-0 z-[400] flex h-full w-[480px] max-w-full flex-col bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            role="dialog"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <header className="flex items-center justify-between border-b border-[#E8E8E8] p-6">
              <div className="flex items-baseline gap-2">
                <h2 className="font-display text-[22px] font-semibold leading-none text-gray-800">
                  Seu carrinho
                </h2>
                <span className="font-body text-sm leading-none text-gray-400">(0 itens)</span>
              </div>

              <button
                aria-label="Fechar carrinho"
                className="flex h-11 w-11 items-center justify-center rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100"
                type="button"
                onClick={closeCart}
              >
                <X aria-hidden="true" size={24} strokeWidth={1.75} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <ShoppingBag aria-hidden="true" className="text-gray-300" size={48} strokeWidth={1.5} />

                <div className="space-y-2 text-center">
                  <h3 className="font-display text-[22px] leading-tight text-gray-800">
                    Seu carrinho está vazio
                  </h3>
                  <p className="mx-auto max-w-[260px] font-body text-sm leading-relaxed text-gray-500">
                    Faça login para acessar seus favoritos e compras anteriores.
                  </p>
                </div>

                <button
                  className="rounded-full border-2 border-brand bg-transparent px-8 py-3 font-body text-sm font-medium text-brand transition-colors duration-150 hover:bg-brand-xlight"
                  type="button"
                >
                  Fazer Login
                </button>

                <div className="mt-2 flex w-full flex-col gap-3">
                  <div className="flex gap-3 rounded-xl border border-[#E8E8E8] bg-gray-100 p-4">
                    <Star aria-hidden="true" className="shrink-0 text-brand" size={28} strokeWidth={1.75} />
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="font-body text-[13px] font-semibold leading-tight text-gray-800">
                        Le Club Valutin
                      </p>
                      <p className="font-body text-xs leading-relaxed text-gray-500">
                        Um ano de vantagens exclusivas.
                      </p>
                      <button
                        className="mt-1 w-fit rounded-full border border-brand px-3 py-1 font-body text-xs font-medium leading-none text-brand transition-colors duration-150 hover:bg-brand-xlight"
                        type="button"
                      >
                        Junte-se
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-xl border border-[#E8E8E8] bg-gray-100 p-4">
                    <Gift aria-hidden="true" className="shrink-0 text-brand" size={28} strokeWidth={1.75} />
                    <div>
                      <p className="font-body text-[13px] font-semibold leading-tight text-gray-800">
                        Embrulho para presente gratuito!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="border-t border-[#E8E8E8] px-6 py-5">
              <div className="flex items-start justify-between">
                <span className="font-body text-[13px] leading-none text-gray-400">0 itens</span>
                <div className="text-right">
                  <span className="block font-body text-sm font-semibold leading-none text-gray-800">Total</span>
                  <strong className="mt-1 block font-display text-xl font-bold leading-none text-gray-800">
                    R$ 0,00
                  </strong>
                </div>
              </div>

              <p className="mt-1 font-body text-[11px] leading-none text-gray-400">Frete calculado no checkout</p>

              <button
                className="mt-4 h-[52px] w-full cursor-not-allowed rounded-full bg-gray-300 font-body text-[15px] font-medium text-white"
                disabled
                type="button"
              >
                Finalizar Compra
              </button>

              <div className="mt-3 flex justify-center gap-2">
                {paymentMethods.map((method) => (
                  <span key={method} className="font-body text-[10px] uppercase leading-none text-gray-400">
                    {method}
                  </span>
                ))}
              </div>
            </footer>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
