module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //页面内容模型
    const PageContentSchema = new Schema({

      nav_id: { // 导航栏id
        type: Schema.Types.ObjectId,
     },  

     song_id: { //歌曲id
        type: Schema.Types.ObjectId,
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
  
  
    
   
    return mongoose.model('PageContent', PageContentSchema, "page_content");
  }
  
  