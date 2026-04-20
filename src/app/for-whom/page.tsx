import React from 'react';

export default function ForWhom() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="section-title mb-6">Как я работаю</h1>
          <p className="section-lead mx-auto max-w-2xl">
            Профессиональную и бережную поддержку для разных жизненных ситуаций
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Новый взгляд на ситуацию
              </h2>
              <p className="text-muted leading-7">
                Помогаю посмотреть на запрос, переживания и решения шире, спокойнее и без лишнего давления.
              </p>
            </div>
            
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Профессиональный подход
              </h2>
              <p className="text-muted leading-7">
                Я регулярно прохожу личную терапию, супервизию и продолжаю профессиональное обучение. Основной подход в работе - когнитивно-поведенческая терапия.
              </p>
            </div>
            
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Методы под ваш запрос
              </h2>
              <p className="text-muted leading-7">
                В работе опираюсь на КПТ-инструменты: исследование мыслей, эмоций и поведенческих реакций. При необходимости дополняю их другими методами под ваш запрос.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Конфиденциальность
              </h2>
              <p className="text-muted leading-7">
                Конфиденциальность - одно из базовых правил психологической работы. Это помогает создавать безопасное пространство для открытого разговора.
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Безоценочное отношение
              </h2>
              <p className="text-muted leading-7">
                Я не оцениваю вас, ваши чувства или поступки по критериям «хорошо» и «плохо». Для меня важно понять ваш опыт и бережно его исследовать.
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Доверие и открытость
              </h2>
              <p className="text-muted leading-7">
                В работе мне важно, чтобы вы чувствовали себя спокойно, безопасно и могли говорить открыто. Доверительная атмосфера - основа устойчивого терапевтического контакта.
              </p>
            </div>

          </div>
          
        </div>
        <hr className="my-10 w-full border-t border-[var(--border-soft)]" />
        
        <div className="mb-16 text-center">
          <h1 className="section-title mb-6">С какими запросами я работаю</h1>
          <p className="section-lead mx-auto max-w-2xl">
            Чаще всего ко мне обращаются с запросами, где важно снизить эмоциональное напряжение, лучше понять себя и выстроить более устойчивые способы реагирования.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Эмоциональное состояние
              </h2>
              <p className="text-muted leading-7">
                Отсутствие энергии, эмоциональное выгорание, раздражительность, стресс, тревога
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Личностный рост
              </h2>
              <p className="text-muted leading-7">
                Ситуация выбора, трудности в принятии решений, прокрастинация, поиск новых смыслов и опоры
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Самооценка и страхи
              </h2>
              <p className="text-muted leading-7">
                Неуверенность в себе, страх критики, трудности с отказом, страх открыто высказывать своё мнение
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Последствия взросления в семье с зависимостью
              </h2>
              <p className="text-muted leading-7">
                Если в семье были алкоголь, другая зависимость, непредсказуемость или нарушение границ, это может влиять на чувство безопасности, самооценку, доверие к себе и отношения с близкими.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Жизненные трудности
              </h2>
              <p className="text-muted leading-7">
                Поиск выхода из сложной жизненной ситуации, неудовлетворённость жизнью, ощущение тупика или неуспешности
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Отношения
              </h2>
              <p className="text-muted leading-7">
                Сложности в отношениях с близкими, переживание обиды, вины, стыда, злости
              </p>
            </div>

            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Другие темы
              </h2>
              <p className="text-muted leading-7">
                Если ваш запрос не вошёл в список, это не значит, что с ним нельзя работать. Напишите, и мы вместе посмотрим, чем я могу быть полезна.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
