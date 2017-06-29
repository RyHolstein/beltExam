let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let session = require('express-session');
var sessionConfig = {
  secret: 'shhhItsasecret',
  resave: false,
  saveUninitialized: true,
  name: "myCookie",
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 36000000,
  }
}

app.use(session(sessionConfig));

app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function(req, res) {
  res.sendFile(path.resolve('public/dist/index.html'))
})

app.listen(8000, function(){
  console.log("running on local host 8000")
});
