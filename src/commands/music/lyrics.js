module.exports = [{
  name: "lyrics",
  aliases: ['ly'],
  description: "Untuk mencari lirik lagu.",
  $if: 'old',
  code: `$if[$message!=]
$reply
$title[$getObjectProperty[ex.title] - $getObjectProperty[ex.artist]]
$thumbnail[$getObjectProperty[ex.artwork]]
$description[\`$replaceText[$replaceText[$checkCondition[$getObjectProperty[result]==];true;[ERROR]: Maaf, Lirik yang anda cari tidak ada atau tidak tersedia.];false;$getObjectProperty[result]]\`]
$color[$getGuildVar[color]]
  
$djsEval[const lyricsFinder = require('lyrics-finder');
const query = '$message'

lyricsFinder(query)
  .then((lyrics) => {
    d.object.result = lyrics
    console.log(lyrics)
  })
  .catch((error) => {
    console.error(error);
  });]
  
$djsEval[const musicInfo = require("music-info");
musicInfo.searchSong({ title: "$message" }, 1000)
   .then((title) => {
       d.object.ex = title
       console.log(title)
   })
   .catch((error) => {
    console.error(error);
   });]

$createObject[{}]
$onlyIf[$message!=;**[ERROR]**: Kamu lupa menambahkan judul lagu untuk mencari liriknya!]
$endif

$if[$message==]
$reply
$title[$songInfo[title];$songInfo[url]]
$thumbnail[$songInfo[thumbnail]]
$description[\`$replaceText[$replaceText[$checkCondition[$getObjectProperty[result]==];true;[ERROR]: Maaf, Lirik yang anda cari tidak ada atau tidak tersedia.];false;$getObjectProperty[result]]\`]
$color[$getGuildVar[color]]
  
$djsEval[const lyricsFinder = require('lyrics-finder');
const query = \`$songInfo[title]\`

lyricsFinder(query)
  .then((lyrics) => {
    d.object.result = lyrics
    console.log(lyrics)
  })
  .catch((error) => {
    console.error(error);
  });]
  
$onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]
$endif`
}, {
  name: "lyricss",
  type: 'interaction',
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{description:\`$replaceText[$replaceText[$checkCondition[$getObjectProperty[result]==];true;[ERROR]#COLON# Maaf, Lirik yang anda cari tidak ada atau tidak tersedia.];false;$getObjectProperty[result]]\`}{footer:$userTag[$clientID]:$userAvatar[$clientID]}{color:$getGuildVar[color]}{timestamp}};;;everyone;true]

$djsEval[const lyricsFinder = require('lyrics-finder');
const query = \`$songInfo[title]\`

lyricsFinder(query)
  .then((lyrics) => {
    d.object.result = lyrics
    console.log(lyrics)
  })
  .catch((error) => {
    console.error(error);
  });]

$createObject[{}]
$onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Tidak ada antrian lagu! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
$onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`
}]