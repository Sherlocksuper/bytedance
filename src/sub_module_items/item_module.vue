<script>
import {defineComponent} from 'vue'
import  item_interface_detail  from "./item_interface_list/item_interface_detail_page/item_interface_detail_page.vue";
export default defineComponent({
  name: "item_module",
  components: {
    item_interface_detail, // 注册 item_interface_detail 组件，使其在模板中可用
  },
})
</script>

<template>
  <!-- <p>this is item page</p> -->
  <div class="item_interface_detail_title">
    <item_interface_detail ></item_interface_detail>
  </div>
 
</template>

<style scoped>
.item_interface_detail_title {
  position: absolute;
  top: 0;
  left: 225px;
  height: 100px;
  margin-top: 0;
  z-index: 9999; /* 设置一个较大的 z-index 值，确保它在最上层 */
}
</style>