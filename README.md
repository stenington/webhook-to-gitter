# webhook-to-gitter

## Quick start
### Config

```
DEBUG=webhook-to-gitter:*
GITTER_WEBHOOK=https://webhooks.gitter.im/url_for_custom_webhook
NODE_ENV=production
```

### How it works

1. Run on heroku
2. POSTing to https://myappname.herokuapp.com/servicename translates payload with lib/handlers/servicename.js (default.js as fallback)
3. Translated payload sent to GITTER_WEBHOOK (and logged)