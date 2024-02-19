const replacekeys = `$nonEscape[$replaceText[$replaceText[$replaceText[$getGuildVar[wlcmsg];{user};<@$authorID>];{user_tag};$userTag[$authorID]];{username};$username[$authorID]]]`

module.exports = [{
  name: "welc",
  type: "join",
  code: `
  $channelSendMessage[$getGuildVar[wlcchannel];${replacekeys}]
  $onlyIf[$getGuildVar[wlcchannel]!=;]
  $onlyIf[$getGuildVar[wlcmsg]!=;]
  `
}, {
  name: "testwelc",
  code: `$addCmdReactions[✅]
  $channelSendMessage[$getGuildVar[wlcchannel];${replacekeys}]
  $onlyIf[$getGuildVar[wlcchannel]!=;**[ERROR]**: Belum ada channel terpasang!]
  $onlyIf[$getGuildVar[wlcmsg]!=;**[ERROR]**: Belum ada message terpasang!]
  $onlyPerms[manageguild;**[ERROR]**: Anda tidak memiliki permission \`manageserver\`.]`
}, {
  name: "setupwelc",
  $if: "old",
  code: `$if[$checkContains[$message[1];-channel]==true]
  $addCmdReactions[✅]
  $setGuildVar[wlcchannel;$findChannel[$message[2]]]
  $onlyIf[$message[2]!=;**[ERROR]**: Anda lupa menambahkan channel.]
  $endif
  $if[$checkContains[$message[1];-msg]==true]
  $addCmdReactions[✅]
  $setGuildVar[wlcmsg;$messageSlice[1]]
  $onlyIf[$messagSlice[1]!=;**[ERROR]**: Anda lupa menambahkan message.]
  $endif
  $if[$checkContains[$message[1];-msgcheck]==true]
  $sendMessage[${replacekeys}]
  $onlyIf[$getGuildVar[wlcmsg]!=;**[ERROR]**: Belum ada message terpasang!]
  $endif
  $onlyIf[$checkContains[$message[1];-msg;-msgcheck;-channel]==true;**[ERROR]**: Invalid value! Tersedia value: \`-msg | -msgcheck | -channel\`]
  $onlyPerms[manageguild;**[ERROR]**: Anda tidak memiliki permission \`manageserver\`.]`
}]