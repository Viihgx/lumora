export function createPageUrl(page: string) {
  switch (page.toLowerCase()) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "services":
      return "/services";
    default:
      return "/";
  }
}
