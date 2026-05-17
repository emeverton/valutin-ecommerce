"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navItems, type NavigationMegaMenu } from "@/config/navigation";

type MegaMenuProps = {
  activeMenu: string | null;
};

type MegaMenuColumnProps = {
  column: NavigationMegaMenu["columns"][number];
  viewAllHref: string;
};

function MegaMenuColumn({ column, viewAllHref }: MegaMenuColumnProps) {
  return (
    <div>
      <h3 className="mb-4 font-body text-xs font-semibold uppercase leading-none tracking-[0.08em] text-gray-900">
        {column.title}
      </h3>
      <ul className="space-y-0">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm font-light leading-[2.2] text-gray-600 transition-colors duration-150 hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={viewAllHref}
        className="mt-4 inline-flex font-body text-[13px] font-normal leading-none text-brand underline underline-offset-4"
      >
        Ver tudo →
      </Link>
    </div>
  );
}

export function MegaMenu({ activeMenu }: MegaMenuProps) {
  const activeItem = navItems.find((item) => item.id === activeMenu);
  const megaMenu = activeItem?.megaMenu;

  if (!activeItem || !megaMenu) {
    return null;
  }

  const firstColumn = megaMenu.columns[0];
  const secondColumn = megaMenu.columns[1];

  return (
    <>
      <AnimatePresence mode="wait">
        {activeMenu !== null ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[99] cursor-default bg-[rgba(0,0,0,0.30)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMenu}
          className="absolute left-0 top-full z-[100] w-screen border-b border-[#E8E8E8] bg-white p-10 shadow-lg"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              {firstColumn ? <MegaMenuColumn column={firstColumn} viewAllHref={activeItem.href} /> : null}
            </div>

            <div className="col-span-4">
              {secondColumn ? <MegaMenuColumn column={secondColumn} viewAllHref={activeItem.href} /> : null}
            </div>

            <div className="col-span-4 rounded-xl bg-[#F7F7F7] p-6">
              <h3 className="mb-4 font-body text-xs font-semibold uppercase leading-none tracking-[0.08em] text-gray-900">
                POR TEMA
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {megaMenu.themes.map((theme) => (
                  <Link
                    key={theme.href}
                    href={theme.href}
                    className="group relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={theme.image}
                      alt={theme.title}
                      fill
                      sizes="(min-width: 1024px) 12vw, 45vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0)_40%,rgba(0,0,0,0.5)_100%)]" />
                    <span className="absolute bottom-2 left-2 font-display text-[13px] italic leading-none text-white">
                      {theme.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
