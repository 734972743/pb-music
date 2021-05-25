module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let d = new Date();
 
  //轮播图
  const FocusSchema = new Schema({
    title: { type: String  },  //名称
    type: { type: Number  },  //类型
    focus_img: {type: String},   //图片地址
    link: {type: String},   //连接的url
    status: {     //状态
      type: Number,
      default: 1
    },
    sort: {  //排序
      type: Number   //
    },
    add_time:{  //创建时间
      type: Number,
      default: d.getTime()
    },

  });
 
  return mongoose.model('Focus', FocusSchema, "focus");
}

