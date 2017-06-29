let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnswerSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  answer: {type:String, minlength: [5, 'Question must be At least 5 Characters']},
  description: {type: String},
  likes:  {type: Number}
}, {timestamps:true})

mongoose.model("Answer", AnswerSchema);
