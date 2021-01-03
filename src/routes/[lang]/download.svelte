<script>
  import FaFileArchive from "svelte-icons/fa/FaFileArchive.svelte";
  import FaWindows from "svelte-icons/fa/FaWindows.svelte";
  import FaLinux from "svelte-icons/fa/FaLinux.svelte";
  import FaApple from "svelte-icons/fa/FaApple.svelte";
  import { i18n } from "../../stores/app";

  const version = "0.16.0";
  const repoURL = "https://github.com/skarab42/marv";

  const link = (path, file) => `${repoURL}/${path}/${file}`;

  let bgImage = `min-height:300px; background-image: url('assets/images/download-background.jpg')`;
  let bgPosition = "bg-center bg-cover bg-no-repeat";

  const links = [
    {
      title: "Windows",
      icon: FaWindows,
      color: "bg-purple-700",
      path: `/releases/download/v${version}/`,
      file: `Marv-Setup-${version}.exe`,
    },
    {
      title: "Mac",
      icon: FaApple,
      color: "bg-purple-700",
      path: `/releases/download/v${version}/`,
      file: `Marv-${version}.dmg`,
    },
    {
      title: "Linux",
      icon: FaLinux,
      color: "bg-purple-700",
      path: `/releases/download/v${version}/`,
      file: `Marv-${version}.AppImage`,
    },
    {
      title: "Source",
      icon: FaFileArchive,
      path: `/archive/`,
      color: "bg-gray-700",
      file: `v${version}.zip`,
    },
    {
      title: "Source",
      icon: FaFileArchive,
      path: `/archive/`,
      color: "bg-gray-700",
      file: `v${version}.tar.gz`,
    },
  ];
</script>

<div class="flex items-center justify-center {bgPosition}" style="{bgImage}">
  <div class="orbitron-family text-4xl text-shadow uppercase">
    {$i18n.t('menu.labels.download')}
  </div>
</div>

<div class="flex justify-center">
  <div
    class="p-5 grid grid-cols-1 md:grid-cols-3 gap-5 margin-auto"
    style="max-width: 1042px;"
  >
    {#each links as { title, icon, path, file, color }}
      <a href="{link(path, file)}" class="grid grid-cols-2 {color} rounded">
        <div class="p-2 flex justify-center">
          <div class="w-20 h-20">
            <svelte:component this="{icon}" />
          </div>
        </div>
        <div class="p-2 flex flex-col items-center">
          <div class="text-3xl text-center truncate">{title}</div>
          <div class="text-center">{file}</div>
        </div>
      </a>
    {/each}
  </div>
</div>
