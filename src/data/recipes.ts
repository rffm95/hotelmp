import { Receita } from '../types';

export const RECIPES: Receita[] = [
  {
    id: 'gin-maracuja',
    nome: 'Gin de Maracujá',
    categoria: 'Cocktails',
    copo: 'Copo de gin',
    tecnica: 'Shaker + built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: "Gin Greenall's" },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de maracujá' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Tónica (aprox. meia tónica)' }
    ],
    passos: [
      'Colocar gelo no shaker.',
      'Adicionar gin, concentrado de maracujá, sumo de limão e xarope de açúcar.',
      'Agitar bem.',
      'Verter sem strainer para o copo de gin.',
      'Acrescentar mais gelo.',
      'Completar com tónica.'
    ],
    garnish: '1/4 de maracujá',
    tags: ['gin', 'frutado', 'maracujá']
  },
  {
    id: 'gin-morango',
    nome: 'Gin de Morango',
    categoria: 'Cocktails',
    copo: 'Copo de gin',
    tecnica: 'Shaker + built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: "Gin Greenall's" },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de morango' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Tónica (aprox. meia tónica)' }
    ],
    passos: [
      'Colocar gelo no shaker.',
      'Adicionar gin, concentrado de morango, sumo de limão e xarope de açúcar.',
      'Agitar bem.',
      'Verter sem strainer para o copo de gin.',
      'Acrescentar mais gelo.',
      'Completar com tónica.'
    ],
    garnish: 'Lima desidratada',
    tags: ['gin', 'frutado', 'morango']
  },
  {
    id: 'maracujao',
    nome: 'Maracujão',
    categoria: 'Cocktails',
    copo: 'Copo Gunamara',
    tecnica: 'Shaker',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Licor Beirão' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '10', unidade: 'cl', nome: 'Compal de maracujá' }
    ],
    passos: [
      'Colocar gelo no shaker.',
      'Adicionar os ingredientes.',
      'Agitar bem.',
      'Verter sem strainer para o copo.'
    ],
    garnish: 'Hortelã e maracujá',
    tags: ['beirão', 'maracujá']
  },
  {
    id: 'pornstar-martini',
    nome: 'Pornstar Martini',
    categoria: 'Cocktails',
    copo: 'Taça de martini',
    tecnica: 'Shaker + double strainer',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Vodka (baunilha ou normal)' },
      { quantidade: '3', unidade: 'cl', nome: 'Passoã' },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de maracujá' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Xarope de açúcar' }
    ],
    passos: [
      'Colocar gelo no shaker.',
      'Adicionar todos os ingredientes.',
      'Agitar bem.',
      'Fazer double strainer para taça de martini.',
      'Servir com copinho de espumante a acompanhar.'
    ],
    garnish: '1/4 de maracujá',
    tags: ['vodka', 'maracujá', 'espumante']
  },
  {
    id: 'mojito',
    nome: 'Mojito',
    categoria: 'Cocktails',
    copo: 'Copo alto',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Havana 3' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '3', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: 'q.b.', unidade: 'mão cheia', nome: 'Hortelã' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Água do Castelo' }
    ],
    passos: [
      'Colocar uma mão cheia de hortelã no copo.',
      'Encher com gelo.',
      'Adicionar rum, sumo de limão e xarope de açúcar.',
      'Mexer bem com colher de bar.',
      'Acrescentar mais gelo se necessário.',
      'Completar com Castelo.',
      'Mexer novamente.'
    ],
    garnish: 'Hortelã e lima/limão desidratado',
    tags: ['rum', 'clássico', 'hortelã']
  },
  {
    id: 'mojito-maracuja',
    nome: 'Mojito de Maracujá',
    categoria: 'Cocktails',
    copo: 'Copo alto',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Havana 3' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de maracujá' },
      { quantidade: 'q.b.', unidade: 'mão cheia', nome: 'Hortelã' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Água do Castelo' }
    ],
    passos: [
      'Colocar uma mão cheia de hortelã no copo.',
      'Encher com gelo.',
      'Adicionar rum, sumo de limão e concentrado de maracujá.',
      'Mexer bem com colher de bar.',
      'Acrescentar mais gelo se necessário.',
      'Completar com Castelo.',
      'Mexer novamente.'
    ],
    garnish: 'Hortelã e 1/4 de maracujá',
    tags: ['rum', 'frutado', 'maracujá']
  },
  {
    id: 'moscow-mule',
    nome: 'Moscow Mule',
    categoria: 'Cocktails',
    copo: 'Caneca de bronze',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Vodka' },
      { quantidade: '2,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '10', unidade: 'cl', nome: 'Ginger Beer' },
      { quantidade: 'q.b.', unidade: 'top', nome: 'Espuma' }
    ],
    passos: [
      'Encher a caneca de bronze com gelo.',
      'Adicionar vodka, sumo de limão e ginger beer.',
      'Mexer.',
      'Acrescentar mais gelo se necessário.',
      'Finalizar com espuma.'
    ],
    garnish: 'Folha de hortelã e lima/limão desidratada',
    tags: ['vodka', 'gengibre']
  },
  {
    id: 'maca-dourada',
    nome: 'Maçã Dourada',
    categoria: 'Cocktails',
    copo: 'Copo com gelo',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: "Jack Daniel's Apple" },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Bandida do Pomar (pressão)' }
    ],
    passos: [
      'Encher o copo com gelo.',
      'Adicionar Jack Daniel’s Apple.',
      'Completar com Bandida do Pomar de pressão.'
    ],
    garnish: 'Lima/limão desidratado',
    tags: ['whiskey', 'sidra', 'maçã']
  },
  {
    id: 'espresso-martini',
    nome: 'Espresso Martini',
    categoria: 'Cocktails',
    copo: 'Taça de martini',
    tecnica: 'Shaker + double strainer',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Vodka' },
      { quantidade: '3', unidade: 'cl', nome: 'Licor de café' },
      { quantidade: '1', unidade: 'dose', nome: 'Café expresso' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Xarope de açúcar' }
    ],
    passos: [
      'Colocar gelo no shaker.',
      'Adicionar todos os ingredientes.',
      'Agitar bem.',
      'Fazer double strainer para taça de martini.'
    ],
    garnish: '3 grãos de café',
    tags: ['vodka', 'café', 'clássico']
  },
  {
    id: 'caipirinha',
    nome: 'Caipirinha',
    categoria: 'Cocktails',
    copo: 'Copo Havana/Gunamara',
    tecnica: 'Built + shake',
    ingredientes: [
      { quantidade: '1', unidade: 'unid', nome: 'Lima cortada aos quartos' },
      { quantidade: '5', unidade: 'cl', nome: 'Cachaça' },
      { quantidade: '3', unidade: 'cl', nome: 'Xarope de açúcar' }
    ],
    passos: [
      'Colocar a lima no copo.',
      'Macerar.',
      'Adicionar cachaça e xarope de açúcar.',
      'Acrescentar gelo até ao topo.',
      'Agitar usando o shaker com o copo preparado.',
      'Verter de novo para o copo sem coar.',
      'Acrescentar mais gelo se necessário.'
    ],
    garnish: '1 rodela de lima',
    tags: ['cachaça', 'clássico', 'lima']
  },
  {
    id: 'caipirosa',
    nome: 'Caipirosa',
    categoria: 'Cocktails',
    copo: 'Copo Havana/Gunamara',
    tecnica: 'Built + shake',
    ingredientes: [
      { quantidade: '1', unidade: 'unid', nome: 'Lima cortada aos quartos' },
      { quantidade: '5', unidade: 'cl', nome: 'Vodka' },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de morango' }
    ],
    passos: [
      'Colocar a lima no copo.',
      'Macerar.',
      'Adicionar vodka e concentrado de morango.',
      'Acrescentar gelo até ao topo.',
      'Agitar usando o shaker com o copo preparado.',
      'Verter de novo para o copo sem coar.',
      'Acrescentar mais gelo se necessário.'
    ],
    garnish: '1 rodela de lima',
    tags: ['vodka', 'frutado', 'morango']
  },
  {
    id: 'whiskey-sour',
    nome: 'Whiskey Sour',
    categoria: 'Cocktails',
    copo: 'Copo baixo / Disaronno',
    tecnica: 'Dry shake + shake + double strainer',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Jameson Black Barrel' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '3', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: '3', unidade: 'cl', nome: 'Clara de ovo' }
    ],
    passos: [
      'Colocar os ingredientes no shaker sem gelo.',
      'Fazer dry shake.',
      'Adicionar gelo.',
      'Agitar novamente.',
      'Fazer double strainer para copo baixo com gelo.'
    ],
    garnish: 'Raspa de laranja',
    tags: ['whiskey', 'clássico', 'sour']
  },
  {
    id: 'tequila-sunrise',
    nome: 'Tequila Sunrise',
    categoria: 'Cocktails',
    copo: 'Copo alto',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Tequila' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Sumo de laranja' },
      { quantidade: 'q.b.', unidade: 'gotas', nome: 'Groselha' }
    ],
    passos: [
      'Encher o copo com gelo.',
      'Adicionar tequila.',
      'Completar com sumo de laranja.',
      'Finalizar com algumas gotas de groselha.'
    ],
    garnish: 'Rodela de laranja',
    tags: ['tequila', 'laranja']
  },
  {
    id: 'basil-smash-classico',
    nome: 'Basil Smash Clássico',
    categoria: 'Cocktails',
    copo: 'Copo baixo',
    tecnica: 'Shaker + double strainer',
    ingredientes: [
      { quantidade: '6', unidade: 'cl', nome: 'Gin' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão fresco' },
      { quantidade: '3', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: '6-8', unidade: 'folhas', nome: 'Manjericão' }
    ],
    passos: [
      'Coloque o manjericão no shaker vazio.',
      'Pressione suavemente as folhas para libertar os óleos e o aroma.',
      'Adicione o gin, o limão e o xarope de açúcar.',
      'Encha o shaker com gelo.',
      'Bata vigorosamente durante 10–12 segundos.',
      'Faça uma dupla coagem.',
      'Sirva num copo baixo com gelo e uma folha de manjericão a decorar.'
    ],
    garnish: 'Decorar com manjericão',
    tags: ['gin', 'manjericão', 'clássico']
  },
  {
    id: 'basil-smash-sour',
    nome: 'Basil Smash Sour',
    categoria: 'Cocktails',
    copo: 'Taça martini',
    tecnica: 'Dry shake + shake + double strainer',
    ingredientes: [
      { quantidade: '6', unidade: 'cl', nome: 'Gin' },
      { quantidade: '3', unidade: 'cl', nome: 'Sumo de limão fresco' },
      { quantidade: '3', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: '6-8', unidade: 'folhas', nome: 'Manjericão' },
      { quantidade: '1', unidade: 'unid', nome: 'Clara de ovo' }
    ],
    passos: [
      'Coloque o manjericão no shaker vazio e pressione suavemente as folhas.',
      'Adicione o gin, o sumo de limão, o xarope de açúcar e as claras de 1 ovo.',
      'Feche bem o shaker e faça um dry shake, sem gelo, durante 10–15 segundos.',
      'Adicionar gelo e fazer um segundo shake vigoroso durante 10–12 segundos.',
      'Fazer uma dupla coagem para obter uma textura mais suave.',
      'Sirva na taça martini, previamente arrefecida.'
    ],
    garnish: 'Folha de manjericão sobre a espuma',
    tags: ['gin', 'manjericão', 'sour', 'ovo']
  },
  {
    id: 'negroni',
    nome: 'Negroni',
    categoria: 'Cocktails',
    copo: 'Copo baixo / Disaronno',
    tecnica: 'Stirring + strainer',
    ingredientes: [
      { quantidade: '3', unidade: 'cl', nome: 'Campari' },
      { quantidade: '3', unidade: 'cl', nome: 'Martini Rosso' },
      { quantidade: '3', unidade: 'cl', nome: 'Tanqueray' }
    ],
    passos: [
      'Encher o mixing glass com gelo.',
      'Adicionar os ingredientes.',
      'Mexer com colher de bar durante 15 a 30 segundos.',
      'Fazer strainer para copo baixo cheio de gelo.'
    ],
    garnish: 'Raspa de laranja',
    tags: ['clássico', 'gin', 'aperitivo']
  },
  {
    id: 'pina-colada',
    nome: 'Piña Colada',
    categoria: 'Cocktails',
    copo: 'Copo de ananás',
    tecnica: 'Blender',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Havana 3' },
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de coco' },
      { quantidade: '2', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1', unidade: 'cl', nome: 'Açúcar' },
      { quantidade: '10', unidade: 'cl', nome: 'Sumo de ananás' }
    ],
    passos: [
      'Colocar tudo no blender com gelo.',
      'Misturar bem.',
      'Verter sem strainer para o copo em forma de ananás.'
    ],
    garnish: 'Ananás, folhas de ananás ou lima desidratada',
    tags: ['rum', 'coco', 'tropical']
  },
  {
    id: 'white-linen',
    nome: 'White Linen',
    categoria: 'Cocktails',
    copo: 'Copo alto',
    tecnica: 'Muddled shake + double strainer + built',
    ingredientes: [
      { quantidade: 'q.b.', unidade: 'rodelas', nome: 'Pepino' },
      { quantidade: '5', unidade: 'cl', nome: 'Hendrick’s' },
      { quantidade: '2,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1,5', unidade: 'cl', nome: 'Açúcar' },
      { quantidade: '2,5', unidade: 'cl', nome: 'St-Germain' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Água do Castelo' }
    ],
    passos: [
      'Colocar pepino no shaker e macerar.',
      'Adicionar gelo.',
      'Juntar gin, sumo de limão, açúcar e St-Germain.',
      'Agitar bem.',
      'Fazer double strainer para copo alto com gelo.',
      'Completar com Castelo.'
    ],
    garnish: 'Rodelas de pepino',
    tags: ['gin', 'fresco', 'pepino']
  },
  {
    id: 'hazelnut-espresso',
    nome: 'Hazelnut Espresso',
    categoria: 'Cocktails',
    copo: 'Taça/copo de espresso martini',
    tecnica: 'Shaker + double strainer',
    ingredientes: [
      { quantidade: '5', unidade: 'cl', nome: 'Baileys' },
      { quantidade: '3', unidade: 'cl', nome: 'Frangelico' },
      { quantidade: '2', unidade: 'cl', nome: 'Vodka' },
      { quantidade: '1', unidade: 'cl', nome: 'Açúcar' },
      { quantidade: '1', unidade: 'dose', nome: 'Café expresso' }
    ],
    passos: [
      'Encher o shaker com gelo.',
      'Adicionar todos os ingredientes.',
      'Agitar com força.',
      'Fazer double strainer para copo de espresso martini.'
    ],
    garnish: 'Linha fina de canela em pó',
    tags: ['licor', 'café', 'doce']
  },

  // SEM ÁLCOOL
  {
    id: 'realito',
    nome: 'Realito',
    categoria: 'Sem Álcool',
    copo: 'Jarrinha "Bullet"',
    tecnica: 'Shaker',
    ingredientes: [
      { quantidade: '1/3', unidade: 'jarra', nome: 'Compal de laranja' },
      { quantidade: '1/3', unidade: 'jarra', nome: 'Compal de ananás' },
      { quantidade: '1/3', unidade: 'jarra', nome: 'Compal de maracujá' },
      { quantidade: 'q.b.', unidade: 'gotas', nome: 'Groselha' }
    ],
    passos: [
      'Colocar 4 a 5 pedras de gelo no shaker.',
      'Adicionar os ingredientes.',
      'Agitar bem.',
      'Verter sem strainer para o copo de cocktail sem álcool.'
    ],
    garnish: 'Laranja desidratada ou rodela de laranja',
    tags: ['frutado', 'sem-alcool']
  },
  {
    id: 'pantera-cor-de-rosa',
    nome: 'Pantera Cor-de-Rosa',
    categoria: 'Sem Álcool',
    copo: 'Jarrinha "Bullet"',
    tecnica: 'Shaker',
    ingredientes: [
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de morango' },
      { quantidade: '1/2', unidade: 'jarra', nome: 'Compal de laranja' },
      { quantidade: '1/2', unidade: 'jarra', nome: 'Compal de pêssego' },
      { quantidade: 'q.b.', unidade: 'top', nome: 'Chantilly' }
    ],
    passos: [
      'Colocar 4 a 5 pedras de gelo no shaker.',
      'Adicionar concentrado de morango, Compal de laranja e Compal de pêssego.',
      'Agitar bem.',
      'Verter sem strainer para o copo.',
      'Finalizar com chantilly por cima.'
    ],
    garnish: 'Laranja desidratada ou normal',
    tags: ['doce', 'morango', 'sem-alcool']
  },
  {
    id: 'virgem-colada',
    nome: 'Virgem Colada',
    categoria: 'Sem Álcool',
    copo: 'Copo de ananás',
    tecnica: 'Shaker',
    ingredientes: [
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de coco' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Sumo de ananás' }
    ],
    passos: [
      'Colocar 4 a 5 pedras de gelo no shaker.',
      'Adicionar concentrado de coco e sumo de ananás.',
      'Agitar bem.',
      'Verter sem strainer para o copo de ananás.'
    ],
    garnish: 'Triângulo de ananás, folhas ou lima desidratada',
    tags: ['tropical', 'coco', 'sem-alcool']
  },
  {
    id: 'passion-fizz',
    nome: 'Passion Fizz',
    categoria: 'Sem Álcool',
    copo: 'Jarrinha "Bullet"',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '3', unidade: 'cl', nome: 'Concentrado de maracujá' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Água do Castelo' }
    ],
    passos: [
      'Encher o copo com gelo.',
      'Adicionar concentrado de maracujá.',
      'Completar com Castelo.',
      'Mexer até ficar uniforme.'
    ],
    observacoes: 'Vai fazer muita espuma.',
    garnish: '1/4 de maracujá',
    tags: ['maracujá', 'fresco', 'sem-alcool']
  },
  {
    id: 'pineapple-breeze',
    nome: 'Pineapple Breeze',
    categoria: 'Sem Álcool',
    copo: 'Jarrinha "Bullet"',
    tecnica: 'Built',
    ingredientes: [
      { quantidade: '4', unidade: 'cl', nome: 'Giffard de ananás' },
      { quantidade: '10', unidade: 'cl', nome: 'Sumo de laranja' },
      { quantidade: '2,5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: 'q.b.', unidade: 'completar', nome: 'Ginger ale ou Castelo' }
    ],
    passos: [
      'Encher o copo com gelo.',
      'Adicionar Giffard de ananás, sumo de laranja e sumo de limão.',
      'Mexer bem.',
      'Acrescentar mais gelo se necessário.',
      'Completar com ginger ale ou Castelo.',
      'Mexer novamente.'
    ],
    garnish: 'Folhas de ananás ou laranja desidratada',
    tags: ['ananás', 'laranja', 'sem-alcool']
  },

  // SANGRIAS
  {
    id: 'sangria-branca',
    nome: 'Sangria Branca',
    categoria: 'Sangrias',
    copo: 'Copo de vinho',
    tecnica: 'Jarra / built',
    ingredientes: [
      { quantidade: 'q.b.', unidade: 'rodelas', nome: 'Limão e Laranja' },
      { quantidade: '2', unidade: 'paus', nome: 'Canela' },
      { quantidade: 'q.b.', unidade: 'bagas', nome: 'Uvas' },
      { quantidade: '5', unidade: 'cl', nome: 'Jack Fire ou Macieira' },
      { quantidade: '5', unidade: 'cl', nome: 'Açúcar' },
      { quantidade: '5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '1/2', unidade: 'jarra', nome: 'Vinho branco' },
      { quantidade: '1/2', unidade: 'jarra', nome: '7Up' }
    ],
    passos: [
      'Colocar os sólidos na jarra.',
      'Juntar Jack Fire ou Macieira, açúcar e sumo de limão.',
      'Mexer bem.',
      'Completar com meia jarra de vinho branco e meia jarra de 7Up.',
      'Mexer novamente e servir.'
    ],
    garnish: 'Fruta da própria sangria',
    tags: ['vinho', 'partilha']
  },
  {
    id: 'sangria-espumante-maracuja',
    nome: 'Sangria de Espumante e Maracujá',
    categoria: 'Sangrias',
    copo: 'Copo de espumante',
    tecnica: 'Jarra / built',
    ingredientes: [
      { quantidade: '10', unidade: 'cl', nome: 'Concentrado de maracujá' },
      { quantidade: '5', unidade: 'cl', nome: 'Sumo de limão' },
      { quantidade: '5', unidade: 'cl', nome: 'Xarope de açúcar' },
      { quantidade: '1', unidade: 'garrafa', nome: 'Espumante' }
    ],
    passos: [
      'Colocar tudo na jarra de Gin Mare.',
      'Mexer muito bem.',
      'Servir em copos de espumante.'
    ],
    garnish: '1 maracujá dividido aos quartos',
    tags: ['espumante', 'maracujá', 'partilha']
  }
];
