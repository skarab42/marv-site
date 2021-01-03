<script>
  import Icon from "./Icon.svelte";

  export let icon;
  export let title;
  export let link;
</script>

<a href="{link}" class="p-2 bg-purple-600 rounded">
  <Icon icon="{icon}" />
  <div>{title}</div>
</a>
