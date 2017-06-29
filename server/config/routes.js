var Controller = require('../controllers/controller');
function authenticate(req,res,next){
	if(req.session.userId){
		next();
	}else{
		res.sendStatus(401);
	}
}
module.exports = (app)=> {
  app.post('/api/login', Controller.login),
	app.get('/api/logout', Controller.logout)
  app.use(authenticate);
  app.get('/api/getCurrentUser', Controller.getUser),
  app.post('/api/new_question', Controller.addQuestion),
  app.get('/api/allQuestions', Controller.allQuestions),
  app.get('/api/getQuestion/:id', Controller.getQuestion),
  app.post('/api/addAnswer/:id', Controller.addAnswer),
  app.get('/api/liked/:id', Controller.liked)
}
