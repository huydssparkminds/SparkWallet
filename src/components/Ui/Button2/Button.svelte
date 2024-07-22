<script lang="ts">
  export let btnDefault: boolean = false;
  export let isbtnSmall: boolean = false;
</script>

<button
  on:click
  id="btn-3"
  class="{btnDefault ? 'btn-violet' : 'btn-default'} {isbtnSmall
    ? 'py-1'
    : 'py-[9px]'} px-[19px]"
>
  <slot></slot>
</button>

<style>
  #btn-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #6160dc;
    width: 100%;
    border-radius: 40px;
    transition: box-shadow 0.3s;
  }

  .btn-default {
    color: #6160dc;
  }

  .btn-default:hover {
    background-color: #6160dc;
    color: white;
  }
  .btn-violet {
    background-color: #6160dc;
    color: white;
  }
  #btn-3:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
