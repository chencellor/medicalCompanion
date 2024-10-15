<template>
  <view class="profile">
    <view class="user-info">
      <image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
      <text class="nickname">{{ userInfo.nickname }}</text>
    </view>

    <view class="menu-list">
      <view class="menu-item" v-for="(item, index) in menuItems" :key="index" @tap="onMenuItemTap(item)">
        <text>{{ item.title }}</text>
        <uni-icons type="arrow-right" size="16"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userInfo = ref({
  avatar: '/static/default-avatar.png',
  nickname: '用户昵称'
});

const menuItems = ref([
  { title: '就诊人', action: 'patients' },
  { title: '订单查询', action: 'orders' },
  { title: '企业微信', action: 'wechat' },
  { title: '优惠券', action: 'coupons' },
  { title: '在线客服', action: 'customerService' }
]);

const onMenuItemTap = (item: any) => {
  switch (item.action) {
    case 'patients':
      // 跳转到就诊人页面
      break;
    case 'orders':
      // 跳转到订单查询页面
      break;
    case 'wechat':
      // 打开企业微信
      break;
    case 'coupons':
      // 跳转到优惠券页面
      break;
    case 'customerService':
      // 唤起微信客服窗口
      uni.openCustomerServiceChat({
        extInfo: { url: 'https://work.weixin.qq.com/kfid/kfc...' },
        corpId: '企业ID',
        success(res) {
          console.log('成功打开客服窗口', res);
        },
        fail(err) {
          console.error('打开客服窗口失败', err);
        }
      });
      break;
  }
};
</script>

<style scoped>
.profile {
  padding: 20rpx;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
}

.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.nickname {
  font-size: 32rpx;
  font-weight: bold;
}

.menu-list {
  background-color: #fff;
  border-radius: 10rpx;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
}

.menu-item:last-child {
  border-bottom: none;
}
</style>