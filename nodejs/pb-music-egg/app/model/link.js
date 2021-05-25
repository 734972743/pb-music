module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //友情链接模型
    const LinkSchema = new Schema({

      title: { //链接名称
        type: String,
        default: ''
     },  

     link: { //链接地址
        type: String,
        default: ''
      },  

      img_url:{  //图片url
        type: String,
        default: ''
      },

      type:{  //链接类型
        type: Number,
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
  
  
    
   
    return mongoose.model('Link', LinkSchema, "link");
  }
  
  