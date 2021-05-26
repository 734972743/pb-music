import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/404.vue";
import Layout from "./views/Layout.vue";


Vue.use(Router);

//下面的代码是为了解决
//解决vue中的NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}问题

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/404",
      component: NotFound,
      name: ""
      // hidden: true
    },
    {
      path: "/",
      component: Layout,
      name: ""
    },
    
  ]
});
