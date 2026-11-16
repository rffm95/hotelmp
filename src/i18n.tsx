import { createContext, useContext } from "react";
import { Categoria, GinGarnish, Receita } from "./types";
import { GINS_ES, RECIPES_ES, UNITS_ES } from "./data/recipes.es";

export type Lang = "pt" | "es";

const pt = {
  htmlLang: "pt-PT",
  title: "Hotel Montepiedra · Manual de Bar",
  skip: "Saltar para as bebidas",
  brandSub: "Hotel · Manual de bar",
  brandHome: "Hotel Montepiedra, manual de bar: início",
  searchLabel: "Pesquisar bebida, ingrediente, copo ou garnish",
  searchPlaceholder: "Bebida, ingrediente ou garnish",
  clearSearch: "Limpar pesquisa",
  favorites: "Favoritos",
  favoritesAria: (n: number) => `Favoritos: ${n} guardados`,
  toDay: "Modo dia",
  toBar: "Modo bar",
  toDayAria: "Mudar para modo dia (fundo claro)",
  toBarAria: "Mudar para modo bar (fundo escuro)",
  language: "Idioma",
  languageAria: "Mudar idioma para espanhol",
  introLabel: "Manual de bar do Hotel Montepiedra",
  kicker: "Hotel Montepiedra · Equipa de bar",
  heroA: "Cada medida, ",
  heroB: "cada detalhe.",
  heroLead:
    "Receitas, medidas, copos e garnish da casa, prontos a consultar em segundos durante o serviço.",
  statRecipes: "receitas",
  statGins: "gins com garnish",
  statNoAlcohol: "sem álcool",
  featureKicker: "Assinatura da casa",
  openRecipe: (name: string) => `Abrir ficha: ${name}`,
  collectionLabel: "Bebidas e receitas",
  categoriesLabel: "Categorias de bebidas",
  categories: {
    Todos: "Tudo",
    Cocktails: "Cocktails",
    "Garnish de Gins": "Gin & tónica",
    "Sem Álcool": "Sem álcool",
    Sangrias: "Sangrias",
  } as Record<Categoria | "Todos", string>,
  titleAll: "Todas as bebidas",
  titleFavorites: "Os teus favoritos",
  titleResults: "Resultados",
  results: (n: number) => `${n} ${n === 1 ? "resultado" : "resultados"}`,
  sort: "Ordenar",
  sortHouse: "Ordem da casa",
  sortAz: "A–Z",
  view: "Apresentação",
  viewGrid: "Vista em cartões",
  viewList: "Vista em lista rápida",
  onlyFavorites: "Só favoritos",
  clear: "Limpar",
  ginTitle: "Gin & tónica",
  ginSubtitle: "Tónica e garnish certos para cada gin.",
  emptyFavTitle: "Ainda sem favoritos",
  emptyFavText: "Toca na estrela de uma bebida para a teres sempre à mão aqui.",
  emptyTitle: "Não encontrámos essa bebida",
  emptyText:
    "Experimenta outro nome, um ingrediente (ex.: maracujá) ou um garnish.",
  emptyButton: "Ver todas as bebidas",
  footer: "O cuidado está em cada detalhe.",
  // Cartões
  mainIngredients: "Principais ingredientes",
  moreIngredients: (n: number) =>
    `+ ${n} ${n === 1 ? "ingrediente" : "ingredientes"}`,
  seeRecipe: "Ver ficha",
  save: (name: string) => `Guardar ${name} nos favoritos`,
  unsave: (name: string) => `Remover ${name} dos favoritos`,
  // Gins
  tonic: "Tónica",
  garnish: "Garnish",
  housePolicyStrong: "Padrão da casa.",
  housePolicy:
    "Onde a receita original pedia Fever-Tree, serve-se tónica 1724.",
  // Ficha
  close: "Fechar ficha",
  saveFav: "Guardar nos favoritos",
  removeFav: "Remover dos favoritos",
  glass: "Copo",
  technique: "Técnica",
  ingredients: "Ingredientes",
  preparation: "Preparação",
  steps: (n: number) => `${n} passos`,
  restart: "Recomeçar",
  stepsDone: "Passos concluídos",
  ready: "Pronto a servir",
  progress: (done: number, total: number) =>
    `${done} de ${total} concluídos · toca num passo para o marcar`,
  stepAria: (i: number, step: string) => `Passo ${i}: ${step}`,
  serviceNote: "Nota de serviço.",
  awake: "O ecrã fica ligado enquanto a ficha estiver aberta.",
  back: "Voltar às bebidas",
  // Imagens
  illustration: "Ilustração",
  imgIllustration: ", imagem ilustrativa",
  imgPhoto: ", fotografia da bebida",
  noPhoto: "Sem fotografia",
  imgUnavailable: "Imagem indisponível",
  // Medidas
  top: "Top",
  qb: "q.b.",
};

export type Dict = typeof pt;

const es: Dict = {
  htmlLang: "es-ES",
  title: "Hotel Montepiedra · Manual de Bar",
  skip: "Saltar a las bebidas",
  brandSub: "Hotel · Manual de bar",
  brandHome: "Hotel Montepiedra, manual de bar: inicio",
  searchLabel: "Buscar bebida, ingrediente, vaso o garnish",
  searchPlaceholder: "Bebida, ingrediente o garnish",
  clearSearch: "Borrar búsqueda",
  favorites: "Favoritos",
  favoritesAria: (n: number) => `Favoritos: ${n} guardados`,
  toDay: "Modo día",
  toBar: "Modo bar",
  toDayAria: "Cambiar a modo día (fondo claro)",
  toBarAria: "Cambiar a modo bar (fondo oscuro)",
  language: "Idioma",
  languageAria: "Cambiar idioma a portugués",
  introLabel: "Manual de bar del Hotel Montepiedra",
  kicker: "Hotel Montepiedra · Equipo de bar",
  heroA: "Cada medida, ",
  heroB: "cada detalle.",
  heroLead:
    "Recetas, medidas, vasos y garnish de la casa, listos para consultar en segundos durante el servicio.",
  statRecipes: "recetas",
  statGins: "gins con garnish",
  statNoAlcohol: "sin alcohol",
  featureKicker: "Firma de la casa",
  openRecipe: (name: string) => `Abrir ficha: ${name}`,
  collectionLabel: "Bebidas y recetas",
  categoriesLabel: "Categorías de bebidas",
  categories: {
    Todos: "Todo",
    Cocktails: "Cócteles",
    "Garnish de Gins": "Gin tonic",
    "Sem Álcool": "Sin alcohol",
    Sangrias: "Sangrías",
  },
  titleAll: "Todas las bebidas",
  titleFavorites: "Tus favoritos",
  titleResults: "Resultados",
  results: (n: number) => `${n} ${n === 1 ? "resultado" : "resultados"}`,
  sort: "Ordenar",
  sortHouse: "Orden de la casa",
  sortAz: "A–Z",
  view: "Presentación",
  viewGrid: "Vista en tarjetas",
  viewList: "Vista en lista rápida",
  onlyFavorites: "Solo favoritos",
  clear: "Borrar",
  ginTitle: "Gin tonic",
  ginSubtitle: "La tónica y el garnish adecuados para cada gin.",
  emptyFavTitle: "Aún no tienes favoritos",
  emptyFavText:
    "Toca la estrella de una bebida para tenerla siempre a mano aquí.",
  emptyTitle: "No hemos encontrado esa bebida",
  emptyText:
    "Prueba con otro nombre, un ingrediente (p. ej.: maracuyá) o un garnish.",
  emptyButton: "Ver todas las bebidas",
  footer: "El cuidado está en cada detalle.",
  mainIngredients: "Ingredientes principales",
  moreIngredients: (n: number) =>
    `+ ${n} ${n === 1 ? "ingrediente" : "ingredientes"}`,
  seeRecipe: "Ver ficha",
  save: (name: string) => `Guardar ${name} en favoritos`,
  unsave: (name: string) => `Quitar ${name} de favoritos`,
  tonic: "Tónica",
  garnish: "Garnish",
  housePolicyStrong: "Estándar de la casa.",
  housePolicy:
    "Donde la receta original pedía Fever-Tree, se sirve tónica 1724.",
  close: "Cerrar ficha",
  saveFav: "Guardar en favoritos",
  removeFav: "Quitar de favoritos",
  glass: "Vaso",
  technique: "Técnica",
  ingredients: "Ingredientes",
  preparation: "Preparación",
  steps: (n: number) => `${n} pasos`,
  restart: "Reiniciar",
  stepsDone: "Pasos completados",
  ready: "Listo para servir",
  progress: (done: number, total: number) =>
    `${done} de ${total} completados · toca un paso para marcarlo`,
  stepAria: (i: number, step: string) => `Paso ${i}: ${step}`,
  serviceNote: "Nota de servicio.",
  awake: "La pantalla se mantiene encendida mientras la ficha esté abierta.",
  back: "Volver a las bebidas",
  illustration: "Ilustración",
  imgIllustration: ", imagen ilustrativa",
  imgPhoto: ", fotografía de la bebida",
  noPhoto: "Sin fotografía",
  imgUnavailable: "Imagen no disponible",
  top: "Top",
  qb: "c.s.",
};

export const DICTS: Record<Lang, Dict> = { pt, es };

export const LangContext = createContext<{ lang: Lang; t: Dict }>({
  lang: "pt",
  t: pt,
});

export const useT = () => useContext(LangContext);

export function detectLang(): Lang {
  try {
    const stored = localStorage.getItem("hmp:lang");
    if (stored) {
      const value = JSON.parse(stored);
      if (value === "pt" || value === "es") return value;
    }
  } catch {
    /* ignora */
  }
  return typeof navigator !== "undefined" &&
    navigator.language?.toLowerCase().startsWith("es")
    ? "es"
    : "pt";
}

/** Devolve a receita no idioma pedido (as quantidades nunca mudam). */
export function localizeRecipe(recipe: Receita, lang: Lang): Receita {
  if (lang === "pt") return recipe;
  const tr = RECIPES_ES[recipe.id];
  if (!tr) return recipe;
  return {
    ...recipe,
    nome: tr.nome ?? recipe.nome,
    copo: tr.copo,
    tecnica: tr.tecnica,
    garnish: tr.garnish,
    observacoes: tr.observacoes ?? recipe.observacoes,
    tags: tr.tags,
    passos: tr.passos,
    ingredientes: recipe.ingredientes.map((ingredient, index) => ({
      ...ingredient,
      nome: tr.ingredientes[index] ?? ingredient.nome,
      unidade: UNITS_ES[ingredient.unidade] ?? ingredient.unidade,
    })),
  };
}

export function localizeGin(gin: GinGarnish, lang: Lang): GinGarnish {
  if (lang === "pt") return gin;
  const tr = GINS_ES[gin.id];
  return tr ? { ...gin, gin: tr.gin ?? gin.gin, garnish: tr.garnish } : gin;
}
