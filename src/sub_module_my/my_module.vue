<script setup>
///本文件是"我"的模块
import  card  from "./my_business_card.vue";
import  itemlist  from "./my_itemlist.vue";

</script>

<template>
  <div class="mycard">
    <card></card>
    <div class="itemlistcotiner">
      <itemlist></itemlist>
    </div>
 
  </div>

</template>
<style scoped>
 .itemlistcotiner{
  width: 80%;
  margin-left: 10%;
 }
</style>