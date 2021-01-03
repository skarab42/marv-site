<script>
  import { i18n } from "../stores/app";
  import config from "../libs/i18next/config";
  import MdLanguage from "svelte-icons/md/MdLanguage.svelte";

  let isOver = false;

  $: languages = config.supportedLngs.filter((lang) => lang !== $i18n.language);

  function onMouseEnter() {
    isOver = true;
  }

  function onMouseLeave() {
    isOver = false;
  }
</script>

<div
  class="relative"
  on:mouseenter="{onMouseEnter}"
  on:mouseleave="{onMouseLeave}"
>
  <div
    class="relative flex hover:text-blue-600 items-center space-x-2 opacity-50 cursor-pointer"
  >
    <div class="uppercase">{$i18n.language}</div>
    <div class="w-6 h-6 flex-shrink-0">
      <MdLanguage />
    </div>
  </div>
  <div
    class="{isOver ? '' : 'hidden'} absolute right-0 divide-y divide-blue-300 bg-blue-600 bg-opacity-75 rounded overflow-hidden"
  >
    {#each languages as lang}
      <a
        href="/{lang}/home"
        class="px-5 uppercase cursor-pointer hover:bg-pink-600"
      >{lang}</a>
    {/each}
  </div>
</div>
