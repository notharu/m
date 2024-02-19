module.exports = {
  name: "avatar",
  aliases: ['av','ava'],
  description: "Untuk melihat Avatar Discord anda atau pengguna lain!",
  $if: 'old',
  code: `$if[$checkCondition[$message[1]==]==true]
  $reply
  $title[$userTag[$authorID] Avatar:]
  $image[$userAvatar[$authorID;2048]]
  $color[$getGuildVar[color]]
  $addTimestamp
  $endif
  
  $if[$checkCondition[$message[1]!=]==true]
  $reply
  $title[$userTag[$findUser[$message[1]]] Avatar:]
  $image[$userAvatar[$findUser[$message[1]];2048]]
  $color[$getGuildVar[color]]
  $addTimestamp
  $endif`
}