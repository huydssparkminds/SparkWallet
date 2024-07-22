<script lang="ts">
  import hidden from "@/assets/svg/hidden.svg";
  import type { Account } from "@/models/account";
  import { formatNumber } from "@/utils/FormatNumber.svelte";
  export let tabItems: Account;
</script>

<div class="tableContent w-full">
  <div class="p-4">
    <h3 class="font-bold text-2xl">{tabItems && tabItems.name}</h3>
    <div class="flex items-center">
      <span class="font-bold text-[36px]">$0.00</span>
      <img class="ml-4 size-6" src={hidden} alt="hidden" />
    </div>
    <p class="font-normal text-[#FF4A55]">$0.00 (0.00%)</p>
  </div>
  <div class="w-full">
    <ul class="flex px-5 border-b text-xl font-semibold">
      <li class="py-1 px-6 text-[#6160DC] border-b-2 border-[#6160DC]">
        Tokens
      </li>
      <li class="py-1 px-6">NFTs</li>
      <li class="py-1 px-6">DeFi</li>
      <li class="py-1 px-6">Transactions</li>
      <li class="py-1 px-6">Spending Caps</li>
    </ul>
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left text-[#2F3C52] mt-4"
      >
        <thead class="">
          <tr class="border-b text-base text-[#2F3C52]">
            <th scope="col" class="px-4 py-1 w-2/4 font-normal">Token</th>
            <th scope="col" class="px-4 py-1 font-normal">Portfolio %</th>
            <th scope="col" class="px-4 py-1 font-normal">Price (24hr)</th>
            <th scope="col" class="px-4 py-1 font-normal">Balance</th>
          </tr>
        </thead>
        <tbody>
          {#if tabItems.Tokens && tabItems.Tokens.length > 0}
            {#each tabItems.Tokens as token}
              <tr class="bg-white border-b font-bold align-top">
                <th scope="row" class="px-4 py-2 whitespace-nowrap">
                  <div class="flex gap-3 items-center">
                    <img src={token.icon} alt="icon" />
                    <div class="">
                      <p class="font-bold text-lg">{token.nameToken}</p>
                      <p class="font-normal text-base">{token.des}</p>
                    </div>
                  </div>
                </th>
                <td class="px-4 py-2 ">{token.portfolio} % </td>
                <td class="px-4 py-2">
                  ${formatNumber(token.price)}
                  <p
                    class="font-normal {token.ratio < 0
                      ? 'text-[#FC1931]'
                      : 'text-[#4DBE25]'}"
                  >
                    {token.ratio > 0 ? '+' : ''}{token.ratio}%
                  </p>
                </td>
                <td class="px-4 py-2"> ${formatNumber(token.balance)} 
                  <p class="font-normal">{token.desBalance}</p>
                </td>
              </tr>
            {/each}
          {:else}
          <td colSpan={4} class="w-full left-0 text-center pt-20 text-[#2F3C52] font-normal">No tokens to show</td>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>
