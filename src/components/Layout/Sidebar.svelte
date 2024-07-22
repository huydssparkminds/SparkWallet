<script lang="ts">
  import logo from "@/assets/logo.png";
  import { routes } from "@/routes/routes.svelte";
  import { link, location } from "svelte-spa-router";

  $: url = $location;
</script>

<section class="sidebar">
  <a href="/" class="flex mx-auto justify-center items-center mt-12 gap-2">
    <img
      src={logo}
      class="max-w-[61px] w-full max-h-[61px] h-full object-cover"
      alt=""
    />
    <h1 class="font-bold text-[32px]">SparkWallet</h1>
  </a>

  <nav class="mt-12 pl-[60px]">
    {#each routes as route}
      <a
        use:link
        href={route.path}
        class="mb-[10px] flex items-center text-center hover:opacity-55 pl-4"
      >
        <button class="btn-icon {url === route.path ? 'bg-[#6160DC]' : ''}">
          <svelte:component
            this={route.icon}
            fill={url === route.path ? "#ffffff" : "#8E8EA1"}
          />
        </button>
        <span
          class="font-semibold ml-6 text-lg text-left {url === route.path
            ? 'text-black'
            : 'text-[#8E8EA1]'}">{route.title}</span
        >
      </a>
    {/each}
  </nav>
</section>

<style>
  .sidebar {
    position: fixed;
    width: 345px;
    background-color: white;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
  }
  .btn-icon {
    padding: 14px;
    border-radius: 40px;
  }
</style>
