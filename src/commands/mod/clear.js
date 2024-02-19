module.exports = {
  name: "clear",
  aliases: ['purge'],
  code: `$deleteIn[5s]
**[SUCCESS]**: \`$message[1]\` Pesan telah di hapus oleh <@$authorID>
$clear[$sum[$message[1];1];unPins;false;$channelID]
  $onlyPerms[managemessages;**[ERROR]**: Kamu tidak ada izin \`$toUpperCase[managemessages]\` untuk menggunakan command ini.]
  $onlyIf[$isNumber[$message[1]]==true;**[ERROR]**: Angka Invalid.]`
}