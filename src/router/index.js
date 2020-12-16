import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import User from "../views/User"
import Profile from "../views/Profile"
import EventList from "../views/EventList"
import EventUp from "../views/EventUp"
Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: '/login' },
  { path: "/login", component: Login },
  {
    path: "/user", component: User, children: [
      { path: '/', redirect: 'profile' },
      { path: 'profile', component: Profile },
      { path: 'list', component: EventList },
      { path: 'up', component: EventUp }
    ]
  },
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
