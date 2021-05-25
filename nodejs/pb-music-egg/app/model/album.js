module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //专辑模型
    const AlbumSchema = new Schema({

      title: { //专辑名称
        type: String,
        default: ''
     },  

     img_url: { //专辑图片url
        type: String,
        default: ''
      },  

      singer_id:{  //歌手id
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
  
  
    
   
    return mongoose.model('Album', AlbumSchema, "album");
  }
  
  