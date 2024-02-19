module.exports = {
  name: "$alwaysExecute",
  code: `not allowed to send links!
  $deleteCommand
  $onlyIf[$checkContains[$message;discord.gg/;https://;http://]==true]
  `
}