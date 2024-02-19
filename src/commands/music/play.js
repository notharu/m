module.exports = [{
  name: "play",
  description: "Untuk menambahkan/memutar lagu apa pun yang anda inginkan. Tersedia Spotify, Soundcloud support!",
  aliases: ['p','add'],
  $if: "old",
  code: `$if[$checkContains[$noEscapingMessage;https://youtube.com;https://youtu.be]==true]
$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true; ];false;**[ADDED]**: $songInfo[title;$sub[$queueLength;1]]]
$reply
$playTrack[$noEscapingMessage;youtube]
$endif

$if[$checkContains[$noEscapingMessage;https://open.spotify.com/intl-id/track;https://open.spotify.com/track]==true]
$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true; ];false;**[ADDED]**: $songInfo[title;$sub[$queueLength;1]]]
$reply
$playTrack[$nonEscape[$replaceText[$noEscapingMessage;/intl-id;]];spotify]
$endif

$if[$checkContains[$noEscapingMessage;https://open.spotify.com/playlist]==true]
$sendMessage[**[LOADED]**: Playlist on loaded! Total
**NOTE**: If your playlist contains more than 100 songs, the system will not load the song.]
$reply
$playTrack[$nonEscape[$replaceText[$noEscapingMessage;/intl-id;]];spotify]
$endif

$if[$checkContains[$noEscapingMessage;https://soundcloud.com]==true]
$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true; ];false;**[ADDED]**: $songInfo[title;$sub[$queueLength;1]]]
$reply
$playTrack[$noEscapingMessage;soundcloud]
$endIf

$if[$isValidLink[$noEscapingMessage]==false]
$replaceText[$replaceText[$checkCondition[$sub[$queueLength;1]==0];true; ];false;**[ADDED]**: $songInfo[title;$sub[$queueLength;1]]]
$reply
$playTrack[$noEscapingMessage;youtube]
$endif
  
 $if[$hasPlayer==false]
        $joinVc
    $endif

 $onlyIf[$message!=;**[ERROR]**: Aku butuh sebuah judul lagu atau link Spotify/Soundcloud/Youtube.]
 $onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: Saya sudah di Voice channel yang berbeda!]
$onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di voice channel untuk menggunakan command ini!]
$onlyIf[$checkContains[$noescapingmessage;https://open.spotify.com/album;https://on.soundcloud.com]==false;**[ERROR]**: Link Invalid. Pilih link yang valid.]
    `
}, {
  name: "durations",
  type: "interaction",
  prototype: 'button',
  $if: "old",
  code: `$if[$checkCondition[$queuelength>0]==true]
$interactionReply[;{newEmbed:
{author:Sedang dimainkan#COLON#:$userAvatar[$findUser[$songinfo[requester.user.id;$sub[$queueLength;1]]]]}
{title:$songInfo[title;$sub[$queueLength;1]]}
{url:$songInfo[url;$sub[$queueLength;1]]}
{description:**$advancedTextSplit[$digitalFormat[$getCurrentTrackDuration];.;1]** $getObjectProperty[bar] **$advancedTextSplit[$digitalFormat[$songInfo[duration;$sub[$queueLength;1]]];.;1]**}{field:__# Ditambahkan oleh#COLON#__:<@$songinfo[requester.user.id;$sub[$queueLength;1]]>:true}{field:__# Volume suara#COLON#__:$volume%:true}{field:__# Dijeda?__:$replaceText[$replaceText[$playerStatus;paused;Yes];playing;No]:true}
{thumbnail:https://cdn.discordapp.com/attachments/1101275803850899577/1118791731559796736/61ff9e981c2e3f1ec9cd72cde4d28f9d-removebg-preview.png}
{footer:$userTag[$clientID]:$userAvatar[$clientID]}
{color:$getGuildVar[color]}
{timestamp}};;;everyone;true]

$djsEval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar($getCurrentTrackDuration, $songInfo[duration;$sub[$queueLength;1]], 20, "<a:o_diskrotate:1104366573919154290>", "─", "─")]
$createObject[{}]
$endif

$if[$checkCondition[$queueLength>0]==false]
$interactionReply[**[ERROR]**: Belum ada lagu yang ditambahkan!;;;;everyone;true]
$endif

$if[$hasPlayer==false]
$interactionReply[**[ERROR]**: Belum ada lagu yang ditambahkan!;;;;everyone;true]
$endif
`
}, {
  name: "positions",
  type: 'interaction',
  prototype: "button",
  $if: "old",
  code: `$interactionReply[;{newEmbed:
{author:Antrian Music:$guildIcon}
{footer:Total#COLON# $queueLength + Putar ulang#COLON# $replaceText[$replaceText[$replaceText[$loopStatus;song;1x];queue;Query];none;Off] | $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]}
{description:$replaceText[$replaceText[$replaceText[$queue[$replaceText[$replaceText[$isNumber[$message];false;1];true;$message[1]];10;\`#RIGHT#{position}#LEFT#\` [{title}]({url}) — <@!{requester.user.id}>\n];,;];\`[0]\`;$replaceText[$replaceText[$checkCondition[$songInfo[position]==0];true;▶️];false;\`[PREVIOUS]\`]];\`[1]\`;$replaceText[$replaceText[$checkCondition[$songInfo[position]>=1];true;▶️];false;\`[1]\`]]}{footer:$userTag[$clientID] | 1 / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]] $textSplit[$divide[$queueLength;10];.]:$userAvatar[$clientID]}
{thumbnail:$userAvatar[$clientID]}
{color:$getGuildVar[color]}
{timestamp}};;;everyone;true]

$if[$checkCondition[$queueLength>0]==false]
$interactionReply[**[ERROR]**: Belum ada lagu yang ditambahkan!;;;;everyone;true]
$endif

$if[$hasPlayer==false]
$interactionReply[**[ERROR]**: Belum ada lagu yang ditambahkan!;;;;everyone;true]
$endif

`
}, {
  name: "requests",
  type: 'interaction',
  prototype: "button",
  code: `$interactionReply[;{newEmbed:
  {author:Daftar Anggota di Voice:$guildIcon}
  {description:Voice#COLON# <#$voiceID>
  
  $replaceText[$usersInChannel[$voiceID;mention;, ];, <@$clientID>;]}
  {thumbnail:https://cdn.discordapp.com/attachments/1101275803850899577/1114429104205344769/d3c4cd8815f57ee791bffd08632cbfc5-removebg-preview.png}
{footer:$userTag[$clientID]:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {timestamp}
  };;;everyone;true]
`
}]
