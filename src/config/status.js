module.exports = (bot) => {
  
  bot.status({
    text: "test",
    type: "PLAYING",
    status: "idle",
    time: 5
  });

  bot.status({
    text: "my new bot",
    type: "WATCHING",
    status: "idle",
    time: 5
  });
  bot.status({
    text: "made by evan",
    type: "listening",
    status: "idle",
    time: 5
  });
}