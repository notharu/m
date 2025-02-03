module.exports = {
  name: "version",
  aliases: ['ver'],
  $if: "old",
  code: `$if[$message[1]==]
$reply
$description[**[VERSION]**: \`$getVar[version]\`
$color[$getGuildVar[color]]
  $endif
  
  $if[$message[1]==-set]
  $editMessage[$get[id];**[SUCCESS]**: Versi sudah diganti menjadi versi \`$getVar[version]\`]
  $wait[3s]
  $updatecommands
  $setVar[version;$message[2]]
$let[id;$sendMessage[**[LOAD]**: Mengganti Versi.. {options:{reply:$messageID}};true]]
  $onlyIf[$message[2]!=;**[ERROR]**: Kamu lupa tambah versi officialnya!]
  $onlyForIDs[737459156335853648;737905260177391647;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]
  $endif
  
  $if[$message[1]==-dev]
  $editMessage[$get[id];**[SUCCESS]**: Versi sudah diganti menjadi versi \`$getVar[version]\`]
  $wait[3s]
  $updateCommands
  $setVar[version;$replaceText[$replaceText[$message[2];true;$getVar[version]-dev.$randomString[15]];false;$advancedTextSplit[$getVar[version];-dev.;1]]]
$let[id;$sendMessage[**[LOAD]**: $replaceText[$replaceText[$message[2];true;Menyalakan Versi Dev];false;Mematikan Versi Dev].. {options:{reply:$messageID}};true]]
  $onlyIf[$checkContains[$message[2];true]!=$checkContains[$getVar[version];-dev.];**[ERROR]**: Versi Dev sudah menyala.]
  $onlyIf[$checkContains[$message[2];true;false]==true;**[ERROR]**: Kamu lupa tambah value \`true | false\`]
  $onlyForIDs[737459156335853648;737905260177391647;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]
  $endif`
}