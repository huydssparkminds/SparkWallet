<script>
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";
</script>

<div class="mb-4">
  <p class="font-bold text-xl mb-4">Send from</p>
  <Input>
    <span
      >0x2622...a33ea5<span class="font-normal"> (0x2622...a33ea5)</span>
    </span>
  </Input>
</div>
<div class="mb-4">
  <p class="font-bold text-xl mb-4">Send To</p>
  <Input
    ><span class="text-[#8E8EA1] font-semibold"
      >Enter public address (0x) or ENS name</span
    ></Input
  >
</div>
<div class="mb-4">
  <p class="font-bold text-xl mb-4">Asset</p>
  <Input>Select Asset</Input>
</div>
<div class="mb-8">
  <p class="font-bold text-xl mb-4">Send To</p>
  <Input isArrow={false}>
    <p class="text-[#8E8EA1] font-semibold">0.00</p>
  </Input>
</div>
<div class="my-auto">
  <Button btnDefault={true}>Send</Button>
</div>
