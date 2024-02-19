module.exports = [{
  name: "slots",
  aliases: ['jackpot'],
  description: "Main slots akan mendapatkan EXP yang lebih banyak. Sekalian Test kehokian :v",
  code: `$reply
  $author[$userTag[$authorID];$userAvatar[$authorID]]
  $title[🎰 | Slots Machine]
  $description[\`\`\`
------------------------------------

        => ➖ : ➖ : ➖ <=

------------------------------------
| + +   Tekan untuk memulai!   + + |
\`\`\`]
$color[$getGuildVar[color]]
$addTimestamp
$addButton[1;Mulai spin!;secondary;slots_$authorID;false;<a:whitesparklefly:998564989310873701>]
$cooldown[10m;**[COOLDOWN]**: Kembali lagi setelah \`%fullTime%\`!]`
}, {
  type: "interaction",
  prototype: 'button',
  $if: 'old',
  code: `$interactionUpdate[;{newEmbed:
{author:$userTag[$authorID]:$userAvatar[$authorID]}
{title:🎰 | Slots Machine}
{color:$getGuildVar[color]}
{description:$replaceText[$replaceText[$checkCondition[$sub[$getTextSplitLength;1]==3];false;];true;Kamu mendapatkan \`$get[randomexp]\` EXP!]
\`\`\`
------------------------------

    => $get[random_1] <=
    
------------------------------
| + +   Kamu $replaceText[$replaceText[$checkCondition[$sub[$getTextSplitLength;1]==3];false;Kalah!];true;Menang!]   + + |\`\`\`}
{timestamp}}]
  $setUserVar[expcurrent;$get[newexp]]
$let[newexp;$sum[$getUserVar[expcurrent];$get[randomexp]]]

$let[randomexp;$replaceText[$replaceText[$checkCondition[$sub[$getTextSplitLength;1]==3];false;0];true;$random[50;135]]]

$textSplit[$get[random_1];$advancedTextSplit[$get[random_1]; : ;1]]
$let[random_1;$randomText[🍇;🍊;🍋;🍌;💯] : $randomText[💯;🍌;🍋;🍊;🍇] : $randomText[💯;🍇;🍊;🍋;🍌]]

$onlyIf[$interactionData[author.id]==$advancedTextSplit[$interactionData[customId];_;2];**[ERROR]**: Anda bukan author dari command slots/jackpot ini. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]
  
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==slots;]`
}]