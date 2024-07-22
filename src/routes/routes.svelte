<script context="module">
  import {
    Send,
    Home,
    Activity,
    Key,
    Transaction,
  } from "@/assets/svg/index.svelte";
  import { svgHome } from "@/assets/svg/index.svelte";


  export const routes = [
    {
      path: "/",
      title: "Dashboard",
      icon: svgHome,
    },
    {
      path: "/swap",
      title: "Swap",
      icon: Transaction,
    },
    {
      path: "/send&receive",
      title: "Send & Receive",
      icon: Send,
    },
    {
      path: "/activities",
      title: "Activities",
      icon: Activity,
    },
    {
      path: "/apikeys",
      title: "API Keys",
      icon: Key,
    },
  ];

</script>
