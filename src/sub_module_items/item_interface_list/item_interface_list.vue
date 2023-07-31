<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "item_interface_list"
})
</script>

<template>
  <router-link :to="{name:'item_interface_detail_page',params:{interface_id:1}}" target="_blank">
    <p>item_interface_list_item1</p>
  </router-link>
  <router-link to="">
    <p>item_interface_list_item2</p>
  </router-link>
  <router-link to="">
    <p>item_interface_list_item3</p>
  </router-link>
</template>
<style scoped>

</style>