<script lang="ts">
  import ava from "@/assets/ava.png";
  import ETH2 from "@/assets/ETH2.png";
  import USDC from "@/assets/USDC.png";
  import info from "@/assets/svg/info.svg";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";
  import Input2 from "@/components/Ui/InputSelect2/Input2.svelte";
  type Option = {
    name: string;
    icon?: string;
  };

  const op1: Option[] = [
    { name: "0x2622...a33ea5 (0x2622...a33ea5)", icon: ava },
    { name: "Decentralized accounts", icon: ava },
  ];
  const op2: Option[] = [
    { name: "Ethereum", icon: ETH2 },
    { name: "USDC", icon: USDC },
  ];
  const op3: Option[] = [...op2].reverse();

  let btnAc: string = "2%";
</script>

<h1 class="font-bold text-3xl my-2">Swap</h1>
<div class="Swap">
  <div class="flex flex-col gap-2 mb-3">
    <Input options={op1}></Input>
    <Input options={op2}></Input>
  </div>
  <div class="mb-3">
    <h3 class="font-bold text-lg mb-3">Swap from</h3>
    <Input2 options={op2}></Input2>
    <p class="font-normal text-[#2F3C52]">
      You do not have any ETH available to swap
    </p>
  </div>
  <div class="mb-3">
    <h3 class="font-bold text-lg mb-3">Swap To</h3>
    <Input options={op3}></Input>
    <p class="font-normal text-[#2F3C52]">
      <span class="font-bold">USDC verified on 16 sources</span>.Always confirm
      the token address on a block explorer.
    </p>
  </div>
  <h3 class="text-center font-bold mb-4 text-lg">Advanced Options</h3>
  <div class="flex justify-between items-center mb-3">
    <p class="max-w-[70px] leading-none mb-4">Slippage Tolerance</p>
    <div class="flex gap-2 items-center">
      <img src={info} alt="" class="size-7 cursor-pointer hover:opacity-80" />
      <Button on:click={() => (btnAc = '2%')} btnDefault={btnAc === '2%'} isbtnSmall={true}>2%</Button>
      <Button on:click={() => (btnAc = '3%')} btnDefault={btnAc === '3%'} isbtnSmall={true}>3%</Button>
      <Button on:click={() => (btnAc = 'Custom')} btnDefault={btnAc === 'Custom'} isbtnSmall={true}>Custom</Button>
    </div>
  </div>
  <Button btnDefault={true}>Get Quotes</Button>
  <h4 class="font-medium text-[#6160DC] text-center mt-3">Terms of Service</h4>
</div>

<style>
  .Swap {
    background-color: white;
    padding: 18px 40px;
    width: 600px;
    height: 100%;
    border-radius: 40px;
    margin: 0 auto;
    font-weight: 600;
  }
</style>
