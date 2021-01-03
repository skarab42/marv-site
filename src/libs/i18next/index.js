import i18next from "i18next";
import config from "./config";

export function _(key) {
  return i18next.t(key);
}

export function url(uri) {
  return `/${i18next.language}/${uri}`;
}

export default async function init(options) {
  await i18next.init({ ...config, ...options });
  return i18next;
}
