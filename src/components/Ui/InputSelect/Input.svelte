<script lang="ts">
  import arrowDown from "@/assets/arrowDown.png";
  export let isArrow: boolean = true;
  export let img: string = "";
</script>

<div class="flex justify-between items-center h-[50px] px-6 border border-[#8E8EA1] rounded-full">
  <div class="flex items-center">
    {#if img}
      <img class="w-[30px] h-[30px] object-contain mr-4" alt="" src={img} />
    {/if}
    <slot></slot>
  </div>
  {#if isArrow}
    <img src={arrowDown} alt="" />
  {/if}
</div>
