<script lang="ts">
  import Avata from "@/components/Ui/Avata/Avata.svelte";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import warning from "@/assets/ph_warning.png";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let nameWallet;
</script>

<div>
  <h1 class="font-bold text-xl mb-6">Show Private Key</h1>
  <div class="flex justify-center flex-col items-center">
    <Avata />
    <p class="font-semibold mt-2">{nameWallet && nameWallet}</p>
    <span class="self-start mt-6 font-semibold"
      >Private key for Viet Nguyen</span
    >
    <div class="Wallet_name mt-4">
      f3c5a108ea6a72f63712daf2cc04e2b43e47c20a1373c38345de28451d250aa6
    </div>
    <div class="Wallet_warning mt-4">
      <img src={warning} alt="" />
      <p>
        Warning: Never disclose this key. Anyone with your private keys can
        steal any assets held in your account.
      </p>
    </div>
    <div class="flex flex-col gap-3 w-full mt-4">
      <Button
        on:click={() => dispatch("Done", { title: "Done", data: {} })}
        btnDefault={true}>Done</Button
      >
    </div>
  </div>
</div>

<style>
  .Wallet_name {
    padding: 14px 16px;
    width: 100%;
    height: 100%;
    max-width: 600px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #8e8ea1;
    word-break: break-all;
    word-wrap: break-word;
  }
  .Wallet_warning {
    display: flex;
    padding: 14px 16px;
    width: 100%;
    color: #c13b49;
    background-color: #fc193130;
    border-radius: 20px;
  }
  .Wallet_warning img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
</style>
