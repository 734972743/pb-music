'use strict';

const BaseController = require("./base");

class LoginController extends BaseController {
  async index() {
    await this.ctx.render("admin/login", {
    });
  }

  async doLogin() {
    //1获取表单的数据
    let body = this.ctx.request.body;

    let verify = body.verify;
    //2 判断验证码是否正确
    if(verify.toUpperCase() == this.ctx.session.code.toUpperCase()){
      let username = body.username;
      let password = await this.service.tools.md5(body.password);
      // let password = body.password;

      let result = await this.ctx.model.Admin.find({
        "username": username,
        "password": password
      });
      if(result.length > 0){
        this.ctx.session.userInfo = result[0];

        //跳转到你拥有的权限列表的第一个列表
        let accessList = await this.ctx.service.admin.authList(result[0].role_id);
        let redirectUrl = "/admin";

        // console.log("accessList",accessList);
        // if(accessList &&  accessList.length >0 && accessList[0] && accessList[0].items.length > 0){
        //   redirectUrl = accessList[0].items[0].url;
        // }
        await this.success(redirectUrl );
      }else{
        await this.error("/admin/login" ,"用户名或密码不正确");
      }
    }else{
      await this.error("/admin/login" ,"验证码不正确");
    }
    
    

    
    
    //3 要对密码进行md5加密
    //4 查询用户是否存在， 存在，则保存用户信息， 跳转到后台管理页面
    //5 不正确， 则跳转到登录页面



    
  }

  async register(){
    await this.ctx.render("admin/login", {
    });
  }

  async doRegister(){
    let body = this.ctx.body;
    let password = body.password;

  }


  //退出
  async doLogout(){
    this.ctx.session.userInfo = null;
    this.ctx.redirect("/admin/login");
  }
}

module.exports = LoginController;
