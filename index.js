const app = require("./messenger_bot");

(async () => {
  await app.start(process.env.PORT || 8080);

  console.log('⚡️[Bolt] Message bot up and running');
})();