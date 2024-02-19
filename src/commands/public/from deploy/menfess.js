module.exports = [{
  name: "isimenfess",
  type: 'interaction',
  prototype: "button",
  code: `$interactionModal[Silahkan di isi data-data berikut.;kirimmenfess;
  {actionRow:
    {textInput:Pesan?:2:pesanmenfess:Isi pesanmu untuk dikirimkan.:yes: :1:950}
  }
  {actionRow:
    {textInput:Kirim ke?:1:untukmenfess:Contoh $username[737459156335853648] atau $userTag[737459156335853648]:yes: :1:30}
  }
]
$onlyIf[$getGuildVar[menfesschnnl]!=0;**[ERROR]**: Menfess sedang ditutup atau sistemnya di matikan. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
`
}, {
  name: "kirimmenfess",
  type: 'interaction',
  prototype: "modal",
  code: `$interactionReply[**[SUCCESS]**: Bagus! Menfess mu sudah terkirim di <#$getGuildVar[menfesschnnl]>;;;;everyone;true]
  
    $sendDM[{newEmbed:{field:MENFESS ID:https#COLON#//discord.com/channels/$guildID/$getGuildVar[menfesschnnl]/$get[id] | <@!$interactionData[author.id]> | $userTag[$interactionData[author.id]]}
  {field:Untuk:<@$findUser[$textInputValue[untukmenfess]]>}{color:$getGuildVar[color]}{field:Pesan#COLON#:$textInputValue[pesanmenfess]}{footer:Dikirim saat#COLON#}{timestamp}{color:$getGuildVar[color]}};737459156335853648]
    
    $let[id;$channelSendMessage[$getGuildVar[menfesschnnl];Untuk <@$findUser[$textInputValue[untukmenfess]]> {newEmbed:{field:Pesan#COLON#:$textInputValue[pesanmenfess]}{footer:Dikirim saat#COLON#}{timestamp}{color:$getGuildVar[color]}};true]
 $onlyIf[$checkContains[$findUser[$textInputValue[untukmenfess]];$interactionData[author.id]]==false;**[ERROR]**: Maaf... Sepertinya user tersebut tidak ada atau itu anda sendiri.
Draftmu masih tersimpan di TextInput-nya. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`
}]