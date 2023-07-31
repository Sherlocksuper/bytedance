<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      headerData: [
        {
          name: 'Tom',
          value: 'Tom',
          isNecessary: 'necessary',
          examples: 'Tom',
          desc: 'Tom'
        }
      ],
      queryData: [
        {
          name: 'Tom',
          isNecessary: 'necessary',
          examples: 'Tom',
          desc: 'Tom'
        }
      ],
      bodyData: [
        {
          name: 'Tom',
          type: 'string',
          isNecessary: 'necessary',
          defaultValue: 'Tom',
          desc: 'Tom',
          otherInfo: 'Tom'
        }
      ],
    }
  }
}
</script>
<template>
  <div class="overflow-y-auto ">
    <div id="edit_content" class="m-10  flex flex-col ">
      <section id="edit_content_base_info">
        <h1 class="text-3xl">基本信息:</h1>
        <p class="mt-5">接口名称:</p>
        <p class="mt-5">接口描述:</p>
        <p class="mt-5">请求http方法:</p>
        <p class="mt-5">接口路径:</p>
      </section>
      <section id="edit_content_query_parameters" class="mt-10">
        <h1 class="text-3xl">请求参数</h1>
        <div id="query_parameters_header" class="mt-5">
          <strong>Header:</strong>
          <el-table class="mt-5" :data="headerData" border style="width: 100%">
            <el-table-column prop="name" label="参数名称" width="180"/>
            <el-table-column prop="value" label="参数值" width="180"/>
            <el-table-column prop="isNecessary" label="是否必须" width="180"/>
            <el-table-column prop="examples" label="示例" width="180"/>
            <el-table-column prop="desc" label="备注"/>
          </el-table>
        </div>
        <div id="query_parameters_query" class="mt-5">
          <strong>Query:</strong>
          <el-table class="mt-5" :data="queryData" border style="width: 100%">
            <el-table-column prop="name" label="参数名称" width="180"/>
            <el-table-column prop="isNecessary" label="是否必须" width="180"/>
            <el-table-column prop="examples" label="示例" width="180"/>
            <el-table-column prop="desc" label="备注"/>
          </el-table>
        </div>
        <div id="query_parameters_body" class="mt-5">
          <strong>Body:</strong>
          <el-table class="mt-5" :data="bodyData" border style="width: 100%">
            <el-table-column prop="name" label="名称" width="180"/>
            <el-table-column prop="type" label="类型" width="180"/>
            <el-table-column prop="isNecessary" label="是否必须" width="180"/>
            <el-table-column prop="defaultValue" label="默认值" width="80"/>
            <el-table-column prop="desc" label="备注"/>
            <el-table-column prop="otherInfo" label="其他信息" width="180"/>
          </el-table>
        </div>
      </section>
      <section id="edit_content_result" class="mt-10">
        <h1 class="text-3xl">返回数据</h1>
        <el-table class="mt-5" :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
      </section>
    </div>
  </div>
</template>
