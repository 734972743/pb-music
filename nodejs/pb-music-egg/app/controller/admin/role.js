'use strict';

const BaseController = require("./base");

/**
 * 这是角色控制器
 */
class RoleController extends BaseController {
  async index() {
    
    let result = await this.ctx.model.Role.find({});

    await this.ctx.render("admin/role/index.html", {
      list: result
    });
  }

  async add() {
    await this.ctx.render("admin/role/add.html",{
    });
  }

  async doAdd(){
    let body = this.ctx.request.body;

    let {title, description} = body; 
    
    let role = new this.ctx.model.Role({
      title, description
    })

    let result = await role.save();
    if(result){
      await this.success("/admin/role", "角色添加成功");
    }else{
      await this.error("/admin/role/add", "角色添加失败");
    }

  }

  async edit() {

    let _id = this.ctx.request.query._id;
    let result = await this.ctx.model.Role.find({"_id":_id});
    await this.ctx.render("admin/role/edit.html",{
      result: result[0]
    });
  }

  
  async doEdit(){
    let body = this.ctx.request.body;
    let { _id, title, description} = body; 
    
    let result = await this.ctx.model.Role.updateOne({_id},{title, description});
    if(result){
     await this.success("/admin/role", "角色编辑成功");
    }else{
     await this.error("/admin/role/edit", "角色编辑失败");
    }

  }

  /**
   * 给角色授权
   */
  async auth() {

    let role_id = this.ctx.request.query._id;
    let accessList = await this.ctx.service.admin.authList(role_id);
    
    await this.ctx.render("admin/role/auth.html",{
      accessList,
      role_id
    });
  }


  //权限编辑
  async authEdit(){
   
    

    

  }

  async doAuth() {

    let body = this.ctx.request.body;

    let {role_id, access_node} = body;

    //1.要先删除这个role_id 下的所有的数据
    await this.ctx.model.RoleAccess.deleteMany({"role_id":role_id});

    // 2. 循环添加所有的数据
    for(let i=0; i<access_node.length; i++){
      let ra = this.ctx.model.RoleAccess({
        "role_id": role_id,
         "access_id": access_node[i]
      });

      await ra.save();
    }

    //保存完后返回到角色列表
   await this.success("/admin/role", "角色授权成功");
    
  }
}

module.exports = RoleController;
