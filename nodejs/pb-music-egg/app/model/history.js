module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    let d = new Date();
   
    //历史记录模型
    const HistorySchema = new Schema({

      user_id: { //用户id
        type: Schema.Types.ObjectId,
     },  

     song_id: { //歌曲id
        type: Schema.Types.ObjectId,
        default: ''
      },  

      last_time:{  //最新一次收听的音乐的时间
        type: Number,
      },
      
      play_time: {  //离开时的时间
        type: Number,
        default: 1
      }

  
    });
  
  
    
   
    return mongoose.model('History', HistorySchema, "history");
  }
  
  