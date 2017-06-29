let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {type:String, required:[true, "Username Must be Filled Out"]}
}, {timestamps: true})

mongoose.model("User", UserSchema);
