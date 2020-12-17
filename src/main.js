import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './network'
import "./plugin/vant"
import "./assets/css/base.css"
import "./assets/js/flexible"
import "./assets/font/iconfont.css"


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
