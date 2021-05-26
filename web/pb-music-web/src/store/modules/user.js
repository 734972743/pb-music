import { saveUser, getUser, removeUser } from "@/utils/auth";
import userApi from "@/api/login.js";

let username = localStorage.getItem("username") ? localStorage.getItem("username") : "";

const user = {
  state: {
    sessionTolen: "", // 用户toten信息
    username: username    //用户名

  },

  mutations: {
    SET_TOKEN(state, sessionTolen) {
      // state.sessionTolen = null;
      // if (sessionTolen) {
      //   saveUser(user);
      // } else {
      //   removeUser();
      // }
      console.log("SET_TOKEN", sessionTolen);
      saveUser(sessionTolen);
    },

    SET_USERNAME(state, username){
       state.username = username;
    }


  },

  actions: {
    Login({ commit }, sessionTolen) {
     
    },

    Register({ commit }, user) {
     
    },

    //退出系统
    Logout({ commit }) {
      commit("SET_TOKEN", null);
      //清空localStoreage数据
      removeUser();
    },

    SaveUser({ commit }, sessionTolen) {
      commit("SET_TOKEN", sessionTolen);
    },

    
    //修改用户名
    updateUsername({ commit }, username){
      commit("SET_USERNAME", username);
      localStorage.setItem("username", username);

    }

    
  }
};

export default user;
