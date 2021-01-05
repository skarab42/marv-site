import { url, _ } from "../libs/i18next";

export function getItems() {
  return [
    { label: _("menu.labels.home"), props: { href: url("home") } },
    { label: _("menu.labels.download"), props: { href: url("download") } },
    { label: _("menu.labels.docs"), props: { href: url("docs") } },
    { label: _("menu.labels.about"), props: { href: url("about") } },
  ];
}
