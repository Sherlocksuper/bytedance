<script>
export default {
  data() {
    return {
      showPart: 'Query',
      bodyParams: {
        name: '',
        region: '',
        type: '',
      },
      queryParams: [
        {
          key: 1,
          name: '',
          nec: 'necessary',
          example: '',
          desc: '',
        },
      ],
      headerParams: [
        {
          key: 1,
          name: '',
          value: '',
          example: '',
          desc: '',
        },
      ],
      baseInfo: {
        name: '',
        func: 'POST',
        methods: '',
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    removeQuery(item) {
      const index = this.queryParams.indexOf(item);
      if (index !== -1) {
        this.queryParams.splice(index, 1);
      }
    },
    removeHeader(item) {
      const index = this.headerParams.indexOf(item);
      if (index !== -1) {
        this.headerParams.splice(index, 1);
      }
    },
    addQuery() {
      this.queryParams.push({
        key: Date.now(),
        name: '',
        value: '',
        nec: ''
      });
    },
    addHeader() {
      this.headerParams.push({
        key: Date.now(),
        name: '',
        value: '',
        nec: ''
      });
    },
    submitForm(formEl) {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    },
  },
};
</script>
<template>
  <div id="edit_total" class="m-10 flex-col">
    <!--接口基本信息 -->
    <div id="edit_base_info" class="w-7/12">
      <h1 class="text-3xl font-bold">基本信息</h1>
      <el-form class="mt-10" :model="baseInfo" label-width="120px">
        <el-form-item label="接口名称">
          <el-input v-model="baseInfo.name" class="w-20"/>
        </el-form-item>
        <el-form-item label="接口方法">
          <el-select v-model="baseInfo.func" placeholder="please select your zone">
            <el-option label="GET" value="GET"/>
            <el-option label="POST" value="POST"/>
            <el-option label="PUT" value="PUT"/>
            <el-option label="DELETE" value="DELETE"/>
            <el-option label="HEAD" value="HEAD"/>
            <el-option label="OPTION" value="OPTION"/>
            <el-option label="PATCH" value="PATCH"/>
          </el-select>
        </el-form-item>
        <el-form-item label="接口路径">
          <el-col :span="11">
            <el-input v-model="baseInfo.methods"></el-input>
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
        </el-form-item>
        <el-form-item label="接口描述">
          <el-input v-model="baseInfo.desc" type="textarea"/>
        </el-form-item>
      </el-form>
    </div>

    <!-- 请求参数设置 -->
    <div id="edit_query_params_setting" class="mt-20 w-10/12">
      <h1 class="text-3xl font-bold">请求参数设置</h1>
      <form class="ml-10">
        <el-radio-group class="mt-10" v-model="showPart" label="label position">
          <el-radio-button v-if="baseInfo.func !== 'GET' && baseInfo.func !=='HEAD' && baseInfo.func !== 'OPTIONS' "
                           label="Body">
            Body
          </el-radio-button>
          <el-radio-button label="Query">Query</el-radio-button>
          <el-radio-button label="Headers">Headers</el-radio-button>
        </el-radio-group>
        <el-form v-if="baseInfo.func !=='GET'" v-show="showPart === 'Body'" class="mt-10">
          <el-form-item label="参数名称">
            <el-input v-model="bodyParams.name" class="w-20"/>
          </el-form-item>
          <el-form-item label="参数类型">
            <el-select v-model="bodyParams.region" placeholder="please select your zone">
              <el-option label="String" value="String"/>
              <el-option label="Number" value="Number"/>
              <el-option label="Boolean" value="Boolean"/>
              <el-option label="Array" value="Array"/>
              <el-option label="Object" value="Object"/>
            </el-select>
          </el-form-item>
          <el-form-item label="参数描述">
            <el-input v-model="bodyParams.type" type="textarea"/>
          </el-form-item>
        </el-form>
        <el-form v-show="showPart === 'Query'" class="mt-10"
                 label-width="120px"
        >
          <el-form-item
              v-for="(param, index) in queryParams"
              class="flex flex-row -ml-10 items-start justify-start"
              :key="param.key"
              :label="'Params' + (index+1)"
              :prop="'domains.' + index + '.value'"
              :rules="{required: true,message: 'domain can not be null',trigger: 'blur',}"
          >
            <el-form :inline="true" class="flex items-start justify-start">
              <el-form-item>
                <el-input placeholder="参数名称" v-model="param.name" class="w-20"/>
              </el-form-item>

              <el-form-item class="-ml-5">
                <el-select v-model="param.nec" placeholder="please select your zone">
                  <el-option label="必需" value="necessary"/>
                  <el-option label="非必需" value="unnecessary"/>
                </el-select>
              </el-form-item>

              <el-form-item class="-ml-5">
                <el-input placeholder="参数示例" v-model="param.example" type="textarea"></el-input>
              </el-form-item>

              <el-form-item class="-ml-5">
                <el-input placeholder="备注" v-model="param.desc" type="textarea"></el-input>
              </el-form-item>

            </el-form>

            <el-button @click.prevent="removeQuery(param)">Delete</el-button>

          </el-form-item>
          <el-button @click="addQuery">New domain</el-button>
        </el-form>
        <el-form v-show="showPart === 'Headers'" class="w-auto mt-10" label-width="120px">
          <el-form-item
              v-for="(param, index) in headerParams"
              class="flex flex-row -ml-10 items-start justify-start"
              :key="param.key"
              :label="'Params' + (index+1)"
              :prop="'domains.' + index + '.value'"
              :rules="{required: true,message: 'domain can not be null',trigger: 'blur',}"
          >
            <el-form :inline="true" class="flex items-start justify-start">
              <el-form-item>
                <el-input placeholder="参数名称" v-model="param.name" class="w-20"/>
              </el-form-item>

              <el-form-item class="-ml-5">
                <el-input placeholder="参数值" v-model="param.value" class="w-20"/>
              </el-form-item>
              <el-form-item class="-ml-5">
                <el-input placeholder="参数示例" v-model="param.example" type="textarea"></el-input>
              </el-form-item>
              <el-form-item class="-ml-5">
                <el-input placeholder="备注" v-model="param.desc" type="textarea"></el-input>
              </el-form-item>
            </el-form>

            <el-button @click.prevent="removeHeader(param)">Delete</el-button>

          </el-form-item>
          <el-button @click="addHeader(param)">New domain</el-button>
        </el-form>
      </form>
    </div>

    <!--返回数据设置-->
    <div id="edit_return_setting" class="mt-20">
      <h1 class="text-3xl font-bold">返回数据设置</h1>
      <form class="mt-5 ml-10">
        <el-form-item label="返回数据类型">
          <el-select v-model="returnType" placeholder="please select your zone">
            <el-option label="JSON" value="JSON"/>
            <el-option label="XML" value="XML"/>
          </el-select>
        </el-form-item>
        <el-form-item label="返回数据示例">
          <el-input v-model="returnExample" type="textarea"/>
        </el-form-item>
        <el-form-item label="返回数据描述">
          <el-input v-model="returnDesc" type="textarea"/>
        </el-form-item>
      </form>
    </div>

    <!--保存按钮-->
    <div class="flex justify-center mt-20">
      <el-button type="primary" size="large" @click="null">Save</el-button>
    </div>
  </div>
</template>
