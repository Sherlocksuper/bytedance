<script setup>
import { defineComponent, ref, reactive } from 'vue'

const calladdress = 'https://juejin.cn/user/2520515442391102'
const mocklist = reactive([
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
])

const addmock_flag = ref(false)

function addmock() {
  addmock_flag.value = true
}

const form = reactive({ // 新建mock的表单数据
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<template>
  <div class="mock_serve_continer">
    <div class="top-button">
      <el-button color="#626aef" @click="addmock" style="height: 50px;">+ 添加MOCK</el-button>
      <el-button color="#626aef" style="height: 50px;" plain>批量操作</el-button>
    </div>

    <div class="line"></div>

    <div class="call-address">
      <div class="call-address-left">
        MOCK示例调用地址：
      </div>
      <div class="call-address-right">
        {{ calladdress }}
      </div>
    </div>

    <div class="line"></div>
    <!-- mock列表 -->
    <div class="mock-list">
      <!-- 表头 -->
      <div class="list-title">
        <div style="width: 100px; padding-left: 0;">启用</div>
        <div style="width: 300px;">| 期望名称</div>
        <div style="width: 300px;">| 创建方式</div>
        <div style="width: 300px;">| 创建者</div>
        <div style="width: 300px;">| 编辑时间</div>
      </div>
      <div v-for="(item, index) in mocklist" :key="index" class='mock-row'>
        <div style="width: 100px; padding-left: 0;">
          <el-switch v-model="item.startflag" />
        </div>

        <div style="width: 300px;"> {{ item.mockname }}</div>
        <div style="width: 300px;"> {{ item.create }}</div>
        <div style="width: 300px;"> {{ item.creator }}</div>
        <div style="width: 300px;"> {{ item.creation_time }}</div>



      </div>

    </div>




    <el-dialog v-model="addmock_flag" title="添加 Mock API 期望" width="80%" align-center>
      <div class="line"></div>

      <div class="top-hint">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
          <path fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z">
          </path>
        </svg>
        当您请求 Mock API 时，会根据触发条件自动返回相应的结果。
      </div>
      <!-- 表单部分 -->
      <el-form :model="form" label-width="120px">

        <el-form-item label="名称" class="mock-name">
          <el-input v-model="form.name" placeholder="请填写MOCK API期望名称" />
        </el-form-item>
        
        <div class="flexbutton-trigger">
          <el-icon><ArrowUp /></el-icon>
         <div>触发条件</div>

        </div>

        
      </el-form>
      

      <!-- 下方按钮 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<style lang="scss" scoped >
.mock_serve_continer {
  .top-button {
    margin-top: 10px;
    padding-left: 20px;
  }

  .line {
    border-top: 1px solid #ccc;
    margin: 10px 0;
    /* 设置上下间距 */
  }

  .call-address {
    padding-left: 30px;
    display: flex;
    font-size: 20px;
  }

  .mock-list {
    .list-title {
      display: flex;
      background-color: #FAFAFA;
      color: #A8A7B1;
      font-size: 20px;
      padding-left: 30px;

      div {
        padding: 15px;

        text-align: left;

      }
    }

    .mock-row {
      display: flex;
      align-items: center;
      font-size: 20px;
      padding-left: 30px;



      div {
        padding: 15px;

        text-align: left;

      }
    }
  }

  .top-hint {
    display: flex;
    background-color: #F4F4F4;
    color: black;
    height: 50px;
    font-size: 20px;
    line-height: 50px;

    svg {
      width: 30px;
      height: 30px;
      margin-top: 10px;
      margin: 10px 10px 0 5px;

    }
  }





}



// ::v-deep{
//   .el-form-item__label {
//       font-size: 30px;
//       color: blue;
//     }
// }
:deep(.el-form-item__label) {
font-size: 25px;
width: 65px !important;
/* 调整字体大小 */
// margin-right: 10px;
/* 调整label与输入框之间的距离 */
} 
.mock-name{
  margin-top: 15px;
}

</style>