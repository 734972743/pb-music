/*
 * @Author: your name
 * @Date: 2019-12-20 16:08:47
 * @LastEditTime: 2020-06-25 18:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-music\src\utils\auth.js
 */

const USER_KEY = "token";
const expires = 1000 * 60 * 60 * 24 * 1; // 设置过期时间为 1天

//这个是将用户信息保存到本地localStorage中

export function saveUser(user, userToken) {
  let obj = {};
  obj.startTime = new Date().getTime(); // 记录当前时间
  obj.expires = expires; //设置过期时间，毫秒级
  obj.user = user;
  obj.userToken = userToken;
  return localStorage.setItem(USER_KEY, JSON.stringify(obj));
}

export function getUser() {
  if (
    localStorage.getItem(USER_KEY) &&
    localStorage.getItem(USER_KEY) !== "undefined"
  ) {
    let obj = JSON.parse(localStorage.getItem(USER_KEY));
    let startTime = obj.startTime;
    let expires = obj.expires;
    let endTime = new Date().getTime();
    if (startTime + expires >= endTime) {
      //在过期时间内
      return obj.user;
    } else {
      console.log("token过期了");
      return undefined;
    }
    // return JSON.parse(localStorage.getItem(USER_KEY));
  } else {
    console.log("token不存在");
    return undefined;
  }
}
export function getToken() {
  let obj = JSON.parse(localStorage.getItem(USER_KEY));
  let usertoken = obj.userToken;
  return localStorage.getItem(usertoken);
}

export function authenticated() {
  let obj = JSON.parse(localStorage.getItem(USER_KEY));
  var t = localStorage.getItem(obj.userToken);
  return t && t.length > 0;
}

export function removeUser() {
  return localStorage.removeItem(USER_KEY);
}

//下面是保存分页查询信息的

// export function savePageQuery(pageQuery) {
//   return localStorage.setItem(PAGE_QUERY_KEY, JSON.stringify(pageQuery));
// }

// export function getPageQuery() {
//   return JSON.parse(localStorage.getItem(PAGE_QUERY_KEY));
// }

// export function removePageQuery() {
//   return localStorage.removeItem(PAGE_QUERY_KEY);
// }
