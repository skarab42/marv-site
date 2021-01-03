<script context="module">
  import config from "../../libs/i18next/config";

  export async function preload() {
    return this.redirect(302, `/${config.fallbackLng}/home`);
  }
</script>
