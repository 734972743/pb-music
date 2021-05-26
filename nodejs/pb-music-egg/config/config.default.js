/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620815178809_4744';

  //配置 session
  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    // encrypt: true,
    renew: true, // 延迟会话有效周期
  };

  // add your middleware config here
  config.middleware = ["adminAuth"];

  //配置adminAuth 中间件
  config.adminAuth = {
    match: "/admin"  ,  //路由带有/admin的都会使用这个中间件
  }

  //配置视图模板
  config.view = {
    //多视图模板设置
    mapping: {
      '.html': 'ejs',    //后缀名为.html ，使用ejs模块
      ".nj": "nunjucks"  //后缀名为.nj ，使用nunjucks模块
    },
  };

  //配置mongoose数据库
  config.mongoose = {
    client:{
      url: 'mongodb://eggadmin:123456@106.75.93.168:27017/music',  //服务器地址
      // url: 'mongodb://eggadmin:123456@127.0.0.1:27017/eggxiaomi',
      options: {},
    }
    
  };

  //配置上传文件的设置 ，
  config.multipart = {
      // fileExtensions: [ '.apk'， ] // 增加对 apk 扩展名的文件支持
      // whitelist: [ '.png', "jpeg", "jpg" ],  //// 覆盖整个白名单，只允许上传 '.png' ."jpeg"等 格式
      fields: "50"  , //设置上传图片的时候，表单字段最多允许的字段的数量，这个默认值是 10

  }

  //配置安全策略， csrf是否验证
  config.security = {  
    csrf:{
      ignore: ctx=>{
        if(ctx.request.url == "/admin/goods/uploadImage" || ctx.request.url == "/admin/goods/uploadPhoto"|| 
         ctx.request.url.indexOf("/api") > -1 ){  //这个请求，csrf 不验证
          return true;
        }
        return false;
      }
    }
    
  };


  // 配置指定启动
  config.cluster = {
    listen: {
      port: 7011,
      hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    }
  }



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadPath: "app/public/admin/upload"
  };

  return {
    ...config,
    ...userConfig,
  };
};
