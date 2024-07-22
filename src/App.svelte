<script lang="ts">
  import Layout from "@/components/Layout/Layout.svelte";
  import Router from "svelte-spa-router";
  import Dasboard from "./pages/Dasboard/Dasboard.svelte";
  import Send from "./pages/Send/Send.svelte";
  import Swap from "./pages/Swap/Swap.svelte";
  import Activity from "./pages/Activity/Activity.svelte";
  import Modal from "@/components/Ui/Modal/Modal.svelte";

  const routes = {
    "/": Dasboard,
    "/send&receive": Send,
    "/swap": Swap,
    "/activities": Activity,
    "/apikeys": Dasboard,
  };

</script>

<Modal />
<Layout>
  <Router {routes} />
</Layout>
