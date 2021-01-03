import { readable, writable } from "svelte/store";

const fingerprint = readable("Marv 1.0.0");
const i18n = writable(null);

export { fingerprint, i18n };
