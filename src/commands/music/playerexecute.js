const idknamebutedit = `$editMessage[$getGuildVar[playermsg];{newEmbed:
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
   {button:$replaceText[$replaceText[$volume[get]%;100%;🔇];0%;🔊]:secondary:volume:no}
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

module.exports = {
  name: "$alwaysExecute",
  $if: 'old',
  code: `$if[$checkContains[$noEscapingMessage;https://youtube.com;https://youtu.be]==true]
  $deletecommand 
${idknamebutedit}
$playTrack[$noEscapingMessage;youtube]
$endif

$if[$checkContains[$noEscapingMessage;https://open.spotify.com/intl-id/track;https://open.spotify.com/track]==true]
$deletecommand 
${idknamebutedit}
$playTrack[$nonEscape[$replaceText[$noEscapingMessage;/intl-id;]];spotify]
$endif

$if[$checkContains[$noEscapingMessage;https://open.spotify.com/playlist]==true]
$deletecommand   
${idknamebutedit}
$playTrack[$nonEscape[$replaceText[$noEscapingMessage;/intl-id;]];spotify]
$endif

$if[$checkContains[$noEscapingMessage;https://soundcloud.com]==true]
$deletecommand     
${idknamebutedit}
$playTrack[$noEscapingMessage;soundcloud]
$endIf

$if[$isValidLink[$noEscapingMessage]==false] 
$deletecommand   
${idknamebutedit}
$playTrack[$noEscapingMessage;youtube]
$endif
  
$if[$hasPlayer==false]
$joinVc
$endif
$suppressErrors

$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: <@$authorID>, Saya sudah di Voice channel yang berbeda! {extraOptions:{delete:3s}{deleteCommand}}] 

$onlyIf[$voiceID!=;**[ERROR]**: <@$authorID>, Anda harus berada di voice channel untuk menggunakan player ini! {extraOptions:{delete:3s}{deleteCommand}}]

$onlyif[$checkContains[$noescapingmessage;https://open.spotify.com/album;https://on.soundcloud.com]==false;**[ERROR]**: <@$authorID>, Link Invalid. Pilih link yang valid. {extraOptions:{delete:3s}{deleteCommand}}]

  $onlyIf[$getGuildVar[playermsg]!=0;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$channelID==$getGuildVar[playerchannel];]`
}