var debug = require('debug')('webhook-to-gitter:handlers:newrelic');

module.exports = function(service, body) {
  var msg;

  if (body['deployment']) {
    var payload = JSON.parse(body['deployment']);
    msg = "Deployed, yo";
  }
  else if (body['alert']) {
    var payload = JSON.parse(body['alert']);
    msg = payload.long_description;
  }
  else {
    msg = "wat";
  }

  return {
    message: msg
  };
};
