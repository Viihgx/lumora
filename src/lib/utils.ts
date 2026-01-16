export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function createPageUrl(page: string) {
  return `/${page.toLowerCase()}`;
}
