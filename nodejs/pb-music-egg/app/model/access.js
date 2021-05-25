module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let d = new Date();
 
  //权限模块
  const AccessSchema = new Schema({
    module_name: { type: String  },  //模块名称
    action_name: { type: String  },  //操作名称
    type: {type: String},   // 权限类型  ： 0 ：模块，1： 菜单，  2：操作 
    url: {type: String},   // 操作的url
    status: {     //状态
      type: Number,
      default: 1
    },
    module_id: {  // 模块id ， //这是一个子查询  0 是顶级模块  
      type: Schema.Types.Mixed  //混合类型
    },
    sort:{ //排序
      type: Number,
      default: 100
    },
    description:{ // 权限描述 
      type: String,
      default: 100
    },
    add_time:{  //创建时间
      type: Number,
      default: d.getTime()
    },

  });
 
  return mongoose.model('Access', AccessSchema, "access");
}

