import { Ingrediente } from "../types";

/** Medida tal como um barman a lê: "5 cl", "Top", "1/2 jarra", "q.b.". */
export function formatMeasure(
  { quantidade, unidade }: Ingrediente,
  labels = { top: "Top", qb: "q.b." },
) {
  if (quantidade === "q.b.") {
    return unidade === "completar" || unidade === "top"
      ? labels.top
      : labels.qb;
  }
  return { quantidade, unidade };
}

export function measureText(
  ingredient: Ingrediente,
  labels?: { top: string; qb: string },
) {
  const measure = formatMeasure(ingredient, labels);
  return typeof measure === "string"
    ? measure
    : `${measure.quantidade} ${measure.unidade}`;
}

/** Nome curto para pré-visualizações (sem notas entre parênteses). */
export function shortName(name: string) {
  return name.replace(/\s*\(.*?\)\s*/g, " ").trim();
}
