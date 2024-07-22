<script lang="ts">
  import Button from "@/components/Ui/Button2/Button.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name: string = "";
  let error: boolean = false;

  const handleClick = () => {
    if (!name) {
     return error = true;
    }
    dispatch("WalletDetail", { title: "WalletDetail", data: { name } });
  };
</script>

<div>
  <h1 class="font-bold text-xl mb-6">Create New Wallet</h1>

  <p class="font-semibold mb-2">Wallet Name</p>
  <div class:error class="Wallet_name mb-20">
    <input bind:value={name} type="text" placeholder="Your Name" />
  </div>

  <div class="flex flex-col gap-3">
    <Button on:click={handleClick} btnDefault={true}>Create New Wallet</Button>
    <Button
      on:click={() => dispatch("Cancel", { title: "AddCrypto", data: {} })}
      >Cancel</Button
    >
  </div>
</div>

<style>
  .Wallet_name {
    padding: 10px 14px 10px 14px;
    width: 100%;
    max-width: 600px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid #8e8ea1;
    transition: all 0.3s;
  }
  .Wallet_name > input {
    font-size: 16px;
    color: black;
    margin-left: 14px;
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
  }
  .Wallet_name > input::placeholder {
    font-size: 16px;
    color: #8e8ea1;
  }
  .error {
    border: 1px solid red;
  }
</style>
