module.exports = [{
  name: "setupchannel",
  $if: 'old',
  code: `$if[$checkContains[$message[2];-player]==true]
  $setGuildVar[playermsg;$get[player]]
  $setGuildVar[playerchannel;$message[1]]
  $let[player;$channelSendMessage[$message[1];
{newEmbed:
  {image:https://cdn.discordapp.com/attachments/995575372282335242/1121374012363251822/b3e22e164a207f353809d20dde261bb8.gif}
   {color:$getGuildVar[color]}
}
{newEmbed:
   {title:ZVENN Music Player}
   {thumbnail:https://cdn.discordapp.com/emojis/998580376039608330.gif}
   {color:$getGuildVar[color]}
   {field:__Antrian Musik__#COLON#:Tidak ada lagu yang ditambahkan!}
}
{actionRow:
  {button:⏸️:secondary:pause:yes}
   {button:🔁:secondary:loop:yes}
   {button:🔊:secondary:volume:yes}
   {button:⏹️:danger:stop:yes}
}
{actionRow:
  {button:| Total lagu#COLON# 0:secondary:positions:yes:$customEmoji[lp_diskrotate]}
  {button:⏮️:secondary:previous:yes}
   {button:⏭️:secondary:skip:yes}
}
{actionRow:
  {button:| List Member Voice:secondary:requests:yes:$customEmoji[lp_diskrotate]}
  {button:| Lirik:secondary:lyricss:yes:$customEmoji[lp_diskrotate]}
};true]]
  $endif

  $if[$checkContains[$message[2];-menfess]==true]
  $setGuildVar[menfesschnnl;$findchannel[$message[1]]]
  $addCmdReactions[✅]
  $endif
  
  $onlyIf[$checkContains[$message[2];-player;-menfess]==true;**[ERROR]**: Invalid value! Value tersedia: \`-player\`]
  $onlyIf[$message[1]!=;**[ERROR]**: Anda lupa tambahkan channel.]
  $onlyForIDs[$clientOwnerIDs;737905260177391647;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]`
}, {
  name: "deletesetup",
  $if: 'old',
  code: `$if[$checkContains[$message[1];-player]==true]
  $setGuildVar[playermsg;0]
  $setGuildVar[playerchannel;0]
  $addCmdReactions[✅]
  $deleteMessage[$getGuildVar[playermsg];$getGuildVar[playerchannel]]
  $onlyIf[$getGuildVar[playermsg]!=0;**[ERROR]**: Player sudah di nonaktifkan!]
  $endif

  $if[$checkContains[$message[1];-menfess]==true]
  $setGuildVar[menfesschnnl;0]
  $addCmdReactions[✅]

  $onlyIf[$getGuildVar[menfesschnnl]!=0;**[ERROR]**: Menfess sudah di nonaktifkan!]
  $endif
  
  $onlyIf[$checkContains[$message[1];-player;-menfess]==true;**[ERROR]**: Invalid value! Value tersedia: \`-player\`]
  $onlyForIDs[737459156335853648;737905260177391647;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]`
}]