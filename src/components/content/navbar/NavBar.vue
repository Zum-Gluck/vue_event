<template>
  <div class="navbar">
    <div class="back" @click="back" v-if="backShow">
      <van-icon name="arrow-left" /><span>返回</span>
    </div>
    <div class="center"><slot>插槽</slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    backShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  height: 1.173333rem;
  color: #fff;
  text-align: center;
  line-height: 1.173333rem;
  font-size: 0.426667rem;
  background-color: #252525;
  .back {
    display: flex;
    position: absolute;
    top: 0;
    left: 0.266667rem;
    .van-icon {
      line-height: 1.173333rem;
      margin-right: 5px;
    }
  }
}
</style>
