import { Categoria } from "../types";
import { useT } from "../i18n";
import { CupSoda, LayoutGrid, Leaf, Martini, Wine } from "lucide-react";

interface Props {
  activeCategory: Categoria | "Todos";
  setActiveCategory: (category: Categoria | "Todos") => void;
  counts: Record<string, number>;
}

const categories = [
  { id: "Todos", icon: LayoutGrid },
  { id: "Cocktails", icon: Martini },
  { id: "Garnish de Gins", icon: Leaf },
  { id: "Sem Álcool", icon: CupSoda },
  { id: "Sangrias", icon: Wine },
] as const;

export default function CategoryFilters({
  activeCategory,
  setActiveCategory,
  counts,
}: Props) {
  const { t } = useT();
  return (
    <nav className="chips" aria-label={t.categoriesLabel}>
      {categories.map(({ id, icon: Icon }) => (
        <button
          type="button"
          key={id}
          aria-pressed={activeCategory === id}
          onClick={() => setActiveCategory(id)}
          className={"chip" + (activeCategory === id ? " is-active" : "")}
        >
          <Icon size={17} aria-hidden="true" />
          <span>{t.categories[id]}</span>
          <b>{counts[id] || 0}</b>
        </button>
      ))}
    </nav>
  );
}
