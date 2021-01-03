<script>
  import { createEventDispatcher } from "svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";

  export let items;

  let dispatch = createEventDispatcher();
  let colors = "text-gray-300 bg-gray-900 bg-opacity-75";
  let style = "min-width:50vw; max-width: 400px;";

  function close() {
    dispatch("close");
  }
</script>

<div
  class="absolute z-50 inset-0 flex overflow-auto {colors}"
  on:click="{close}"
>
  <div
    class="absolute top-0 right-0 m-5 w-8 h-8 hover:text-blue-600 cursor-pointer"
  >
    <MdClose />
  </div>
  <div class="m-auto">
    <div class="flex flex-col divide-y divide-purple-600" style="{style}">
      {#each items as item}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="p-2 text-center uppercase hover:bg-blue-600 hover:bg-opacity-25"
          {...item.props}
        >{item.label}</a>
      {/each}
    </div>
  </div>
</div>
