export type Lang = 'zh' | 'en';

export const languages: { key: Lang; label: string; short: string; htmlLang: string }[] = [
  { key: 'zh', label: '中文', short: '中', htmlLang: 'zh-CN' },
  { key: 'en', label: 'English', short: 'EN', htmlLang: 'en' },
];

/** Prefix an internal path for the given language. Chinese lives at the root. */
export function localePath(lang: Lang, path: string): string {
  if (lang === 'zh') return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/** The same page in the other language, for the language switcher. */
export function alternatePath(lang: Lang, pathname: string): string {
  if (lang === 'zh') {
    if (pathname === '/en' || pathname === '/en/') return '/';
    return pathname === '/' ? '/en/' : `/en${pathname}`;
  }

  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

export function projectSlug(id: string): string {
  return id.replace(/^en\//, '');
}

export function isEnglishProject(id: string): boolean {
  return id.startsWith('en/');
}
