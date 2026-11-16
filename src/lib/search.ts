export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt")
    .replace(/[’']/g, "")
    .trim();
}
export function matchesQuery(query: string, text: string): boolean {
  const haystack = normalizeSearch(text);
  return normalizeSearch(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}
