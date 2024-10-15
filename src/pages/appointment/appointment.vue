<template>
  <view class="appointment">
    <view class="tabs">
      <view :class="['tab', { active: activeTab === 'hospital' }]" @tap="setActiveTab('hospital')">医院</view>
      <view :class="['tab', { active: activeTab === 'other' }]" @tap="setActiveTab('other')">医疗、器械、技术</view>
    </view>

    <view class="filter">
      <picker mode="selector" :range="filterOptions" @change="onFilterChange">
        <view class="filter-btn">筛选</view>
      </picker>
    </view>

    <view class="content">
      <view v-if="activeTab === 'hospital'" v-for="(item, index) in hospitalList" :key="index" @tap="navigateToDetail(item)">
        <text>{{ item.name }}</text>
      </view>
      <view v-else v-for="(item, index) in otherList" :key="index" @tap="navigateToDetail(item)">
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('hospital');
const filterOptions = ref(['全部', '选项1', '选项2', '选项3']);
const hospitalList = ref([
  { id: 1, name: '医院1' },
  { id: 2, name: '医院2' },
  { id: 3, name: '医院3' },
]);
const otherList = ref([
  { id: 1, name: '项目1' },
  { id: 2, name: '项目2' },
  { id: 3, name: '项目3' },
]);

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const onFilterChange = (e: any) => {
  console.log('筛选选项:', filterOptions.value[e.detail.value]);
};

const navigateToDetail = (item: any) => {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${item.id}&type=${activeTab.value}`
  });
};
</script>

<style scoped>
.appointment {
  padding: 20rpx;
}

.tabs {
  display: flex;
  margin-bottom: 20rpx;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 10rpx 0;
  border-bottom: 2rpx solid #ccc;
}

.tab.active {
  border-bottom: 2rpx solid #007aff;
  color: #007aff;
}

.filter {
  margin-bottom: 20rpx;
}

.filter-btn {
  background-color: #f0f0f0;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  text-align: center;
}

.content {
  /* 内容样式 */
}
</style>