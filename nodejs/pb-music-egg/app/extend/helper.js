
const sd = require("silly-datetime");

module.exports = {

  //格式化日期
  formatDate(params){
    return sd.format(params, "YYYY-MM-DD HH:mm");
  }
}