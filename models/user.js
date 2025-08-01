const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nickname: {type: String , required:true},
    email: {type:String, required:true , unique: true},
    password:{type: String, required:true}
    }
)

userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

module.exports = mongoose.model('user',userSchema)