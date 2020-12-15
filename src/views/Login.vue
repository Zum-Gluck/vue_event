<template>
  <div>
    <div class="login">欢迎登录</div>
    <div class="demo-input-suffix">
      <el-input
        placeholder="请输入手机号"
        prefix-icon="el-icon-phone"
        v-model="userInfo.mobile"
      >
      </el-input>

      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="userInfo.password"
        show-password
      >
      </el-input>
      <div class="btn">
        <el-button type="primary" @click="loginClick">登录</el-button>
        <el-button type="primary">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        mobile: 17637543547,
        password: "1234567",
      },
    };
  },
  methods: {
    async loginClick() {
      let { res: data } = await this.$http.post("/login", this.userInfo);
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  color: #409eff;
  text-align: center;
  margin-top: 2.666667rem;
}
.demo-input-suffix {
  margin-top: 3rem;
  padding: 0 16px;
  .el-input {
    margin: 0.533333rem 0;
  }
  .btn {
    display: flex;
    justify-content: space-between;
  }
}
</style>