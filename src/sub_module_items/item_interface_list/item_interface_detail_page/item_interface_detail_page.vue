<script setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
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
</template>

