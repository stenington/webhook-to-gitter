var debug = require('debug')('webhook-to-gitter:handlers:papertrail');
var util = require('util');

module.exports = function(service, body) {
  var payload = JSON.parse(body['payload']);
  var msg = util.format(
    "%d hit(s) on [%s](%s) in Papertrail",
    payload.events.length,
    payload.saved_search.name,
    payload.saved_search.html_search_url
  );
  return {
    message: msg
  };
};
