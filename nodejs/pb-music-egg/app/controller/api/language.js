'use strict';

const Controller = require('egg').Controller;

//语种模块
class BaseController extends Controller {
    
  async getList() {
    try {
        let list = await this.ctx.model.Language.find({});
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
    try {
        let model = new this.ctx.model.Language(body);
        let result = await model.save();
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
        let result = await this.ctx.model.Language.updateOne({"_id":body.id},body);
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
    try {
        let result = await this.ctx.model.Language.deleteOne({"_id":id});
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

module.exports = BaseController;
