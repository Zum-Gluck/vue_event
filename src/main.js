import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import "./assets/css/base.css"
import "./assets/js/flexible"
import "./assets/font/iconfont.css"

axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
