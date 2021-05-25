'use strict';

const BaseController = require("./base");

class MainController extends BaseController {
  async index() {
    await this.ctx.render("admin/main/index.html");
  }

  async welcome() {
    await this.ctx.render("admin/main/welcome.html");
  }
}

module.exports = MainController;
