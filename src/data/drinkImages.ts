/**
 * Images copied from the public CHEERS menu on 2026-11-16 (origin of this app).
 * Replace with the hotel's own photos when available, keeping the same IDs.
 * Exact recipe/gin IDs are intentional: variants must never inherit another
 * drink's photo through fuzzy matching. Illustrations keep the menu's label.
 */
export type DrinkImage = {
  src: string;
  sourceImageUrl: string;
  sourceName: string;
  sourceUrl: string;
  kind: "photo" | "illustration";
};

const menuImage = (
  file: string,
  sourceName: string,
  productId: string,
  kind: DrinkImage["kind"] = "photo",
): DrinkImage => ({
  src: `${import.meta.env.BASE_URL}images/menu/${file}.webp`,
  sourceImageUrl: `https://menu.cheersexperiences.com/cheers/images/${file}.webp`,
  sourceName,
  sourceUrl: `https://menu.cheersexperiences.com/cheers/#p=${productId}`,
  kind,
});

export const DRINK_IMAGES: Record<string, DrinkImage> = {
  "gin-maracuja": menuImage("bar/gin-maracuja", "Gin Maracujá", "cock-gin-mar"),
  "pornstar-martini": menuImage(
    "bar/porn-star-martini",
    "Porn Star Martini",
    "cock-por",
  ),
  mojito: menuImage("mojito-real", "Mojito", "cock-moj"),
  "mojito-maracuja": menuImage(
    "passionfruit-mojito-real",
    "Mojito Maracujá",
    "cock-moj-mar",
  ),
  "moscow-mule": menuImage("bar/moscow-mule", "Moscow Mule", "cock-mos"),
  "maca-dourada": menuImage(
    "generated/apple-whiskey",
    "Maça Dourada",
    "cock-mac",
    "illustration",
  ),
  "espresso-martini": menuImage(
    "espresso-martini",
    "Espresso Martini",
    "cock-esp",
  ),
  "whiskey-sour": menuImage("bar/whiskey-sour", "Whiskey Sour", "cock-whi-sou"),
  "tequila-sunrise": menuImage(
    "bar/tequila-sunrise",
    "Tequila Sunrise",
    "cock-teq",
  ),
  negroni: menuImage("bar/negroni", "Negroni", "cock-neg"),
  "pina-colada": menuImage(
    "generated/colada",
    "Pinacolada",
    "cock-pin",
    "illustration",
  ),
  "white-linen": menuImage(
    "generated/gin-cucumber",
    "White Linen",
    "cock-whi",
    "illustration",
  ),
  realito: menuImage(
    "generated/sunrise",
    "Realito",
    "mock-rea",
    "illustration",
  ),
  "pantera-cor-de-rosa": menuImage(
    "generated/pink-panther",
    "Pantera Cor de Rosa",
    "mock-pan",
    "illustration",
  ),
  "virgem-colada": menuImage(
    "generated/colada",
    "Virgem Colada",
    "mock-vir",
    "illustration",
  ),
  "passion-fizz": menuImage(
    "generated/passionfruit-vodka",
    "Passion Fizz",
    "mock-pas",
    "illustration",
  ),
  "sangria-branca": menuImage("bar/sangria-branca", "Branca", "san-bra"),
  "sangria-espumante-maracuja": menuImage(
    "bar/sangria-espumante-maracuja",
    "Espumante e Maracujá",
    "san-esp-mar",
  ),
  beefeater: menuImage("brands/beefeater", "Beefeater", "gin-bee"),
  "tanqueray-sch": menuImage("brands/tanqueray", "Tanqueray", "gin-tan"),
  "tanqueray-sevilha": menuImage(
    "brands/tanqueray-sevilla",
    "Tanqueray Sevilla",
    "gin-sev",
  ),
  "tanqueray-ten": menuImage(
    "bar/tanqueray-ten",
    "Tanqueray Ten",
    "gin-tan-ten",
  ),
  "adamus-branco": menuImage(
    "brands/adamus-original",
    "Adamus Original",
    "gin-ada-ori",
  ),
  "adamus-2023": menuImage(
    "brands/adamus-2023",
    "Adamus Signature 2023",
    "gin-ada23",
  ),
  nordes: menuImage("brands/nordes", "Nordés", "gin-nor"),
  engine: menuImage("engine", "Engine", "gin-eng"),
  "gin-mare": menuImage("brands/gin-mare", "Gin Mare", "gin-mar"),
  "le-tribute": menuImage("bar/le-tribute", "Le Tribute", "gin-tri"),
  "hendricks-classic": menuImage("brands/hendricks", "Hendricks", "gin-hen"),
  sharish: menuImage("brands/sharish", "Sharish", "gin-sha"),
};

/** Returns undefined when the reference menu has no exact verified image. */
export function getDrinkImage(id: string): DrinkImage | undefined {
  return Object.prototype.hasOwnProperty.call(DRINK_IMAGES, id)
    ? DRINK_IMAGES[id]
    : undefined;
}

/** These gaps are documented instead of substituting misleading photographs. */
export const DRINK_IMAGE_GAPS: Record<string, string> = {
  "gin-morango":
    "O menu mostra um pack de seis Gins Morango, não o serviço individual.",
  maracujao: "Bebida não encontrada no menu de referência.",
  caipirinha: "Bebida não encontrada no menu de referência.",
  caipirosa: "Bebida não encontrada no menu de referência.",
  "basil-smash-classico":
    "O menu não distingue a imagem das variantes Clássico e Sour.",
  "basil-smash-sour":
    "O menu não distingue a imagem das variantes Clássico e Sour.",
  "hazelnut-espresso": "Bebida não encontrada no menu de referência.",
  "pineapple-breeze": "Bebida não encontrada no menu de referência.",
  "adamus-2021": "A edição 2021 não está no menu de referência.",
  "martin-millers-azul":
    "O menu apresenta Martin Millers sem identificar a variante por cor.",
  "martin-millers-vermelho":
    "O menu apresenta Martin Millers sem identificar a variante por cor.",
  "martin-millers-verde":
    "O menu apresenta Martin Millers sem identificar a variante por cor.",
  "hendricks-orbium": "O menu não apresenta a edição Orbium.",
};
