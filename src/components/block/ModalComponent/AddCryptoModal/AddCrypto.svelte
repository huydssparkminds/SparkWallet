<script lang="ts">
  import ButtonConnect from "@/components/Ui/ButtonConnect/ButtonConnect.svelte";
  import metamask from "@/assets/metamask.png";
  import portis from "@/assets/portis.png";
  import Binance from "@/assets/Binance.png";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const btnConnect = [
    { name: "Connect to MetaMask", icon: metamask },
    { name: "Connect to Binance Wallet", icon: Binance },
    { name: "Connect to Portis", icon: portis },
    { name: "Other Wallet" },
  ];

  let activeBtn: string = "Connect to Portis";

  const handleClick = (e: any) => {
    activeBtn = e.detail;
  };
</script>

<div>
  <h1 class="font-bold text-xl mb-4">Add Crypto Wallet</h1>
  <p class="font-medium mb-6">Connect to other crypto wallet</p>

  <div class="flex flex-col gap-4 mb-6">
    {#each btnConnect as btn, i (i)}
      <ButtonConnect {btn} {activeBtn} on:btnActive={handleClick}
      ></ButtonConnect>
    {/each}
  </div>
  <p class="font-medium mb-6">Create or import wallet</p>
  <div class="flex flex-col gap-3">
    <Button
      on:click={() => dispatch("CreateNew", { title: "CreateNew", data: {} })}
      btnDefault={true}>Create New Wallet</Button
    >
    <Button
      on:click={() =>
        dispatch("ImportWallet", { title: "ImportWallet", data: {} })}
      >Import Wallet</Button
    >
  </div>
</div>
