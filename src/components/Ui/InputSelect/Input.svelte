<script lang="ts">
  import arrowDown from "@/assets/arrowDown.png";

  export let isBorder: boolean = true;
  export let isArrow: boolean = true;
  export let options: { name: string; icon?: string }[] = [];
  export let type: string = "dropdown";
  export let placeholder: string = '0'

  let isOpen: boolean = false;
  let currentValue = options[0];

  const handleSelectOp = (i: { name: string; icon?: string }) => {
    currentValue = i;
    isOpen = false;
  };
</script>

{#if type === "dropdown"}
  <div class="dropdown {isBorder ? 'border1' : ''}">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="px-4 w-full flex items-center justify-between font-semibold text-base rounded-[40px] h-full"
    >
      <div class="flex items-center">
        {#if currentValue && currentValue.icon}
          <img
            src={currentValue.icon}
            class="w-[30px] h-[30px] object-contain mr-6"
            alt=""
          />
        {/if}
        <spa>{currentValue.name}</spa>
      </div>
      {#if isArrow}
        <img src={arrowDown} alt="" class="size-5 object-contain" />
      {/if}
    </button>
    {#if isOpen}
      <div
        class="border border-[#8e8ea1] bg-white top-14 absolute flex flex-col items-start rounded-[20px] z-20 px-4 py-2 w-full"
      >
        {#each options as i}
          <div
            role="presentation"
            on:click={() => handleSelectOp(i)}
            class="flex items-center px-1 py-2 cursor-pointer hover:bg-[#6160dc] hover:text-white w-full rounded-[10px]"
          >
            {#if i.icon}
              <img
                src={i.icon}
                class="w-[30px] h-[30px] object-contain mr-6"
                alt=""
              />
            {/if}
            <h3 class="font-semibold">{i.name}</h3>
          </div>
        {/each}
      </div>
    {/if}
  </div>
{:else if type === "input"}
  <div class="input">
    <input type="text" placeholder={placeholder} />
    {#if placeholder === '0.00'}
    <p class="w-[50px] text-right">≈ 0</p>
    {/if}
  </div>
{/if}

<style>
  .dropdown {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-radius: 40px;
    height: 50px;
  }
  .border1 {
    border: 1px solid #8e8ea1;
  }

  .input {
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 40px;
    height: 50px;
    border: 1px solid #8e8ea1;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
  .input > input {
    border: none;
    outline: none;
    width: 100%;
  }
  .input > input::placeholder {
    color: #8e8ea1;
    font-weight: 500;
  }
</style>
