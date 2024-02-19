const musicmsgerror = `$onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]`

module.exports = {
  name: "nowplaying",
  description: "Untuk melihat informasi lagu saat ini.",
  aliases: ['np','nowplay'],
  code: `$author[Sedang dimainkan#COLON#;$userAvatar[$findUser[$songinfo[requester.user.id]]]]
$title[$songInfo[title];$songInfo[url]]
$description[**$advancedTextSplit[$digitalFormat[$getCurrentTrackDuration];.;1]** $getObjectProperty[bar] **$advancedTextSplit[$digitalFormat[$songInfo[duration]];.;1]**]
$addfield[__# Ditambahkan oleh#COLON#__;<@$songinfo[requester.user.id]>;true]
$addfield[__# Volume suara#COLON#__;$volume[get]%;true]
$addfield[__# Dijeda?__;$replaceText[$replaceText[$playerStatus;paused;Ya];playing;Tidak];true]
$thumbnail[https://cdn.discordapp.com/attachments/1101275803850899577/1118791731559796736/61ff9e981c2e3f1ec9cd72cde4d28f9d-removebg-preview.png]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$color[$getGuildVar[color]]
$addtimestamp

$djsEval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar($getCurrentTrackDuration, $songInfo[duration], 20, "<a:o_diskrotate:1104366573919154290>", "─", "─")]
$createObject[{}]

${musicmsgerror}
`
}