<template>
  <div>
    <NavBar>
      <template>
        <span>事件上报</span>
      </template>
    </NavBar>

    <div class="main">
      <van-field
        v-model="upInfo.uname"
        label="姓名"
        placeholder="请在此输入姓名"
      />
      <van-field
        v-model="upInfo.address"
        label="地址"
        placeholder="请在此输入地址"
      />
      <van-field
        v-model="upInfo.tel"
        label="联系电话"
        placeholder="请在此输入联系电话"
      />
      <van-field name="radio" label="紧急情况" class="radio">
        <template #input>
          <van-radio-group v-model="upInfo.level" direction="horizontal">
            <van-radio name="1">紧急 </van-radio>
            <van-radio name="2">正常</van-radio>
            <van-radio name="3">不急</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        class="mes"
        v-model="upInfo.content"
        rows="3"
        autosize
        type="textarea"
        placeholder="请输入留言"
      />
      <div class="file_box">
        <van-uploader v-model="fileList" multiple :max-count="3" />
        <div>
          <van-button type="info" @click="subClick" size="small"
            >提交</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import NavBar from '../components/content/navbar/NavBar'
export default {
  name: 'EventUp',
  components: {
    NavBar
  },
  data() {
    return {
      fileList: [],
      upInfo: {
        uname: '',
        address: '',
        tel: '',
        level: '3',
        content: ''
      }
    }
  },
  methods: {
    async subClick() {
      this.upInfo.id = sessionStorage.getItem('id')
      let res = await this.$http.post('/event', qs.stringify(this.upInfo))
    }
  }
}
</script>

<style lang="less">
.main {
  margin: 0.346667rem 0.426667rem;
  height: calc(100vh - 1.173333rem - 0.693333rem - 49px);
  background-color: #fff;
  border-radius: 7px;
}
.radio {
  .van-field__label {
    width: 4.2em !important;
    font-size: 12px !important;
  }
  .van-cell__value {
    font-size: 0.32rem !important;
    text-align: center !important;
  }
  .van-field__control--custom {
    justify-content: center !important;
  }
}
.mes {
  .van-field__control {
    margin: 10px 0 !important;
    border: 2px solid #eee !important;
  }
}
.file_box {
  padding: 0 0.426667rem;
}
</style>
