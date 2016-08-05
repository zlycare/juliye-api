var router  = require('express').Router();

/**
* 金数据API对接
* 所有的数据格式为JSON
* 所有的数据传输编码为UTF-8
* 目前，API访问的地址来源为https://jinshuju.net/api/v1/
* 除了数据推送API外，所有的API都需要恰当的API访问权限。目前我们仅支持HTTP Basic验证的方式。
**/

/**
* 接受数据推送
* 金数据将在收到数据后，向对应的HTTP地址 POST发送JSON格式数据。
* 该服务器需在2秒内返回2XX作为应答。如果出错，金数据会重试最多六次。
**/
router.post("/public/callback/jinshuju", function (req, res){

  var payload = req.body;
  console.log("jinshuju : " + require('util').inspect(req.body));
  res.status(201).json({info: "created!!"});
});

module.exports = router;
