import type { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_SITE_URL || "https://www.valutin.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/minha-conta", "/checkout"],
    },
    host,
    sitemap: `${host}/sitemap.xml`,
  };
}
