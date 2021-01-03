<script>
  export let tile;

  let bgColor = tile.bgColor || "";
  // let bgImage: string = tile.bgImage
  //   ? `background-image: url('${tile.bgImage}');`
  //   : "";
</script>

<a
  href="{tile.link}"
  class="relative block h-full bg-center bg-cover bg-no-repeat {bgColor} rounded"
>
  <div class="h-full flex flex-col">
    <div
      class="p-5 orbitron-family text-shadow text-2xl bg-black bg-opacity-25"
    >
      {tile.title}
    </div>
    <div class="flex-auto">
      {#if tile.text}
        <div class="p-5 text-shadow text-2xl">{tile.text}</div>
      {/if}
    </div>
  </div>
</a>
