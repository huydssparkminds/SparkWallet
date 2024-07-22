<script>
  import ava from "@/assets/ava.png";
  import ETH2 from "@/assets/ETH2.png";
  import USDC from "@/assets/USDC.png";
  import info from "@/assets/svg/info.svg";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";
  import Input2 from "@/components/Ui/InputSelect2/Input2.svelte";
</script>

<h1 class="font-bold text-3xl my-2">Swap</h1>
<div class="Swap">
  <div class="flex flex-col gap-2 mb-3">
    <Input img={ava}>
      <span
        >0x2622...a33ea5<span class="font-normal"> (0x2622...a33ea5)</span>
      </span>
    </Input>
    <Input img={ETH2}>
      <span>Ethereum</span>
    </Input>
  </div>
  <div class="mb-3">
    <h3 class="font-bold text-lg mb-3">Swap from</h3>
    <Input2 img={ETH2}>Ethereum</Input2>
    <p class="font-normal text-[#2F3C52]">
      You do not have any ETH available to swap
    </p>
  </div>
  <div class="mb-3">
    <h3 class="font-bold text-lg mb-3">Swap To</h3>
    <Input img={USDC}>USDC</Input>
    <p class="font-normal text-[#2F3C52]">
      <span class="font-bold">USDC verified on 16 sources</span>.Always confirm
      the token address on a block explorer.
    </p>
  </div>
  <h3 class="text-center font-bold mb-4 text-lg">Advanced Options</h3>
  <div class="flex justify-between items-center mb-3">
    <p class="max-w-[70px] leading-none mb-4">Slippage Tolerance</p>
    <div class="flex gap-2 items-center">
      <img src={info} alt="" class="size-7" />
      <Button btnDefault={true} isbtnSmall={true}>2%</Button>
      <Button isbtnSmall={true}>3%</Button>
      <Button isbtnSmall={true}>Custom</Button>
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
