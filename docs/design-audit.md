# Auditoria e redesign — Cheers Bar Manual

16 de novembro de 2026 · Repositório rffm95/COMOFAZER

## Diagnóstico e alterações

| Problema observado | Correção implementada |
| --- | --- |
| Cartões apenas de texto, sem reconhecimento visual das bebidas | Fotografias e ilustrações da carta nos cartões e nas fichas |
| Tipografia pesada, em maiúsculas e itálico; contraste fraco em metadados | Títulos serifados, texto de apoio legível, tons marfim, verde profundo e dourado discreto |
| Pesquisa dependente de acentos; gins separados da consulta geral | Pesquisa por nome, ingrediente, técnica, copo, tónica e garnish; normalização de acentos e pesquisa com vários termos |
| Favoritos podiam manter uma categoria anterior escondida | Abertura dos favoritos na categoria Todas; favoritos também para gins |
| Tema claro não alterava efetivamente a interface | Temas claro e escuro com variáveis de cor consistentes |
| Cartões sem operação por teclado; diálogos sem gestão de foco | Botões semânticos, nomes acessíveis, Escape, foco preso no diálogo e restauro de foco |
| Ficha longa e pouco orientada ao serviço | Ingredientes e medidas destacados, passos com checklist e reinício |
| Zoom móvel desativado | Zoom permitido e layouts verificados em telemóvel e tablet |

## Imagens

Fonte: https://menu.cheersexperiences.com/cheers

30 das 43 entradas têm correspondência verificada: 18 receitas e 12 gins. Incluem 23 imagens apresentadas como fotografias e 7 ilustrações identificadas como tal na carta. São 29 ficheiros WebP únicos, armazenados na própria app (3,40 MB no total), com carregamento progressivo e identificação de origem em src/data/drinkImages.ts.

As 13 entradas sem imagem exata apresentam “Sem fotografia na carta”. Não foi atribuída uma fotografia de outra bebida ou variante:

- Gin de Morango, Maracujão, Caipirinha, Caipirosa.
- Basil Smash Clássico, Basil Smash Sour, Hazelnut Espresso, Pineapple Breeze.
- Adamus 2021, Martin Miller’s Azul, Vermelho e Verde, Hendrick’s Orbium.

A carta mostra Gin de Morango num pack, sem imagem individual. Basil Smash não distingue as variantes e apresenta um copo diferente da receita Sour. Martin Miller’s não identifica a variante por cor.

## Validação

- Verificação TypeScript e compilação Vite de produção concluídas.
- 26 receitas e 17 entradas de gin preservadas; comparação integral dos dados com a versão anterior, incluindo ingredientes, medidas e passos.
- Pesquisa sem acentos, por múltiplos termos e ingrediente/garnish; filtros e estado sem resultados.
- Favoritos de receitas e gins, persistência após recarregar, ordenação e vistas em grelha/lista.
- Diálogo com Escape, foco e checklist; atalho de pesquisa desativado dentro do diálogo.
- Tema escuro e layouts a 320, 390 e 768 px e no ecrã de computador; sem transbordo horizontal da página. Categorias têm deslocação horizontal própria em ecrãs pequenos.
- Ficheiros das imagens validados por HTTP, MIME e assinatura WebP; sem imagens partidas observadas no browser.

## Continuação recomendada

Adicionar fotografias próprias das 13 variantes em falta para completar a cobertura visual. A associação pode ser feita em src/data/drinkImages.ts, preservando os IDs das bebidas.

## Segunda iteração: serviço premium (16 de novembro de 2026)

Objetivo: uma app que um barman consulta em segundos, com pouca luz e mãos ocupadas, e que tenha o nível de um bar de hotel de 5 estrelas.

| Problema observado | Alteração |
| --- | --- |
| Tema claro por defeito encandeia em sala com pouca luz | Modo bar (escuro, preto quente com latão) por defeito, sem clarão ao abrir; modo dia continua disponível |
| No telemóvel, cartões em duas colunas cortavam copo e técnica; página com mais de 10 000 px | Lista rápida por defeito no telemóvel, com fotografia, copo e medidas de todos os ingredientes numa linha |
| Cartões não mostravam medidas | Cartões mostram as três primeiras medidas (ex.: 5 cl Gin Greenall's) |
| Gins em cartões altos com foto, 17 ecrãs de deslocação | Guia de gin & tónica compacto, agrupado por tónica, uma linha por gin com garnish |
| Ficha com foto pequena e copo/técnica/garnish separados | Ficha em ecrã inteiro no telemóvel; copo, técnica e garnish juntos no topo; medidas em destaque à esquerda, como numa spec de bar |
| Passos com alvos pequenos | Passos com 64 px de altura, barra de progresso, “Pronto a servir” |
| O ecrã apagava-se durante a preparação | A ficha mantém o ecrã ligado (Wake Lock) quando o browser o permite |
| Texto de apoio com 8 a 10 px | Mínimo de 12 px em etiquetas e 14 a 18 px em conteúdo; pesquisa com 16 px para evitar zoom no iPhone |
| Botões com menos de 44 px | Todos os alvos de toque com pelo menos 44 px |

Validação: TypeScript e build de produção; capturas a 390, 820 e 1440 px nos dois temas; sem transbordo horizontal; foco inicial e Escape na ficha; pesquisa sem acentos. Dados das receitas e gins sem alterações.

## Espanhol (16 de novembro de 2026)

- Seletor PT/ES no topo; a escolha fica guardada. Na primeira visita, um browser em espanhol abre em espanhol.
- Interface, receitas (nomes descritivos, copos, técnicas, ingredientes, passos, garnish, notas) e garnish dos gins traduzidos para espanhol de Espanha, em src/data/recipes.es.ts.
- As quantidades vêm sempre da receita original; só as unidades e os textos mudam. q.b. aparece como c.s. (cantidad suficiente).
- A pesquisa encontra a bebida pelo termo em português ou em espanhol (ex.: “piña” e “ananás”).
