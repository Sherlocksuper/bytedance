<script setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="flex flex-col" style="height:100%">
    <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >

      <router-link :to="{name:'view',params:{id:1,interface_id:1}}">
        <el-menu-item index="1">预览</el-menu-item>
      </router-link>
      <router-link :to="{name:'edit',params:{id:1,interface_id:1}}">
        <el-menu-item index="2">编辑</el-menu-item>
      </router-link>
      <router-link :to="{name:'version',params:{id:1,interface_id:1}}">
        <el-menu-item index="3">版本</el-menu-item>
      </router-link>
      <router-link :to="{name:'mock_serve',params:{id:1,interface_id:1}}">
        <el-menu-item index="4">mock接口服务</el-menu-item>
      </router-link>
    </el-menu>
    <router-view class="h-full w-auto" ></router-view>
  </div>
</template>

