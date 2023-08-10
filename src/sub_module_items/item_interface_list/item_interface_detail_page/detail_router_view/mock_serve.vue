<script setup>
import { defineComponent, ref, reactive, onUpdated } from 'vue'
import test from "./test.vue";
const calladdress = 'https://juejin.cn/user/2520515442391102'
const mocklist = reactive([
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
])

const triggerjson_select_value = ref('')

const triggerjson_select_options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const addmock_flag = ref(false)

function addmock() {
  addmock_flag.value = true
}
const activeName_trigger = ref('请求头部') // 默认第一个标签页选项名称
const active_requestbody_card = ref('Form-data'); // 设置初始选中的标签为"Form-data"

const handleClick_trigger = (tab, event) => { // 标签页改变事件
  console.log(tab, event)
  console.log(activeName_trigger.value)
}

const form = reactive({ // 新建mock的表单数据
  name: '',
  triggerflag: true, // 触发条件列表伸展判断
  trigger_headerlist: [{ name: '', rule: '', value: '' }], // 触发条件请求头规则
  trigger_bodylist: [{ name: '', rule: '', value: '' }], // 触发条件请求体form-data规则
  trigger_bodylist_xml: [{ name: '', rule: '', value: '' }], // 触发条件请求体xml规则
  trigger_bodyrow: '', // 请求体row格式
  trigger_querylist: [{ name: '', rule: '', value: '' }], // query参数列表
})

const onInputEvent_trigger_headerlist = (value) => { // input改动触发增加新参数检测
  const endrow = form.trigger_headerlist.length - 1
  if (form.trigger_headerlist[endrow].name != '' || form.trigger_headerlist[endrow].value != '') {
    form.trigger_headerlist.push({ name: '', rule: '', value: '' })
  }
}
function deletrow_trigger_headerlist(index) { // 请求体删除input 行
  console.log(index)
  form.trigger_headerlist.splice(index, 1)
}

const onInputEvent_trigger_bodylist = (value) => { // 请求体formdata input改动触发增加新参数检测
  const endrow = form.trigger_bodylist.length - 1
  if (form.trigger_bodylist[endrow].name != '' || form.trigger_bodylist[endrow].value != '') {
    form.trigger_bodylist.push({ name: '', rule: '', value: '' })
  }
}
function deletrow_trigger_bodylist(index) { // 请求体删除该行
  console.log(index)
  form.trigger_bodylist.splice(index, 1)
}

const onInputEvent_trigger_bodylist_xml = (value) => { // 请求体xml input改动触发增加新参数检测
  const endrow = form.trigger_bodylist_xml.length - 1
  if (form.trigger_bodylist_xml[endrow].name != '' || form.trigger_bodylist_xml[endrow].value != '') {
    form.trigger_bodylist_xml.push({ name: '', rule: '', value: '' })
  }
}
function deletrow_trigger_bodylist_xml(index) { // 请求体删除该行
  console.log(index)
  form.trigger_bodylist_xml.splice(index, 1)
}

const onInputEvent_trigger_querylist = (value) => { // 请求体xml input改动触发增加新参数检测
  const endrow = form.trigger_querylist.length - 1
  if (form.trigger_querylist[endrow].name != '' || form.trigger_querylist[endrow].value != '') {
    form.trigger_querylist.push({ name: '', rule: '', value: '' })
  }
}
function deletrow_trigger_querylist(index) { // 请求体删除该行
  console.log(index)
  form.trigger_querylist.splice(index, 1)
}



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

    <el-select v-model="triggerjson_select_value" class="m-2" placeholder="Select">
      <el-option v-for="item_select in triggerjson_select_options" :key="item_select.value" :label="item_select.label"
        :value="item_select.value" />
    </el-select>
    <!-- 添加MOCK弹窗 -->

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

        <el-collapse>
          <!-- 触发条件表格 -->
          <el-collapse-item title="触发条件" class="flexbutton-trigger">
            <el-tabs v-model="activeName_trigger" class="trigger-tabs" @tab-click="handleClick_trigger"
              v-if="form.triggerflag">
              <!-- 请求头选项页 -->
              <el-tab-pane label="请求头部" name="请求头部">
                <!-- 表头 -->
                <div class="list-title">
                  <div style="width: 30%; padding-left: 0;">参数名</div>
                  <div style="width: 30%;">| 判断规则</div>
                  <div style="width: 30%;">| 参数值</div>
                </div>
                <!-- 表格 -->
                <div v-for="(item, index) in form.trigger_headerlist" :key="index">
                  <el-input v-model="item.name" placeholder="参数名" class="trigger-headerlist-input-name"
                    @input="onInputEvent_trigger_headerlist" />
                  <el-input v-model="item.rule" disabled placeholder="=" class="trigger-headerlist-input" />
                  <el-input v-model="item.value" placeholder="参数值" class="trigger-headerlist-input"
                    @input="onInputEvent_trigger_headerlist" />
                  <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_trigger_headerlist(index)"
                    size="20">
                    <Delete style="padding-top: 7px;" />
                  </el-icon>
                </div>

              </el-tab-pane>
              <!-- 请求体选项页 -->
              <el-tab-pane label="请求体" name="请求体" class="request-body">
                <!-- 请求体类别小标签 -->
                <el-tabs type="border-card" class="request-body-card" v-model="active_requestbody_card"
                  @tab-click="handleClick_trigger">
                  <el-tab-pane label="Form-data" name="Form-data">
                    <!-- 表头 -->
                    <div class="list-title">
                      <div style="width: 30%; padding-left: 0;">参数名</div>
                      <div style="width: 30%;">| 判断规则</div>
                      <div style="width: 30%;">| 参数值</div>
                    </div>
                    <!-- 表格 -->
                    <div v-for="(item, index) in form.trigger_bodylist" :key="index">
                      <el-input v-model="item.name" placeholder="参数名" class="trigger-headerlist-input-name"
                        @input="onInputEvent_trigger_bodylist" />
                      <el-input v-model="item.rule" disabled placeholder="=" class="trigger-headerlist-input" />
                      <el-input v-model="item.value" placeholder="参数值" class="trigger-headerlist-input"
                        @input="onInputEvent_trigger_bodylist" />
                      <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_trigger_bodylist(index)"
                        size="20">
                        <Delete style="padding-top: 7px;" />
                      </el-icon>
                    </div>
                  </el-tab-pane>

                  <!-- json类请求体 -->
                  <el-tab-pane label="JSON" name="JSON">

                    <el-select v-model="triggerjson_select_value" class="m-2" placeholder="Select"
                      :popper-append-to-body="false">
                      <el-option v-for="item_select in triggerjson_select_options" :key="item_select.value"
                        :label="item_select.label" :value="item_select.value" />
                    </el-select>
                  </el-tab-pane>

                  <el-tab-pane label="XML" name="XML">

                    <!-- 表头 -->
                    <div class="list-title">
                      <div style="width: 30%; padding-left: 0;">xPath</div>
                      <div style="width: 30%;">| 内容校验</div>
                      <div style="width: 30%;">| 预期结果</div>
                    </div>
                    <!-- 表格 -->
                    <div v-for="(item, index) in form.trigger_bodylist_xml" :key="index">
                      <el-input v-model="item.name" placeholder="参数名" class="trigger-headerlist-input-name"
                        @input="onInputEvent_trigger_bodylist_xml" />
                      <!-- 内容校验选项 -->
                      <el-select v-model="triggerjson_select_value" class="m-2" placeholder="Select"
                        :popper-append-to-body="false">
                        <el-option v-for="item_select in triggerjson_select_options" :key="item_select.value"
                          :label="item_select.label" :value="item_select.value" />
                      </el-select>
                      <el-input v-model="item.value" placeholder="参数值" class="trigger-headerlist-input"
                        @input="onInputEvent_trigger_bodylist_xml" />
                      <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_trigger_bodylist_xml(index)"
                        size="20">
                        <Delete style="padding-top: 7px;" />
                      </el-icon>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Raw" name="Raw">
                    <el-input v-model="form.trigger_bodyrow" :rows="2" type="textarea" placeholder="Please input"
                      :autosize="{ minRows: 7, maxRows: 10 }" />
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>


              <!-- Query参数选项页 -->
              <el-tab-pane label="Query参数" name="Query参数">
                <!-- 表头 -->
                <div class="list-title">
                  <div style="width: 30%; padding-left: 0;">参数名</div>
                  <div style="width: 30%;">| 判断规则</div>
                  <div style="width: 30%;">| 参数值</div>
                </div>
                <!-- 表格 -->
                <div v-for="(item, index) in form.trigger_querylist" :key="index">
                  <el-input v-model="item.name" placeholder="参数名" class="trigger-headerlist-input-name"
                    @input="onInputEvent_trigger_querylist" />
                  <el-input v-model="item.rule" disabled placeholder="=" class="trigger-headerlist-input" />
                  <el-input v-model="item.value" placeholder="参数值" class="trigger-headerlist-input"
                    @input="onInputEvent_trigger_querylist" />
                  <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_trigger_querylist(index)"
                    size="20">
                    <Delete style="padding-top: 7px;" />
                  </el-icon>
                </div>
              </el-tab-pane>

            </el-tabs>
          </el-collapse-item>
          <!-- 响应内容表格 -->
          <el-collapse-item title="响应内容" class="flexbutton-response">内容2</el-collapse-item>

        </el-collapse>




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
      border-radius: 5px;
      border: #FAFAFA solid 1px;
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

  .el-dialog {
    z-index: 100;


    // 弹窗
    .mock-name {
      margin-top: 15px;
    }

    .flexbutton-trigger,
    .flexbutton-response {
      // 触发条件伸缩按钮行
      margin-top: 15px;
      // display: flex;
      font-size: 20px;
      background-color: #FAFAFA;
      border: #EDEDED solid 1px;
      border-radius: 5px;

      :deep(.el-collapse-item__header) {
        padding-left: 10px;
        background-color: #FAFAFA;
      }
    }

    .flexbutton-trigger {
      :deep(.el-tabs__item) {
        margin-left: 10px;
      }


    }

    .trigger-tabs {
      // 触发条件表格
      border: #EDEDED solid 1px;

      // 请求头的表头
      .list-title {
        display: flex;
        background-color: #FAFAFA;
        color: #A8A7B1;
        border-radius: 5px;
        border: #FAFAFA solid 1px;
        font-size: 10px;
        padding-left: 30px;

        div {
          padding: 15px;
          text-align: left;

        }
      }

      :deep(.el-tabs__header) {
        margin-bottom: 0;
      }

      .trigger-headerlist-input-name {
        margin-left: 30px;
      }

      .trigger-headerlist-input,
      .trigger-headerlist-input-name {
        width: 30%;
      }

      .request-body {


        .m-2 {}


        :deep(.el-select-dropdown) {
          z-index: 9999999;

        }

        :deep(.el-tabs__content) {
          padding-top: 0;
        }

      }

      :deep(.el-tabs) {
        border-bottom: 0;
      }

    }

  }


  :deep(.el-form-item__label) {
    // 深层选择器
    font-size: 25px;
    width: 65px !important;
  }




}

:deep(.el-select-dropdown) {
  z-index: 9999999 !important;

}
</style>