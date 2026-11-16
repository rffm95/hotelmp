# Hotel Montepiedra · Manual de Bar

Manual de bar para a equipa do Hotel Montepiedra: receitas, medidas, copos e garnish
para consultar em segundos durante o serviço, em português e espanhol (PT | ES).

Baseado na app [COMOFAZER](https://github.com/rffm95/COMOFAZER) (manual Cheers), com as
mesmas receitas e quantidades.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000/hotelmp/
npm run lint    # verificação de tipos
npm run build
```

## Publicação

Cada push para `main` publica no GitHub Pages pelo workflow `.github/workflows/deploy.yml`
(em Settings → Pages, a origem tem de estar em **GitHub Actions**).
Endereço: https://rffm95.github.io/hotelmp/

## Dados

- Receitas: `src/data/recipes.ts` (PT) e `src/data/recipes.es.ts` (ES, por id).
- Gins e garnish: `src/data/ginGarnish.ts`.
- Fotografias: `public/images/menu/`, ligadas por id exato em `src/data/drinkImages.ts`.
  São ainda as fotografias da carta Cheers; substituir pelas do hotel mantendo os mesmos ids.
- Marca: cores do logótipo Dynastic Resorts (azul-marinho #2D4779 e laranja #ED5C1B).
  Leque em vetor em `src/components/BrandFan.tsx` e `public/icon.svg`; logótipo completo em
  `public/brand/` (versão normal e versão clara para o modo bar); tokens de cor em `src/index.css`.
