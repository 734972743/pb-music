/*
 * @Author: MadKing
 * @Date: 2020-09-07 09:18:19
 * @LastEditTime: 2020-05-14 18:11:16
 * @LastEditors: MadKing
 * @Description: In User Settings Edit
 * @FilePath: \web\zhsc_project
 */

/* const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  remUnit: 10 //基准大小 baseSize，需要和rem.js中相同
}); */
module.exports = {
  outputDir: "pb-music-web", //打包的文件目录
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === 'production' ? './':'./',
  devServer: {
    port: 8888, // 端口号，如果端口号被占用，会自动提升1
    host: "localhost", //主机名， 127.0.0.1，  真机 0.0.0.0
    https: false, //协议
    open: true, //启动服务时自动打开浏览器访问
    proxy: {
      // 开发环境代理配置
      //"/dev-api": {
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器地址，代理访问 http://localhost:8001
        target: process.env.VUE_APP_BASE_SERVER_URL,
        changeOrigin: true, // 开启代理服务器，
        pathRewrite: {
          // /dev-api/db.json 最终会发送 http://localhost:8001/db.json
          // 将 请求地址前缀 /dev-api 替换为 空的，
          // "^/dev-api": ""
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  /* css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [postcss]
      }
    }
  }, */


  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // require('postcss-px2rem')({
          //   remUnit: 76.8,
          //   propList: ['*'],
          //   mediaQuery: false, // 允许在媒体查询中转换px。
          //   exclude: '/node_modules/',
          //   minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          //   selectorBlackList: ['weui', 'mu'] // 忽略转换正则匹配项
          // })
        ]
      }
    }
  },

  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false // 打包时不会生成 .map 文件，加快打包速度
};
