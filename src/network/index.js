import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = window.sessionStorage.getItem("token")

  if (!token) return config
  
  //将token放到请求头发送给服务器,将tokenkey放在请求头中
  config.headers.Authorization = "Bear " + token;
  //也可以这种写法
  // config.headers['accessToken'] = Token;
  return config;
s
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axios