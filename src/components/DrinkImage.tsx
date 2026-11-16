import { useState } from "react";
import { Martini } from "lucide-react";
import { getDrinkImage } from "../data/drinkImages";
import { useT } from "../i18n";

interface Props {
  name: string;
  imageId: string;
  className?: string;
  /** Mostra a legenda "Sem fotografia na carta" no marcador. */
  showMissingLabel?: boolean;
  eager?: boolean;
}

const initials = (name: string) =>
  name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((word) => /^[\p{L}]/u.test(word) && word.length > 2)
    .slice(0, 2)
    .map((word) => word[0].toLocaleUpperCase("pt-PT"))
    .join("");

export default function DrinkImage({
  name,
  imageId,
  className = "",
  showMissingLabel = false,
  eager = false,
}: Props) {
  const { t } = useT();
  const image = getDrinkImage(imageId);
  const [failedSource, setFailedSource] = useState("");
  const available = image && image.src !== failedSource;

  return (
    <div
      className={
        "drink-image" + (available ? "" : " is-empty") + " " + className
      }
    >
      {available ? (
        <>
          <img
            src={image.src}
            alt={
              name +
              (image.kind === "illustration" ? t.imgIllustration : t.imgPhoto)
            }
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailedSource(image.src)}
          />
          {image.kind === "illustration" && (
            <span className="image-badge">{t.illustration}</span>
          )}
        </>
      ) : (
        <div className="drink-placeholder" role="img" aria-label={name}>
          <Martini size={28} strokeWidth={1} aria-hidden="true" />
          <span className="drink-initials" aria-hidden="true">
            {initials(name) || "C"}
          </span>
          {showMissingLabel && (
            <small>{image ? t.imgUnavailable : t.noPhoto}</small>
          )}
        </div>
      )}
    </div>
  );
}
