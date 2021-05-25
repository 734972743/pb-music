'use strict';


const BaseController = require("./base");

/**
 * 这是管理员控制器
 */

 let name ="zhangsan";
class ManagerController extends BaseController {


  async index() {

    let adminList = await this.ctx.model.Admin.aggregate([
      {
        $lookup:{
          from: "role",
          localField: "role_id",
          foreignField: "_id",
          as: "role"
        }
      }
    ]);
    await this.ctx.render("admin/manager/index", {
      adminList
    });
  }

  async add() {
    
    //获取所有的角色
    let roleList =  await this.ctx.model.Role.find({});
    

    await this.ctx.render("admin/manager/add.html",{
      roleList
    });
    
  }

  async doAdd(){
    let body = this.ctx.request.body;

    //新增之前要判断一下用户名是否存在
    let username = body.username;
    
    let users = await this.ctx.model.Admin.find({username});
    
    if(users.length> 0){
      //说明存在
      await this.error("/admin/manager/add", "此管理员已存在");
    }else{
      let password = await this.ctx.service.tools.md5(body.password);  //密码进行md5加密
      body.password = password;

      let admin = new this.ctx.model.Admin(body);
  
      let result = await admin.save();
      if(result){
        await this.success("/admin/manager", "管理员添加成功");
      }else{
        await this.error("/admin/manager/add", "管理员添加失败");
      }
    }


    

  }

  async edit() {
    let _id = this.ctx.request.query._id;
    let adminList = await this.ctx.model.Admin.find({_id});
    let admin = adminList[0];
    
    let roleList = await this.ctx.model.Role.find({});
    await this.ctx.render("admin/manager/edit.html",{
      admin, roleList
    });
  }

  async doEdit(){
    let body = this.ctx.request.body;
    let { _id, username, mobile, email, role_id} = body;
    let password = body.password;
    let result = null;
    if(password){
      password = await this.service.tools.md5(password);
      result = await this.ctx.model.Admin.updateOne({_id},{ username, mobile, email, role_id, password });
    }else{
      result = await this.ctx.model.Admin.updateOne({_id},{ username, mobile, email, role_id });
    }
    
     
    if(result){
     await this.success("/admin/manager", "管理员编辑成功");
    }else{
     await this.error("/admin/manager/edit", "管理员编辑失败");
    }

  }

  async delete() {
    
    this.ctx.body = "我是管理员删除页面"
  }



}

module.exports = ManagerController;
