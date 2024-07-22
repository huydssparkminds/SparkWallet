<script lang="ts">
  export let tick: boolean = false;
</script>

<button class="btn-control">
  {#if tick}
    <div class="tick"></div>
  {/if}
  <slot></slot>
</button>

<style>
  .btn-control {
    height: 46px;
    width: 46px;
    border: 2px solid #8E8EA1;
    position: relative;
    border-radius: 9000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tick {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #6160dc;
    border-radius: 9999px;
    top: 2px;
    right: -5px;
  }
</style>
