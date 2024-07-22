<script lang="ts">
  export let activeBtn: boolean = false;
</script>

<button id="btnConnect" class:activeBtn>
  <slot></slot>
</button>

<style>
  #btnConnect {
    border: 2.97px solid #f5f5f5;
    border-radius: 29.67px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 12px 32px;
    gap: 12px;
    height: 60px;
    width: 100%;
  }
  #btnConnect:hover {
    border: 2.97px solid #6160dc;
  }
  .activeBtn {
    border: 2.97px solid #6160dc !important;
  }
</style>
