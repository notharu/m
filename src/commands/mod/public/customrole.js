module.exports = [{
  name: "customrole",
  $if: 'old',
  description: "[ONLY BOOSTER / ADMIN] Command ini akan membuat custom role untuk kalian sendiri!",
  code: `$if[$checkContains[$message[1];add]==true]
  $reply
**[SUCCESS]**: Custom Rolemu sudah dibikin. <@&$get[role]>
  $giveRole[$guildID;$authorID;$get[role]]
  
  $wait[4s]
  $sendMessage[**[LOAD]**: Rolemu sedang di buat...]
  $setUserVar[customrole_id;$get[role]]
$let[role;$createRole[$guildID;true;$message[2];$replaceText[$replaceText[$message[3]; ;000000];#;];false;13;false;sendmessages]]
  $onlyIf[$getUserVar[customrole_id]==0;**[ERROR]**: Kamu sudah ada custom role! Tidak bisa menambahkan custom role lebih dari 1.]
  $endif
  
  $if[$checkContains[$message[1];modify]==true]
  $reply
**[SUCCESS]**: Nama custom rolemu sudah terganti menjadi \`$message[2]\`!
  $modifyRole[$guildID;$getUserVar[customrole_id];{
    "name": "$message[2]",
    "position": "13"
  }]
  $endif
  
  $if[$checkContains[$message[1];delete]==true]
  $onlyPerms[manageroles;**[ERROR]**: Anda perlu permission \`manageroles\`.]
  $setUserVar[customrole_id;0;$get[user]]
  $wait[1s]
  $deleteRoles[$guildID;$getUserVar[customrole_id;$get[user]]]
  $reply
**[SUCCESS]**: Custom role <@$get[user]> sudah di hapus.
$let[user;$findUser[$message[2]]]
  $onlyIf[$message[1]!=;**[ERROR]**: Mention 1 user yang ingin anda hapuskan custom rolenya.]
  $endif

  $onlyIf[$message[2]!=;**[ERROR]**: Kamu melupakan option ke-2 $nonEscape[$replaceText[$replaceText[$message[1];add;\`[name role] (hex color)\`];modify;\`[nama role barumu]\`]].]
  $onlyIf[$checkContains[$message[1];add;modify;delete]==true;**[ERROR]**: Invalid option ke-1 \`[add / modify / delete]\`]
  $onlyForRoles[995246006784491612;995245739456348170;1119604349186867200;995537199032455209;**[ERROR]**: Kamu bukan admin atau booster! Kamu di larang akses command ini.]`
}]