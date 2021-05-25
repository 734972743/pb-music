
/**
 * 这是后台路由
 * @param {*} app 
 */
module.exports = app => {
  const { router, controller } = app;

  router.redirect("/", "/admin"); // 路由重定向
  router.get("/admin", controller.admin.main.index); 
  router.get("/admin/main/welcome", controller.admin.main.welcome); 

  router.get('/admin/login', controller.admin.login.index);
  router.post('/admin/doLogin', controller.admin.login.doLogin);
  router.get('/admin/doLogout', controller.admin.login.doLogout);

  

  //公共的路由
  router.get('/admin/verify', controller.admin.base.verify);
  router.get('/admin/delete', controller.admin.base.delete);
  router.get('/admin/changeStatus', controller.admin.base.changeStatus);
  router.get('/admin/editNum', controller.admin.base.editNum);


  //文件上传路由
  // router.get('/admin/focus', controller.admin.focus.index);
  // router.post('/admin/focus/doSingleUpload', controller.admin.focus.doSingleUpload);
  // router.get('/admin/focus/multi', controller.admin.focus.multi);
  // router.post('/admin/focus/doMultiUpload', controller.admin.focus.doMultiUpload);
  


  router.get('/admin/manager', controller.admin.manager.index);
  router.get('/admin/manager/add', controller.admin.manager.add);
  router.post('/admin/manager/doAdd', controller.admin.manager.doAdd);
  router.get('/admin/manager/edit', controller.admin.manager.edit);
  router.post('/admin/manager/doEdit', controller.admin.manager.doEdit);
  router.get('/admin/manager/delete', controller.admin.manager.delete);

  router.get('/admin/role', controller.admin.role.index);
  router.get('/admin/role/add', controller.admin.role.add);
  router.post('/admin/role/doAdd', controller.admin.role.doAdd);
  router.get('/admin/role/edit', controller.admin.role.edit);
  router.post('/admin/role/doEdit', controller.admin.role.doEdit);
  router.get('/admin/role/auth', controller.admin.role.auth);
  router.post('/admin/role/doAuth', controller.admin.role.doAuth);


  router.get('/admin/access', controller.admin.access.index);
  router.get('/admin/access/add', controller.admin.access.add);
  router.post('/admin/access/doAdd', controller.admin.access.doAdd);
  router.get('/admin/access/edit', controller.admin.access.edit);
  router.post('/admin/access/doEdit', controller.admin.access.doEdit);

  //轮播图
  router.get('/admin/focus', controller.admin.focus.index);
  router.get('/admin/focus/add', controller.admin.focus.add);
  router.post('/admin/focus/doMultiUpload', controller.admin.focus.doMultiUpload);
  router.get('/admin/focus/edit', controller.admin.focus.edit);
  router.post('/admin/focus/doEdit', controller.admin.focus.doEdit);

 
 
 
  



};