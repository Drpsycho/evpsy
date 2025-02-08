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
    <div className="min-h-screen pt-20 bg-[var(--background)]">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">Услуги</h1>
          <p className="text-xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
            Форматы работы, которые помогают бережно разобраться в запросе и подобрать подходящий способ поддержки
          </p>
          <p className="text-base text-[var(--foreground)] opacity-70 max-w-2xl mx-auto mt-4">
            В индивидуальной работе основной подход - когнитивно-поведенческая терапия с опорой на ясные цели, наблюдение за мыслями, эмоциями и поведенческими паттернами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[var(--card-background)] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
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
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm text-[var(--foreground)] opacity-70">
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
