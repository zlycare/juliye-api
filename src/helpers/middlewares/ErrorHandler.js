module.exports = function middleware(options) {

  return function (err, req, res, next) {

    next();
  }
}
