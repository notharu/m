const musicmsgerror = `$onlyForIDs[$clientOwnerIDs;737459156335853648;$songInfo[requester.user.id];**[ERROR]**: Anda tidak dapat melalukan command ini. Hanya penambah lagu ini yang dapat melakukannya.]
$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: Saya sudah di Voice channel yang berbeda!]
  $onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di saluran suara untuk menggunakan command ini!]
  $onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]   
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]`

module.exports = [{
  name: "skip",
  aliases: ['next'],
  description: "Untuk melewati lagu atau lebih..",
  $if: 'old',
  code: `$if[$checkContains[$message[1];1;2;3;4;5;6;7;9;0]==true]
  $skipTo[$message[1]]
  $sendMessage[**[SKIP]**: Lewati ke \`$songInfo[title;$sub[$message[1];1]]\`]
  $endif

  $if[$checkContains[$message[1];1;2;3;4;5;6;7;9;0]==false]
  $skipTrack
  $addCmdReactions[⏭️]
  $endif

  $onlyIf[$checkCondition[$sub[$queueLength;1]>=$message[1]]==true;**[ERROR]**: Tidak ada posisi trek \`$message[1]\` ditemukan!]
  ${musicmsgerror}
  `
}, {
  name: "pause",
  description: "Untuk menjeda lagu saat ini.",
  aliases: ['pas'],
  code: `$addCmdReactions[⏸️]
   $pauseTrack
  $onlyIf[$playerStatus!=paused;**[ERROR]**: Lagu sudah dijeda!]
  ${musicmsgerror}
  `
}, {
  name: "resume",
  description: "Untuk melanjutkan lagu yang sebelumnya dijeda.",
  aliases: ['continue'],
  code: `$addCmdReactions[▶️]
   $resumeTrack
  $onlyIf[$playerStatus!=playing;**[ERROR]**: Lagu sudah dilanjutkan!]
  ${musicmsgerror}
`
}, {
  name: "stop",
  description: "Untuk menghentikan lagu saat ini, Ini akan menghapus semua antrean secara otomatis.",
  aliase: ['stp'],
  code: `$addCmdReactions[⏹️]
  $stopTrack

  ${musicmsgerror}
  `
}, {
  name: "loop",
  aliases: ['repeat'],
  description: "Untuk membuat lagu saat ini atau semua lagu dalam kueri diulang.",
  code: `$loopMode[$replaceText[$replaceText[$replaceText[$message[1];1;song];all;queue];off;none]]
  $sendMessage[**[REPEAT]**: $replaceText[$replaceText[$replaceText[$message[1];1;1x];all;semua lagu dalam kueri.];off;Off.]]

  $onlyIf[$checkContains[$message[1];1;all;off]==true;**[ERROR]**: Pengulangan __value__ tidak valid! Gunakan __value__: \`1 | all | off\`.]
  ${musicmsgerror}
`
}, {
  name: "shuffle",
  aliases: ['shuff'],
  description: "Untuk mengacak posisi lagu dalam kueri.",
  $if: "old",
  code: `$if[$checkContains[$message;on]==true]
  $addCmdReactions[🔀]
  $shuffleQueue
  $endif
  
  $if[$checkContains[$message;off]==false]
  $sendMessage[**[SHUFFLE]**: Mode acak telah dimatikan.]
  $unshuffleQueue
  $endif

  $onlyIf[$checkContains[$message[1];on;off]==true;**[ERROR]**: Acak __value__ tidak valid! Gunakan __value__: \`on | off\`.]
  ${musicmsgerror}`
}]