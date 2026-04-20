import React from 'react';

export default function Newcomers() {
  return (
    <div className="page-shell min-h-screen pt-24">
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="section-title mb-6">Информация для новых клиентов</h1>
          <p className="section-lead mx-auto max-w-2xl">
            Коротко о том, как проходит первая встреча и что важно знать заранее
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="font-heading mb-4 text-4xl leading-none text-[var(--foreground)]">
              Формат встречи
            </h2>
            <div className="text-muted space-y-3 leading-7">
              <p>• Продолжительность первой встречи: 60-90 минут</p>
              <p>• Формат: очно или онлайн (Zoom, WhatsApp)</p>
              <p>• Стоимость первой консультации: 3 500 ₽</p>
              <p>• Основной подход: когнитивно-поведенческая терапия (КПТ)</p>
              <p>• Оплата: наличные или перевод на карту</p>
            </div>
          </div>

          <div className="card">
            <h2 className="font-heading mb-4 text-4xl leading-none text-[var(--foreground)]">
              Что взять с собой
            </h2>
            <div className="text-muted space-y-3 leading-7">
              <p>• Всё, что поможет вам чувствовать себя спокойнее и свободнее</p>
              <p>• При желании: блокнот для заметок</p>
              <p>• Для очной встречи: удобную одежду</p>
              <p>• Если есть, список тем или вопросов, которые хочется обсудить</p>
            </div>
          </div>

          <div className="card md:col-span-2">
            <h2 className="font-heading mb-4 text-4xl leading-none text-[var(--foreground)]">
              Структура первой встречи
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading mb-2 text-2xl text-[var(--foreground)]">
                  1. Знакомство (10-15 минут)
                </h3>
                <p className="text-muted leading-7">
                  Знакомство, обсуждение формата работы, конфиденциальности и организационных моментов
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-2xl text-[var(--foreground)]">
                  2. Запрос (20-25 минут)
                </h3>
                <p className="text-muted leading-7">
                  Обсуждение причины обращения, ваших целей и ожиданий от терапии
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-2xl text-[var(--foreground)]">
                  3. Сбор информации (25-30 минут)
                </h3>
                <p className="text-muted leading-7">
                  Более детальный разговор о вашей ситуации и уточняющие вопросы
                </p>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-2xl text-[var(--foreground)]">
                  4. Обратная связь (10-15 минут)
                </h3>
                <p className="text-muted leading-7">
                  Подведение итогов встречи, первые рекомендации и обсуждение возможного плана дальнейшей работы
                </p>
              </div>
            </div>
          </div>

          <div className="card md:col-span-2">
            <h2 className="font-heading mb-4 text-4xl leading-none text-[var(--foreground)]">
              Частые вопросы первой встречи
            </h2>
            <div className="text-muted space-y-4 leading-7">
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
