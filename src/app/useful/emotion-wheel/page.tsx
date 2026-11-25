import type { Metadata } from "next";
import Link from "next/link";
import EmotionWheel from "./EmotionWheel";

export const metadata: Metadata = {
  title: "Круг эмоций",
  description: "Интерактивное упражнение, чтобы подобрать слова для своих чувств и заметить, насколько сильно они ощущаются.",
  alternates: { canonical: "/useful/emotion-wheel" },
};

const sources = [
  {
    title: "The GRID meets the wheel",
    href: "https://archive-ouverte.unige.ch/unige:97384",
    description: "Scherer и коллеги (2013) описывают Женевский круг эмоций, в котором 20 групп расположены по кругу, а интенсивность отмечается по пятибалльной шкале.",
  },
  {
    title: "Putting feelings into words",
    href: "https://pubmed.ncbi.nlm.nih.gov/17576282/",
    description: "Lieberman и коллеги (2007) исследовали с помощью фМРТ, как называние эмоций связано с реакцией мозга на эмоциональные изображения.",
  },
  {
    title: "Doing What Matters in Times of Stress (PDF)",
    href: "https://iris.who.int/bitstream/handle/10665/331901/9789240003910-eng.pdf?sequence=1",
    description: "В руководстве ВОЗ по работе со стрессом (2020, с. 61–64) практика Notice and Name предлагает заметить чувство или мысль и назвать их про себя.",
  },
];

export default function EmotionWheelPage() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <Link href="/useful" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline">
          <span aria-hidden="true">←</span> Все материалы
        </Link>
        <article className="mt-7">
          <header className="mb-7 max-w-2xl sm:mb-9">
            <h1 className="section-title">Круг эмоций</h1>
            <p className="section-lead mt-4">
              Выберите в круге то, что ближе к вашему состоянию, а затем попробуйте подобрать более точное слово.
            </p>
            <a href="#sources" className="mt-3 inline-block text-sm font-medium text-[var(--accent)] underline underline-offset-4">
              О круге и источниках
            </a>
          </header>

          <EmotionWheel />

          <section className="mx-auto mt-10 max-w-2xl sm:mt-14" aria-labelledby="using-the-wheel">
            <h2 id="using-the-wheel" className="text-3xl font-semibold">Как пользоваться кругом</h2>
            <p className="text-muted mt-4 leading-7">
              Вспомните конкретный момент или обратите внимание на то, что чувствуете прямо сейчас. Например, за общим «мне грустно» может быть одиночество после разговора или разочарование из-за несбывшегося ожидания.
            </p>
            <p className="text-muted mt-3 leading-7">
              Можно остановиться на общем слове. Если чувств несколько, попробуйте пройти круг для каждого отдельно. Если подходящего слова пока нет, попробуйте описать ощущение своими словами.
            </p>
          </section>

          <section id="sources" className="mx-auto mt-10 max-w-2xl scroll-mt-28 border-t border-[var(--border-soft)] pt-8" aria-labelledby="sources-title">
            <h2 id="sources-title" className="text-3xl font-semibold">О круге и источниках</h2>
            <p className="text-muted mt-4 leading-7">
              В этом упражнении восемь групп и примеры слов подобраны для самостоятельного наблюдения за своими чувствами. Круговой формат и оценка интенсивности также используются в исследовательском Женевском круге эмоций.
            </p>
            <ul className="mt-4 space-y-4">
              {sources.map(({ title, href, description }) => (
                <li key={href}>
                  <p className="text-muted leading-7">{description}</p>
                  <a href={href} lang="en" className="inline-block font-medium text-[var(--accent)] underline underline-offset-4">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
