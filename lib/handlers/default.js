var debug = require('debug')('webhook-to-gitter:handlers:default');
var util = require('util')

module.exports = function(service, body) {
  var msg = util.format("Alert received on %s: check logs", service);
  return {
    message: msg
  };
};
