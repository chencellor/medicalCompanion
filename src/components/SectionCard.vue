<template>
  <view class="section-card bg-white rounded-lg p-4 mb-4">
    <view class="header flex justify-between items-center mb-4">
      <text class="title text-lg font-bold">{{ title }}</text>
      <view class="more flex items-center text-sm text-gray-500" @tap="$emit('more')">
        <text>查看更多</text>
        <uni-icons type="arrow-right" size="14"></uni-icons>
      </view>
    </view>
    <view class="content flex justify-between">
      <view class="item w-30" v-for="(item, index) in items" :key="index">
        <image :src="item.image" mode="aspectFill" class="w-full h-24 rounded-lg mb-2"></image>
        <text class="text-sm text-gray-700">{{ item.description }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: String,
  items: Array
});

defineEmits(['more']);
</script>