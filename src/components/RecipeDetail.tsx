import { useEffect, useId, useRef, useState } from "react";
import {
  Check,
  GlassWater,
  Leaf,
  RotateCcw,
  Star,
  SunMedium,
  Wand2,
  X,
} from "lucide-react";
import { Receita } from "../types";
import { formatMeasure } from "../lib/format";
import DrinkImage from "./DrinkImage";
import { useT } from "../i18n";

interface RecipeDetailProps {
  recipe: Receita;
  onClose: () => void;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}

type WakeLockSentinelLike = { release: () => Promise<void> };

/** Mantém o ecrã ligado enquanto a ficha está aberta (quando o browser deixa). */
function useScreenAwake() {
  const [awake, setAwake] = useState(false);
  useEffect(() => {
    const nav = navigator as Navigator & {
      wakeLock?: { request: (type: "screen") => Promise<WakeLockSentinelLike> };
    };
    if (!nav.wakeLock) return;
    let sentinel: WakeLockSentinelLike | null = null;
    let cancelled = false;
    const request = async () => {
      try {
        const lock = await nav.wakeLock!.request("screen");
        if (cancelled) {
          lock.release().catch(() => {});
          return;
        }
        sentinel = lock;
        setAwake(true);
      } catch {
        setAwake(false);
      }
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") request();
    };
    request();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      sentinel?.release().catch(() => {});
    };
  }, []);
  return awake;
}

export default function RecipeDetail({
  recipe,
  onClose,
  isFavorite,
  toggleFavorite,
}: RecipeDetailProps) {
  const { t } = useT();
  const titleId = useId();
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = useRef(onClose);
  const [completed, setCompleted] = useState<number[]>([]);
  const [condensed, setCondensed] = useState(false);
  const awake = useScreenAwake();
  close.current = onClose;

  useEffect(() => {
    setCompleted([]);
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus({ preventScroll: true });
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close.current();
      }
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = Array.from(
        panel.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) {
        event.preventDefault();
        panel.current.focus();
      } else if (
        event.shiftKey &&
        (document.activeElement === first ||
          !panel.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !panel.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      if (previousFocus?.isConnected)
        previousFocus.focus({ preventScroll: true });
    };
  }, [recipe.id]);

  const toggleStep = (index: number) =>
    setCompleted((current) =>
      current.includes(index)
        ? current.filter((step) => step !== index)
        : [...current, index],
    );

  const total = recipe.passos.length;
  const done = completed.length;

  return (
    <div
      className="sheet-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panel}
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className={"sheet-toolbar" + (condensed ? " is-solid" : "")}>
          <p className="sheet-toolbar-title" aria-hidden="true">
            {recipe.nome}
          </p>
          <button
            type="button"
            className={"glass-button" + (isFavorite ? " is-active" : "")}
            onClick={() => toggleFavorite(recipe.id)}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? t.removeFav : t.saveFav}
          >
            <Star
              size={20}
              fill={isFavorite ? "currentColor" : "none"}
              aria-hidden="true"
            />
          </button>
          <button
            ref={closeButton}
            type="button"
            className="glass-button"
            onClick={onClose}
            aria-label={t.close}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div
          className="sheet-scroll"
          onScroll={(event) => {
            const header = event.currentTarget.querySelector(".sheet-header");
            const next = header
              ? header.getBoundingClientRect().bottom <
                event.currentTarget.getBoundingClientRect().top + 72
              : false;
            setCondensed((current) => (current === next ? current : next));
          }}
        >
          <div className="sheet-media">
            <DrinkImage
              name={recipe.nome}
              imageId={recipe.id}
              className="sheet-image"
              showMissingLabel
              eager
            />
          </div>

          <div className="sheet-content">
            <header className="sheet-header">
              <p className="kicker">{t.categories[recipe.categoria]}</p>
              <h2 id={titleId}>{recipe.nome}</h2>
              {recipe.tags.length > 0 && (
                <p className="sheet-tags">{recipe.tags.join(" · ")}</p>
              )}
            </header>

            <dl className="service-facts">
              <div>
                <dt>
                  <GlassWater size={16} aria-hidden="true" /> {t.glass}
                </dt>
                <dd>{recipe.copo}</dd>
              </div>
              <div>
                <dt>
                  <Wand2 size={16} aria-hidden="true" /> {t.technique}
                </dt>
                <dd>{recipe.tecnica}</dd>
              </div>
              <div className="is-wide">
                <dt>
                  <Leaf size={16} aria-hidden="true" /> {t.garnish}
                </dt>
                <dd>{recipe.garnish}</dd>
              </div>
            </dl>

            <section
              className="sheet-section"
              aria-labelledby={`${titleId}-ing`}
            >
              <h3 className="section-title" id={`${titleId}-ing`}>
                {t.ingredients} <span>{recipe.ingredientes.length}</span>
              </h3>
              <ul className="spec-list">
                {recipe.ingredientes.map((ingredient, index) => {
                  const measure = formatMeasure(ingredient, t);
                  return (
                    <li key={index}>
                      <span className="spec-measure">
                        {typeof measure === "string" ? (
                          <b>{measure}</b>
                        ) : (
                          <>
                            <b>{measure.quantidade}</b>
                            <small>{measure.unidade}</small>
                          </>
                        )}
                      </span>
                      <span className="spec-name">{ingredient.nome}</span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              className="sheet-section"
              aria-labelledby={`${titleId}-prep`}
            >
              <div className="section-head">
                <h3 className="section-title" id={`${titleId}-prep`}>
                  {t.preparation} <span>{t.steps(total)}</span>
                </h3>
                <button
                  type="button"
                  className="text-button"
                  onClick={() => setCompleted([])}
                  disabled={done === 0}
                >
                  <RotateCcw size={15} aria-hidden="true" /> {t.restart}
                </button>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={done}
                aria-label={t.stepsDone}
              >
                <span style={{ width: `${(done / total) * 100}%` }} />
              </div>
              <p className="progress-label" aria-live="polite">
                {done === total ? t.ready : t.progress(done, total)}
              </p>
              <ol className="step-list">
                {recipe.passos.map((step, index) => {
                  const isDone = completed.includes(index);
                  return (
                    <li key={index} className={isDone ? "is-done" : ""}>
                      <label>
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleStep(index)}
                          aria-label={t.stepAria(index + 1, step)}
                        />
                        <span className="step-marker" aria-hidden="true">
                          {isDone ? (
                            <Check size={18} strokeWidth={2.5} />
                          ) : (
                            index + 1
                          )}
                        </span>
                        <span className="step-text">{step}</span>
                      </label>
                    </li>
                  );
                })}
              </ol>
            </section>

            {recipe.observacoes && (
              <aside className="service-note is-warning">
                <p>
                  <strong>{t.serviceNote}</strong> {recipe.observacoes}
                </p>
              </aside>
            )}

            <footer className="sheet-footer">
              {awake && (
                <p className="awake-note">
                  <SunMedium size={15} aria-hidden="true" /> {t.awake}
                </p>
              )}
              <button
                type="button"
                className="primary-button"
                onClick={onClose}
              >
                {t.back}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
