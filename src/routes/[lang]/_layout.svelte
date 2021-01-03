<script context="module">
  import config from "../../libs/i18next/config";
  import i18next from "../../libs/i18next";
  import { i18n } from "../../stores/app";

  export async function preload(page) {
    const { lang } = page.params;

    if (!lang || !config.supportedLngs.includes(lang)) {
      return this.redirect(302, `/${config.fallbackLng}`);
    }

    i18n.set(await i18next({ lng: lang }));

    return;
  }
</script>

<script>
  import { getItems } from "../../data/menu";
  import Nav from "../../components/Nav.svelte";
  import Menu from "../../components/Menu.svelte";
  import Footer from "../../components/Footer.svelte";

  export let segment;

  $: items = $i18n ? getItems() : [];
  let showMenu = false;

  $: style = showMenu ? `filter: blur(4px)` : "";

  function openMenu() {
    showMenu = true;
  }

  function closeMenu() {
    showMenu = false;
  }
</script>

<div class="bg-gray-900 text-gray-300" style="{style}">
  <Nav items="{items}" segment="{segment}" on:openMenu="{openMenu}" />
  <main>
    <slot />
  </main>
  <Footer />
</div>

{#if showMenu}
  <Menu items="{items}" on:close="{closeMenu}" />
{/if}
