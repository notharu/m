const plyererror = `$onlyForIDs[$clientOwnerIDs;737459156335853648;$songInfo[requester.user.id];**[ERROR]**: Anda tidak dapat melalukan command ini. Hanya penambah lagu ini yang dapat melakukannya. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: Saya sudah di Voice channel yang berbeda! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di saluran suara untuk menggunakan command ini! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]   
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`
const thatplayeredit = `$editMessage[$getGuildVar[playermsg];{newEmbed:
  {image:https://cdn.discordapp.com/attachments/995575372282335242/1121374012363251822/b3e22e164a207f353809d20dde261bb8.gif}
   {color:$getGuildVar[color]}
}
{newEmbed:
   {title:.  #CROSS. Music Player}
   {thumbnail:https://cdn.discordapp.com/emojis/998580376039608330.gif}
   {color:$getGuildVar[color]}
   {field:__Sedang dimainkan__#COLON#:▶️ [$songInfo[title]]($songInfo[url])}
   {field:__Lagu berikutnya__#COLON#:$replaceText[$replaceText[$checkCondition[$splitText[2]==];true;Tidak ada lagu berikutnya.];false;\`[1]\`$splitText[2]]
$textSplit[$replaceText[$queue[1;10;\`#RIGHT#{position}#LEFT#\` [{title}]({url}) — <@!{requester.user.id}>\n];,;];\`[$sum[$songInfo[position];1]]\`]}
   {footer:+ Putar ulang#COLON# $replaceText[$replaceText[$replaceText[$loopStatus;song;1x];queue;Query];none;Off] | $digitalFormat[$songInfo[duration]]}
}
{actionRow:
  {button:$replaceText[$replaceText[$replaceText[$replaceText[$playerStatus;buffering;playing];idle;playing];playing;⏸️];paused;▶️]:secondary:$replaceText[$replaceText[$replaceText[$replaceText[$playerStatus;buffering;playing];idle;playing];playing;pause];paused;resume]:no}
   {button:🔁:secondary:loop:no}
   {button:$replaceText[$replaceText[$volume[get];100;🔇];0;🔊]:secondary:volume:no}
   {button:⏹️:danger:stop:no}
}
{actionRow:
  {button:| Total lagu#COLON# $ordinal[$sub[$queueLength;1]]:secondary:positions:no:$customEmoji[lp_diskrotate]}
    {button:⏮️:secondary:previous:$replaceText[$replaceText[$checkCondition[$songInfo[position]==0];true;yes];false;no]}
   {button:⏭️:secondary:skip:$replaceText[$replaceText[$checkCondition[$replaceText[$replaceText[$checkCondition[$songInfo[position]==1];true;$sub[$queueLength;1]];false;$queueLength]<=1];true;yes];false;no]}
}
{actionRow:
  {button:| List Member Voice:secondary:requests:no:$customEmoji[lp_diskrotate]}
  {button:| Lirik:secondary:lyricss:no:$customEmoji[lp_diskrotate]}
};$getGuildVar[playerchannel]]`

module.exports = [{
  name: "skip",
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[SKIP]**: Melewatkan lagu saat ini oleh <@$interactionData[author.id]>.]
  $skipTrack

  ${plyererror}
  `
}, {
  name: "pause",
  type: 'interaction',
  prototype: "button",
  $if: "old",
  code: `
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[PAUSE]**: Lagu dihentikan sementara oleh <@$interactionData[author.id]>.]
  $pauseTrack

  $if[$playerStatus==paused]
  $interactionReply[**[ERROR]**: Lagu sudah dijeda!;;;;everyone;true]
  $endif
  ${plyererror}
  `
}, {
  name: "resume",
  type: 'interaction',
  prototype: "button",
  $if: "old",
  code: `
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[RESUME]**: Lagu telah dilanjutkan oleh <@$interactionData[author.id]>.]
  $resumeTrack
  
  $if[$playerStatus==playing]
  $interactionReply[**[ERROR]**: Lagu sudah dilanjutkan!;;;;everyone;true]
  $endif
  ${plyererror}
`
}, {
  name: "stop",
  type: 'interaction',
  prototype: "button",
  $if: "old",
  code: `$interactionDelete
  $wait[2s]
  $interactionReply[**[STOP]**: Lagu dihentikan oleh <@$interactionData[author.id]>.]
  $leavevc
  ${plyererror}
  `
}, {
  name: "loop",
  type: 'interaction',
  prototype: "button",
  $if: "old",
  code: `$if[$loopStatus==none]
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[REPEAT]**: Semua lagu dalam query, perintah ini di lakukan oleh <@$interactionData[author.id]>]
  $loopMode[queue]
  $endif

  $if[$loopStatus==queue]
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[REPEAT]**: 1x, perintah ini di lakukan oleh <@$interactionData[author.id]>]
  $loopMode[song]
  $endif

  $if[$loopStatus==song]
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $interactionReply[**[REPEAT]**: Off, perintah ini di lakukan oleh <@$interactionData[author.id]>]
  $loopMode[none]
  $endif
  ${plyererror}
`
}, {
  name: "volume",
  type: 'interaction',
  prototype: 'button',
  $if: 'old',
  code: `$if[$volume[get]==100]
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $volume[0]
  $interactionReply[**[VOLUME]**: Volume dimute oleh <@$interactionData[author.id]>.]
  $endif

  $if[$volume[get]==0]
  $interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $volume[100]
  $interactionReply[**[VOLUME]**: Volume di unmute oleh <@$interactionData[author.id]>.]
  $endif
  
  ${plyererror}`
}, {
  name: "previous",
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionDelete
  $wait[2s]
  ${thatplayeredit}
  $playPreviousTrack
  $interactionReply[**[PLAY]**: Memutar lagu sebelumnya, perintah ini di lakukan oleh <@$interactionData[author.id]>.]
  ${plyererror}`
}, {
  name: "disconnect",
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionDelete
  $wait[2s]
  $leaveVC
  $interactionReply[**[VC]**: Keluar dari voice, perintah ini di lakukan oleh <@$interactionData[author.id]>.]
  $onlyIf[$voiceID[$clientID]!=;**[ERROR]**: Saya sudah keluar dari voice channel! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`
}]