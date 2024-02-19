module.exports = (bot) => {
    
  bot.functionManager.createFunction({
    name: "$onlyAuthorInteraction",
    params: ["msgerror"],
    type: "aoi.js", 
    code: ``
  });
  
}