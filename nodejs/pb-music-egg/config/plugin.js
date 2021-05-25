'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }


  //配置 nunjucks插件
  nunjucks: {  
    enable: true,
    package: 'egg-view-nunjucks',
  },

  //配置ejs插件
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

  //配置mongoose插件
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  
};



