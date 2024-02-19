const musicmsgerror = `$onlyIf[$checkCondition[$queueLength>0]==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]
  $onlyIf[$hasPlayer==true;**[ERROR]**: Belum ada lagu yang ditambahkan!]`

module.exports = {
  name: "queue",
  description: "To see all song that added before.",
  aliases: ['q','query'],
  code: `$author[Antrian Music;$guildIcon]
$description[$replaceText[$replaceText[$replaceText[$queue[$replaceText[$replaceText[$isNumber[$message];false;1];true;$message[1]];10;\`#RIGHT#{position}#LEFT#\` [{title}]({url}) — <@!{requester.user.id}>\n];,;];\`[0]\`;$replaceText[$replaceText[$checkCondition[$songInfo[position]==0];true;▶️];false;\`[PREVIOUS]\`]];\`[1]\`;$replaceText[$replaceText[$checkCondition[$songInfo[position]>=1];true;▶️];false;\`[1]\`]]]
$footer[Total#COLON# $queueLength + Putar ulang#COLON# $replaceText[$replaceText[$replaceText[$loopStatus;song;1x];queue;Query];none;Off] | $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
$thumbnail[$userAvatar[$clientID]]
$color[$getGuildVar[color]]
$addtimestamp

$onlyIf[$checkCondition[$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]>=$message[1]]==true;**[ERROR]**: Tidak ada halaman \`$ordinal[$message[1]]\`.]

$textSplit[$divide[$queueLength;10];.]

${musicmsgerror}

`
}