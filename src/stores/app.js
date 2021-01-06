import { readable, writable } from "svelte/store";
import pkg from "../../../marv/package.json";

const repoURL = readable("https://github.com/skarab42/marv");
const fingerprint = readable(`${pkg.name} v${pkg.version}`);
const version = readable(pkg.version);
const name = readable(pkg.name);
const i18n = writable(null);

export { name, version, repoURL, fingerprint, i18n };
