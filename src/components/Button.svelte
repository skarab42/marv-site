<script>
  let cls = "bg-blue-500 rounded";

  export { cls as class };
</script>

<button class="{cls}">
  <slot />
</button>
