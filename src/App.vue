<script setup>
import total_side_bar from './total_page/total_side_bar.vue'
</script>
<script>
export default {
  data() {
    return {
      msg: 'Hello World'
    }
  }
}
</script>
<template>
  <div class="flex flex-row justify-start items-center">
    <total_side_bar class="h-screen w-56" style="background-color: #545c64 "></total_side_bar>
    <router-view class="border-blue-600 h-screen w-full"></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>