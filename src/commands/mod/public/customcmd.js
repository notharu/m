module.exports = [{
name: "addcmd",
description: "[ONLY BOOSTER / ADMIN] Untuk menambahkan custom commands/auto respond! Hati hati, perhatikan kata katamu sebelum membuat trigger.",
code: `$setGuildVar[trigger_customcmd;$replaceText[$replaceText[$checkCondition[$getGuildVar[trigger_customcmd]==];true;$message[1]/];false;$getGuildVar[trigger_customcmd]$message[1]/]]
$setGuildVar[respond_customcmd;$replaceText[$replaceText[$checkCondition[$getGuildVar[respond_customcmd]==];true;$messageSlice[1]/];false;$getGuildVar[trigger_customcmd]$messageSlice[1]/]]
$reply
**[SUCCESS]**: Telah ditambahkan \`$toLowercase[$message[1]]\` di custom commands.

$onlyIf[$checkContains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/;<;@;>]==false;**[ERROR]** Menggunakan simbol atau mention seseorang/diri anda tidak di perbolehkan.]
$onlyIf[$findTextSplitIndex[$message[1]]==0;**[ERROR]**: Trigger \`$toLowercase[$message[1]]\` sudah ada di list...]
$onlyIf[$message[2]!=;**[ERROR]**: Kamu melupakan 2 text! Ketik yang benar adalah \`$getGuildVar[prefix]addcmd [trigger] [respond]\`]
$textSplit[$getGuildVar[trigger_customcmd];/]
$onlyForRoles[995246006784491612;995245739456348170;1119604349186867200;995537199032455209;**[ERROR]**: Kamu bukan admin atau booster! Kamu di larang akses command ini.]
`
}, {
name: "cmdlist",
description: "Untuk melihat semua custom commands yang telah di tambahkan",
code: `
$title[♡ CI Custom Commands List]
$color[$getGuildVar[color]]
$thumbnail[$guildIcon]
$description[$nonEscape[$replacetext[$getGuildVar[trigger_customcmd];/;, ]]]
$addtimestamp
$onlyIf[$getTextSplitLength>=2;**[ERROR]**: Tidak ada custom commands ditambahkan...]
$textSplit[$getGuildVar[trigger_customcmd];/]
`
}, {
name: "delcmd",
description: "[ONLY BOOSTER / ADMIN] Untuk menghapus custom commands/auto respond!, JANGAN MENGHAPUS COMMANDS SEMBARANGAN.",
code: `
$setGuildVar[trigger_customcmd;$replacetext[$getGuildVar[trigger_customcmd];$advancedtextsplit[$getGuildVar[trigger_customcmd];/;$findtextsplitindex[$tolowercase[$message[1]]]]/;]]
$setGuildVar[respond_customcmd;$replacetext[$getGuildVar[respond_customcmd];$advancedtextsplit[$getGuildVar[respond_customcmd];/;$findtextsplitindex[$tolowercase[$message[1]]]]/;]]

$reply
**[DELETED]**: Sukses menghapus custom commands \`$message[1]\`
$onlyIf[$findTextSplitIndex[$message]!=0;**[ERROR]**: \`$message[1]\` Tidak ada di list.]
$onlyIf[$message[1]!=;**[ERROR]**: Kamu melupakan 1 text! Ketik yang benar adalah \`$getGuildVar[prefix]addcmd [trigger]\`]
$textSplit[$getGuildVar[trigger_customcmd];/]
$onlyForRoles[995246006784491612;995245739456348170;1119604349186867200;995537199032455209;**[ERROR]**: Kamu bukan admin atau booster! Kamu di larang akses command ini.]
`
}, {
   name: "$alwaysExecute",
   code: `
$advancedtextsplit[$getGuildvar[respond_customcmd];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyIf[$findtextsplitindex[$tolowercase[$replaceText[$replaceText[$replaceText[$message;<;];@;];>;]]]!=0;]
$textsplit[$getGuildvar[trigger_customcmd];/]
$onlyif[$channelID!=$getGuildVar[chataichannel];]
$onlyif[$isBot[$authorid]==false;]
`
}]
 