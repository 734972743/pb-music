'use strict';

const BaseController = require("./base");
const path = require("path");
const fs = require("fs");
const pump = require("mz-modules/pump");  //引入 pump 用于处理文件上传的

class FocusController extends BaseController {
  async index() {
    await this.ctx.render("admin/focus/index");
  }

  //处理单文件上传
  async doSingleUpload() {

    //注意，前台使用enctype="multipart/form-data" ，后端就不能使用 this.ctx.body来获取前端数据了

    let stream = await this.ctx.getFileStream(); // 获取表单提交的数据流
    console.log(stream);

    let fields = stream.fields;
    // 注意：这个目录要存在，且是绝对目录
    let target = "app/public/admin/upload/" + path.basename(stream.filename);

    let writeStream = fs.createWriteStream(target);  //创建一个写入流，用户保存流
    pump(stream, writeStream);  //将读取的文件流写入到本地，  不建议使用stream.pipe(writeStream); 建议使用pump

    this.ctx.body = {  
      url: target,
      fields: fields
    }

  }

  //渲染多文件上传页面
  async multi() {
    await this.ctx.render("admin/focus/multi");
  }


  //处理多文件上传
  async doMultiUpload() {
    console.log("doMultiUpload");
    let parts = this.ctx.multipart({autoFields: true});  // 获取多文件上传流
    console.log(parts);
    let files = [] ;  //这个是用来存放 文件的名
    let stream ; //这个是用来存放单个文件的
    while((stream = await parts()) != null){
      if(!stream.filename){   //如果没有传入图片就直接返回
        return     
      }

      const filename = stream.filename;
      let target = "app/public/admin/upload/" + path.basename(filename);

      let writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);

      files.push({
        [filename]: target // es6的属性名表达式
      });

    }

    this.ctx.body = {
      files: files,
      fields: parts.field  //所有的表单除了文件的字段都可以通过parts.field 获取
    }
  }

}

module.exports = FocusController;
