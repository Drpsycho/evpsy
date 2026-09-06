import Link from "next/link";

const services = [
  {
    title: "Очная индивидуальная консультация",
    description: "Встреча один на один, где можно спокойно рассказать, что происходит, без спешки и ощущения, что вас оценивают. Подходит, если внутри накопилось много тревоги, непонятных чувств, сложностей в отношениях или повторяющихся ситуаций, из которых хочется наконец выйти.",
    details: [
      "Мы вместе разбираем ваш запрос, замечаем привычные реакции и ищем, что может помочь именно вам.",
      "После встречи обычно становится понятнее, с чем вы столкнулись и какой следующий шаг будет самым бережным."
    ],
    duration: "60 минут",
    price: "3 000 ₽"
  },
  {
    title: "Онлайн индивидуальная консультация",
    description: "Та же индивидуальная работа, только по видеосвязи. Удобно, если вы в другом городе, много ездите или просто чувствуете себя спокойнее дома. Онлайн-встреча не делает разговор менее живым: мы так же разбираем запрос, чувства и то, что сейчас особенно болит.",
    details: [
      "Для встречи достаточно тихого места, интернета и часа времени, когда вас не будут отвлекать.",
      "Время можно согласовать по Томску или по Москве, чтобы не мучиться с пересчётом часовых поясов."
    ],
    duration: "60 минут",
    price: "3 000 ₽"
  }
];

export default function Services() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card flex h-full flex-col transition-transform hover:translate-y-[-3px]"
            >
              <h3 className="font-heading mb-4 text-3xl leading-tight text-[var(--foreground)]">
                {service.title}
              </h3>
              <div className="text-muted flex-1 space-y-4 leading-7">
                <p>
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.details.map((detail) => (
                    <p key={detail}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--border-soft)] pt-5">
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
          ))}
        </div>
      </main>
    </div>
  );
} 
