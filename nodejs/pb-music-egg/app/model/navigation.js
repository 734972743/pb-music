module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //导航栏模型
    const NavigationSchema = new Schema({

      title: { // 标题
        type: String,
        default: ''
     },  

     link: { //链接
        type: String,
        default: ''
      },  

      type:{  //类型
        type: String,
        default: ''
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
  
   
    return mongoose.model('Navigation', NavigationSchema, "navigation");
  }
  
  