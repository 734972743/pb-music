/*
 * @Author: your name
 * @Date: 2019-12-20 16:08:46
 * @LastEditTime : 2020-01-12 02:29:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-music\src\api\user.js
 */
import http from "@/utils/http.js";
//  用户接口
export default {
  //注册
  login(userForm) {
    return http({
      url: "/Alogin/supervise_login",
      method: "post",
      data: {
        username: userForm.username,
        password: userForm.password,
        province: userForm.province,
        city: userForm.city,
        area: userForm.area
      }
    });
  },
  //退出
  logout() {
    return http({
      url: "/Alogin/logout",
      method: "post"
    });
  }
};
