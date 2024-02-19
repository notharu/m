module.exports = [{
  name: "news",
  code: `
  $sendMessage[**[SUCCESS]**: Pemberitahuan terkirim! Silahkan check di <#$getGuildVar[psachannel]>!
Apabila ada kesalahkan anda tinggal menghapus pesan itu.]
$channelSendMessage[$getGuildVar[psachannel];$nonEscape[$message]]
  
  $onlyIf[$getGuildVar[psachannel]!=;**[ERROR]**: Tidak ada channel pemberitahuan terdeteksi. Silahkan ketik \`\`$getGuildVar[prefix]news -channel [channelID/Mention]\`\` untuk menambahkan channel pemberitahuan.]
  $onlyIf[$message!=;**[ERROR]**: Kamu lupa isi pesan untuk pemberitahuan.]
  $onlyPerms[administrator;**[ERROR]**: Kamu bukan admin. Kamu dilarang akses command ini.]`
},{
  name: "newschannel",
  $if: 'old',
  code: `$if[$message[1]!=]
  $reply
**[SUCCESS]**: Channel Pemberitahuan telah disetel dichannel <#$findGuildChannel[$message[1]]>!
  $setGuildVar[psachannel;$findGuildChannel[$message[1]]]
  $endIf
  
  $If[$checkContains[$message[1];-get]==true]
  $reply
**[CHANNEL]**: Channel Pemberitahuan saat ini: $replaceText[$replaceText[$checkCondition[$getGuildVar[psachannel]==0];false;<#$getGuildVar[psachannel]>];true;Tidak ada channel pemberitahuan].
  $endIf
  
  $If[$checkContains[$message[1];-del]==true]
  $reply
**[SUCCESS]**: Channel Pemberitahuan telah dihapus!
  $setGuildVar[psachannel;0]
  $endIf
  
  $onlyIf[$message[1]!=;**[ERROR]**: Kamu lupa mention atau ketik \`-get | -del\` channel.]
  $onlyPerms[administrator;**[ERROR]**: Kamu bukan admin. Kamu dilarang akses command ini.]`
}]