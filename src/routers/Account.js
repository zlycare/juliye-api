var router  = require('express').Router();
var jwt = require('jsonwebtoken');
var config = require('../../config/server');
var AuthController = require('../controllers/Authentication');

router.post("/sessions/loginc", AuthController.authUser);

router.post("/sessions/logind", AuthController.authDoctor);

router.get("/sessions/account", AuthController.getAccount)

module.exports = router;
