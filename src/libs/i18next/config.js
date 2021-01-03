import enApp from "../../locales/en/app.json";
import frApp from "../../locales/fr/app.json";

const dev = process.env.NODE_ENV === "development";
const browser = process.browser;

export default {
  debug: false,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "fr"],
  ns: "app",
  defaultNS: "app",
  resources: {
    en: { app: enApp },
    fr: { app: frApp },
  },
  initImmediate: false,
  saveMissing: dev,
  saveMissingTo: "all",
  missingKeyHandler(lng, ns, key) {
    browser && fetch(`/i18n/${ns}/${key}`);
  },
};
