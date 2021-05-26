import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import map from "./modules/map";


Vue.use(Vuex);

//进行模块化
const store = new Vuex.Store({
  modules: {
    user,
    map
  }
});
export default store;
