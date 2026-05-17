import type { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_SITE_URL || "https://www.valutin.com.br";

const categories = [
  "/bebe",
  "/crianca",
  "/calcados",
  "/acessorios",
  "/quarto",
  "/presentes",
  "/edicao-verao",
  "/ocasioes",
  "/novidades",
  "/promocao",
] as const;

const institutionalPages = [
  "/sobre",
  "/servicos",
  "/clube",
  "/lojas",
  "/cartao-presente",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${host}/`,
      changeFrequency: "daily",
      priority: 1,
    },
    ...categories.map((path) => ({
      url: `${host}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...institutionalPages.map((path) => ({
      url: `${host}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
