<script lang="ts">
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const op1 = [{ name: "Private Key" }, { name: "Show Recover Key" }];
</script>

<div>
  <h1 class="font-bold text-xl mb-4">Import Wallet</h1>
  <p class="w-[365px] mb-4">
    Imported accounts won’t be associated with your MetaMask Secret Recovery
    Phrase. Learn more about imported accounts <a href="/"
      class="text-[#6160DC] underline">here</a
    >
  </p>
  <h3 class="font-semibold text-lg mt-4 mb-3">Select types</h3>
  <Input options={op1}></Input>

  <h3 class="font-semibold text-lg mt-4 mb-3">Enter you private key</h3>
  <Input type={"input"} placeholder={""}></Input>
  <div class="flex flex-col gap-3 w-full mt-6">
    <Button
      on:click={() => dispatch("Done", { title: "Done", data: {} })}
      btnDefault={true}>Import Wallet</Button
    >
    <Button on:click={() => dispatch("Done", { title: "Done", data: {} })}
      >Cancel</Button
    >
  </div>
</div>

<style>
</style>
