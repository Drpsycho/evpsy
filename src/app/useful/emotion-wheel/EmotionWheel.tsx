"use client";

import { useRef, useState, type CSSProperties } from "react";
import { families, type EmotionWord } from "./emotion-families";
import styles from "./emotion-wheel.module.css";

function point(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: `${(50 + Math.sin(radians) * radius).toFixed(3)}%`,
    y: `${(50 - Math.cos(radians) * radius).toFixed(3)}%`,
  };
}

const sectorAngle = 360 / families.length;
const arcSteps = 12;
const sectorStyles = families.map(({ color }, index) => {
  const angle = index * sectorAngle;
  const halfWidth = (sectorAngle - 1.4) / 2;
  const arc = Array.from({ length: arcSteps + 1 }, (_, step) => {
    const { x, y } = point(angle - halfWidth + (2 * halfWidth * step) / arcSteps, 50);
    return `${x} ${y}`;
  });
  const label = point(angle, 31);

  return {
    clipPath: `polygon(50% 50%, ${arc.join(", ")})`,
    "--sector-color": color,
    "--label-x": label.x,
    "--label-y": label.y,
  } as CSSProperties;
});

export default function EmotionWheel() {
  const [familyIndex, setFamilyIndex] = useState<number | null>(null);
  const [word, setWord] = useState<EmotionWord | null>(null);
  const [intensity, setIntensity] = useState<number | null>(null);
  const firstSector = useRef<HTMLButtonElement>(null);
  const family = familyIndex === null ? null : families[familyIndex];

  function chooseFamily(index: number) {
    if (index === familyIndex) return;
    setFamilyIndex(index);
    setWord(null);
    setIntensity(null);
  }

  function chooseWord(nextWord: EmotionWord) {
    setWord(word === nextWord ? null : nextWord);
    setIntensity(null);
  }

  function reset() {
    setFamilyIndex(null);
    setWord(null);
    setIntensity(null);
    firstSector.current?.focus();
  }

  return (
    <div className="card grid gap-6 p-4 sm:gap-8 sm:p-7 md:grid-cols-2 lg:gap-10 lg:p-9">
      <div className={styles.wheel} role="group" aria-label="Группы эмоций">
        {families.map(({ name }, index) => (
          <button
            key={name}
            ref={index === 0 ? firstSector : undefined}
            type="button"
            className={styles.sector}
            style={sectorStyles[index]}
            aria-pressed={familyIndex === index}
            onClick={() => chooseFamily(index)}
          >
            <span className={styles.label}>{name}</span>
          </button>
        ))}
        <div className={styles.center} aria-hidden="true">
          Что я<br />чувствую?
        </div>
      </div>

      <div className="flex min-w-0 flex-col justify-center rounded-[24px] bg-[var(--background-soft)] p-5 sm:p-7">
        <h2 className="text-3xl font-semibold leading-none sm:text-4xl">
          {family ? family.name : "Что вы чувствуете?"}
        </h2>
        {family ? (
          <>
            <p id="emotion-words-label" className="text-muted mt-4 leading-6">Какое слово подходит точнее?</p>
            <p id="emotion-words-hint" className="text-muted mt-1 text-sm leading-6">
              Нажмите на слово, чтобы узнать его значение и увидеть пример.
            </p>
            <div role="group" aria-labelledby="emotion-words-label" aria-describedby="emotion-words-hint" className="mt-3 flex flex-wrap gap-2">
              {family.words.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  className={styles.choice}
                  aria-pressed={word === option}
                  aria-describedby={word === option ? "emotion-word-detail" : undefined}
                  onClick={() => chooseWord(option)}
                >
                  {option.name}
                </button>
              ))}
            </div>
            {word && (
              <div id="emotion-word-detail" className="mt-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] px-4 py-3 text-sm leading-6">
                <p><strong className="font-semibold">{word.name}.</strong> {word.meaning}</p>
                <p className="text-muted mt-2">
                  <span className="block font-medium text-[var(--foreground)]">Пример</span>
                  {word.example}
                </p>
              </div>
            )}
            <fieldset className="mt-6" aria-describedby="intensity-range">
              <legend className="text-muted leading-6">Насколько сильно это чувствуется?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className={styles.rating}>
                    <input
                      className="sr-only"
                      type="radio"
                      name="emotion-intensity"
                      value={value}
                      checked={intensity === value}
                      onChange={() => setIntensity(value)}
                    />
                    <span className={styles.choice}>{value}</span>
                  </label>
                ))}
              </div>
              <p id="intensity-range" className="text-muted mt-2 text-sm">1 — едва заметно, 5 — очень сильно</p>
            </fieldset>
          </>
        ) : (
          <p className="text-muted mt-4 max-w-sm leading-7">
            Нажмите на сектор круга. Если чувствуете сразу несколько эмоций, начните с той, которую легче заметить.
          </p>
        )}

        <div role="status">
          {family && (
            <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
              <p className="font-semibold">Моё чувство — {(word?.name ?? family.name).toLowerCase()}{intensity ? `, ${intensity} из 5` : ""}.</p>
              <p className="text-muted mt-1 text-sm leading-6">Что происходило, когда появилось это чувство?</p>
            </div>
          )}
        </div>
        {family && (
          <button type="button" className="mt-4 min-h-11 self-start text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" onClick={reset}>
            Сбросить выбор
          </button>
        )}
      </div>
    </div>
  );
}
