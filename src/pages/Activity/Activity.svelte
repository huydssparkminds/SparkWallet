<script lang="ts">
  import cmt1 from "@/assets/cmt1.png";
  import cmt2 from "@/assets/cmt2.png";
</script>

<h1 class="font-bold text-3xl my-6">Notification & Lastest Activity</h1>
<div class="activity">
  <div class="separator">
    <span>Today</span>
    <div class="line"></div>
  </div>

  <div class="flex mt-4">
    <p class="w-[70px] mt-1">2m ago</p>
    <div class="w-[7px] h-12 rounded-full bg-[#6160DC] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Bought Bean#2210, <span class="text-[#6160DC]">Bean#3021</span> on
        OpenSea <span class="text-[#FC1931] font-normal">(-0.45 ETH)</span>
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
      <div class="flex mt-2">
        <img src={cmt1} alt="Bean #2210" class="w-12 h-12 rounded-[2px] mr-1" />
        <img src={cmt2} alt="Bean #3021" class="w-12 h-12 rounded-[2px]" />
      </div>
    </div>
  </div>
  <div class="flex mt-3">
    <p class="w-[70px] mt-1">6m ago</p>
    <div class="w-[7px] h-12 rounded-full bg-[#6160DC] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Swapped <span class="text-[#FC1931]">1,000 USDC</span> for
        <span class="text-[#00A389]">1,238,102.021 RFD</span> on Uniswap V2
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
    </div>
  </div>

  <div class="flex mt-3">
    <p class="w-[70px] mt-1">16m ago</p>
    <div class="w-[7px] h-12 rounded-full bg-[#00A389] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Pooled <span class="text-[#FC1931]">100 USDC</span> on
        <span class="text-[#6160DC]">Compound</span>
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
    </div>
  </div>
  <div class="flex mt-3">
    <p class="w-[70px] mt-1">4h ago</p>
    <div class="w-[7px] h-12 rounded-full bg-[#6160DC] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Bought <span class="text-[#6160DC]">1 Azuki Elemental</span> on
        <span class="text-[#6160DC]">Blur Lend</span>
        <span class="text-[#FC1931] font-normal">(-1.23 ETH)</span>
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
      <div class="flex mt-2">
        <img src={cmt1} alt="Bean #2210" class="w-12 h-12 rounded-[2px] mr-1" />
      </div>
    </div>
  </div>

  <div class="separator">
    <span>Yesterday</span>
    <div class="line"></div>
  </div>
  <div class="flex mt-4">
    <p class="w-[70px] mt-1">03:39 PM</p>
    <div class="w-[7px] h-12 rounded-full bg-[#FFB74A] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Swapped <span class="text-[#FC1931]">0.312 ETH</span> for
        <span class="text-[#00A389]">50.0k FLC</span>
        on <span class="text-[#6160DC]">Uniswap V3</span>
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
    </div>
  </div>
  <div class="flex mt-3">
    <p class="w-[70px] mt-1">01:45 PM</p>
    <div class="w-[7px] h-12 rounded-full bg-[#6160DC] ml-4 mr-3"></div>
    <div class="flex-1">
      <h2 class="font-bold text-sm">
        Swapped <span class="text-[#FC1931]">0.112 ETH</span> for
        <span class="text-[#00A389]">23.0k FLC</span>
        on <span class="text-[#6160DC]">Uniswap V3</span>
      </h2>
      <p class="text-xs text-[#8E8EA1] mt-2">Monday, June 31 2020</p>
    </div>
  </div>
</div>

<style>
  .activity {
    height: 100%;
    background-color: white;
    border-radius: 40px;
    padding: 1rem 1.75rem;
  }
  .separator {
    display: flex;
    align-items: center;
  }

  .separator span {
    font-weight: bold;
    margin-right: 10px;
    font-weight: 700;
    font-size: 20px;
  }

  .separator .line {
    margin-top: 2px;
    flex-grow: 1;
    border-top: 1px dashed #ccc;
    height: 0;
  }
</style>
