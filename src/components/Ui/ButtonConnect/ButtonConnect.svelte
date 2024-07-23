<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let activeBtn: string;
  export let btn: { name: string; icon?: string };
</script>

<button
  id="btnConnect"
  on:click={() => dispatch("btnActive", btn.name)}
  class:activeBtn={activeBtn === btn.name}
>
  {#if btn.icon}
    <img src={btn.icon} alt="Connect" />
  {/if}
  <span>{btn.name}</span>
</button>

<style>
  #btnConnect {
    border: 2.97px solid #f5f5f5;
    border-radius: 29.67px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 12px 32px;
    gap: 12px;
    height: 60px;
    width: 100%;
  }
  #btnConnect:hover {
    border: 2.97px solid #6160dc;
  }
  .activeBtn {
    border: 2.97px solid #6160dc !important;
  }
</style>
