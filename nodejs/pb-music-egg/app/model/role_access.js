module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  let d = new Date();
 /**
  * 角色权限表
  */
  const RoleAccessSchema = new Schema({
    access_id: { type: Schema.Types.ObjectId  },
    role_id: { type: Schema.Types.ObjectId  },
  });
 
  return mongoose.model('RoleAccess', RoleAccessSchema, "role_access");
}

