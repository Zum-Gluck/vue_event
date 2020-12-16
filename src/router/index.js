import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import User from "../views/User"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: '/login' },
  { path: "/login", component: Login },
  { path: "/user", component: User }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()

  let token = window.sessionStorage.getItem("token")
  if (!token) return next("/login")

  next()
})

export default router
