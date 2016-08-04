module.exports = function(options){
  console.log("beging......");
  return function (req, res, next){
    console.log("loading cros middleware : " + req.user);
    // 监听res回调header方法
    //res.on('header', function () {
      console.log("on header call");
      // 更新client session
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Client-Session,Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //});
    next();
  }
}
