<script>
import {defineComponent} from 'vue'
import Total_side_bar from "@/total_page/total_side_bar.vue";

export default defineComponent({
  name: "main_page",
  components: {Total_side_bar}
})
</script>

<template>
  <div class="flex justify-start items-center">
  <total_side_bar class="h-screen w-56" style="background-color: #545c64 "></total_side_bar>
  <router-view></router-view>
    </div>
</template>
<style scoped>

</style>