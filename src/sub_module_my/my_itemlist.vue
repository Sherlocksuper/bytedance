<script setup>
///本文件是"我"的项目列表
var titlelist = ['名称', '描述', '创建时间', '接口数量', '查看详情', '我的权限']

var projects = [
    { name: '项目1', description: '这是项目1的描述', createTime: '2023-07-30', apiCount: 10, details: '详情1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', myPermission: '权限1' },
    { name: '项目2', description: '这是项目2的描述asjklhdashdlksahdlksahdlksahdklsahdksladdddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddd', createTime: '2023-07-31', apiCount: 15, details: '详情2', myPermission: '权限2' },

];
</script>

<template>
    <div class="itemlist_continer">
        <div class="title_row">
            <div v-for="(item, index) in titlelist" :key="index" class="title">{{ item }}</div>
        </div>
        <table class="project_table">
            <tr v-for="(project, index) in projects" :key="index">
               
                <td>
                    <div class="text-ellipsis">{{ project.name }}</div>
                </td>
                <td>
                    <div class="text-ellipsis">{{ project.description }}</div>
                </td>
                <td>
                    <div class="text-ellipsis">{{ project.createTime }}</div>
                </td>
                <td>
                    <div class="text-ellipsis">{{ project.apiCount }}</div>
                </td>
                <td>
                    <div class="text-ellipsis">{{ project.details }}</div>
                </td>
                <td>
                    <div class="text-ellipsis">{{ project.myPermission }}</div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.itemlist_continer {
    .title_row {
        align-items: center;
        display: flex;
        flex-direction: row;
        font-size: 25px;
        border: 5px solid #ccc;
        border-radius: 30px;

        .title {
            flex: 1;
            /* 让标题均分父容器的宽度 */
            text-align: center;
            /* 让标题内容在各自的块中居中 */
        }
    }

    .project_table {
        margin-top: 20px;
        /* 设置表格与标题之间的间距 */
        width: 100%;
    
        border-collapse: collapse;
        /* 合并边框 */
        table-layout: fixed;
        /* 使用固定表格布局，让每列的宽度严格对齐 */

        td {
            border: 1px solid #ccc;
            /* 设置表格单元格的边框样式 */
            padding: 8px;
            /* 设置表格单元格的内边距 */
            text-align: center;
            /* 设置表格单元格内容居中 */
            width: calc(100% / 6 - 5px);
            /* 设置每列的宽度 */
        }

        /* 设置文本溢出显示省略号 */
        .text-ellipsis {
            white-space: nowrap;
            /* 不换行 */
            overflow: hidden;
            /* 隐藏溢出部分 */
            text-overflow: ellipsis;
            /* 显示省略号 */
        }
    }

}
</style>
