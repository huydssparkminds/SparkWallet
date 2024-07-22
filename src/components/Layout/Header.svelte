<script>
  import Avata from "../Ui/Avata/Avata.svelte";
  import Button from "../Ui/Button1/Button.svelte";
  import Search from "../Ui/SearchInput/Search.svelte";
  import { Notification, Setting } from "@/assets/svg/index.svelte";
</script>

<header id="header">
  <Search />
  <div class="flex gap-4 items-center">
    <Button tick={true}><img src={Notification} alt="" /></Button>
    <Button><img src={Setting} alt="" /></Button>
    <Avata />
    <span class="font-semibold text-lg">0z2622...a33ea5</span>
  </div>
</header>

<style>
  #header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6px 0;
  }
</style>
