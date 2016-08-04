var
  VERSION1 = "/1",
  VERSION2 = "/2",
  VERSION3 = "/3",
  requireDir = require('require-dir'),
  routers = requireDir('./routers');

module.exports = function (app) {
  console.log("Loading v3 routers...");

  app.all(VERSION3 + "/403",function(req, res){ res.status(403).json({info: "Please Login!"})});
  app.all(VERSION3 + "/404",function(req, res){ res.status(404).json({info: "Resource NOT Found!"})});
  app.all(VERSION3 + "/500",function(req, res){ res.status(500).json({info: "Server Error!"})});

  for (var router in routers) {
    console.log(router);
    app.use(VERSION3, routers[router]);
  }
};
