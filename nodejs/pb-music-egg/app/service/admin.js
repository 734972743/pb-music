'use strict';

const Service = require('egg').Service;
const url = require("url");

class AdminService extends Service {

  //判断权限 , 返回true,说明有权限，否则没有权限
  async checkAuth() {

    //1. 获取用户信息  并判断用户是否是超级管理员，  判断url 是否是忽略权限控制的url ,
    //2 根据用户 来获取 role_id；并获取权限列表
    //3. 根据访问的url 来获取权限id
    //4. 权限id 是否存在他所有的权限列表里面， 是就 可以访问呢， 不是，就不能访问。

    //1. 获取用户信息  并判断用户是否是超级管理员，  判断url 是否是忽略权限控制的url ,
    let ignoreUrl = ["/admin/login",  "/admin/doLogout", "/admin/doLogin", "/admin/verify"];

    let userInfo = this.ctx.session.userInfo;
      let pathname = url.parse(this.ctx.request.url).pathname;
      if(ignoreUrl.indexOf(pathname) > -1 || (userInfo && userInfo.is_super == 1)){
        return true;
      }
  
      //2 根据用户 来获取 role_id；
      let role_id =  userInfo.role_id;

      //3. 根据访问的url 来获取权限id
      let roleAccessList = await this.ctx.model.RoleAccess.find({"role_id": role_id});
      let accessArr =  roleAccessList.map(item=>{
        return item.access_id.toString();
      });

      let accessReult = await this.ctx.model.Access.find({"url": pathname});
      if(accessReult.length>0){

        // 4. 权限id 是否存在他所有的权限列表里面， 是就 可以访问呢， 不是，就不能访问。
        if(accessArr.indexOf(accessReult[0]._id.toString()) >-1){
          return true;
        }
        return false;
      }
      return false;

  }


  // 获取所有的授权列表
  async authList(role_id){
    
    //1 首先查出所有的权限列表数据
    let accessList = await this.ctx.model.Access.aggregate([
     {
       $lookup:{
         from: "access",
         localField: "_id",
         foreignField: "module_id",
         as: "items"
       }
     },
     {
       $match:{
         "module_id": "0"
       }
     }
   ]);

   //2 要根据rule_id 来查出当前所有的去角色权限数据
   let roleAccessList = await this.ctx.model.RoleAccess.find({"role_id": role_id});
   let accessArr = roleAccessList.map(item=>{
     return item.access_id.toString();
   });


   //3 循环角色权限数据， 找出access_id 个 权限数组中的_id 匹配的数据， 匹配就设置 checked= true
   for(let i=0 ; i<accessList.length; i++){
     if(accessArr.indexOf(accessList[i]._id.toString()) > -1){
       accessList[i].checked = true;
     }

     for(let j=0; j<accessList[i].items.length; j++){
       if(accessArr.indexOf(accessList[i].items[j]._id.toString()) > -1){
         accessList[i].items[j].checked = true;
       }
     }
   }

   return accessList;

  }


}

module.exports = AdminService;
