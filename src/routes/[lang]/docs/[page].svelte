<script context="module">
  import showdown from "showdown";
  import "prismjs/themes/prism-dark.css";
  import { fingerprint } from "../../../stores/app";
  import showdownPrism from "../../../libs/showdownPrismjs";

  showdown.setFlavor("github");

  const converter = new showdown.Converter({
    extensions: [showdownPrism],
  });

  export async function preload({ params }) {
    const { lang, page } = params;

    const menuRes = await this.fetch(`${lang}/docs/menu.md`);
    const menuText = await menuRes.text();

    const slugRes = await this.fetch(`${lang}/docs/${page}.md`);
    const slugText = await slugRes.text();

    if (slugRes.status === 200 && menuRes.status === 200) {
      const menuHTML = converter.makeHtml(menuText);
      const slugHTML = converter.makeHtml(slugText);
      return { menu: menuHTML, post: { title: "Timeline", html: slugHTML } };
    } else {
      return this.error(404, "Page not found!!!");
    }
  }
</script>

<script>
  export let post;
  export let menu;

  const prose = "prose-sm sm:prose lg:prose-lg xl:prose-xl";
</script>

<style>
  :global(.docs-menu p > a) {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  :global(.docs-menu a) {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(211, 219, 224);
    padding: 0.4rem 0.8rem;
    display: inline-block;
  }

  :global(.docs-menu a:hover) {
    color: rgb(226, 64, 218);
  }
</style>

<svelte:head>
  <title>{post.title} - Docs - {$fingerprint}</title>
</svelte:head>

<div class="flex">
  <div class="bg-gray-700" style="min-width: 250px">
    <div class="docs-menu flex flex-col sticky top-0">
      {@html menu}
    </div>
  </div>
  <div class="{prose} p-5 flex-auto max-w-full text-gray-800 bg-gray-400">
    {@html post.html}
  </div>
</div>
