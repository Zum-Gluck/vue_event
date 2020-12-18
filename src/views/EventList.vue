<template>
  <div>
    <NavBar>
      <template>
        <span>事件列表</span>
      </template>
    </NavBar>
    <div class="search">
      <div class="select">
        <span>请选择</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>
      <div class="ipt_content">
        <input type="text" placeholder="请输入搜索内容" />
        <span class="spn"><van-icon name="search"/></span>
      </div>
    </div>
    <div v-for="(item, index) of eventList" :key="index">
      <Card
        :level="item.level"
        :timer="item.timer"
        :description="item.description"
        :status="item.status"
        :_id="item._id"
      ></Card>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/content/navbar/NavBar'
import Card from '../components/content/card/Card'
export default {
  name: 'EventList',
  components: {
    NavBar,
    Card
  },
  data() {
    return {
      eventList: []
    }
  },
  methods: {
    async getEventList() {
      let id = sessionStorage.getItem('id')
      let { data: res } = await this.$http.get(`/event?id=${id}`)
      this.eventList = res
    }
  },
  created() {
    this.getEventList()
  }
}
</script>

<style lang="less" scoped>
.search {
  display: flex;
  color: #4f4f4f;
  font-size: 0.4rem;
  background-color: #fff;
  height: 1.066667rem;
  .select {
    display: flex;
    justify-content: space-around;
    width: 2.533333rem;
    text-align: center;
    line-height: 1.066667rem;
    border-right: 2px solid #bebebe;
  }
  .ipt_content {
    flex: 1;
    line-height: 1.066667rem;
    input {
      width: 90%;
      height: 100%;
      border: 0;
      padding: 0 0.213333rem;
      box-sizing: border-box;
    }
    .spn {
      position: relative;
      display: block;
      float: right;
      width: 10%;
      height: 100%;
      .van-icon-search {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
      }
    }
  }
}
</style>
