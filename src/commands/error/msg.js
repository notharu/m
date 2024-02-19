module.exports = {
  type: 'functionError',
  code: `
  $title[1;NEW ERROR!]
  $addField[1;Guild, Channel ID:;$guildID, $channelID;yes]
  $addField[1;Error:;$handleError[error];yes]
  $addField[1;Function:;\`\`\`$handleError[function]\`\`\`;yes]
  $addField[1;Commands:;\`\`\`$handleError[command]\`\`\`;yes]
  $color[1;2f3136]
  $addTimestamp
  $footer[1;$userTag[$clientID];$userAvatar[$clientID]]
  $dm[840102690289090560]
  `
};