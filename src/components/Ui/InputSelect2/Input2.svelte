<script lang="ts">
  import Input from "../InputSelect/Input.svelte";
  export let options;
</script>

<div class="flex border border-[#8e8ea1] rounded-full">
  <Input isBorder={false} {options} />

  <div class="px-4 w-[700px] py-2 flex items-center text-[#8E8EA1] font-normal border-l border-[#8e8ea1]">
    <input class="custom-input" placeholder="0" type="number" />
  </div>
</div>

<style>
  .custom-input {
    border: none;
    outline: none;
    width: 100%;
  }
</style>
