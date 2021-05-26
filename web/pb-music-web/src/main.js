/*
 * @Author: your name
 * @Date: 2019-10-13 13:23:44
 * @LastEditTime: 2020-08-23 10:31:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-music\src\main.js
 */
/* import "../src/permission"; */
import Vue from "vue";
/* import "lib-flexible"; */
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import less from "less";
import axios from "axios";
// import figlet from "figlet";

import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

Vue.prototype.$axios = axios;
import { setCookie, getCookie, delCookie } from "@/api/cookie.js";

//这个是log 图形插件
// var figlet = require("figlet");
// 引入echarts
Vue.prototype.$cookieStore = { setCookie, getCookie, delCookie };
/* import 'lib-flexible' */
//导入配置好的权限拦截文件
// import "./permission.js";
/* import "@/assets/css/iconfont.css"; */ 


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(less);

//引入全局变量配置文件
//教学网页： https://blog.csdn.net/qq_30669833/article/details/81706217
//使用的的方式: this.变量名

//全局路由监听
// router.beforeEach((to, from, next) => {
// // 未登录状态；当路由到nextRoute指定页时，跳转至login
//    let sessionTolen =   this.$store.sessionTolen;

// });

figlet.parseFont('Standard', standard);
figlet.text('pb-music', {
  font: 'Standard',
}, function(err, data) {
  console.log(data);
});

Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
