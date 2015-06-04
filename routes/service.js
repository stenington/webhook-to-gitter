var express = require('express');
var router = express.Router();
var debug = require('debug')('webhook-to-gitter:routes:service');

router.post('/', function(req, res, next) {
  var original = req.body;
  var service = req.service;
  var translated = req.handler(req.service, req.body);

  req.gitter(translated);

  debug({
    service: service,
    original: original,
    gitter: translated
  });

  res.sendStatus(200);
});

module.exports = router;
