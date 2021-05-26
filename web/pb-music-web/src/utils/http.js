/**
 * http请求预处理，包括request和response拦截器
 * 在登录的情况下，对所有的request请求添加用户认证token
 * 对所有的返回信息进行拦截，发现401错误（未登录或登录验证异常），跳转到登录页面
 */

import axios from "axios";
import router from "@/router.js";
import Qs from "qs";

// axios 配置
axios.defaults.timeout = 60000;
// axios.defaults.baseURL = "http://192.168.1.129/api.php/sc/v1";
 //axios.defaults.withCredentials = true; 
function getBaseUrl() {
  let url = "";
  if (process.env.NODE_ENV === "production") {
    url = BASE_URL;
  } else {
    

     url = "http://121.41.120.198:9295/wisdom_campus/";

   /*  url = "https://www.wewinx.com/sc_api"; */
    
  }
  return url;
}

axios.defaults.baseURL = getBaseUrl();

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");
    console.log("token", token);
    if (token && token.length > 0) {
      // config.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // config.headers.common["authToken"] = `admin`;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {

    switch (response.data.code) {
      case "401":
        // 401 清除token信息并跳转到登录页面
        router.replace({
          path: "/login"
        });
        break;
      case "404":
        // 页面未找到
        router.replace({
          path: "/login"
        });
        break;
      case "500":
        // 服务器内部错误
        router.replace({
          path: "/500"
        });
        break;
      case "403":
        // 权限
        router.replace({
          path: "/404"
        });
        break;
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case "401":
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: "/login"
          });
          break;
        case "404":
          // 页面未找到
          router.replace({
            path: "/login"
          });
          break;
        case "500":
          // 服务器内部错误
          router.replace({
            path: "/500"
          });
          break;
        case "403":
          // 权限
          router.replace({
            path: "/404"
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);

axios.defaults.transformRequest = function(data) {
  data = Qs.stringify(data);
  return data;
};

export default axios;
