  <template>
  <div>
    <NavBar :backShow="true">
      <template>
        <span>事件详情</span>
      </template>
    </NavBar>
    <DetailsCard>
      <template>
        <!-- 标题 -->
        <div class="title">
          <div class="blue">1</div>
          <div>{{ detalisInfo.description }}</div>
          <div class="tags">
            <van-tag type="success" v-if="detalisInfo.level == 3">不急</van-tag>
            <van-tag type="warning" v-else-if="detalisInfo.level == 2"
              >正常</van-tag
            >
            <van-tag color="#ffe1e1" text-color="#ad0000" v-else>紧急</van-tag>
          </div>
        </div>

        <!-- 内容 -->
        <div class="content">
          {{ detalisInfo.content }}
        </div>

        <!-- 图片区域 -->
        <div class="pic" v-if="flag">
          <div
            class="pic_item"
            v-for="(item, index) in detalisInfo.uploadImg"
            :key="index"
          >
            <img :src="baseURL + item" alt="" />
          </div>
        </div>
      </template>
    </DetailsCard>

    <!-- 人物信息 -->
    <DetailsCard>
      <template>
        <div class="sup">
          <div>反映人:{{ detalisInfo.uname }}</div>
          <div>联系电话:{{ detalisInfo.tel }}</div>
          <div>地址:平顶山</div>
        </div>
      </template>
    </DetailsCard>
  </div>
</template>

<script>
import NavBar from '../components/content/navbar/NavBar'
import DetailsCard from '../components/content/detailsCard/DetailsCard'
export default {
  name: 'Details',
  components: {
    NavBar,
    DetailsCard
  },
  data() {
    return {
      detalisInfo: {},
      baseURL: 'http://localhost:3000',
      flag: false
    }
  },
  methods: {
    async getEventDetails() {
      // 获取当前事件的_id
      let _id = this.$route.query.id
      let { data: res } = await this.$http.get(`/details?_id=${_id}`)
      this.detalisInfo = res
      console.log(res)
    },
    isHaveImg() {
      setTimeout(() => {
        if (this.detalisInfo.uploadImg.length != 0) return (this.flag = true)
        this.flag = false
      }, 200)
    }
  },
  created() {
    this.getEventDetails()
    this.isHaveImg()
  }
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  font: 600 0.48rem/0.88rem 'Microsoft YaHei';
  .blue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.88rem;
    height: 0.88rem;
    color: #fff;
    font-size: 0.426667rem;
    border-radius: 50%;
    background-color: #1a91ff;
    margin-right: 0.186667rem;
  }
  .tags {
    margin-left: 0.4rem;
  }
}
.content {
  padding: 0 0.426667rem;
  margin: 0.186667rem 0 0.186667rem 0.4rem;
  color: #3c3c3c;
  font-size: 0.426667rem;
  text-indent: 0.8rem;
  border-left: #d0d0d0 2px solid;
}
.pic {
  display: flex;
  justify-content: space-between;
  height: 2.666667rem;
  .pic_item {
    width: 48%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.sup {
  font-size: 0.4rem;
  div {
    height: 0.986667rem;
    line-height: 0.986667rem;
    border-bottom: 1px solid #eee;
  }
  & div:last-child {
    border: 0;
  }
}
</style>
