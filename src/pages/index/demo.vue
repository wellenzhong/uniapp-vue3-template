<template>
  <view class="w-full text-xl text-red-900 text-danger p-1 bg-primary-700">
    hello
  </view>
  <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 bg-blue rounded-md">1</div>
    <div class="col-span-2">2</div>
    <div class="row-span-2 col-span-2">3</div>
  </div>
  <view><button class="demo-btn text-white bg-black ">hello</button></view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.demo-btn {
    width: 200px;
    font-size: 18px;
}
</style>
