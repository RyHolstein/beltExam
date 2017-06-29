var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer')

module.exports = {
  // For User  =======================================
  getUser: function(req, res){
    User.findOne({_id: req.session.userId}).exec((err, foundUser)=>{
      if(err){
        res.json(err);
      } else {
        res.json(foundUser)
      }
    })
  },//end of get user


  login: function(req, res){
    User.findOne(req.body).exec((err, foundUser)=>{
      if(foundUser){
        req.session.userId = foundUser._id;
        res.json(foundUser)
      }else {
        var newUser = new User(req.body);
        newUser.save(function(err, savedUser){
          if(err){
            res.json(err)
          }else {
            req.session.userId = savedUser._id;
            res.json(savedUser)
          }
        })
      }
    })
  },//end of login
  logout: function(req, res){
    req.session.destroy();
    return
  },
//For Quesions =======================================
  addQuestion: function(req, res){
    var newQuestion = new Question(req.body)
    newQuestion._user = req.session.userId;
    newQuestion.save((err, savedQ)=> {
      if(err){
        res.json(err);
      } else {
        console.log('successfully Saved');
        res.json(savedQ)
      }
    })
  }, //end add

  allQuestions: function(req, res){
    Question.find({})
    .populate({path:'answers'})
    .exec((err, questions)=>{
      if(err){
        res.json(err)
      } else {
        res.json(questions)
      }
    })
  },// end all questions

 getQuestion: function(req, res){
   console.log('Running the function');
   Question.findOne({_id: req.params.id})
   .populate({path:'answers', populate:{path:'_user'}})
   .exec((err, question)=>{
     if(err){
       res.json(err)
     }else {
       res.json(question)
     }
   })
 }, //end of get question

//section for answers ===============================
addAnswer: function(req, res){
  Question.findOne({_id: req.params.id}).exec((err, question)=>{
    if (err){
      res.json(err)

    }else {
      var newAnswer = new Answer(req.body)
      newAnswer.likes = 0;
      newAnswer._user = req.session.userId;
      newAnswer.save((err, savedAnswer)=>{
        if (err){
          res.json(err)
        }else {
          question.answers.push(savedAnswer)
          question.save((err, savedQuestion)=>{
            if(err){
              res.json(err);
            } else{
              res.json(savedQuestion)
            }
          })

        }
      })
    }
  })
},

liked: function(req, res){
  Answer.findOne({_id: req.params.id}).exec((err, foundAnswer)=>{
    if (err){
      res.json(err)
    } else {
      foundAnswer.likes = foundAnswer.likes + 1
      foundAnswer.save((err, saved)=>{
        if (err){
          res.json(err)
        }else{
          res.json(saved)
        }
      })
    }
  })
}

}//The End of Module Exports




















//end
