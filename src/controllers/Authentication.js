var jwt = require('jsonwebtoken');
var config = require('../../config/server');

var _authAccount = function () {}

exports.authUser = function(req, res){
    if(!req.body.username){
      res.status(400).json({info: "username required"});
      return;
    }
    if(!req.body.password){
      res.status(400).json({info: "username required"});
      return;
    }

    var token = {
      username: req.body.username,
      roles: ["user", "operator"]
    };
    token = jwt.sign(token, config.SERVER_SECRET);
    res.status(200).json(token);
  };

exports.authDoctor = function(req, res){
    if(!req.body.username){
      res.status(400).json({info: "username required"});
      return;
    }
    if(!req.body.password){
      res.status(400).json({info: "username required"});
      return;
    }

    var token = {
      username: req.body.username,
      roles: ["doctor", "operator"]
    };
    token = jwt.sign(token, config.SERVER_SECRET);
    res.status(200).json(token);
};

exports.getAccount = function(req, res){
  res.status(200).json(req.user || {});
};
