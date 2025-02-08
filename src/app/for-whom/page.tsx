import React from 'react';

export default function ForWhom() {
  return (
    <div className="min-h-screen pt-20 bg-[var(--background)]">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">Как я работаю</h1>
          <p className="text-xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
            Профессиональную и бережную поддержку для разных жизненных ситуаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Новый взгляд на ситуацию
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Помогаю посмотреть на запрос, переживания и решения шире, спокойнее и без лишнего давления.
              </p>
            </div>
            
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Профессиональный подход
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Я регулярно прохожу личную терапию, супервизию и продолжаю профессиональное обучение. Основной подход в работе - когнитивно-поведенческая терапия.
              </p>
            </div>
            
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Методы под ваш запрос
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                В работе опираюсь на КПТ-инструменты: исследование мыслей, эмоций и поведенческих реакций. При необходимости дополняю их другими методами под ваш запрос.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Конфиденциальность
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Конфиденциальность - одно из базовых правил психологической работы. Это помогает создавать безопасное пространство для открытого разговора.
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Безоценочное отношение
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Я не оцениваю вас, ваши чувства или поступки по критериям «хорошо» и «плохо». Для меня важно понять ваш опыт и бережно его исследовать.
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Доверие и открытость
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                В работе мне важно, чтобы вы чувствовали себя спокойно, безопасно и могли говорить открыто. Доверительная атмосфера - основа устойчивого терапевтического контакта.
              </p>
            </div>

          </div>
          
        </div>
        <hr className="my-8 border-t border-[var(--primary)] w-full" />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">С какими запросами я работаю</h1>
          <p className="text-xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
            Чаще всего ко мне обращаются с запросами, где важно снизить эмоциональное напряжение, лучше понять себя и выстроить более устойчивые способы реагирования.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Эмоциональное состояние
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Отсутствие энергии, эмоциональное выгорание, раздражительность, стресс, тревога
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Личностный рост
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Ситуация выбора, трудности в принятии решений, прокрастинация, поиск новых смыслов и опоры
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Самооценка и страхи
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Неуверенность в себе, страх критики, трудности с отказом, страх открыто высказывать своё мнение
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Жизненные трудности
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Поиск выхода из сложной жизненной ситуации, неудовлетворённость жизнью, ощущение тупика или неуспешности
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Отношения
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Сложности в отношениях с близкими, переживание обиды, вины, стыда, злости
              </p>
            </div>

            <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                Другие темы
              </h2>
              <p className="text-[var(--foreground)] opacity-80">
                Если ваш запрос не вошёл в список, это не значит, что с ним нельзя работать. Напишите, и мы вместе посмотрим, чем я могу быть полезна.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
