<script lang="js" setup>
import HorizontalBar from '@coms/HorizontalBar.vue'
import MapChart from '@coms/MapChart.vue'
import RadarBar from '@coms/RadarBar.vue'
import Relation from '@coms/Relation.vue'
import RingBar from '@coms/RingBar.vue'
import TotalData from '@coms/TotalData.vue'
import VerticalBar from '@coms/VerticalBar.vue'
import WordCloud from '@coms/WordCloud.vue'

import { getVisualization } from "@/api/visualization"
import { ref } from 'vue'

const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  console.log(data.value);

}
setInterval(() => loadData(), 5000)
</script>

<template>
  <div class="bg-[url('./assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden">
    <!-- 左 -->
    <div class="flex flex-1 flex-col mr-5 bg-slate-800/50 p-3">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-4" />
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border pb-4" />
      <!-- 关系图 -->
      <Relation class="h-1/3" />
    </div>
    <!-- 中 -->
    <div class="w-1/2 mr-5 flex flex-col">
      <!-- 数据总览图 -->
      <TotalData class="bg-slate-800/50 p-3" />
      <!-- 地图可视化 -->
      <MapChart class="bg-slate-800/50 p-3 mt-4 flex flex-1" />
    </div>
    <!-- 右 -->
    <div class="flex flex-1 flex-col mr-5 bg-slate-800/50 p-3">
      <!-- 竖向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-4" />
      <!-- 环形图 -->
      <RingBar class="h-1/3 box-border pb-4" />
      <!-- 文档云图 -->
      <WordCloud class="h-1/3" />
    </div>
  </div>
</template>

<style scoped></style>
