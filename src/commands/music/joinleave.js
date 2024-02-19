const musicmsgerror = `$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: Saya sudah di Voice channel yang berbeda!]
$onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di saluran suara untuk menggunakan perintah ini!]`

module.exports = [{
  name: "leave",
  description: "Untuk membuat saya meninggalkan voice channel saat ini!",
  aliases: ['dc','disconnect'],
  code: `$addCmdReactions[✅]
  $leaveVC  

  $onlyIf[$voiceID[$clientID]!=;**[ERROR]**: Saya sudah keluar dari voice channel!]

  ${musicmsgerror}

`
}, {
  name: "join",
  description: "To make me join voice channel!",
  aliases: ['entervc','vc'],
  code: `

  $addCmdReactions[✅]
  $joinVC 

  ${musicmsgerror}
`
}]