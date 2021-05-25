module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //歌曲模型
    const SongSchema = new Schema({

      title: { //歌曲名
        type: String,
        default: ''
     },  

     song_url: { //歌曲url
        type: String,
        default: ''
      },  

      singer_id:{  //歌手id
        type: Schema.Types.ObjectId,
        default: ''
      },

      album_id:{  //专辑id
        type: Schema.Types.ObjectId,
        default: '男'    
      },

      lyric_id: { //歌词id
        type: Schema.Types.ObjectId,
        default: ''
      },  

      img_url: { //歌词图片url
        type: String,
        default: ''
      },  
      
      label_id: {  //标签id
        type: Schema.Types.ObjectId,   //Objectid
      },

      language_id: {  //语种id
        type: Schema.Types.ObjectId,   //Objectid
      },

      play_count: {  //播放数
        type: Number,   //Objectid
      },

      like_count: {  //点赞数
        type: Number,   
      },

      collection_count: {  //收藏数
        type: Number,  
      },

      is_hot: {  //是否热门
        type: Number,   //1: 是 2：否
      },

      is_new: {  //是否新曲
        type: Number,   //1: 是 2：否
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
  
  
    
   
    return mongoose.model('Song', SongSchema, "song");
  }
  
  