<template>
  <div class="bg-gray-500 h-full flex justify-center">
    <div class="login_box">

      <!--头像-->
      <div class="flex justify-center">
        <img class="avatar_box" src="@/assets/logo.png" alt="">
      </div>

      {{ loginForm }}
      <!--表单-->
      <el-form label-width="100px" class="px-4" :model="loginForm" :rules="loginFromRules" ref="loginFormRef">
        <el-form-item label="用户名称" prop="username">
          <el-input prefix-icon="el-icon-search" placeholder="请输入用户名称" v-model="loginForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input prefix-icon="el-icon-search" placeholder="请输入用户密码" v-model="loginForm.password" clearable show-password></el-input>
        </el-form-item>
        <el-form-item class="flex justify-end">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="reset" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script lang="ts">
import {Vue, Component, Ref} from "vue-property-decorator";
import {ElForm} from "element-ui/types/form";
import api from "@/api/API";


@Component({name: "Login"})
export default class extends Vue {

  @Ref("loginFormRef")
  private readonly loginFormRef!:ElForm;

  private loginForm = {username: "", password: ""};

  // 表单验证规则
  private loginFromRules = {
    username: [
      {required: true, message: "请输入用户名称", trigger: "blur"},
      {min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur"}
    ],
    password: [
      {required: true, message: "请输入等领域密码", trigger: "blur"},
      {min: 6, max: 32, message: "长度在 6 到 32个字符", trigger: "blur"}
    ]
  };

  private resetLoginForm() {
    console.log(this.loginFormRef)
    this.loginFormRef.resetFields();
  }

  private login() {
    this.loginFormRef.validate(async (isValid: boolean)=> {
      if (!isValid) return;
      const {data} = await api.post('login', this.loginForm);
      console.log(data);
    })
  }
}
</script>

<style lang="less" scoped>
.login_box {
  width: 500px;
  height: 360px;
  @apply bg-white my-auto rounded;

  .avatar_box {
    width: 120px;
    height: 120px;
    transform: translateY(-80px);
  @apply bg-gray-50 rounded-full border-2 shadow-xl;
  }
}
</style>
