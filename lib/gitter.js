var needle = require('needle');
var debug = require('debug')('webhook-to-gitter:gitter');

module.exports = function(webhook) {
  return function(data) {
    needle.post(webhook, data, function(err, resp) {
      if (err) debug(err);
      if (resp.statusCode !== 200) debug(resp);
    });
  };
};
