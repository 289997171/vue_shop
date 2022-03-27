import Vue from 'vue'
import VueRouter, {NavigationGuardNext, Route, RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: '/login' // 重定向
  },
  {
    path: "/login",
    name: "login",
    component: ()=> import('../views/Login.vue')
  },
  {
    path: "/home",
    name: "home",
    component: ()=> import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航卫士:跳转拦截器
router.beforeEach((to:Route, // 将要访问的路径
                   from:Route, // 来自那个路径
                   next:NavigationGuardNext) /*跳转工具*/=> {
  // 如果访问的是登录页面直接泛型
  if (to.path === "/login") return next();
  const token = window.sessionStorage.getItem("token");
  if (token) return next();
  else return next("/login")
})

export default router
