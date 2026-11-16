/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Categoria = 'Cocktails' | 'Sem Álcool' | 'Sangrias' | 'Garnish de Gins';

export interface Ingrediente {
  quantidade: string;
  unidade: string;
  nome: string;
}

export interface Receita {
  id: string;
  nome: string;
  categoria: Categoria;
  subcategoria?: string;
  copo: string;
  tecnica: string;
  ingredientes: Ingrediente[];
  passos: string[];
  garnish: string;
  observacoes?: string;
  tags: string[];
}

export interface GinGarnish {
  id: string;
  gin: string;
  tonica: string;
  garnish: string;
  notas?: string;
}
