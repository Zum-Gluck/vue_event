<template>
  <div>
    <NavBar>
      <template>
        <span>事件上报</span>
      </template>
    </NavBar>

    <div class="main">
      <van-form @submit="onSubmit" ref="form">
        <van-field
          v-model="upInfo.uname"
          :rules="[{ required: true }]"
          label="姓名"
          placeholder="请在此输入姓名"
        />
        <van-field
          v-model="upInfo.description"
          label="描述"
          :rules="[{ required: true }]"
          placeholder="请在此输入描述"
        />
        <van-field
          v-model="upInfo.tel"
          :rules="[{ required: true }]"
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
          :rules="[{ required: true }]"
          placeholder="请输入留言"
        />
        <div class="file_box">
          <van-uploader v-model="upInfo.fileList" multiple :max-count="3" />
          <div>
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </div>
      </van-form>
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
      upInfo: {
        uname: '',
        description: '',
        tel: '',
        level: '3',
        content: '',
        fileList: [],
        fileName: []
      }
    }
  },
  methods: {
    async onSubmit() {
      this.upInfo.id = sessionStorage.getItem('id')
      this.getFileName()
      let { data: res } = await this.$http.post(
        '/event',
        qs.stringify(this.upInfo)
      )
      if (res.status != 200) return this.$toast.fail('上报失败，请联系管理员')
      this.$toast.success('上报成功')
      this.upInfo.fileName = []

      for (let k in this.upInfo) {
        // 利用双向绑定 清空用户输入
        if (k == 'level') {
          this.upInfo[k] = '3'
        } else if (this.upInfo[k] instanceof Array) {
          this.upInfo[k] = []
        } else {
          this.upInfo[k] = ''
        }
      }
    },
    getFileName() {
      this.upInfo.fileList.forEach((item, index) => {
        //用来获取上传文件的名称
        this.upInfo.fileName.push(item.file.name)
      })
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
