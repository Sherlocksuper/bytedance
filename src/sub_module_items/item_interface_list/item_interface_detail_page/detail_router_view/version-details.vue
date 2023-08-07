<!--
 * @Description: 
 * @Author: 遗憾
 * @Date: 2023-08-03 08:09:39
 * @LastEditTime: 2023-08-07 16:41:17
 * @LastEditors: 遗憾
-->
<script setup>
import { reactive, ref, toRefs, defineProps } from "vue";
import { Calendar } from "@element-plus/icons-vue";
const props = defineProps({
  //子组件接收父组件传递过来的值
  dialogTableVisible: Boolean,
});
//使用父组件传递过来的值
const { dialogTableVisible } = toRefs(props);
// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(["cancellation"]);
function cancellation() {
  //传递给父组件
  emit("cancellation");
}
//传递给父组件
</script>

<template>
  <div class="home">
    <el-dialog
      v-model="dialogTableVisible"
      title="修改详情"
      @closed="cancellation()"
    >
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="修改前">
          <template #label>
            <span>
              <span>修改前信息</span>
            </span>
          </template>
          修改前信息
        </el-tab-pane>
        <el-tab-pane label="修改后">
          <template #label>
            <span>
              <span>修改后信息</span>
            </span>
          </template>
          修改后信息
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<style scoped></style>
