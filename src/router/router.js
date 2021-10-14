import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import routes from "routes/routes"
const router = new VueRouter({
  routes,
  mode:"history"
})

//处理重复点击编程式路由出错的问题
const VueRouterPush = VueRouter.prototype.push;
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (to){
  return VueRouterPush.call(this,to).catch(err => err)
}
VueRouter.prototype.replace = function (to){
  return VueRouterReplace.call(this,to).catch(err => err)
}


export default router
