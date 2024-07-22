<script>
  import ButtonConnect from "@/components/Ui/ButtonConnect/ButtonConnect.svelte";
  import metamask from "@/assets/metamask.png";
  import portis from "@/assets/portis.png";
  import Binance from "@/assets/Binance.png";
  import Button from "@/components/Ui/Button2/Button.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div>
  <h1 class="font-bold text-xl mb-4">Add Crypto Wallet</h1>
  <p class="font-medium mb-6">Connect to other crypto wallet</p>

  <div class="flex flex-col gap-4 mb-6">
    <ButtonConnect>
      <img src={metamask} alt="Connect" />
      <span>Connect to MetaMask</span>
    </ButtonConnect>
    <ButtonConnect>
      <img src={Binance} alt="Connect" />
      <span>Connect to Binance Wallet</span>
    </ButtonConnect>
    <ButtonConnect activeBtn={true}>
      <img src={portis} alt="Connect" />
      <span>Connect to Portis</span>
    </ButtonConnect>
    <ButtonConnect>
      <span>Other Wallet</span>
    </ButtonConnect>
  </div>
  <p class="font-medium mb-6">Create or import wallet</p>
  <div class="flex flex-col gap-3">
    <Button
      on:click={() => dispatch("CreateNew", { title: "CreateNew", data: {} })}
      btnDefault={true}>Create New Wallet</Button
    >
    <Button on:click={() => dispatch("ImportWallet", { title: "ImportWallet", data: {} })}
      >Import Wallet</Button
    >
  </div>
</div>
