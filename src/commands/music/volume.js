const musicmsgerror = `$onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]
  $onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di voice channel untuk menggunakan command ini!]`
const intermsgmusicmsgerror = `$onlyForIDs[$clientOwnerIDs;737459156335853648;$songInfo[requester.user.id];**[ERROR]**: Anda tidak dapat melalukan command ini. Hanya penambah lagu ini yang dapat melakukannya. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
$onlyIf[$checkCondition[$voiceID[$authorID]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]!=];false;$voiceID[$authorID]];true;$voiceID[$clientID]]]==true;**[ERROR]**: Saya sudah di Voice channel yang berbeda! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$voiceID!=;**[ERROR]**: Anda harus berada di saluran suara untuk menggunakan command ini! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]   
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan! {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`
const bttnvol = `{actionRow:{button:-10%:secondary:volumedown_$get[idreqsong]:$replaceText[$replaceText[$checkCondition[$volume[get]==0];true;yes];false;no]:➖}{button:+10%:secondary:volumeup_$get[idreqsong]:$replaceText[$replaceText[$checkCondition[$volume[get]==100];true;yes];false;no]:➕}{button:Bisukan Volume:secondary:volumemute_$get[idreqsong]:$replaceText[$replaceText[$checkCondition[$volume[get]==0];true;yes];false;no]:🔇}
{button:Nonaktif Bisukan Volume:secondary:volumeunmute_$get[idreqsong]:$replaceText[$replaceText[$checkCondition[$volume[get]==100];true;yes];false;no]:🔊}}`

module.exports = [{
  name: "volume",
  description: "To setting volume for the song!",
  aliases: ['vol'],
  code: `$reply
  $deleteIn[1m]
**[VOLUME]**: $volume[get]%
      $addButton[1;Nonaktif Bisukan Volume;secondary;volumeunmute_$get[idreqsong];$checkCondition[$volume[get]==100];🔊]
      $addButton[1;Bisukan Volume;secondary;volumemute_$get[idreqsong];$checkCondition[$volume[get]==0];🔇]
  $addButton[1;+10%;secondary;volumeup_$get[idreqsong];$checkCondition[$volume[get]==100];➕]
  $addButton[1;-10%;secondary;volumedown_$get[idreqsong];$checkCondition[$volume[get]==0];➖]
  
  $let[idreqsong;$songInfo[requester.user.id;$sub[$queueLength;1]]]
$let[ownerid;$checkContains[$authorID;737459156335853648;$clientOwnerIDs]]

${musicmsgerror}`
}, {
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionUpdate[**[VOLUME]**: $volume[get]%;;${bttnvol}]

  $let[newvolume;$volume[$sum[$get[oldvolume];10]]]
  $let[oldvolume;$volume[get]]

$let[idreqsong;$songInfo[requester.user.id;$sub[$queueLength;1]]]
  ${intermsgmusicmsgerror}
  $onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];_;2];**[ERROR]**: Anda bukan author dari interaction ini. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==volumeup]`
}, {
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionUpdate[**[VOLUME]**: $volume[get]%;;${bttnvol}]

  $let[newvolume;$volume[$sub[$get[oldvolume];10]]]
  $let[oldvolume;$volume[get]]

$let[idreqsong;$songInfo[requester.user.id;$sub[$queueLength;1]]]
  ${intermsgmusicmsgerror}
  $onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];_;2];**[ERROR]**: Anda bukan author dari interaction ini. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==volumedown;]`
}, {
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionUpdate[**[VOLUME]**: $volume[get]%;;${bttnvol}]

  $let[mutevolume;$volume[0]]

$let[idreqsong;$songInfo[requester.user.id;$sub[$queueLength;1]]]
  ${intermsgmusicmsgerror}
  $onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];_;2];**[ERROR]**: Anda bukan author dari interaction ini. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==volumemute;]`
}, {
  type: 'interaction',
  prototype: "button",
  $if: 'old',
  code: `$interactionUpdate[**[VOLUME]**: $volume[get]%;;${bttnvol}]

  $let[unmutevolume;$volume[100]]

$let[idreqsong;$songInfo[requester.user.id;$sub[$queueLength;1]]]
  ${intermsgmusicmsgerror}
  $onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];_;2];**[ERROR]**: Anda bukan author dari interaction ini. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==volumeunmute;]`
}]