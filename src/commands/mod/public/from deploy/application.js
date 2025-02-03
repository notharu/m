module.exports = [{
  name: "step1",
  type: 'interaction',
  prototype: 'button',
  code: `$interactionModal[Silahkan di isi data-data berikut.;sudah;
  {actionRow:
    {textInput: 
      Apa tujuan mu menjadi staff?:short:quest1:Isi tujuanmu disini!:yes: :1:100
    }
  }
  {actionRow:
    {textInput: 
      Bidang apa yang anda ingin masuki?:short:quest2:Pilih angka! (1) Partner, (2) Staff, (3) Design, (4) Event:yes: :1:1
    }
  }
  {actionRow:
   {textInput: 
     Apakah kamu yakin jadi staff disini?:short: quest3:Yakin / Tidak / Ragu:yes: :4:5
   }
  }
  {actionRow:
   {textInput: 
     Apakah kamu pernah mengorganisir server?:short:quest4:Belum / Pernah:yes: :5:6
   }
  }
  {actionRow:
   {textInput: 
     Apa usia kamu sudah memenuhi persyaratan?:short:quest5:Ya / Tidak:yes: :2:5
   }
  }
]`
}, {
  name: "sudah",
  type: 'interaction',
  prototype: 'modal',
  code: `$interactionReply[Form anda sudah terkirim. Silahkan menunggu Panggilan dari kami. Bila anda menerima panggil digeneral, anda perlu aktif.;;;;everyone;true]
  $channelSendMessage[1148188530376454204;Dari <@!$interactionData[author.id]> | $userTag[$interactionData[author.id]]
  {newEmbed:
    {title:Staff Application.}
    {description:Dikirim <t:$truncate[$divide[$dateStamp;1000]]:R>}
    {field:Apa tujuan mu menjadi staff?#COLON#:$textInputValue[quest1]}
    {field:Bidang apa yang anda ingin masuk?#COLON#:$textInputValue[quest2]}
    {field:Apakah kamu yakin jadi staff disini?#COLON#:$textInputValue[quest3]}
    {field:Apakah kamu pernah mengorganisir server sebelumnya?#COLON#:$textInputValue[quest4]}
    {field:Apa usia kamu sudah memenuhi persyaratan?#COLON#:$textInputValue[quest5]}
    {color:$getGuildVar[color]}
  }]`
}]