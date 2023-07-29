<script>
///侧边栏以及router

import my_module from "@/sub_module_my/my_module.vue";
export default {
  computed: {
    my_module() {
      return my_module
    }
  },
  data() {
    return {
      msg: 'Hello World'
    }
  },
  methods: {
    calculateIndex(item) {
      return "1-" + item.toString();
    }
  }
}
</script>

<template>
  <div>
    <el-col class="">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
      >
        <router-link :to="{name:'my_module'}">
          <el-menu-item index="1">
            <span>我</span>
          </el-menu-item>
        </router-link>

        <el-sub-menu index="2">
          <template #title>
            <span>我的项目</span>
          </template>
          <el-menu-item-group>

            <router-link v-for="item in 3" :key="item" :to="{name:'item_module',params:{id:item}}">
              <el-menu-item :index=calculateIndex(item)>项目{{ item }}</el-menu-item>
            </router-link>

          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>
</template>