<script setup>
import { reactive, ref } from "vue";
import versionDetails from "./version-details.vue";
const tableData = [
  {
    date: "2021-01-01",
    name: "张三",
    // address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
  },
  {
    date: "2016-05-04",
    name: "Tom",
  },
  {
    date: "2016-05-01",
    name: "Tom",
  },
];
const dialogTableVisible = ref(false);
// 弹出弹窗
function handleClick() {
  dialogTableVisible.value = true;
}
// 取消弹窗
function cancellation() {
  dialogTableVisible.value = false;
}
</script>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "version",
});
</script>

<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="
        width: 100%;
        height: 100%;
        color: #000;
        margin-top: 20px;
        box-sizing: border-box;
        font-size: 18px;
      "
    >
      <el-table-column
        align="center"
        prop="date"
        label="修改时间"
        width="200"
      />
      <el-table-column align="center" prop="name" label="修改人" width="180" />
      <el-table-column align="center" label="查看修改详情">
        <template #default="scope" width="180">
          <el-button
            size="small"
            style="font-size: 14px"
            key="primary"
            type="primary"
            text
            bg
            @click="handleClick()"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="回退到此版本">
        <template #default="scope" width="180">
          <el-button size="small" style="font-size: 14px"> 回退 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <versionDetails
      ref="versionDetailsRef"
      :dialogTableVisible="dialogTableVisible"
      @cancellation="cancellation()"
    />
  </div>
</template>

<style scoped></style>
