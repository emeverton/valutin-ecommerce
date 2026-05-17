"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Package, Star, User, X, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { useDrawerStore } from "@/store/drawerStore";

interface AccountLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

const accountLinks: AccountLink[] = [
  { href: "/favoritos", icon: Heart, label: "Seus itens favoritos" },
  { href: "/minha-conta", icon: User, label: "Suas informações" },
  { href: "/minha-conta/pedidos", icon: Package, label: "Rastrear seu pedido" },
  { href: "/clube", icon: Star, label: "Le Club Valutin" },
];

export function AccountDrawer() {
  const accountOpen = useDrawerStore((state) => state.accountOpen);
  const closeAccount = useDrawerStore((state) => state.closeAccount);

  useEffect(() => {
    document.body.style.overflow = accountOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [accountOpen]);

  useEffect(() => {
    if (!accountOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAccount();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [accountOpen, closeAccount]);

  return (
    <AnimatePresence>
      {accountOpen ? (
        <>
          <motion.button
            aria-label="Fechar minha conta"
            className="fixed inset-0 z-[300] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            type="button"
            onClick={closeAccount}
          />

          <motion.aside
            aria-label="Minha conta"
            aria-modal="true"
            className="fixed bottom-0 right-0 top-0 z-[400] flex h-full w-[480px] max-w-full flex-col bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            role="dialog"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <header className="flex items-center justify-between border-b border-[#E8E8E8] p-6">
              <h2 className="font-display text-[22px] font-semibold leading-none text-gray-800">
                Minha Conta
              </h2>

              <button
                aria-label="Fechar minha conta"
                className="flex h-11 w-11 items-center justify-center rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100"
                type="button"
                onClick={closeAccount}
              >
                <X aria-hidden="true" size={24} strokeWidth={1.75} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav aria-label="Links da conta">
                {accountLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-[14px] border-b border-[#F5F5F5] py-4 font-body text-[15px] font-normal text-[#262626] transition-colors duration-150 hover:bg-[#EDF0F4] hover:text-brand"
                      onClick={closeAccount}
                    >
                      <Icon
                        aria-hidden="true"
                        className="shrink-0 text-[#A3A3A3] transition-colors duration-150 group-hover:text-brand"
                        size={20}
                        strokeWidth={1.75}
                      />
                      <span className="transition-colors duration-150 group-hover:text-brand">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <footer className="border-t border-[#E8E8E8] px-6 py-5">
              <button
                className="mb-3 h-[52px] w-full rounded-full bg-brand font-body text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#5A687D]"
                type="button"
              >
                Fazer Login
              </button>

              <Link
                href="/minha-conta/cadastro"
                className="block text-center font-body text-sm text-[#525252] underline transition-colors duration-150 hover:text-[#171717]"
                onClick={closeAccount}
              >
                Criar uma conta
              </Link>
            </footer>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
