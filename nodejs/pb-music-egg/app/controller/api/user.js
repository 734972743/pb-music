'use strict';

const Controller = require('egg').Controller;

//用户模块
class UserController extends Controller {
  async getList() {
    try {
        let list = await this.ctx.model.User.find({});
        this.ctx.body = {
            code:1,
            data: list,
            msg:"查询成功"
        }
    } catch (error) {
        this.ctx.body = {
            code:0,
            data: [],
            msg:error
        }
    }
  }

  async add(){
    let body = this.ctx.request.body;
    // body._csrf = this.ctx.csrf;
    console.log(body);
    body.password = await this.ctx.service.tools.md5(body.password);

    
    try {
        let u = new this.ctx.model.User(body);
        let result = await u.save();
        this.ctx.body = {
            code:1,
            data: result,
            msg: "添加成功"
        }
    } catch (error) {
        this.ctx.body = {
            code:0,
            data: [],
            msg:error
        }
    }
    
  }

  async updateOne(){
    let body = this.ctx.request.body;
    try {
        let result = await this.ctx.model.User.updateOne({"_id":body.id},body);
        this.ctx.body = {
            code:1,
            data: result,
            msg:"修改成功"
        }
    } catch (error) {
        this.ctx.body = {
            code:0,
            data: [],
            msg:error
        }
    }
  }

  async deleteOne(){
    let id = this.ctx.request.query.id;
    console.log(id);
    try {
        let result = await this.ctx.model.User.deleteOne({"_id":id});
        this.ctx.body = {
            code:1,
            data: result,
            msg:"删除成功"
        }
    } catch (error) {
        this.ctx.body = {
            code:0,
            data: [],
            msg:error
        }
    }
  }


}

module.exports = UserController;
