<script>
  import { onMount } from "svelte";

  export let href;
  export let text = "Star";
  export let icon = "star";
  export let size = "large";
  export let showCount = true;

  let targetElement = null;

  onMount(async () => {
    const { render } = await import("github-buttons");

    const options = {
      href,
      "data-text": text,
      "data-size": size,
      "data-icon": `octicon-${icon}`,
      "data-show-count": showCount,
    };

    render(options, (el) => {
      targetElement.appendChild(el);
    });
  });
</script>

<div bind:this="{targetElement}"></div>
