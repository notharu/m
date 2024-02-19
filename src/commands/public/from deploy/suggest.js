module.exports = [{
  name: "isisuggest",
  type: 'interaction',
  prototype: "button",
  code: `$interactionModal[Isi saran mu untuk server kami!;suggestkirim;
  {actionRow:
     {textInput:Isi disini#COLON#:2:textsuggest:Isi saran yang berhubungan dengan server kami atau berkaitan dengan bot IOVECI.:yes: :1:950}
  }
]`
}, {
  name: "suggestkirim",
  type: 'interaction',
  prototype: "modal",
  code: `$interactionReply[**[SUCCESS]**: Saranmu sudah terkirim!;;;;everyone;true]
  
  $channelSendMessage[1111959282284503060;Saran dari <@$interactionData[author.id]> {newEmbed:
   {title:Saran Baru!}
   {color:$getGuildVar[color]}
   {description:$textInputValue[textsuggest]}
   {timestamp}
   {thumbnail:$guildIcon}
}]`
}]