import { url, _ } from "../libs/i18next";

function tileFactory(ns, link, color) {
  return {
    title: _(`tiles.${ns}.title`),
    text: _(`tiles.${ns}.text`),
    link: url(link),
    bgColor: `bg-${color}-800`,
    bgImage: `assets/images/tiles/${ns}.png`,
  };
}

export function getTiles() {
  return [
    tileFactory("panels", "docs/panels", "purple"),
    tileFactory("widgets", "docs/widgets", "pink"),
    tileFactory("timeline", "docs/timeline", "blue"),
    tileFactory("commands", "docs/commands", "red"),
    tileFactory("twitch", "docs/twitch", "yellow"),
    tileFactory("obs", "docs/obs", "green"),
  ];
}
