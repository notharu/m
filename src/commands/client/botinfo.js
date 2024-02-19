module.exports = {
  name: "botinfo",
  aliases: ['ciinfo'],
  description: " Untuk melihat details info",
  code: `$title[$username[$clientID] Bot Statistics]
    $thumbnail[$userAvatar[$clientID]]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
    $color[$getGuildVar[color]]
    $description[• Developer: $userTag[$clientOwnerIDs]]
    $addField[Lainnya;
• Jumlah Commands: \`$ordinal[$commandsCount]\`
• Latency: \`$ping ms\`
• Uptime: $getVar[uptime]]
    $addField[Versions;
• Versi NodeJS: \`$getObjectProperty[nodev]\`
• Versi DJS: \`$getObjectProperty[discordv]\`
• Versiku: \`$getVar[version]\`]
    $addField[Statika Terkait Hosting;
• Penggunaan CPU: \`$cpu\`
• RAM Usage: \`$advancedTextSplit[$ram;.;1] MB\`
• Database(ms): \`$databasePing ms\`]
    $addTimestamp
     $djsEval[d.object.nodev = process.version
    d.object.discordv = require('discord.js').version]
    $createObject[{}]`
}