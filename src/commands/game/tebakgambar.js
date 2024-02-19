module.exports = [{
  name: "tebakgambar",
  description: "Bermain Tebak Gambar!",
  code: `$sendMessage[**[TIME]**: Tinggal 10 detik!]
$wait[10s]
$sendMessage[**[TIME]**: Tinggal 20 detik!]
$wait[10s]

$sendMessage[\`WAKTU\`: 30 detik! {newEmbed:{image:$getObjectProperty[result[0].image]}{color:$getGuildVar[color]}{timestamp}}]

$awaitMessages[$channelID;everyone;32s;$get[jawaban];jawabantebakgambar;**[TIMEOUT]**: Waktu sudah habis. Jawaban yang benar adalah \`$get[jawaban]\`]

$let[jawaban;$toLowerCase[$replaceText[$getObjectProperty[result[0].jawaban];Jawaban ;]]]

$djsEval[const hx = require('hxz-api');

hx.tebakgambar().then(result => {
     d.object.result = result
     console.log(result)
});]

$clientTyping
$createObject[{}]
$cooldown[31s;**[ERROR]**: Sudah ada tebak gambar sebelumnya]`
}, {
  name: "jawabantebakgambar",
  type: "awaited",
  code: `<@!$authorID> Menjawab dengan benar! Anda mendapatkan $get[randomexp] EXP!
  $setUserVar[lvls;$splitText[1]/$get[newexp]/$splitText[3]]
$let[newexp;$sum[$splitText[2];$get[randomexp]]]
$let[randomexp;$random[20;50]]
$textSplit[$getUserVar[lvls];/]`
}]