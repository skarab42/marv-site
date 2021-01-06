<script context="module">
  import i18next from "i18next";

  const pages = {
    en: "get-started",
    fr: "demarrage-rapide",
  };

  export async function preload() {
    const lang = i18next.language;
    const page = pages[lang];

    return this.redirect(302, `/${lang}/docs/${page}/`);
  }
</script>
