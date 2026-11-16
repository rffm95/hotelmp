import { Info, Leaf, Star } from "lucide-react";
import { GinGarnish } from "../types";
import DrinkImage from "./DrinkImage";
import { useT } from "../i18n";

interface Props {
  data: GinGarnish[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

/** Guia rápido de gin & tónica: uma linha por gin, agrupado por tónica. */
export default function GinGarnishTable({
  data,
  favorites,
  toggleFavorite,
}: Props) {
  const { t } = useT();
  const groups = data.reduce<{ tonica: string; items: GinGarnish[] }[]>(
    (acc, item) => {
      const group = acc.find((g) => g.tonica === item.tonica);
      if (group) group.items.push(item);
      else acc.push({ tonica: item.tonica, items: [item] });
      return acc;
    },
    [],
  );

  return (
    <div className="gin-guide">
      {groups.map((group) => (
        <section
          key={group.tonica}
          className="gin-group"
          aria-label={`${t.tonic} ${group.tonica}`}
        >
          <h3 className="gin-group-title">
            <span>{t.tonic}</span> {group.tonica}
            <b>{group.items.length}</b>
          </h3>
          <ul className="gin-list">
            {group.items.map((item) => {
              const favoriteId = `gin:${item.id}`;
              const isFavorite = favorites.includes(favoriteId);
              return (
                <li className="gin-row" key={item.id}>
                  <DrinkImage
                    name={item.gin}
                    imageId={item.id}
                    className="gin-thumb"
                  />
                  <div className="gin-info">
                    <h4>{item.gin}</h4>
                    <p className="gin-garnish">
                      <Leaf size={15} aria-hidden="true" />
                      <span className="sr-only">{t.garnish}: </span>
                      {item.garnish}
                    </p>
                    {item.notas && <p className="gin-note">{item.notas}</p>}
                  </div>
                  <span
                    className="tonic-badge"
                    aria-label={`${t.tonic} ${item.tonica}`}
                  >
                    {item.tonica}
                  </span>
                  <button
                    type="button"
                    className={
                      "fav-button is-inline" + (isFavorite ? " is-active" : "")
                    }
                    onClick={() => toggleFavorite(favoriteId)}
                    aria-pressed={isFavorite}
                    aria-label={
                      isFavorite ? t.unsave(item.gin) : t.save(item.gin)
                    }
                  >
                    <Star
                      size={18}
                      fill={isFavorite ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <aside className="service-note">
        <Info size={18} aria-hidden="true" />
        <p>
          <strong>{t.housePolicyStrong}</strong> {t.housePolicy}
        </p>
      </aside>
    </div>
  );
}
