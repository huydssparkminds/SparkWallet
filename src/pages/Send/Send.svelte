<script lang="ts">
  import TabReceive from "./Tabs/TabReceive.svelte";
  import TabSend from "./Tabs/TabSend.svelte";

  type Tablist = "Send" | "Receive";
  let tab: Tablist = "Send";
</script>

<h1 class="font-bold text-3xl my-4">Send & Receive</h1>
<div class="Send">
  <div class="bg-[#F5F5F5] rounded-full mb-3">
    <ul role="menu" class="flex justify-around">
      <li
        role="presentation"
        class:tabActive={tab === "Send"}
        on:click={() => (tab = "Send")}
      >
        Send
      </li>
      <li
        role="presentation"
        class:tabActive={tab === "Receive"}
        on:click={() => (tab = "Receive")}
      >
        Receive
      </li>
    </ul>
  </div>

  <div class="">
    {#if tab === "Send"}
      <TabSend />
    {:else}
      <TabReceive />
    {/if}
  </div>
</div>

<style>
  .Send {
    background-color: white;
    padding: 18px 40px;
    width: 600px;
    height: 100%;
    border-radius: 40px;
    margin: 0 auto;
    font-weight: 600;
  }

  .Send ul li {
    flex: 1;
    text-align: center;
    padding: 12px 0;
    cursor: pointer;
    color: #8e8ea1;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    border-radius: 40px;
  }
  .tabActive {
    background-color: #6160dc;
    border-radius: 40px;
    color: white !important;
  }
</style>
