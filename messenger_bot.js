require('dotenv').config()

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(/./, ({ say }) => {
  say("Hey whats up");
});


module.exports = app;
