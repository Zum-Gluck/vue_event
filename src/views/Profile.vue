<template>
  <div class="profile">
    <NavBar>
      <template>
        <span>个人中心</span>
      </template>
    </NavBar>
    <div class="header">
      <img src="~assets/img/user.jpg" alt="" />
    </div>
    <main>
      <div>姓名:{{ userInfo.username }}</div>
      <div>地址:{{ userInfo.address }}</div>
      <div>联系电话:{{ userInfo.mobile }}</div>
      <div class="modify">修改密码<van-icon name="arrow" /></div>
      <div class="modify" @click="loginOut">
        退出登录<van-icon name="arrow" />
      </div>
    </main>
  </div>
</template>
<script>
import NavBar from '../components/content/navbar/NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar
  },
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      let { data: res } = await this.$http.post('/auth')
      this.userInfo = res
      sessionStorage.setItem('id', res._id)
    },
    loginOut() {
      sessionStorage.clear()
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 5.333333rem;
  height: 5.333333rem;
  margin: 0.266667rem 0 0 0.426667rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.profile {
  height: 100vh;
  background-color: #fff;
}
main {
  margin-top: 1.333333rem;
  color: #818083;
  font-size: 0.426667rem;
  div {
    height: 1.066667rem;
    line-height: 1.066667rem;
    border-bottom: 1px solid #eee;
    padding: 0 0.426667rem;
  }
  & div:first-child {
    border-top: 1px solid #eee;
  }
  .modify {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
