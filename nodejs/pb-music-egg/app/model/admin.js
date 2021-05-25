module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let d = new Date();
 
  const AdminSchema = new Schema({
    username: { type: String  },  //用户名
    password: { type: String  },  //密码
    mobile: {type: String},   //手机号
    email: {type: String},   //email
    status: {     //状态
      type: Number,
      default: 1
    },
    role_id: {  //角色id
      type: Schema.Types.ObjectId   //
    },
    add_time:{  //创建时间
      type: Number,
      default: d.getTime()
    },
    is_super:{ //是否是超级管理员  1 是超级管理员 
      type: Number,
      default: 0 
    }

  });


  
 
  return mongoose.model('Admin', AdminSchema, "admin");
}

