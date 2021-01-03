<script>
  import HeroLink from "./HeroLink.svelte";
  import GithubButton from "./GithubButton.svelte";

  let bgImage = `background-image: url('assets/images/hero-background.jpg')`;
  let marvLogo = "background-image: url('assets/images/marv-logo-alpha.png')";
  let bgPosition = "bg-center bg-cover bg-no-repeat";

  const follow = {
    icon: "follow",
    text: "Follow",
    href: "https://github.com/skarab42",
  };
  const start = {
    icon: "star",
    text: "Star",
    href: "https://github.com/skarab42/marv",
  };
  const fork = {
    text: "Fork",
    icon: "repo-forked",
    href: "https://github.com/skarab42/marv/fork",
  };
  const sponsors = {
    icon: "heart",
    text: "Sponsors",
    href: "https://github.com/sponsors/skarab42",
  };
</script>

<div class="py-10 {bgPosition}" style="{bgImage}">
  <div
    class="m-10 py-0 md:py-10 flex h-full items-center justify-center bg-center bg-contain bg-no-repeat"
    style="{marvLogo}"
  >
    <div class="flex flex-col space-y-5 h-full items-center justify-center">
      <h1 class="px-5 text-4xl text-center text-shadow">
        <span class="text-blue-600">Marv</span>elous your Swiss streaming tool!
      </h1>
      <div class="flex flex-wrap items-center justify-center">
        <HeroLink href="download" label="menu.labels.download" />
        <HeroLink href="docs/home" label="menu.labels.docs" />
      </div>
      <div class="flex flex-wrap space-x-2 items-center justify-center">
        <!-- <GithubButton {...follow} />
        <GithubButton {...start} />
        <GithubButton {...fork} />
        <GithubButton {...sponsors} /> -->
      </div>
    </div>
  </div>
</div>
