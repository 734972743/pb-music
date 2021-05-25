'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
const md5 = require("md5");
const sd = require("silly-datetime");
const mkdirp = require('mz-modules/mkdirp');
const path = require("path");
const Jimp = require('jimp');
/**
 * 这是一个工具类服务 ,可以给后台,前端项目都可以访问
 */
class ToolsService extends Service {

  //生成随机二维码图
  async captcha(){
    //生成二维码图
    let captcha = svgCaptcha.create({
      size: 4,   //文字的字数
      fontSize: 50,   //文字的大小
      width: 100,
      height: 40,
      background: "#cc9966"
    });   

    this.ctx.session.code = captcha.text;  // 验证码上面的文字信息
    return captcha;
  }


  async md5(str){
    return md5(str);
  }


  //获取上传的路径
  async getUploadPath(filename){
    let d = new Date();
    let dirStr = sd.format(d, "YYYYMMDD");
    
    // console.log(this.config.uploadPath); //  获取配置中的参数
      // 获取绝对路径
    let pathdir = path.join(this.config.uploadPath, dirStr);
  
    await mkdirp(pathdir);  //生成文件夹

    //获取文件扩展名
    let extname = path.extname(filename);

    let time = d.getTime();   //获取毫秒数时间戳

    let fullName = path.join(pathdir, time+extname);


    //要把\ 替换成/
    return{
      uploadDir: fullName,
      saveDir: fullName.slice(3).replace(/\\/g, "/")
    }
  }


  //生成缩略图
 async jimpImg(target){
    Jimp.read(target, (err, lenna) => {  //生成200 *200的
      if (err) throw err;
      lenna
        .resize(200, 200) // resize   图片尺寸
        .quality(90) // set JPEG quality  //图片质量
        .write(target + "_200x200"+ path.extname(target)); // 保存的地址
    });

       // .greyscale() // set greyscale  设置黑白照片
    Jimp.read(target, (err, lenna) => {  //生成 400 *400的
      if (err) throw err;
      lenna
        .resize(400, 400) // resize   图片尺寸
        .quality(90) // set JPEG quality  //图片质量
        .write(target + "_400x400"+ path.extname(target)); // 保存的地址
    });
  }
}

module.exports = ToolsService;
