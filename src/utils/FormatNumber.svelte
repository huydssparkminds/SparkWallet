<script lang="ts" context="module">
  export function formatNumber(number: number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>
