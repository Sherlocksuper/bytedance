<script setup>
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";

// 1.定义account数据
const account = reactive({
  name: "",
  password: "",
});

// 2.定义校验规则
const accountRules = {
  name: [
    { required: true, message: "请输入帐号信息~", trigger: "blur" },
    {
      // min: 3, max: 5,
      pattern: /^[a-z0-9]{6,20}$/,
      message: "帐号由6~20数字或字母组成~",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码信息~", trigger: "blur" },
    {
      // min: 3, max: 5,
      pattern: /^[a-z0-9]{6,20}$/,
      message: "密码由6~20数字或字母组成~",
      trigger: "blur",
    },
  ],
};

const router = useRouter();
// 3.执行帐号的登录逻辑
function loginRouter() {
  router.push("/my");
}

// 4.注册路由跳转

function registerRouter() {
  router.push("/register");
}
</script>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "login",
});
</script>

<template>
  <div class="login">
    <div class="content">
      <div class="title">
        <h2>HTTP管理</h2>
      </div>
      <div class="middle">
        <el-form
          label-width="60px"
          size="large"
          :model="account"
          :rules="accountRules"
          status-icon
          ref="fromRef"
        >
          <el-form-item label="帐号" prop="name" class="middle-input">
            <el-input v-model="account.name" placeholder="请输入账户...">
              <template #prefix>
                <el-icon class="middle-icon"><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="account.password"
              show-password
              placeholder="请输入密码..."
            >
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <div class="controls">
            <el-button
              round
              class="login-btn"
              type="primary"
              @click="loginRouter()"
              >登录</el-button
            >
            <el-button
              round
              class="login-btn"
              type="primary"
              @click="registerRouter()"
              >注册</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%); */
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
}
.login .content {
  width: 360px;
  height: 320px;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 18px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
.content .title {
  text-align: center;
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  font-weight: bold;
}
.content .middle {
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
}

.controls {
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 80px;
  height: 35px;
  line-height: 35px;
  margin-top: 10px;
  color: #000;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
</style>
