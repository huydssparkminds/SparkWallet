<script lang="ts">
  import Add from "@/assets/add.png";
  import ava from "@/assets/ava.png";
  import wallet from "@/assets/solar_wallet-outline.png";
  import arrowUp from "@/assets/arrowUp.svg";
  import bitcoint from "@/assets/bitcoin.png";
  import eth from "@/assets/ETH.png";
  import type { Account, NameAccount } from "@/models/account";
  import TableContent from "./TableContent/TableContent.svelte";
  import { modalStore } from "@/store/store";

  const account: Account[] = [
    {
      id: 1,
      icon: wallet,
      icon2: arrowUp,
      name: "Decentralized accounts",
      Tokens: [
        {
          id: 1,
          icon: eth,
          nameToken: "ETH",
          des: "Ether",
          portfolio: 32.45,
          price: 3451.98,
          ratio: -1.39,
          balance: 1923.12,
          desBalance: "0.5512 ETH",
        },
        {
          id: 2,
          icon: bitcoint,
          nameToken: "BTC",
          des: "Bitcoin",
          portfolio: 12.45,
          price: 63451.98,
          ratio: +1.39,
          balance: 33241.12,
          desBalance: "0.5512 ETH",
        },
      ],
    },
    { id: 2, icon: ava, name: "0z2622...a33ea5" },
  ];

  let activeTab: NameAccount = "Decentralized accounts";
  let tabItems: Account = account[0];
  const { open } = modalStore;

  const handleClick = (item: Account) => {
    activeTab = item.name;
    tabItems = item;
  };
</script>

<h1 class="font-bold text-3xl my-6">Dashboard</h1>
<div class="wrapper">
  <div class="flex h-full">
    <div class="Tab">
      <button on:click={open} class="tab-items">
        <img class="w-[60px] object-cover" alt="" src={Add} />
      </button>
      {#each account as item (item.id)}
        <button
          class:activeTab={activeTab === item.name}
          class="tab-items"
          on:click={() => handleClick(item)}
        >
          <img class="w-[60px] object-cover" alt="" src={item.icon} />
          {#if item.icon2}
            <img class="object-cover" alt="" src={item.icon2} />
          {/if}
        </button>
      {/each}
    </div>
    <TableContent {tabItems} />
  </div>
</div>

<style>
  .Tab {
    width: 180px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-right: 2px solid #f5f5f5;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .tab-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
    transition: all 0.2s;
  }
  .tab-items:hover {
    background-color: #f5f5f5;
  }
  .activeTab {
    background-color: #f5f5f5;
  }
</style>
