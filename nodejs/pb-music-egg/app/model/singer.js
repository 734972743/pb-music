module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //歌手模型
    const SingerSchema = new Schema({

      name: { //姓名
        type: String,
        default: ''
     },  

     country: { //国籍
        type: String,
        default: ''
      },  

      birthday:{  //出生年月日
        type: String,
        default: ''
      },

      sex:{  //男 女
        type: String,
        default: '男'    
      },

      img_url: { //图片url
        type: String,
        default: ''
      },  

      works: { //成就
        type: String,
        default: ''
      },  
      
      description: {  //个人描述
        type: String,  
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
  
  
    
   
    return mongoose.model('Singer', SingerSchema, "singer");
  }
  
  