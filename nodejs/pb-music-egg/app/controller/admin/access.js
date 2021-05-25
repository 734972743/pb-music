'use strict';

const BaseController = require("./base");

/**
 * 这是权限控制器
 */
class AccessController extends BaseController {
  async index() {
    
    // let result = await this.ctx.model.Role.find({});
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
    ])
    await this.ctx.render("admin/access/index.html", {
      accessList
    });
  }

  async add() {

    //获取所有的模块  module_id 为 0 的模块
    let accessArr = await this.ctx.model.Access.find({"module_id": "0"});

    await this.ctx.render("admin/access/add.html",{
      accessArr
    });
  }

  async doAdd(){
    let body = this.ctx.request.body;

    //针对于非顶级模块
    if(body.module_id !=0){
      body.module_id =  this.app.mongoose.Types.ObjectId(body.module_id);   //把字符串id转成object id
    }
    
    let access = new this.ctx.model.Access(body)

    let result = await access.save();
    if(result){
      await this.success("/admin/access", "角色添加成功");
    }else{
      await this.error("/admin/access/add", "角色添加失败");
    }

  }

  async edit() {

    let accessList = await this.ctx.model.Access.find({"module_id": "0"});  //获取所有的父级模块
    let _id = this.ctx.request.query._id;
    let accesss = await this.ctx.model.Access.find({_id});  //根据id来获取指定的模块

    await this.ctx.render("admin/access/edit.html",{
      accessList,
      accessObj: accesss[0]
    });
  }

  
  async doEdit(){
    let body = this.ctx.request.body;
    let _id = body.id;

    if(body.module_id != "0"){
      body.module_id = this.app.mongoose.Types.ObjectId(body.module_id);  //调用mongoose里面的方法，把字符串转成ObjectId
    }
    
    
    let result = await this.ctx.model.Access.updateOne({_id},body);
    if(result){
     await this.success("/admin/access", "权限编辑成功");
    }else{
     await this.error("/admin/access/edit", "权限编辑失败");
    }

  }
}

module.exports = AccessController;
