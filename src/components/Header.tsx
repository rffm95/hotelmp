import { useEffect, useRef } from "react";
import { useT, Lang } from "../i18n";
import { BrandFan } from "./BrandFan";
import { Moon, Search, Star, Sun, X } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
  favoritesCount: number;
  setLang: (lang: Lang) => void;
}

export default function Header(props: HeaderProps) {
  const { t, lang } = useT();
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.key === "/" &&
        !document.querySelector('[aria-modal="true"]') &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) &&
        !target.isContentEditable
      ) {
        event.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a
          className="brand"
          href={import.meta.env.BASE_URL}
          aria-label={t.brandHome}
        >
          <span className="brand-mark" aria-hidden="true">
            <BrandFan />
          </span>
          <span className="brand-text">
            <strong>Montepiedra</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <div className="search" role="search">
          <Search size={20} aria-hidden="true" />
          <input
            ref={input}
            aria-label={t.searchLabel}
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            spellCheck={false}
            placeholder={t.searchPlaceholder}
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") props.setSearchQuery("");
              if (e.key === "Enter") e.currentTarget.blur();
            }}
          />
          {props.searchQuery ? (
            <button
              type="button"
              className="search-clear"
              aria-label={t.clearSearch}
              onClick={() => {
                props.setSearchQuery("");
                input.current?.focus();
              }}
            >
              <X size={18} aria-hidden="true" />
            </button>
          ) : (
            <kbd aria-hidden="true">/</kbd>
          )}
        </div>

        <div className="topbar-actions">
          <div className="lang-switch" role="group" aria-label={t.language}>
            {(["pt", "es"] as const).map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                aria-label={code === "pt" ? "Português" : "Español"}
                onClick={() => props.setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={
              "pill-button" + (props.showFavorites ? " is-active" : "")
            }
            aria-label={t.favoritesAria(props.favoritesCount)}
            aria-pressed={props.showFavorites}
            onClick={() => props.setShowFavorites(!props.showFavorites)}
          >
            <Star
              size={18}
              fill={props.showFavorites ? "currentColor" : "none"}
              aria-hidden="true"
            />
            <span className="pill-label">{t.favorites}</span>
            {props.favoritesCount > 0 && (
              <b className="pill-count">{props.favoritesCount}</b>
            )}
          </button>
          <button
            type="button"
            className="pill-button"
            aria-label={props.isDarkMode ? t.toDayAria : t.toBarAria}
            onClick={props.toggleDarkMode}
          >
            {props.isDarkMode ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
            <span className="pill-label">
              {props.isDarkMode ? t.toDay : t.toBar}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
