const url = require("url");


//这个是admin 后台权限认证的 中间件
module.exports = options => {

  return async function adminAuth(ctx, next) {

    let pathname = url.parse(ctx.request.url).pathname;   //获取url 去掉get参数的url地址

    //1 给所有的post 提交绑定csrf 
    ctx.state.csrf = ctx.csrf; // 定义全局的csrf ， 用来解决post提交的安全问题
    ctx.state.prevPage = ctx.request.headers["referer"] ;  // 这是上一页的地址
    
    if(ctx.session.userInfo){
      ctx.state.userInfo = ctx.session.userInfo;  //把session.userInfo保存到 全局中


      let role_id = ctx.session.userInfo.role_id;
      let accessList = await ctx.service.admin.authList(role_id);
      ctx.state.accessList = accessList;

    }



    //2，判断用户是否登录, 
    // if(ctx.session.userInfo){
    //   ctx.state.userInfo = ctx.session.userInfo;  //把session.userInfo保存到 全局中
    //   console.log(ctx.state.userInfo )
    //   await next();
    // }else{
    //   //排除一些不需要登录的页面
    //   if(pathname == "/admin/login" || pathname == "/admin/verify" || pathname == "/admin/manager" || pathname == "/admin/doLogin"){
    //     await next();
    //   }else{
    //     ctx.redirect("/admin/manager");
    //   }
    // }


    let isAuth = await ctx.service.admin.checkAuth();
    if(isAuth){

      await next();
    }else{
      // ctx.redirect("/admin/manager");
      ctx.body = "你没有权限访问当前地址";
    }
    

    

    




    
  };
};