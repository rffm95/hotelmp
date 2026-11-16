import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, LayoutGrid, List, SearchX, Star, X } from "lucide-react";
import { RECIPES } from "./data/recipes";
import { GIN_GARNISHES } from "./data/ginGarnish";
import { getDrinkImage } from "./data/drinkImages";
import { Categoria, Receita } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { matchesQuery } from "./lib/search";
import Header from "./components/Header";
import CategoryFilters from "./components/CategoryFilters";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import GinGarnishTable from "./components/GinGarnishTable";
import DrinkImage from "./components/DrinkImage";
import {
  DICTS,
  Lang,
  LangContext,
  detectLang,
  localizeGin,
  localizeRecipe,
} from "./i18n";

const recipeText = (r: Receita) =>
  [
    r.nome,
    r.categoria,
    r.copo,
    r.tecnica,
    r.garnish,
    ...r.tags,
    ...r.ingredientes.map((i) => i.nome),
  ].join(" ");

const prefersCompact = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(max-width: 640px)").matches;

export default function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-mode", true);
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const [layout, setLayout] = useLocalStorage<"grid" | "list">(
    "hmp-layout",
    prefersCompact() ? "list" : "grid",
  );
  const [activeCategory, setActiveCategory] = useState<Categoria | "Todos">(
    "Todos",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [sort, setSort] = useState<"menu" | "az">("menu");
  const [lang, setLang] = useLocalStorage<Lang>("lang", detectLang());
  const t = DICTS[lang];
  const recipes = useMemo(
    () => RECIPES.map((r) => localizeRecipe(r, lang)),
    [lang],
  );
  const gins = useMemo(
    () => GIN_GARNISHES.map((g) => localizeGin(g, lang)),
    [lang],
  );

  const selectedRecipe = recipes.find((r) => r.id === selectedId) ?? null;
  const setSelectedRecipe = (recipe: Receita | null) =>
    setSelectedId(recipe ? recipe.id : null);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
  }, [t]);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDarkMode ? "#0f0e0c" : "#f6f1e7");
  }, [isDarkMode]);

  const toggleFavorite = (id: string) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );

  const filteredRecipes = useMemo(
    () =>
      recipes
        .filter(
          (recipe, index) =>
            (activeCategory === "Todos" ||
              recipe.categoria === activeCategory) &&
            (!showFavorites || favorites.includes(recipe.id)) &&
            // Pesquisa nos dois idiomas: um termo em PT ou ES encontra a bebida.
            matchesQuery(
              searchQuery,
              recipeText(recipe) +
                " " +
                recipeText(RECIPES[index]) +
                " " +
                t.categories[recipe.categoria],
            ),
        )
        .sort((a, b) =>
          sort === "az"
            ? a.nome.localeCompare(b.nome, lang)
            : Number(Boolean(getDrinkImage(b.id))) -
              Number(Boolean(getDrinkImage(a.id))),
        ),
    [
      recipes,
      t,
      lang,
      searchQuery,
      activeCategory,
      showFavorites,
      favorites,
      sort,
    ],
  );

  const filteredGins = useMemo(
    () =>
      gins
        .filter(
          (gin, index) =>
            (activeCategory === "Todos" ||
              activeCategory === "Garnish de Gins") &&
            (!showFavorites || favorites.includes("gin:" + gin.id)) &&
            matchesQuery(
              searchQuery,
              [
                gin.gin,
                "gin tonica tonic",
                gin.tonica,
                gin.garnish,
                GIN_GARNISHES[index].garnish,
                gin.notas || "",
              ].join(" "),
            ),
        )
        .sort((a, b) => (sort === "az" ? a.gin.localeCompare(b.gin, lang) : 0)),
    [gins, lang, searchQuery, activeCategory, showFavorites, favorites, sort],
  );

  const counts = {
    Todos: RECIPES.length + GIN_GARNISHES.length,
    Cocktails: RECIPES.filter((r) => r.categoria === "Cocktails").length,
    "Sem Álcool": RECIPES.filter((r) => r.categoria === "Sem Álcool").length,
    Sangrias: RECIPES.filter((r) => r.categoria === "Sangrias").length,
    "Garnish de Gins": GIN_GARNISHES.length,
  };
  const total = filteredRecipes.length + filteredGins.length;
  const isBrowsing = !searchQuery && !showFavorites;

  const reset = () => {
    setSearchQuery("");
    setShowFavorites(false);
    setActiveCategory("Todos");
  };

  const title = showFavorites
    ? t.titleFavorites
    : searchQuery
      ? t.titleResults
      : activeCategory === "Todos"
        ? t.titleAll
        : activeCategory === "Garnish de Gins"
          ? t.ginTitle
          : t.categories[activeCategory];

  const heroRecipe =
    recipes.find((r) => r.id === "pornstar-martini") || recipes[0];

  return (
    <LangContext.Provider value={{ lang, t }}>
      <div className="app">
        <a className="skip-link" href="#bebidas">
          {t.skip}
        </a>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          showFavorites={showFavorites}
          setShowFavorites={(show) => {
            setShowFavorites(show);
            setActiveCategory("Todos");
          }}
          favoritesCount={favorites.length}
          setLang={setLang}
        />

        <main className="page">
          {isBrowsing && activeCategory === "Todos" && (
            <section className="intro" aria-label={t.introLabel}>
              <div className="intro-copy">
                <p className="kicker">{t.kicker}</p>
                <h1>
                  {t.heroA}
                  <em>{t.heroB}</em>
                </h1>
                <p className="intro-lead">{t.heroLead}</p>
                <ul className="intro-stats">
                  <li>
                    <b>{RECIPES.length}</b> {t.statRecipes}
                  </li>
                  <li>
                    <b>{GIN_GARNISHES.length}</b> {t.statGins}
                  </li>
                  <li>
                    <b>{counts["Sem Álcool"]}</b> {t.statNoAlcohol}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="feature"
                onClick={() => setSelectedRecipe(heroRecipe)}
                aria-label={t.openRecipe(heroRecipe.nome)}
              >
                <DrinkImage
                  name={heroRecipe.nome}
                  imageId={heroRecipe.id}
                  eager
                />
                <span className="feature-caption">
                  <span>
                    <small>{t.featureKicker}</small>
                    <strong>{heroRecipe.nome}</strong>
                  </span>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </button>
            </section>
          )}

          <section
            id="bebidas"
            className="collection"
            aria-label={t.collectionLabel}
          >
            <div className="collection-bar">
              <CategoryFilters
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                counts={counts}
              />
            </div>

            <div className="collection-head">
              <h2>
                {title}
                <span className="count" role="status" aria-live="polite">
                  {t.results(total)}
                </span>
              </h2>
              <div className="collection-controls">
                <label className="select">
                  <span className="sr-only">{t.sort}</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as "menu" | "az")}
                  >
                    <option value="menu">{t.sortHouse}</option>
                    <option value="az">{t.sortAz}</option>
                  </select>
                </label>
                {activeCategory !== "Garnish de Gins" && (
                  <div className="segmented" role="group" aria-label={t.view}>
                    <button
                      type="button"
                      aria-label={t.viewGrid}
                      aria-pressed={layout === "grid"}
                      onClick={() => setLayout("grid")}
                    >
                      <LayoutGrid size={18} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label={t.viewList}
                      aria-pressed={layout === "list"}
                      onClick={() => setLayout("list")}
                    >
                      <List size={19} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {!isBrowsing && (
              <div className="active-filters">
                {searchQuery && <span>“{searchQuery}”</span>}
                {showFavorites && (
                  <span>
                    <Star size={13} aria-hidden="true" /> {t.onlyFavorites}
                  </span>
                )}
                <button type="button" onClick={reset}>
                  {t.clear} <X size={14} aria-hidden="true" />
                </button>
              </div>
            )}

            {total ? (
              <>
                {filteredRecipes.length > 0 && (
                  <div
                    className={
                      layout === "list" ? "recipe-list" : "recipe-grid"
                    }
                  >
                    {filteredRecipes.map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        variant={layout}
                        isFavorite={favorites.includes(recipe.id)}
                        toggleFavorite={toggleFavorite}
                        onOpen={() => setSelectedRecipe(recipe)}
                      />
                    ))}
                  </div>
                )}
                {filteredGins.length > 0 && (
                  <section className="gin-section" aria-label={t.ginTitle}>
                    {filteredRecipes.length > 0 && (
                      <div className="subsection-head">
                        <h2>{t.ginTitle}</h2>
                        <p>{t.ginSubtitle}</p>
                      </div>
                    )}
                    <GinGarnishTable
                      data={filteredGins}
                      favorites={favorites}
                      toggleFavorite={toggleFavorite}
                    />
                  </section>
                )}
              </>
            ) : (
              <div className="empty-state">
                {showFavorites && !searchQuery ? (
                  <Star size={32} aria-hidden="true" />
                ) : (
                  <SearchX size={34} aria-hidden="true" />
                )}
                <h3>
                  {showFavorites && !favorites.length
                    ? t.emptyFavTitle
                    : t.emptyTitle}
                </h3>
                <p>
                  {showFavorites && !favorites.length
                    ? t.emptyFavText
                    : t.emptyText}
                </p>
                <button
                  type="button"
                  className="primary-button"
                  onClick={reset}
                >
                  {t.emptyButton}
                </button>
              </div>
            )}
          </section>
        </main>

        <footer className="site-footer">
          <span className="footer-brand">
            <small>Hotel</small> Montepiedra
          </span>
          <p>{t.footer}</p>
        </footer>

        {selectedRecipe && (
          <RecipeDetail
            key={selectedRecipe.id}
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
            isFavorite={favorites.includes(selectedRecipe.id)}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </LangContext.Provider>
  );
}
