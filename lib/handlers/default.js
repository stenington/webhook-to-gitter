var debug = require('debug')('webhook-to-gitter:handlers:default');

module.exports = function(service, body) {
  var msg = "Alert received from " + service + ": " + body;
  return {
    message: msg
  };
};
