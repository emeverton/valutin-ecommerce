"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useCartStore } from "@/store/cartStore";
import { useDrawerStore } from "@/store/drawerStore";

const primaryLinks = [
  { label: "A MAISON VALUTIN", href: "/sobre" },
  { label: "SERVIÇOS", href: "/servicos" },
];

const navigationItems = [
  { label: "30% OFF Itens Selecionados*", href: "/promocao", colorClass: "text-promo" },
  { label: "Edição de Verão", href: "/edicao-verao", colorClass: "text-gray-800" },
  { label: "Ocasiões Especiais", href: "/ocasioes", colorClass: "text-gray-800" },
  { label: "Coleção 2026", href: "/novidades", colorClass: "text-gray-800" },
  { label: "Presentes Recém-nascido", href: "/presentes", colorClass: "text-gray-800" },
  { label: "Bebê", href: "/bebe", colorClass: "text-gray-800" },
  { label: "Criança", href: "/crianca", colorClass: "text-gray-800" },
  { label: "Calçados", href: "/calcados", colorClass: "text-gray-800" },
  { label: "Acessórios", href: "/acessorios", colorClass: "text-gray-800" },
  { label: "Quarto", href: "/quarto", colorClass: "text-gray-800" },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const cartQuantity = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );
  const openAccount = useDrawerStore((state) => state.openAccount);
  const openCart = useDrawerStore((state) => state.openCart);

  return (
    <header className="sticky top-8 z-[200] w-full border-b border-[#E8E8E8] bg-white">
      <div className="grid h-[76px] grid-cols-[auto_1fr_auto] items-center px-10">
        <nav aria-label="Links institucionais" className="flex items-center gap-7">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[11px] font-medium uppercase leading-none tracking-[0.10em] text-gray-600 transition-colors duration-150 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" aria-label="Valutin - página inicial" className="justify-self-center text-center">
          <span className="block font-display text-[28px] leading-none tracking-[0.15em] text-gray-900">
            VALUTIN
          </span>
          <span className="mt-2 block font-body text-[9px] font-normal uppercase leading-none tracking-[0.12em] text-gray-400">
            Moda Infantil Premium
          </span>
        </Link>

        <div className="flex items-center gap-5 justify-self-end text-gray-600">
          <button
            aria-label={searchOpen ? "Fechar busca" : "Abrir busca"}
            aria-pressed={searchOpen}
            type="button"
            className="flex h-11 w-7 items-center justify-center transition-colors duration-150 hover:text-gray-900"
            onClick={() => setSearchOpen((open) => !open)}
          >
            <Search aria-hidden="true" size={22} strokeWidth={1.75} />
          </button>

          <button
            aria-label="Abrir conta"
            type="button"
            className="flex h-11 w-7 items-center justify-center transition-colors duration-150 hover:text-gray-900"
            onClick={openAccount}
          >
            <User aria-hidden="true" size={22} strokeWidth={1.75} />
          </button>

          <button
            aria-label={`Abrir carrinho com ${cartQuantity} ${cartQuantity === 1 ? "item" : "itens"}`}
            type="button"
            className="relative flex h-11 w-7 items-center justify-center transition-colors duration-150 hover:text-gray-900"
            onClick={openCart}
          >
            <ShoppingBag aria-hidden="true" size={22} strokeWidth={1.75} />
            <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand font-body text-[10px] font-bold leading-none text-white">
              {cartQuantity}
            </span>
          </button>
        </div>
      </div>

      <nav
        aria-label="Categorias principais"
        className="flex h-11 items-center justify-center gap-8 border-t border-gray-100"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${item.colorClass} border-b-2 border-transparent py-3 font-body text-[13px] font-normal leading-none transition-[border-color] duration-150 hover:border-gray-900`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
