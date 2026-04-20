import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Индивидуальная консультация",
    description: "Личная встреча, на которой можно спокойно разобрать запрос, лучше понять своё состояние и наметить путь изменений.",
    duration: "60 минут",
    price: "2 500 ₽",
    image: "/images/individual-therapy.jpg"
  },
  {
    title: "Индивидуальная арт-терапия",
    description: "Бережный формат работы через творчество, который помогает выразить чувства, снизить напряжение и лучше услышать себя.",
    duration: "60 минут",
    price: "2 500 ₽",
    image: "/images/individual-art-therapy.jpg"
  },
  {
    title: "Групповая арт-терапия",
    description: "Совместная практика, где через творчество, поддержку группы и диалог легче проживать эмоции и находить новые смыслы.",
    duration: "80 минут",
    price: "от 1 500 ₽ с человека",
    image: "/images/family-therapy.jpg"
  },
  {
    title: "Онлайн консультации",
    description: "Полноценная психологическая консультация по видеосвязи в удобном формате, если личная встреча сейчас не подходит.",
    duration: "60 минут",
    price: "2 500 ₽",
    image: "/images/online-therapy.jpg"
  },
  // {
  //   title: "Групповая терапия",
  //   description: "Терапевтические группы для обмена опытом, получения поддержки и развития социальных навыков.",
  //   duration: "90 минут",
  //   price: "от 2000₽",
  //   image: "/images/group-therapy.jpg"
  // },
  {
    title: "Трансформационная игра «Я выбираю себя»",
    description: "Индивидуальная игровая практика для самопознания, поиска внутренних ресурсов и более ясного взгляда на важные решения.",
    duration: "2-3 часа",
    price: "от 3 500 ₽",
    image: "/images/transformational-game.webp"
  },
  {
    title: "Трансформационная игра «Я выбираю себя» Демо-версия",
    description: "Короткий ознакомительный формат, который помогает понять механику игры и определить, подходит ли она под ваш запрос.",
    duration: "30 минут",
    price: "от 1 000 ₽",
    image: "/images/transformational-game.webp"
  }
];

export default function Services() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="section-title mb-6">Услуги</h1>
          <p className="section-lead mx-auto max-w-2xl">
            Форматы работы, которые помогают бережно разобраться в запросе и подобрать подходящий способ поддержки
          </p>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-base leading-7">
            В индивидуальной работе основной подход - когнитивно-поведенческая терапия с опорой на ясные цели, наблюдение за мыслями, эмоциями и поведенческими паттернами.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card overflow-hidden transition-transform hover:translate-y-[-3px]"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading mb-3 text-3xl leading-tight text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="text-muted mb-5 leading-7">
                  {service.description}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-muted text-sm">
                      Длительность: {service.duration}
                    </p>
                    <p className="text-lg font-semibold text-[var(--primary)]">
                      {service.price}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 
