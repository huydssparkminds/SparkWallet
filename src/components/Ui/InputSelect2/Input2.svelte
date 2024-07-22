<script lang="ts">
  import arrowDown from "@/assets/arrowDown.png";
  export let isArrow: boolean = true;
  export let img: string = "";
</script>

<div class="flex border rounded-full">
  <div class="flex items-center border-r px-6 py-2">
    {#if img}
      <img class="w-[30px] h-[30px] object-contain mr-4" alt="" src={img} />
    {/if}
    <slot></slot>
    {#if isArrow}
      <img src={arrowDown} class="ml-4" alt="" />
    {/if}
  </div>

  <div class="px-6 py-2 flex items-center text-[#8E8EA1] font-semibold">0</div>
</div>
