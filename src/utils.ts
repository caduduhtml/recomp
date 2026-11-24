export const money = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function route() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function save<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || '') as T; } catch { return fallback; }
}
