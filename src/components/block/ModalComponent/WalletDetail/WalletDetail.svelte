<script lang="ts">
  import Avata from "@/components/Ui/Avata/Avata.svelte";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import edit from "@/assets/svg/edit.svg";
  import Qr2 from "@/assets/qr2.png";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name: string = "";
  export let nameWallet;
</script>

<div>
  <h1 class="font-bold text-xl mb-6">Wallet Details</h1>
  <div class="flex justify-center flex-col items-center">
    <Avata />
    <div class="flex items-center mt-4">
      <p class="font-semibold">{nameWallet && nameWallet}</p>
      <img src={edit} alt="" />
    </div>
    <img src={Qr2} alt="" class="mt-4 object-fill" />
    <p class="text-lg font-semibold mt-4 w-[392px] text-center break-words">
      0x2622F5097F9eEA761b03E6818372dEbDCaA33EA5
    </p>
    <div class="flex flex-col gap-3 w-full mt-2">
      <Button
        on:click={() =>
          dispatch("ShowKey", { title: "ShowKey", data: { name } })}
        btnDefault={true}>Show Private Key</Button
      >
      <Button
        on:click={() => dispatch("Cancel", { title: "CreateNew", data: {} })}
        >Show Recover Key</Button
      >
    </div>
  </div>
</div>

<style>
</style>
