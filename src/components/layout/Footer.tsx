"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { IconNode, LucideIcon } from "lucide-react";
import {
  createLucideIcon,
  Gift,
  Headphones,
  Lock,
  MapPin,
  Star,
  Store,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

type Service = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: string[];
};

const benefits: Benefit[] = [
  {
    icon: Headphones,
    title: "Atendimento ao Cliente",
    subtitle: "Seg–Sex, 9h às 18h",
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    subtitle: "Em compras acima de R$ 499",
  },
  {
    icon: Store,
    title: "Retirada em Loja",
    subtitle: "Reserve online, retire na loja",
  },
  {
    icon: Lock,
    title: "Pagamento Seguro",
    subtitle: "Dados criptografados SSL",
  },
];

const services: Service[] = [
  {
    icon: Star,
    title: "Le Club Valutin",
    subtitle: "Vantagens exclusivas por R$ 9,90/ano",
    href: "/clube",
  },
  {
    icon: Gift,
    title: "Cartão Presente",
    subtitle: "O presente perfeito para qualquer ocasião",
    href: "/cartao-presente",
  },
  {
    icon: MapPin,
    title: "Encontre uma Loja",
    subtitle: "270 boutiques em todo o Brasil",
    href: "/lojas",
  },
];

const footerSections: FooterSection[] = [
  {
    title: "SUPORTE AO CLIENTE",
    links: [
      "Fale Conosco",
      "FAQ",
      "Opções de Envio",
      "Trocas e Devoluções",
      "E-reservation",
      "Cartão Presente",
      "Guia de Medidas",
    ],
  },
  {
    title: "AVISOS LEGAIS",
    links: [
      "Termos de Uso",
      "Condições de Venda",
      "Política de Privacidade",
      "Política de Cookies",
      "Avisos Legais",
    ],
  },
  {
    title: "A MAISON VALUTIN",
    links: [
      "O Mundo Valutin",
      "A Marca",
      "Nossos Compromissos",
      "Sustentabilidade",
      "Carreiras",
      "Imprensa",
    ],
  },
];

const paymentLogos = ["VISA", "MASTER", "AMEX", "ELO", "PIX", "APPLE PAY", "GOOGLE PAY"];

const instagramIconNode: IconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "5" }],
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["circle", { cx: "17.5", cy: "6.5", r: "1" }],
];

const facebookIconNode: IconNode = [
  ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }],
];

const youtubeIconNode: IconNode = [
  [
    "path",
    {
      d: "M22.5 6.5a2.8 2.8 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.5 2.8 2.8 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.5z",
    },
  ],
  ["path", { d: "m10 15 5-3-5-3z" }],
];

const Instagram = createLucideIcon("Instagram", instagramIconNode);
const Facebook = createLucideIcon("Facebook", facebookIconNode);
const Youtube = createLucideIcon("Youtube", youtubeIconNode);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Youtube", href: "https://www.youtube.com", icon: Youtube },
];

function createSectionHref(label: string) {
  return `/${label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer aria-label="Rodapé Valutin" className="mt-auto">
      <section
        aria-label="Benefícios Valutin"
        className="grid min-h-[88px] grid-cols-1 divide-y divide-gray-200 border-t border-[#E8E8E8] bg-[#F7F7F7] md:grid-cols-4 md:divide-x md:divide-y-0"
      >
        {benefits.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex h-[88px] flex-col items-center justify-center gap-1.5 px-8 text-center">
            <Icon aria-hidden="true" className="h-6 w-6 text-brand" strokeWidth={1.75} />
            <p className="font-body text-[13px] font-semibold leading-none text-gray-800">{title}</p>
            <p className="font-body text-[11px] leading-none text-gray-500">{subtitle}</p>
          </div>
        ))}
      </section>

      <section className="bg-white px-6 py-16 text-center" aria-labelledby="footer-newsletter-title">
        <h2
          id="footer-newsletter-title"
          className="mb-2 font-display text-[40px] font-semibold italic leading-tight text-gray-900"
        >
          Newsletter
        </h2>
        <p className="mb-8 font-body text-[15px] text-gray-500">
          Receba novidades, coleções e ofertas exclusivas.
        </p>
        <form className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end sm:gap-0">
          <label htmlFor="footer-newsletter-email" className="sr-only">
            Seu endereço de e-mail
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Seu endereço de e-mail"
            className="w-[360px] max-w-[80vw] border-0 border-b-2 border-gray-300 bg-transparent py-3 font-body text-[16px] text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-brand px-8 font-body text-[14px] font-medium text-white transition-colors hover:bg-brand-hover sm:ml-4"
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-4 font-body text-[11px] text-gray-400">
          Ao cadastrar você concorda com nossa Política de Privacidade.
        </p>
      </section>

      <section className="border-t border-[#E8E8E8] bg-white px-10 py-12" aria-label="Serviços Valutin">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 text-center md:grid-cols-3">
          {services.map(({ icon: Icon, title, subtitle, href }) => (
            <article key={title} className="flex flex-col items-center gap-3">
              <Icon aria-hidden="true" className="h-10 w-10 text-brand" strokeWidth={1.6} />
              <h3 className="font-display text-[18px] font-semibold leading-tight text-gray-900">{title}</h3>
              <p className="font-body text-[13px] text-gray-500">{subtitle}</p>
              <Link
                href={href}
                className="font-body text-[13px] text-brand underline transition-colors hover:text-brand-hover"
              >
                Saiba mais →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E8E8E8] bg-white" aria-label="Links institucionais">
        <div className="hidden grid-cols-3 gap-8 px-10 py-12 md:grid">
          {footerSections.map((section) => (
            <FooterLinkColumn key={section.title} section={section} />
          ))}
        </div>

        <div className="divide-y divide-gray-200 px-6 md:hidden">
          {footerSections.map((section) => {
            const isOpen = openSection === section.title;
            const sectionPanelId = `footer-section-${createSectionHref(section.title).slice(1)}`;

            return (
              <div key={section.title} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={sectionPanelId}
                  className="flex w-full items-center justify-between font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gray-800"
                  onClick={() => setOpenSection(isOpen ? null : section.title)}
                >
                  {section.title}
                  <span aria-hidden="true" className="text-[18px] leading-none">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.ul
                      id={sectionPanelId}
                      className="overflow-hidden pt-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link
                            href={createSectionHref(link)}
                            className="font-body text-[13px] font-light leading-[2.2] text-gray-600 transition-colors duration-150 hover:text-gray-900"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 bg-gray-800 px-10 py-8">
        <div className="flex flex-row flex-wrap gap-2" aria-label="Formas de pagamento">
          {paymentLogos.map((logo) => (
            <span
              key={logo}
              className="rounded border border-white/20 px-2 py-1 font-body text-[10px] font-semibold uppercase text-white/40"
            >
              {logo}
            </span>
          ))}
        </div>

        <div className="flex flex-row gap-4" aria-label="Redes sociais">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-white/50 transition hover:-translate-y-0.5 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            </Link>
          ))}
        </div>

        <p className="font-body text-[11px] text-white/40">
          © 2026 Valutin. Todos os direitos reservados.
        </p>

        <p className="w-full border-t border-white/10 pt-6 font-body text-[10px] leading-relaxed text-white/20">
          A Valutin é uma marca de moda infantil premium inspirada no melhor da tradição francesa. Com coleções
          exclusivas para bebês e crianças de 0 a 12 anos, unimos qualidade artesanal, algodão orgânico certificado e
          design atemporal. Nossas peças são desenvolvidas para momentos especiais e o dia a dia, sempre com o conforto
          e a elegância que seu filho merece.
        </p>
      </section>
    </footer>
  );
}

function FooterLinkColumn({ section }: { section: FooterSection }) {
  return (
    <div>
      <h3 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gray-800">
        {section.title}
      </h3>
      <ul>
        {section.links.map((link) => (
          <li key={link}>
            <Link
              href={createSectionHref(link)}
              className="font-body text-[13px] font-light leading-[2.2] text-gray-600 transition-colors duration-150 hover:text-gray-900"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
