var express = require('express');
var jwtmw = require('express-jwt');
var corsmw = require('./src/helpers/middlewares/CorsHandler');
var bodyParser = require('body-parser');
var config = require('./config/server');
var routers = require('./src/router');

var app = module.exports = express();

/** General Middleware: parse all request body as application/json **/
app.use(bodyParser.json());
/** CORS **/
app.use(corsmw());
/** TODO NOT Genaral  Authorization: Bearer <token> **/
app.use(jwtmw({secret: new Buffer(config.SERVER_SECRET)}).unless({path: config.PUBLIC_PATHS}));
/** Load routers **/
routers(app);

app.listen(config.SERVER_PORT);
