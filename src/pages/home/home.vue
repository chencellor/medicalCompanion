<template>
  <view class="home p-4">
    <image class="banner w-full h-40 mb-4 rounded-lg" :src="bannerImage1" mode="aspectFill"></image>
    <image class="banner w-full h-40 mb-4 rounded-lg" :src="bannerImage2" mode="aspectFill"></image>
    
    <section-card title="医院介绍" :items="hospitalIntro" @more="onMoreTap('hospital')"></section-card>
    <section-card title="医生介绍" :items="doctorIntro" @more="onMoreTap('doctor')"></section-card>
    <section-card title="药品介绍" :items="medicineIntro" @more="onMoreTap('medicine')"></section-card>
    <section-card title="医疗器械介绍" :items="equipmentIntro" @more="onMoreTap('equipment')"></section-card>
    <section-card title="先进技术介绍" :items="technologyIntro" @more="onMoreTap('technology')"></section-card>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SectionCard from '@/components/SectionCard.vue';

const bannerImage1 = ref('/static/banner1.jpg');
const bannerImage2 = ref('/static/banner2.jpg');

const hospitalIntro = ref([]);
const doctorIntro = ref([]);
const medicineIntro = ref([]);
const equipmentIntro = ref([]);
const technologyIntro = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/hospitals');
    const hospitals = await response.json();
    hospitalIntro.value = hospitals.slice(0, 3).map(hospital => ({
      image: hospital.image,
      description: hospital.name
    }));
  } catch (error) {
    console.error('Error fetching hospitals:', error);
  }
});

const onMoreTap = (category: string) => {
  // 处理"查看更多"点击事件
  console.log(`查看更多: ${category}`);
};
</script>