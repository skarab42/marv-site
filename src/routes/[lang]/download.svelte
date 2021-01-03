<script>
  import DownloadBox from "../../components/DownloadBox.svelte";
  import getLastRelease from "../../libs/getLastRelease";

  import FaWindows from "svelte-icons/fa/FaWindows.svelte";
  import FaLinux from "svelte-icons/fa/FaLinux.svelte";
  import FaApple from "svelte-icons/fa/FaApple.svelte";

  const downloadURL = "https://github.com/skarab42/marv/releases/download";

  const links = [
    {
      title: "Windows",
      icon: FaWindows,
      link: "/v0.16.0/Marv-Setup-0.16.0.exe",
    },
  ];

  getLastRelease("skarab42");
</script>

<div class="p-5 grid grid-cols-3 gap-5">
  {#each links as { title, icon, link }}
    <DownloadBox title="{title}" icon="{icon}" link="{downloadURL}/{link}" />
  {/each}
</div>
