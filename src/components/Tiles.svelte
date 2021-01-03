<script>
  import { getTiles } from "../data/tiles";
  import { i18n } from "../stores/app";
  import Tile from "./Tile.svelte";

  $: tiles = $i18n ? getTiles() : [];

  function perococco(i) {
    return [4, 6, 6, 4][i % 4];
  }
</script>

<div class="p-2 gap-2 grid grid-cols-10">
  {#each tiles as tile, i}
    <div class="col-span-10 md:col-span-{perococco(i)}">
      <Tile tile="{tile}" />
    </div>
  {/each}
</div>
