<script setup>
import {ref} from 'vue'
import mock_serve from "../item_interface_detail_page/detail_router_view/mock_serve.vue";

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  activeIndex.value=key
}
</script>

<template>
  <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">预览</el-menu-item>
    <el-menu-item index="2">编辑</el-menu-item>
    <el-menu-item index="3">版本</el-menu-item>
    <el-menu-item index="4">mock服务</el-menu-item>

  </el-menu>
  <div v-if="activeIndex==4 ">
    <mock_serve></mock_serve>
  </div>
</template>

