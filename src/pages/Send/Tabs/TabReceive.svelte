<script>
  import Qr from "@/assets/Qr.png";
  import coppy from "@/assets/coppy.png";
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";

  export let options;

</script>

<div class="mb-4">
  <p class="font-bold text-xl mb-4">Asset</p>
  <Input {options}></Input>
</div>
<div class="mb-8 mx-auto max-w-[300px] max-h-[300px] overflow-hidden">
  <img src={Qr} alt="" class="w-full h-full object-fill" />
</div>
<Button><img src={coppy} class="mr-2" alt="" />Coppy Address</Button>
