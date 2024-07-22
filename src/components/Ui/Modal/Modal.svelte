<script lang="ts">
  import AddCrypto from "@/components/block/ModalComponent/AddCryptoModal/AddCrypto.svelte";
  import CreateWallet from "@/components/block/ModalComponent/CreateWalletModal/CreateWallet.svelte";
  import ImportWallet from "@/components/block/ModalComponent/ImporWallet/ImportWallet.svelte";
  import ShowKey from "@/components/block/ModalComponent/ShowKey/ShowKey.svelte";
  import WalletDetail from "@/components/block/ModalComponent/WalletDetail/WalletDetail.svelte";
  import { modalStore } from "@/store/store";

  const { close } = modalStore;

  let isOpen: boolean;
  let modalStart: string = "AddCrypto";
  let nameWallet: string | null = null;

  $: isOpen = $modalStore;

  const handleMessage = (e: any) => {
    modalStart = e.detail.title;
    if (Object.keys(e.detail.data).length > 0 && e.detail.data.name !== "") {
      nameWallet = e.detail.data.name;
    }
  };

  const handleClick = () => {
    close();
    modalStart = "AddCrypto";
    nameWallet = null;
  };
</script>

{#if isOpen}
  <div
    class="absolute top-0 bottom-0 left-0 right-0 grid justify-center items-center"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={handleClick}
      class="absolute top-0 bottom-0 left-0 right-0 bg-gray-900/80 z-[100]"
    />
    <div class="modal-content">
      <div class="modalBody">
        {#if modalStart === "AddCrypto"}
          <AddCrypto
            on:CreateNew={handleMessage}
            on:ImportWallet={handleMessage}
          />
        {:else if modalStart === "CreateNew"}
          <CreateWallet
            on:Cancel={handleMessage}
            on:WalletDetail={handleMessage}
          />
        {:else if modalStart === "WalletDetail"}
          <WalletDetail
            {nameWallet}
            on:Cancel={handleMessage}
            on:ShowKey={handleMessage}
          />
        {:else if modalStart === "ShowKey"}
          <ShowKey {nameWallet} on:Done={handleClick} />
        {:else if modalStart === 'ImportWallet'}
          <ImportWallet on:Done={handleClick} />
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-content {
    z-index: 1000;
    max-height: 700px;
    min-height: 300px;
    width: 572px;
    min-width: 200px;
    background-color: #ffffff;
    box-shadow: 0px 20px 50px 0px #bf156c0d;
    border-radius: 40px;
    padding: 24px 40px;
  }
</style>
