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
  <div class="h-screen">
    <router-view></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>