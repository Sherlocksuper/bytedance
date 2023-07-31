<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "item_module",
  computed: {}
})
</script>

<template>
  <div class="flex flex-col">
    <p>this is item page</p>
    <router-link :to="{name:'item_members_list'}">
      <p class="text-blue-500">this is member router</p>
    </router-link>
    <router-link :to="{name:'item_interface_list'}">
      <p>this is interface router </p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>