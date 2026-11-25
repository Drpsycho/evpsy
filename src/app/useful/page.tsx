import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Полезное",
  description: "Статьи о психологии и упражнения для самостоятельной практики.",
  alternates: { canonical: "/useful" },
};

const materials = [
  {
    href: "/useful/emotion-wheel",
    type: "Интерактивное упражнение",
    title: "Круг эмоций",
    description: "Когда сложно понять, что чувствуешь, попробуйте найти подходящее слово с помощью круга.",
  },
];

export default function UsefulPage() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="section-title mb-5">Полезное</h1>
          <p className="section-lead">Статьи о психологии и упражнения для самостоятельной практики.</p>
        </header>

        <ul className="mx-auto grid max-w-3xl gap-5">
          {materials.map(({ href, type, title, description }) => (
            <li key={href}>
              <Link
                href={href}
                className="card group flex flex-col items-start gap-5 transition-colors hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:flex-row sm:items-center sm:gap-8 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_-22.5deg,#f4d78d,#c7dbab,#abd9ce,#b8cee6,#c7bfdf,#edb6aa,#d1d9ab,#efc3d1,#f4d78d)] sm:h-28 sm:w-28"
                >
                  <div className="h-7 w-7 rounded-full bg-[var(--background)] sm:h-10 sm:w-10" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--accent)]">{type}</p>
                  <h2 className="mt-2 text-4xl font-semibold leading-none">{title}</h2>
                  <p className="text-muted mt-3 max-w-lg leading-7">{description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] group-hover:underline">
                    Открыть упражнение <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
