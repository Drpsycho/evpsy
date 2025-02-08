import React from 'react';

export default function Newcomers() {
  return (
    <div className="min-h-screen pt-20 bg-[var(--background)]">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">Информация для новых клиентов</h1>
          <p className="text-xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
            Коротко о том, как проходит первая встреча и что важно знать заранее
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Формат встречи */}
          <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Формат встречи
            </h2>
            <div className="space-y-3 text-[var(--foreground)] opacity-80">
              <p>• Продолжительность первой встречи: 60-90 минут</p>
              <p>• Формат: очно или онлайн (Zoom, WhatsApp)</p>
              <p>• Стоимость первой консультации: 3 500 ₽</p>
              <p>• Основной подход: когнитивно-поведенческая терапия (КПТ)</p>
              <p>• Оплата: наличные или перевод на карту</p>
            </div>
          </div>

          {/* Что взять с собой */}
          <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Что взять с собой
            </h2>
            <div className="space-y-3 text-[var(--foreground)] opacity-80">
              <p>• Всё, что поможет вам чувствовать себя спокойнее и свободнее</p>
              <p>• При желании: блокнот для заметок</p>
              <p>• Для очной встречи: удобную одежду</p>
              <p>• Если есть, список тем или вопросов, которые хочется обсудить</p>
            </div>
          </div>

          {/* Структура первой встречи */}
          <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg md:col-span-2">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Структура первой встречи
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  1. Знакомство (10-15 минут)
                </h3>
                <p className="text-[var(--foreground)] opacity-80">
                  Знакомство, обсуждение формата работы, конфиденциальности и организационных моментов
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  2. Запрос (20-25 минут)
                </h3>
                <p className="text-[var(--foreground)] opacity-80">
                  Обсуждение причины обращения, ваших целей и ожиданий от терапии
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  3. Сбор информации (25-30 минут)
                </h3>
                <p className="text-[var(--foreground)] opacity-80">
                  Более детальный разговор о вашей ситуации и уточняющие вопросы
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  4. Обратная связь (10-15 минут)
                </h3>
                <p className="text-[var(--foreground)] opacity-80">
                  Подведение итогов встречи, первые рекомендации и обсуждение возможного плана дальнейшей работы
                </p>
              </div>
            </div>
          </div>

          {/* Часто задаваемые вопросы */}
          <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-lg md:col-span-2">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Частые вопросы первой встречи
            </h2>
            <div className="space-y-4 text-[var(--foreground)] opacity-80">
              <p>• Что привело вас к решению обратиться к психологу?</p>
              <p>• Были ли раньше попытки решить эту проблему? Если да, то как?</p>
              <p>• Какие изменения вы хотели бы видеть в результате нашей работы?</p>
              <p>• Есть ли у вас опыт работы с психологом?</p>
              <p>• Принимаете ли вы какие-либо медикаменты?</p>
              <p>• Какие у вас есть вопросы ко мне?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
