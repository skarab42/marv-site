<script>
  import { i18n } from "../stores/app";
  import { url } from "../libs/i18next";

  export let label;
  export let href;

  let aClass =
    "m-2 py-2 px-4 text-2xl uppercase border border-blue-300 bg-blue-600 rounded pointer-events-auto opacity-75 hover:opacity-100";
</script>

<a href="{$i18n && url(href)}" class="{aClass}">{$i18n.t(label)}</a>
