<script>
  import Search from "@/assets/svg/iSearch.svg";
</script>

<div class="form-search">
  <img class="max-w-6" src={Search} alt="" />
  <input type="search" placeholder="Search here..." />
</div>

<style>
  .form-search {
    display: flex;
    align-items: center;
    padding: 10px 32px 10px 32px;
    width: 600px;
    max-width: 600px;
    border-radius: 40px;
    background-color: white;
  }
  .form-search > input {
    font-size: 16px;
    color: #8e8ea1;
    margin-left: 14px;
    outline: none;
    border: none;
    background: transparent;
    width: 100%;

  }
  .form-search > input::placeholder {
    font-size: 16px;
    color: #8e8ea1;
  }
</style>
