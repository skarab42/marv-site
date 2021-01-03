<script>
  import { fingerprint } from "../stores/app";
  import { createEventDispatcher } from "svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";
  import LanguageSelect from "./LanguageSelect.svelte";

  export let segment;
  export let items;

  let dispatch = createEventDispatcher();

  function selected(href, segment) {
    return (segment || ".") === href ? "border-b-2 border-purple-600" : "";
  }

  function openMenu() {
    dispatch("openMenu");
  }
</script>

<nav class="flex items-center px-2 space-x-2">
  <a class="p-2 flex items-center space-x-2 text-lg orbitron-family" href=".">
    <img src="assets/images/marv-logo.svg" alt="{$fingerprint}" class="h-8" />
    <span class="px-2">{$fingerprint}</span>
  </a>
  <div class="flex-auto"></div>
  <LanguageSelect />
  <div class="sm:hidden hover:bg-blue-600 cursor-pointer" on:click="{openMenu}">
    <div class="w-8 h-8 flex-shrink-0">
      <MdMenu />
    </div>
  </div>
  <div class="hidden sm:block">
    {#each items as item}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        class="p-2 whitespace-no-wrap uppercase hover:text-blue-600 {selected(item.props.href, segment)}"
        {...item.props}
      >{item.label}</a>
    {/each}
  </div>
</nav>
