const app = require('express')();
const wt = require('webtask-tools');
const bodyParser = require('body-parser')

const encryptionRoute = require('./routers/encryption');
const messageRoute = require('./routers/message');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', encryptionRoute);
app.use('/', messageRoute);
app.get('*', function(req, res){
  res.send('Nope! Nothing is here', 404);
});

module.exports = wt.fromExpress(app);