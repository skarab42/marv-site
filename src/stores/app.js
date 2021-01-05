import { readable, writable } from "svelte/store";

const pkg = { name: "marv", version: "0.16.0" };

const repoURL = readable("https://github.com/skarab42/marv");
const fingerprint = readable(`${pkg.name} v${pkg.version}`);
const version = readable(pkg.version);
const name = readable(pkg.name);
const i18n = writable(null);

export { name, version, repoURL, fingerprint, i18n };
