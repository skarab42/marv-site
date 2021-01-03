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
</script>

<svelte:head>
  <title>{post.title} - Docs - {$fingerprint}</title>
</svelte:head>

<div class="flex">
  <div class="docs-menu flex flex-col bg-gray-700" style="min-width: 250px">
    {@html menu}
  </div>
  <div class="prose p-5 flex-auto max-w-full bg-gray-400">
    {@html post.html}
  </div>
</div>
