<template>
  <div class="login_we">
    <div class="login">欢迎登录</div>
    <div class="fromMain">
      <div class="tel">
        <div class="ipt_box">
          <span>手机号</span
          ><input
            type="number"
            v-model="userInfo.mobile"
            placeholder="请输入手机号"
          />
        </div>
      </div>
      <div class="tel">
        <div class="ipt_box">
          <span>密码</span
          ><input
            type="password"
            v-model="userInfo.password"
            placeholder="请输入密码"
          />
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="info" size="small" @click="loginClick">登录</van-button>
      <van-button type="info" size="small">忘记密码</van-button>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        mobile: 17637543547,
        password: '1234567'
      }
    }
  },
  methods: {
    async loginClick() {
      let { data: res } = await this.$http.post(
        '/login',
        qs.stringify(this.userInfo)
      )
      if (res.status !== 200) return // 如果密码错误
      sessionStorage.setItem('token', res.token)
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less" scoped>
.login_we {
  height: 100vh;
  padding-top: 2.666667rem;
  box-sizing: border-box;
  background-color: #fff;
}
.login {
  color: #409eff;
  text-align: center;
}
.demo-input-suffix {
  margin-top: 3rem;
  padding: 0 0.426667rem;
  .el-input {
    margin: 0.533333rem 0;
  }
}
.btn {
  display: flex;
  justify-content: space-around;
  margin-top: 1.066667rem;
  button {
    width: 2.08rem;
  }
}
.fromMain {
  display: flex;
  margin-top: 1.866667rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 2.666667rem;
}
.tel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.373333rem;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui',
    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  input {
    display: block;
    width: 5.866667rem !important;
    background-color: #fff;
    background-image: none;
    border-radius: 0.106667rem;
    border: 0.026667rem solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: 0.346667rem;
    height: 0.8rem;
    line-height: 0.8rem;
    outline: none;
    padding: 0 0.4rem;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
.ipt_box {
  display: flex;
  width: 7.733333rem;
  justify-content: space-between;
  align-items: center;
}
</style>
