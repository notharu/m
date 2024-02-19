module.exports = {
  name: "end",
  type: "queueEnd",
  channel: "$channelID",
  $if: 'old',
  code: `$if[$getGuildVar[playermsg]!=0]
  $editMessage[$getGuildVar[playermsg];{newEmbed:
  {image:https://cdn.discordapp.com/attachments/995575372282335242/1121374012363251822/b3e22e164a207f353809d20dde261bb8.gif}
   {color:$getGuildVar[color]}
}
{newEmbed:
   {title:.  #CROSS. Music Player}
      {thumbnail:https://cdn.discordapp.com/emojis/998580376039608330.gif}
   {color:$getGuildVar[color]}
   {field:__Antrian Musik__#COLON#:Tidak ada lagu yang ditambahkan!}
}
{actionRow:
  {button:⏸️:secondary:pause:yes}
   {button:🔁:secondary:loop:yes}
   {button:🔊:secondary:volume:yes}
   {button:⏏️:danger:disconnect:$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;yes];false;no]}
}
{actionRow:
  {button:| Total lagu#COLON# 0:secondary:positions:yes:$customEmoji[lp_diskrotate]}
  {button:⏮️:secondary:previous:yes}
   {button:⏭️:secondary:skip:yes}
}
{actionRow:
  {button:| List Member Voice:secondary:requests:yes:$customEmoji[lp_diskrotate]}
  {button:| Lirik:secondary:lyricss:yes:$customEmoji[lp_diskrotate]}
};$getGuildVar[playerchannel]]
  $endif`
  
}