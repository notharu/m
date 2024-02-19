module.exports = [{
  name: "start",
  type: "trackStart",
  channel: "$channelID",
  $if: 'old',
  code: `$if[$checkCondition[$channelID==$getGuildVar[playerchannel]]==false]
  $color[1;$getGuildVar[color]]
 $author[1;Sedang dimainkan:;$userAvatar[$songInfo[requester.user.id]]]

 $title[1;<a:o_lp_diskrotate:1104366573919154290> | $songInfo[title];$songInfo[url]]

$addButton[1;| Lirik;secondary;lyricss;no;<a:lp_diskrotate:916975799888932885>]

$addButton[1;| Ditambahkan oleh $userTag[$songInfo[requester.user.id]];secondary;requests;no;<a:lp_diskrotate:916975799888932885>]

$addButton[1;| Durasi: $nonEscape[$digitalFormat[$songInfo[duration;$sub[$queueLength;1]]]];secondary;durations;no;<a:lp_diskrotate:916975799888932885>]

$addButton[1;| Total lagu: $ordinal[$sub[$queueLength;1]];secondary;positions;no;<a:lp_diskrotate:916975799888932885>]

 $footer[1;$userTag[$clientID];$userAvatar[$clientID]]
 $thumbnail[1;https://cdn.discordapp.com/attachments/1101275803850899577/1114427683053522975/8c9c2c7c7002e2be802ccf6543741562-removebg-preview.png]

$addTimestamp

$createObject[{}]
$wait[1s]
$deleteIn[$humanizeMS[$songInfo[duration]]]
$endif

$if[$checkCondition[$channelID==$getGuildVar[playerchannel]]==true]
$editMessage[$getGuildVar[playermsg];{newEmbed:
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
};$getGuildVar[playerchannel]]
$endif
$onlyIf[$checkContains[$loopStatus;song]==false;]
`
}]