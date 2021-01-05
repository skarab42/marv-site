<script context="module">
  import i18next from "i18next";
  import config from "../../libs/i18next/config";

  export async function preload() {
    const lang = i18next.language || config.fallbackLng;
    return this.redirect(302, `/${lang}/home`);
  }
</script>
