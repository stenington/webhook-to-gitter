var express = require('express');
var router = express.Router();
var debug = require('debug')('webhook-to-gitter:routes:service');

router.get('/', function(req, res, next) {
  req.redis.zrange([req.key, 0, -1], function (err, reply) {
    if (err) return next(err);
    res.render('service', {
      service: req.service, 
      alerts: reply.map(function(val) { return JSON.parse(val); })
    });
  });
});

router.post('/', function(req, res, next) {
  var score = Date.now();
  var obj = {
    original: req.body,
    service: req.service,
    translated: req.handler(req.service, req.body)
  };
  req.redis.zadd([req.key, score, JSON.stringify(obj)], function(err, reply){
    if (err) next(err);  
    else res.sendStatus(200);
  });
  debug(obj.translated);
});

module.exports = router;
