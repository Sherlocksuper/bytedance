<script setup>
import { defineComponent, ref, reactive, onUpdated } from 'vue'
import test from "./test.vue";
const calladdress = 'https://juejin.cn/user/2520515442391102'
const mocklist = reactive([
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
  { startflag: true, mockname: 'mock1', create: '系统自动创建', creator: '-', creation_time: '' },
])

const triggerjson_select_value = ref('')



const addmock_flag = ref(false)

function addmock() {
  addmock_flag.value = true
}
const activeName_trigger = ref('请求头部') // 默认第一个标签页选项名称
const active_requestbody_card = ref('Form-data'); // 设置初始选中的标签为"Form-data"

const activeName_response = ref('Header') // 默认第一个标签页选项名称
const active_responsebody_card = ref('Form-data'); // 设置初始选中的标签为"Form-data"
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
  triggerjson_select_options1: [ // json 请求体可选项1
    {
      value: 'JSON 结构定位',
      label: 'JSON 结构定位',
    },
    {
      value: 'JSON Path 结构定位',
      label: 'JSON Path 结构定位',
    },

  ],
  triggerjson_selectvalue1: 'JSON 结构定位',
  triggerjson_select_options2: [ // json 请求体可选项2
    {
      value: 'Object',
      label: 'Object',
    },
    {
      value: 'Array',
      label: 'Array',
    },

  ],
  triggerjson_selectvalue2: 'Object',
  trigger_jsonlist_array: [{ name: '', type: '', check: false, rule: '', value: '', level: 0 }], // 触发条件json array 列表数据
  trigger_jsonlist_arraylist: [{ name: '', type: '', check: false, rule: '', value: '', level: 0 }], // 扁平化后的数组
  triggerjson_select_typeoptions: [ // json 请求体类型可选项
    {
      value: 'string',
      label: 'string',
    },
    {
      value: 'bool',
      label: 'bool',
    },
    {
      value: 'array',
      label: 'array',
    },
    {
      value: 'object',
      label: 'object',
    },
    {
      value: 'number',
      label: 'number',
    }

  ],
  triggerjson_select_ruleoptions: [ // json 请求体匹配规则可选项
    {
      value: '值-等于',
      label: '值-等于',
    },
    {
      value: '值-不等于',
      label: '值-不等于',
    },
    {
      value: '值-大于',
      label: '值-大于',
    },
    {
      value: '值-小于',
      label: '值-小于',
    },
    {
      value: '正则匹配',
      label: '正则匹配',
    },
    {
      value: '长度-等于',
      label: '长度-等于',
    },
    {
      value: '长度-不等于',
      label: '长度-不等于',
    },
    {
      value: '长度-大于',
      label: '长度-小于',
    },
    {
      value: '值-包含',
      label: '值-包含',
    },
    {
      value: '值-大于等于',
      label: '值-大于等于',
    },
    {
      value: '值-小于等于',
      label: '值-小于等于',
    },
    {
      value: '值-不包含',
      label: '值-不包含',
    }

  ],

  response_headerlist: [{ name: '', value: '' }],
  response_bodylist_fromdata: [{ name: '', rule: '', value: '' }], // 响应内容请求体form-data规则
  response_bodylist: [{ name: '', rule: '', value: '' }], // 响应内容form-data规则
  response_bodylist_xml: [{ name: '', property: '', value: '' }], // 触发条件请求体xml规则
  response_advanced: { code: 200, time: 0 }
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
function triggerjson_selectvalueChange() {
  console.log(form.triggerjson_selectvalue1)
}
function isPrimitive(value) {
  if (typeof value !== "object" || value === null) { //基本数据类型
    return 1;
  }
  else if (Array.isArray(value)) { // 数组
    return 2;
  } else return 3; //对象
}

function addson_trigger_jsonarray(index) { // 增加子字段
  console.log(index)
  var nodeid = 0

  function addnode(item) {
    if (isPrimitive(item) == 2) {
      item.forEach(element => addnode(element));
    } else if (isPrimitive(item) == 3) {
      if (nodeid == index) { // 找到了相应节点，在其身上添加子节点
        if (item.hasOwnProperty("son")) { // 有子节点
          var newson = { name: '', type: '', check: false, rule: '', value: '', level: item.level + 1 } // 子字段 层级加一
          item.son.push(newson) // 添加新的子节点
        } else {
          var newson = [{ name: '', type: '', check: false, rule: '', value: '', level: item.level + 1 }] // 子字段 层级加一
          item.son = newson
        }
      }
      else { // 还没找到相应节点，继续遍历树
        nodeid++
        if (item.hasOwnProperty("son")) {
          addnode(item.son)
        }
      }
    }
  }

  addnode(form.trigger_jsonlist_array) //添加子节点
  form.trigger_jsonlist_arraylist = inorderTraversal(form.trigger_jsonlist_array) // 更新扁平化数组

  console.log(form.trigger_jsonlist_arraylist)
  console.log(form.trigger_jsonlist_array)
}

var inorderTraversal = function (data) { // 扁平化数组
  let ans = [];



  function findnum(item) {
    if (isPrimitive(item) == 2) {
      item.forEach(element => findnum(element));
    } else if (isPrimitive(item) == 3) {
      if (item.hasOwnProperty("son")) { // 有子节点
        var newnode = {}
        for (const key in item) {
          if (key == 'son') {
          } else {
            newnode[key] = item[key]
          }

        }

        console.log(newnode)
        ans.push(newnode)
        findnum(item.son);
        console.log("对象具有 'son' 属性");
      } else { // 是对象，且没有子节点，直接push
        ans.push(item);
      }
    }
  }

  findnum(data);
  console.log(ans); // 打印扁平化后的数组
  return ans;
};

function deletrow_trigger_jsonarray(index) { // 删除该节点
  console.log(index)
  var nodeid = 0

  function deletnode(item) {
    if (isPrimitive(item) == 2) {
      item.forEach(element => deletnode(element));
    } else if (isPrimitive(item) == 3) {
      if (nodeid == index) { // 找到了相应节点，在其身上添加子节点
        if (item.hasOwnProperty("son")) { // 有子节点
          var newson = { name: '', type: '', check: false, rule: '', value: '', level: item.level + 1 } // 子字段 层级加一
          item.son.push(newson) // 添加新的子节点
        } else {
          var newson = [{ name: '', type: '', check: false, rule: '', value: '', level: item.level + 1 }] // 子字段 层级加一
          item.son = newson
        }
      }
      else { // 还没找到相应节点，继续遍历树
        nodeid++
        if (nodeid == index) { // 下一个节点就是目标节点
          if (item.hasOwnProperty("son")) { // 下个节点是子节点，删除子节点
            item.son.shift() // 删除第一个子节点
          } else { // 没有子节点了，但下一个节点就是目标节点，也就是同级节点或父级节点的同级节点

          }
        }

      }
    }
  }

  deletnode(form.trigger_jsonlist_array) //添加子节点
  form.trigger_jsonlist_arraylist = inorderTraversal(form.trigger_jsonlist_array) // 更新扁平化数组

  console.log(form.trigger_jsonlist_arraylist)
  console.log(form.trigger_jsonlist_array)
}
const onInputEvent_response_headerlist = (value) => { // input改动触发增加新参数检测
  const endrow = form.response_headerlist.length - 1
  if (form.response_headerlist[endrow].name != '' || form.response_headerlist[endrow].value != '') {
    form.response_headerlist.push({ name: '', value: '' })
  }
}
function deletrow_response_headerlist(index) { // 请求体删除input 行
  console.log(index)
  form.response_headerlist.splice(index, 1)
}
const onInputEvent_response_bodylist = (value) => { // 请求体formdata input改动触发增加新参数检测
  const endrow = form.response_bodylist_fromdata.length - 1
  if (form.response_bodylist_fromdata[endrow].name != '' || form.response_bodylist_fromdata[endrow].value != '') {
    form.response_bodylist_fromdata.push({ name: '', rule: '', value: '' })
  }
}
function deletrow_response_bodylist(index) { // 请求体删除该行
  console.log(index)
  form.response_bodylist_fromdata.splice(index, 1)
}
const onInputEvent_response_bodylist_xml = (value) => { // 请求体xml input改动触发增加新参数检测
  const endrow = form.response_bodylist_xml.length - 1
  if (form.response_bodylist_xml[endrow].name != '' || form.response_bodylist_xml[endrow].value != '' || form.response_bodylist_xml[endrow].property != '') {
    form.response_bodylist_xml.push({ name: '', property: '', value: '' })
  }
}
function deletrow_response_bodylist_xml(index) { // 请求体删除该行
  console.log(index)
  form.response_bodylist_xml.splice(index, 1)
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
                    <div>
                      <el-select v-model="form.triggerjson_selectvalue1" class="m-2" placeholder="Select"
                        popper-class="select_popper" @change="triggerjson_selectvalueChange">
                        <el-option v-for="item_select in form.triggerjson_select_options1" :key="item_select.value"
                          :label="item_select.label" :value="item_select.value" />
                      </el-select>
                      <el-select v-model="form.triggerjson_selectvalue2" class="m-2" placeholder="Select"
                        popper-class="select_popper" @change="triggerjson_selectvalueChange"
                        v-if="form.triggerjson_selectvalue1 == 'JSON 结构定位'">
                        <el-option v-for="item_select in form.triggerjson_select_options2" :key="item_select.value"
                          :label="item_select.label" :value="item_select.value" />
                      </el-select>
                    </div>
                    <div class="jsonlist_tabcontainer">
                      <!-- 表头 -->
                      <div class="list-title">
                        <div style="width: 20%; padding-left: 0;">参数名</div>
                        <div style="width: 15%;">| 类型</div>
                        <div style="width: 12%;">| 校验数组内元素</div>
                        <div style="width: 15%; ">| 内容校验</div>
                        <div style="width: 20%;">| 预期结果</div>
                      </div>
                      <!-- 表格 -->
                      <div v-for="(item, index) in form.trigger_jsonlist_arraylist" :key="index" class="jsonlist_tab1">
                        <el-input v-model="item.name" placeholder="参数名" class="jsonlist_tab1-input-name"
                          @input="onInputEvent_trigger_bodylist"
                          :style="{ width: (5 - item.level) / 5 * 20 + '%', marginLeft: item.level / 5 * 20 + '%' }" />


                        <el-select v-model="item.type" class="m-2" placeholder="Select" popper-class="select_popper"
                          @change="triggerjson_selectvalueChange">
                          <el-option v-for="item_select in form.triggerjson_select_typeoptions" :key="item_select.value"
                            :label="item_select.label" :value="item_select.value" />
                        </el-select>
                        <el-switch v-model="item.check" style="--el-switch-on-color: #626AEF;" />

                        <el-select v-model="item.rule" class="m-2" placeholder="Select" popper-class="select_popper"
                          @change="triggerjson_selectvalueChange">
                          <el-option v-for="item_select in form.triggerjson_select_ruleoptions" :key="item_select.value"
                            :label="item_select.label" :value="item_select.value" />
                        </el-select>


                        <el-input v-model="item.value" placeholder="参数值" class="jsonlist_tab1-input"
                          @input="onInputEvent_trigger_bodylist" />

                        <el-icon style="margin-left: 15px; cursor: pointer;" size="14"
                          @click="addson_trigger_jsonarray(index)">
                          <Plus />
                        </el-icon>



                        <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_trigger_jsonarray(index)"
                          size="20">
                          <Delete style="padding-top: 7px;" />
                        </el-icon>
                      </div>
                    </div>

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
          <el-collapse-item title="响应内容" class="flexbutton-response">
            <el-tabs v-model="activeName_response" class="trigger-tabs" @tab-click="handleClick_trigger"
              v-if="form.triggerflag">
              <!-- 请求头选项页 -->
              <el-tab-pane label="Header" name="Header">
                <!-- 表头 -->
                <div class="list-title">
                  <div style="width: 40%; padding-left: 0;">标签</div>

                  <div style="width: 50%; margin-left: 30px;">| 内容</div>
                </div>
                <!-- 表格 -->
                <div v-for="(item, index) in form.response_headerlist" :key="index">
                  <el-input v-model="item.name" placeholder="头部标签" class="response-headerlist-input-name"
                    @input="onInputEvent_response_headerlist" />

                  <el-input v-model="item.value" placeholder="头部内容" class="response-headerlist-input"
                    @input="onInputEvent_response_headerlist" />
                  <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_response_headerlist(index)"
                    size="20">
                    <Delete style="padding-top: 7px;" />
                  </el-icon>
                </div>

              </el-tab-pane>
              <!-- 请求体选项页 -->
              <el-tab-pane label="Body" name="Body" class="request-body">
                <!-- 请求体类别小标签 -->
                <el-tabs type="border-card" class="request-body-card" v-model="active_responsebody_card"
                  @tab-click="handleClick_trigger">
                  <el-tab-pane label="Form-data" name="Form-data">
                    <!-- 表头 -->
                    <div class="list-title">
                      <div style="width: 30%; padding-left: 0;">参数名</div>
                      <div style="width: 30%;">| 判断规则</div>
                      <div style="width: 30%;">| 参数值</div>
                    </div>
                    <!-- 表格 -->
                    <div v-for="(item, index) in form.response_bodylist_fromdata" :key="index">
                      <el-input v-model="item.name" placeholder="参数名" class="trigger-headerlist-input-name"
                        @input="onInputEvent_response_bodylist" />
                      <el-input v-model="item.rule" disabled placeholder="=" class="trigger-headerlist-input" />
                      <el-input v-model="item.value" placeholder="参数值" class="trigger-headerlist-input"
                        @input="onInputEvent_response_bodylist" />
                      <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_response_bodylist(index)"
                        size="20">
                        <Delete style="padding-top: 7px;" />
                      </el-icon>
                    </div>
                  </el-tab-pane>

                  <!-- json类请求体 -->
                  <el-tab-pane label="JSON" name="JSON">
                    <div>
                      <el-select v-model="triggerjson_select_value" class="m-2" placeholder="Select">
                        <el-option v-for="item_select in triggerjson_select_options" :key="item_select.value"
                          :label="item_select.label" :value="item_select.value" />
                      </el-select>
                    </div>

                  </el-tab-pane>

                  <el-tab-pane label="XML" name="XML" class="response-xml">

                    <!-- 表头 -->
                    <div class="list-title">
                      <div style="width: 25%; padding-left: 0;">参数名</div>
                      <div style="width: 15%;">| 类型</div>
                      <div style="width: 25%;">| 属性</div>
                      <div style="width: 25%;">| 参数值</div>
                    </div>
                    <!-- 表格 -->
                    <div v-for="(item, index) in form.response_bodylist_xml" :key="index">
                      <el-input v-model="item.name" placeholder="参数名" class="response-xml-input-name"
                        @input="onInputEvent_response_bodylist_xml" />
                      <!-- 内容校验选项 -->
                      <el-select v-model="triggerjson_select_value" class="m-2" placeholder="Object" :disabled="true">

                      </el-select>
                      <el-input v-model="item.property" placeholder="属性" class="response-xml-input"
                        @input="onInputEvent_response_bodylist_xml" />

                      <el-input v-model="item.value" placeholder="参数值" class="response-xml-input"
                        @input="onInputEvent_response_bodylist_xml" />

                      <el-icon style="margin-left: 15px; cursor: pointer;" @click="deletrow_response_bodylist_xml(index)"
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
              <el-tab-pane label="高级设置" name="高级设置" class="advanced">
                <span> 响应状态码（Response HTTP Status Code）</span>
                <div class="lin"> </div>
                <el-input-number v-model="form.response_advanced.code" class="input-code" />
                <div class="lin"></div>
                <span>响应延迟时间（Response Delay Time）</span>
                <div class="lin"></div>
                <el-input-number v-model="form.response_advanced.time"  @change="handleChange" /> ms
              </el-tab-pane>

            </el-tabs>
          </el-collapse-item>

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
    // z-index: 100;


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

    .flexbutton-trigger,
    .flexbutton-response {
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
        .jsonlist_tabcontainer {
          .jsonlist_tab1 {
            padding-left: 30px;

            .jsonlist_tab1-input-name,
            .jsonlist_tab1-input {
              width: 20%;
            }

            .el-select {
              width: 15%;
            }



            .el-switch {
              // margin-left: 10px;
              width: 11%;
            }

          }
        }




        :deep(.el-tabs__content) {
          padding-top: 0;
        }

      }

      :deep(.el-tabs) {
        border-bottom: 0;
      }

    }

    .flexbutton-response {


      // 响应体
      .response-headerlist-input-name,
      .response-headerlist-input {
        width: 40%;
        margin-left: 30px;
      }

      .response-xml {
        .list-title div {
          padding: 0;
          padding-top: 15px;
          padding-bottom: 15px;
        }


        .response-xml-input-name {

          margin-left: 30px;
        }

        .m-2 {
          width: 15%;

        }

        .response-xml-input-name,

        .response-xml-input {
          width: 23%;
        }
      }

      .advanced {
        padding: 15px 0 0 15px;

        span {
          font-size: 15px;


        }

        .input-code {
          // width: 200px;
        }

        .lin {
          padding: 15px 0px 0px 0px;
        }
      }

    }

  }


  :deep(.el-form-item__label) {
    // 深层选择器
    font-size: 25px;
    width: 65px !important;
  }




}
</style>
<style>
.select_popper {
  z-index: 99999 !important;

}
</style>