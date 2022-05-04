<template>
  <view class="content">
    <image class="logo" :src="logo" />
    <view class="text-area">
      <text class="title text-red-200 text-4xl bg-gray-100">{{ title }}</text>
      <text class="text-4xl text-red-400 mr-2">这里一些描述性文字</text>
      <uni-icons type="right"></uni-icons>
    </view>
  </view>
  <view class="a-box text-xl"> 一个框框 </view>
  <button class="primary" @click="handleSetStorage">你好</button>
  <button class="primary" @click="showToast">showToast</button>
  <demo />
</template>

<script setup lang="ts">
import message from "@/utils/message";
import demo from "./demo.vue";
import { ref } from "vue";
import { useStore } from "@/store";
import useStorage from "@/hooks/useStorage";
const showToast = () => {
  // message.toast('你好');
  // message.message('你好','好');
  message.confirm('你好', '好');
};
const store = useStore();
const storage = useStorage();
const handleSetStorage = () => {
  storage.set("name", "小明");
};
const logo = ref("");
const title = ref("Hello");
</script>

<style lang="scss">
page {
  .content {
    background-color: #fff;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.a-box {
  width: 200px;
}
.primary {
  background-color: $uni-color-primary;
}
</style>
