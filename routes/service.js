var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.redis.zrange([req.key, 0, -1, 'WITHSCORES'], function (err, reply) {
    if (err) return next(err);
    res.json(reply.map(function(val, i){ 
      if (i % 2 === 0) return JSON.parse(val);
      else return val;
    }));
  });
});

router.post('/', function(req, res, next) {
  var score = Date.now();
  var val = JSON.stringify(req.body);

  req.redis.zadd([req.key, score, val], function(err, reply){
    if (err) next(err);  
    else res.sendStatus(200);
  });
});

module.exports = router;
