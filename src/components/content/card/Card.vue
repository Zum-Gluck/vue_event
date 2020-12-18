<template>
  <div class="Card" @click="eventItemClick">
    <div class="tag">
      <van-tag type="success" v-if="level == 3">不急</van-tag>
      <van-tag type="warning" v-else-if="level == 2">正常</van-tag>
      <van-tag color="#ffe1e1" text-color="#ad0000" v-else>紧急</van-tag>
    </div>
    <div class="content">
      <div class="content_main">{{ description }}</div>
      <div class="timer">{{ time }}</div>
    </div>
    <div class="status">
      <van-tag
        color="#ADADAD"
        text-color="#E0E0E0"
        size="large"
        v-if="status == 3"
        >未处理</van-tag
      >
      <van-tag
        color="#FFD2D2"
        text-color="#272727"
        size="large"
        v-else-if="status == 2"
        >处理中</van-tag
      >
      <van-tag type="primary" size="large" v-else>处理完成</van-tag>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '../../../Tools/dateFormat.js'
export default {
  name: 'Card',
  props: ['level', 'description', 'status', 'timer', '_id'],
  computed: {
    time() {
      return dateFormat('yyyy-mm-dd', new Date(this.timer))
    }
  },
  methods: {
    eventItemClick() {
      this.$router.push(`/details?id=${this._id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.Card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.706667rem;
  margin: 0.346667rem;
  padding: 0 0.426667rem;
  background-color: #fff;
  box-sizing: border-box;

  .content {
    .content_main {
      font: 700 0.426667rem/1.5 '微软雅黑';
    }
    .timer {
      font-size: 0.346667rem;
    }
  }
}
</style>
