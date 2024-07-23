<script>
  import Button from "@/components/Ui/Button2/Button.svelte";
  import Input from "@/components/Ui/InputSelect/Input.svelte";

  export let options;
  const op1 = [{ name: "Select Asset" }, { name: "Select anything" }];

</script>

<div class="mb-4">
  <p class="font-bold text-xl mb-4">Send from</p>
  <Input {options}></Input>
</div>
<div class="mb-4">
  <p class="font-bold text-xl mb-4">Send To</p>
  <Input placeholder={"Enter public address (0x) or ENS name"} type={"input"}
  ></Input>
</div>
<div class="mb-4">
  <p class="font-bold text-xl mb-4">Asset</p>
  <Input options={op1}></Input>
</div>
<div class="mb-8">
  <p class="font-bold text-xl mb-4">Send To</p>
  <Input placeholder={"0.00"} type={"input"} isArrow={false}></Input>
</div>
<div class="my-auto">
  <Button btnDefault={true}>Send</Button>
</div>
