<script>
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<Sidebar />
<div class="Main-content">
  <Header />
  <slot></slot>
</div>

<style>
  .Main-content {
    position: relative;
    display: flex;
    flex-direction: column;
    left: 345px;
    width: calc(100% - 345px);
    padding: 0 30px 30px 30px;
  }
</style>
