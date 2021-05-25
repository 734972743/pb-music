module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //用户模型
    const UserSchema = new Schema({

      username: { //用户名
        type: String,
        default: ''
     },  

      password: { //密码
        type: String,
        default: ''
      },  

      nickname:{  //昵称
        type: String,
        default: ''
      },

      sex:{  //男 女
        type: String,
        default: '男'    
      },

      mobile: { //手机号
        type: String,
        default: ''
      },  

      email: { //email
        type: String,
        default: ''
      },  
      
      role_id: {  //角色id
        type: Schema.Types.ObjectId,   //Objectid
      },

      status: {     //状态  1:显示，0隐藏
        type: Number,
        default: 1
      },

      add_time:{  //创建时间
        type: Number,
        default: d.getTime()
      },

      sort:{ //排序 
        type: Number,
        default: 100 
      }
  
    });
  
  
    
   
    return mongoose.model('User', UserSchema, "user");
  }
  
  