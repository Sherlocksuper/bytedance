<script setup>
///本文件是"我"的名片
var avatarsize = 250
var username = '用户昵称'

</script>

<template>
    <div class="card_continer">
        <div class="left">
            <el-avatar :size="avatarsize" src="circleUrl"></el-avatar>
            <p> 我的项目</p>
        </div>
        <div class="right">
            <p class="username">{{ username }}</p>
        </div>
    </div>

    <div class="line"></div>



</template>
<style lang="scss" scoped>
.card_continer {
    display: flex;

    .left {
        width: 500px;
        display: flex;
        flex-direction: column;
        /* 将子元素垂直排列 */
        align-items: center;
        /* 水平居中子元素 */
        .el-avatar {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        p {
            font-size: 50px;
        }
    }

    .right {
        .username {
            margin-top: 30px;
            font-size: 50px;
        }
    }
}

.line {
    border-top: 3px solid #ccc;
    margin: 20px 0;
    /* 设置上下间距 */
}
</style>