'use strict';

const Controller = require('egg').Controller;


//公共的controller
class BaseController extends Controller {

  //成功之后的操作
  async success(redirectUrl, message) {
    await this.ctx.render("public/success.html",{
      redirectUrl: redirectUrl,
      message: message
    });
  }

  //失败之后的操作
  async error(redirectUrl, message) {
    await this.ctx.render("public/error.html",{
      redirectUrl: redirectUrl,
      message: message
    });
  }

  async verify(){
   
    let captcha = await this.service.tools.captcha();

    this.ctx.response.type = "image/svg+xml";  //指定验证码的类型
    this.ctx.body = captcha.data;    //给页面返回一张验证码的图片
  }


  //公共的删除方法
  async delete(){
    
    //要从url中获取 要删除的数据库 model
    //要从url 中获取 数据的id
    //执行删除
    //返回上一页

    let model =  this.ctx.request.query.model; 
    let _id = this.ctx.request.query._id;
    await this.ctx.model[model].deleteOne({_id});

    this.ctx.redirect(this.ctx.state.prevPage);  //返回上一页
  }

  	// 改变状态
  async changeStatus(){
    // 获取要修改的数据库， 属性， 待更新的id
     let {  model, attr, _id } = this.ctx.request.query; 

     //先判断一下这个值是否存在
     let result = await this.ctx.model[model].find({"_id":_id});

     let json = null;
     if(result.length > 0){
       if(result[0][attr] == 1){
         
          json = {   //es6 的 属性名表达式
            [attr]: 0
          }
       }else{
          json = {
            [attr]: 1
          }
       }
     }

     //修改属性

     let updateResult = await this.ctx.model[model].updateOne({"_id":_id}, json);
     if(updateResult){
       this.ctx.body={"message":"更新成功", "success": true};
     }else{
       this.ctx.body={"message":"更新失败", "success": false};
     }
  }


  //修改数字
  async editNum(){
    // 获取要修改的数据库， 属性， 待更新的id
     let {  model, attr, value, id } = this.ctx.request.query; 

     //先判断一下这个值是否存在
     let result = await this.ctx.model[model].find({"_id": id});

     let json = null;
     if(result.length > 0){

      json = {
        [attr]: value
      }
     }

     //修改属性

     let updateResult = await this.ctx.model[model].updateOne({"_id":id}, json);
     if(updateResult){
       this.ctx.body={"message":"更新成功", "success": true};
     }else{
       this.ctx.body={"message":"更新失败", "success": false};
     }
  }
  
}

module.exports = BaseController;
