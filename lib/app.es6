"use strict";

import RiveScript from "rivescript";

let bot = new RiveScript();

 bot.loadDirectory("brain", loadingDone, loadingError);

// bot.loadFile("brain/begin.rive", loadingDone, loadingError);

function loadingDone(batchNum) {
  console.log("Batch #" + batchNum + " has finished loading!");

  bot.sortReplies();

  let reply = bot.reply("local-user", "Hello, bot!");

  console.log("The bot says: " + reply);
}

function loadingError(error) {
  console.log("Error when loading files: " + error);
}
