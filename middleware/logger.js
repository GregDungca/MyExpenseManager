module.exports = function(req, res, next) {
  console.log('Received ' + req.method + ' from ' + req.path);
  req.on('data', function(chunk) {
    console.log(chunk.toString());
    next(); 
  });
}
