import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-brand-xlight px-6 py-16">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 rounded-xl bg-white px-6 py-12 text-center shadow-lg sm:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Valutin
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-gray-900 sm:text-6xl">
            Moda infantil premium com inspiração francesa.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Base Next.js 14 pronta para evoluir o e-commerce headless da
            Valutin com App Router, TypeScript strict e Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            href="/"
            aria-label="Ver vitrine Valutin"
          >
            Ver vitrine
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-xlight"
            href="/"
            aria-label="Conhecer a marca Valutin"
          >
            Conhecer marca
          </Link>
        </div>
      </section>
    </main>
  );
}
