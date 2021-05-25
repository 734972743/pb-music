'use strict';

const BaseController = require("./base");
const fs = require("fs");
const pump = require("mz-modules/pump");  //引入 pump 用于处理文件上传的

class FocusController extends BaseController {
  async index() {

    let focusList = await this.ctx.model.Focus.find({});

    // focusList.forEach(item=>{
    //   item.focus_img = "http://127.0.0.1:7001/app"+  item.focus_img;
    // })

    await this.ctx.render("admin/focus/index",{
      focusList
    });
  }


  //渲染多文件上传页面
  async add() {
    await this.ctx.render("admin/focus/add");
  }


  //处理多文件上传
  async doMultiUpload() {
    console.log("doMultiUpload");

    let parts = this.ctx.multipart({autoFields: true});  // 获取多文件上传流
    console.log(parts);
    let files = {} ;  //这个是用来存放 文件的名
    let stream ; //这个是用来存放单个文件的
    while((stream = await parts()) != null){
      if(!stream.filename){   //如果没有传入图片就直接返回
        break     
      }
      console.log(stream);
      let fieldname = stream.fieldname;  //获取图片的name属性值
      let uploadPath = await this.ctx.service.tools.getUploadPath(stream.filename);
      console.log(uploadPath);
      let pathName = uploadPath.uploadDir;
      let writeStream = fs.createWriteStream(pathName);
      
      await pump(stream, writeStream);

      //对象合拼
      files = Object.assign(files , {  
        [fieldname]: uploadPath.saveDir // es6的属性名表达式
      });

    }

    console.log(files);

    let focus = new this.ctx.model.Focus(Object.assign(files,  parts.field));
    console.log(focus);
    await focus.save();

   await this.success("/admin/focus", "轮播图添加成功")
  }


  //渲染多文件上传页面
  async edit() {
    let id = this.ctx.request.query._id;
    console.log("id",id);
    let list= await this.ctx.model.Focus.find({"_id":id});
    let focus = list[0];
    console.log(focus);

    await this.ctx.render("admin/focus/edit",{
      focus
    });
  }


  //处理多文件上传
  async doEdit() {
    console.log("doMultiUpload");

    let parts = this.ctx.multipart({autoFields: true});  // 获取多文件上传流
    console.log(parts);
    let files = {} ;  //这个是用来存放 文件的名
    let stream ; //这个是用来存放单个文件的
    while((stream = await parts()) != null){
      if(!stream.filename){   //如果没有传入图片就直接返回
        break     
      }
      console.log(stream);
      let fieldname = stream.fieldname;  //获取图片的name属性值
      let uploadPath = await this.ctx.service.tools.getUploadPath(stream.filename);
      console.log(uploadPath);
      let pathName = uploadPath.uploadDir;
      let writeStream = fs.createWriteStream(pathName);
      
      await pump(stream, writeStream);

      //对象合拼
      files = Object.assign(files , {  
        [fieldname]: uploadPath.saveDir // es6的属性名表达式
      });

    }

    let id = parts.field.id;  //注意： id 不能为_id, 

    let updateObj = Object.assign(files,  parts.field);

    console.log(updateObj);

    let result = await this.ctx.model.Focus.updateOne({"_id":id}, updateObj);

    if(result){
      await this.success("/admin/focus", "轮播图添加成功")
    }else{
      await this.error("/admin/focus/edit", "轮播图添加失败")
    }

   
  }

}

module.exports = FocusController;
