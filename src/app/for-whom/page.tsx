import React from 'react';

export default function ForWhom() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="section-title mb-6">Как я работаю</h1>
          <p className="section-lead mx-auto max-w-2xl">
            В основе работы - ясный профессиональный подход, бережное отношение и совместное исследование вашего запроса
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
                Я регулярно прохожу личную терапию, супервизию и продолжаю профессиональное обучение. Основной подход в работе - схема-терапия, современное направление третьей волны КПТ.
              </p>
            </div>
            
            <div className="card">
              <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
                Индивидуальный подход
              </h2>
              <p className="text-muted leading-7">
                У каждого клиента своя история, темп и способ справляться с трудностями. Поэтому я подбираю формат работы под ваш запрос, состояние и цели, сохраняя бережность, ясность и профессиональную опору.
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
          <div className="card md:col-span-2">
            <h2 className="font-heading mb-4 text-[2rem] leading-none text-[var(--foreground)]">
              Последствия взросления в дисфункциональной семье
            </h2>
            <p className="text-muted leading-7">
              Работаю с темами ВДА - взрослых детей алкоголиков, а также с опытом взросления в семьях, где были зависимость, эмоциональная непредсказуемость, нарушение границ, критика, холодность или необходимость рано становиться «взрослым». Такой опыт может влиять на чувство безопасности, самооценку, доверие к себе, выбор партнёров и отношения с близкими.
            </p>
          </div>

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
