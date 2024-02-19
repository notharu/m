module.exports = {
  name: "servericon",
  $if: 'old',
  code: `$if[$checkContains[$message[1];-set]==true]
  $addCmdReactions[✅]
  $setGuildIcon[$message[2];$guildID]
  $onlyIf[$isValidLink[$message[2]]==true;**[ERROR]**: Link icon tidak valid.]
  $suppressErrors[**[ERROR]**: Tidak bisa di set icon tersebut, mungkin ada kerusakan.]
  $onlyPerms[manageguild;**[ERROR]**: Anda tidak punya izin \`manageserver\`...]
  $endif
  
  $if[$checkContains[$message[1];-get]==true]
  $reply
  $image[$guildIcon]
  $color[$getGuildVar[color]]
  $endif

  $onlyIf[$message!=;**[ERROR]**: Invalid value, tersedia value: \`-set | -get\`]
  
  `
}