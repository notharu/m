const selectMenu = `
{actionRow:
  {stringInput:
    menupage_$authorID:
    Select any page commands info!:
    1:
    1:
    no: 
    {option:
      ── #MUSIC:
      msc1:
      Music Commands.:
      $checkContains[$interactionData[values[0]];msc]: 
      $customEmoji[lp_1]
    }
    {option:
      ── #UTILITY:
      util1:
      Util Commands.:
      $checkContains[$interactionData[values[0]];util]: 
      $customEmoji[lp_2]
    }
    {option:
      ── #GAMES:
      game1:
      Game Commands.:
      $checkContains[$interactionData[values[0]];game]: 
      $customEmoji[lp_3]
    }
    {option:
      ── #LEVELS:
      level1:
      Leveling System Commands.:
      $checkContains[$interactionData[values[0]];level]: 
      $customEmoji[lp_4]
    }
    {option:
      ── #SPECIAL:
      special1:
      Special Commands khusus Chillin Impact:
      $checkContains[$interactionData[values[0]];special]: 
      $customEmoji[lp_wstars]
    }
  }
}{actionRow:
   {button:
     .gg/xmr-01:
     link:
     https#COLON#//discord.gg/:
     no:
     $customEmoji[lp_bribbles]
  }
  {button:
    Akhiri Interaction:
    secondary:
    endinter_$authorID:
    no
  }
  {button:
    Kembali ke halaman utama:
    secondary:
    mainmenu_$authorID:
    $replaceText[$replaceText[$checkCondition[$advancedTextSplit[$interactionData[customId];_;1]==mainmenu];true;yes];false;no]
    }
}
`
const footer = '[require] (optional) | Untuk info commands lebih lanjut di bawah!'
const onlyAuthorInter = `$onlyIf[$checkCondition[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id]]==true;**[ERROR]**: Hanya <@$advancedTextSplit[$interactionData[customId];_;2]> bisa mengakses button. {options:{ephemeral:true}} {extraOptions:{interaction:true}}]`

module.exports = [{ //main menu trigger
  name: "help",
  aliases: ['menu'],
  code: `
  $image[1;https://images-ext-2.discordapp.net/external/xD9zYXOGvIeEwy_UtnJ3DEyCv8Zlj41loHPgpWDHrao/https/media.tenor.com/CTuBB5cxSa8AAAAC/alhaitham-alhaitham-genshin.gif]
  $color[1;$getGuildVar[color]]
  $author[2;$userTag;$userAvatar]
  $title[2;Zvenn's Help Commands]
  $color[2;$getGuildVar[color]]
  $description[2;<a:lp_bglobe:1120641512192090254> | Hello! \`ZVENN.\` disini membantumu!
Jika Anda ingin melihat semua commands saya, klik dan pilih di bawah ini! ^^]
$thumbnail[2;$userAvatar[$clientID]]
  $addSelectMenu[1;menupage_$authorID;Select any page commands info!;1;1;false;
  ── #MUSIC:Music Commands.:msc1:false:<:lp_1:1120643115062149120>;
  ── #UTILITY:Util Commands.:util1:false:<:lp_2:1120643125715664947>;
  ── #GAMES:Game Commands.:game1:false:<:lp_3:1120643213825425509>;
  ── #LEVELS:Leveling System Commands.:level1:false:<:lp_4:1120643223002554420>;
  ── #SPECIAL:Special Commands khusus Chillin Impact.:special1:false:<a:lp_wstars:1120641533700489226>]
  $addButton[2;Akhiri Interaction;secondary;endinter_$authorID;false]
  $addButton[2;.gg/lostprdise;link;https://discord.gg/lostprdise;false;<a:lp_bribbles:1120639927764398142>]`
}, { //Main Menu Button
  type: 'interaction',
  prototype: "button",
  code: `$interactionUpdate[;
{newEmbed: 
  {image:https://cdn.discordapp.com/attachments/1101275803850899577/1106454340052467752/banner.gif}
  {color:$getGuildVar[color]}
}
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {color:$getGuildVar[color]}
  {description:<a:lp_bglobe:1120641512192090254> | Hello! \`CROSS.\` here!
If you want see all my commands, click and select below! ^^}
  {thumbnail:$userAvatar[$clientID]}
};${selectMenu}]

${onlyAuthorInter}

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mainmenu;]
`
}, { //Akhiri Interaction
  type: 'interaction',
  prototype: "button",
  code: `$interactionUpdate[;
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {description:Menu ini diakhiri Interaction oleh <@!$authorID>. Gunakan \`$getGuildVar[prefix]help / menu\` untuk melihat lagi!}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {timestamp}
}]
 
${onlyAuthorInter}

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==endinter;]
`
}, { //Music Menu (selectmenu)
  type: 'interaction',
  prototype: "selectMenu",
  code: `$interactionUpdate[;
{newEmbed:
   {author:$userTag:$userAvatar}
   {title:♡ ── CROSS.'s Help Commands}
   {field:••• 1\) \`$getGuildVar[prefix]play [song]\`: \`\`\`$commandInfo[play;description]
└─ Aliases#COLON# $replaceText[$commandinfo[play;aliases];,;, ]\`\`\`}
   {field:••• 2\) \`$getGuildVar[prefix]queue (page)\`:
\`\`\`$commandInfo[queue;description]
└─ Aliases#COLON# $replaceText[$commandinfo[queue;aliases];,;, ]\`\`\`}
   {field:••• 3\) \`$getGuildVar[prefix]nowplay\`:
\`\`\`$commandInfo[nowplaying;description]
└─ Aliases#COLON# $replaceText[$commandinfo[nowplaying;aliases];,;, ]\`\`\`}
   {field:••• 4\) \`$getGuildVar[prefix]repeat [1 | all | off]\`:
\`\`\`$commandInfo[repeat;description]
└─ Aliases#COLON# $replaceText[$commandinfo[repeat;aliases];,;, ]\`\`\`}
  {field:••• 5\) \`$getGuildVar[prefix]pause\`:
\`\`\`$commandInfo[pause;description]
└─ Aliases#COLON# $replaceText[$commandinfo[pause;aliases];,;, ]\`\`\`}
  {field:••• 6\) \`$getGuildVar[prefix]resume\`:
\`\`\`$commandInfo[resume;description]
└─ Aliases#COLON# $replaceText[$commandinfo[resume;aliases];,;, ]\`\`\`}
  {field:••• 7\) \`$getGuildVar[prefix]skip (position)\`:
\`\`\`$commandInfo[skip;description]
└─ Aliases#COLON# $replaceText[$commandinfo[skip;aliases];,;, ]\`\`\`}
  {field:••• 8\) \`$getGuildVar[prefix]shuffle [on | off]\`:
\`\`\`$commandInfo[shuffle;description]
└─ Aliases#COLON# $replaceText[$commandinfo[shuffle;aliases];,;, ]\`\`\`}
  {field:••• 9\) \`$getGuildVar[prefix]stop\`:
\`\`\`$commandInfo[stop;description]
└─ Aliases#COLON# $replaceText[$commandinfo[stop;aliases];,;, ]\`\`\`}
  {field:••• 10\) \`$getGuildVar[prefix]join\`:
\`\`\`$commandInfo[join;description]
└─ Aliases#COLON# $replaceText[$commandinfo[join;aliases];,;, ]\`\`\`}
  {field:••• 11\) \`$getGuildVar[prefix]leave\`:
\`\`\`$commandInfo[leave;description]
└─ Aliases#COLON# $replaceText[$commandinfo[leave;aliases];,;, ]\`\`\`}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {footer:${footer}}
  {timestamp}
};${selectMenu}
{actionRow:
  {button:Halaman berikutnya:secondary:msc2_$authorID:yes}
  {button:Halaman sebelumnya:secondary:msc1_$authorID:yes}
}]

${onlyAuthorInter}

$onlyIf[$interactionData[values[0]]==msc1;]`
}, { //Utility Menu (selectmenu)
  type: 'interaction',
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {field:••• 1\) \`$getGuildVar[prefix]avatar (user)\`:
\`\`\`$commandInfo[avatar;description]
└─ Aliases#COLON# $replaceText[$commandinfo[avatar;aliases];,;, ]\`\`\`}
  {field:••• 2\) \`$getGuildVar[prefix]say [text] (-del?)\`:
\`\`\`$commandInfo[say;description]
└─ Aliases#COLON# $replaceText[$commandinfo[say;aliases];,;, ]\`\`\`}
  {field:••• 3\) \`$getGuildVar[prefix]ytdl [youtube link]\`:
\`\`\`$commandInfo[ytdl;description]
└─ Aliases#COLON# $replaceText[$commandinfo[ytdl;aliases];,;, ]\`\`\`}
  {field:••• 4\) \`$getGuildVar[prefix]twtdownload [twitter link]\`:
\`\`\`$commandInfo[twtdl;description]
└─ Aliases#COLON# $replaceText[$commandinfo[twtdl;aliases];,;, ]\`\`\`}
  {field:••• 5\) \`$getGuildVar[prefix]translate [language code] [text to transalate]\`:
\`\`\`$commandInfo[translate;description]
└─ Aliases#COLON# $replaceText[$commandinfo[translate;aliases];,;, ]\`\`\`}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {footer:${footer}}
  {timestamp}
};${selectMenu}
{actionRow:
  {button:Halaman berikutnya:secondary:util2_$authorID:yes}
  {button:Halaman sebelumnya:secondary:util1_$authorID:yes}
}]

${onlyAuthorInter}

$onlyIf[$interactionData[values[0]]==util1;]`
}, { //Game Menu (selectmenu)
  type: 'interaction',
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {field:••• 1\) \`$getGuildVar[prefix]2048\`:
\`\`\`$commandInfo[2048;description]
└─ Aliases#COLON# $replaceText[$commandinfo[2048;aliases];,;, ]\`\`\`}
  {field:••• 2\) \`$getGuildVar[prefix]akinator\`:
\`\`\`$commandInfo[akinator;description]
└─ Aliases#COLON# $replaceText[$commandinfo[akinator;aliases];,;, ]\`\`\`}
  {field:••• 3\) \`$getGuildVar[prefix]connect4 [user]\`:
\`\`\`$commandInfo[connect4;description]
└─ Aliases#COLON# $replaceText[$commandinfo[connect4;aliases];,;, ]\`\`\`}
  {field:••• 4\) \`$getGuildVar[prefix]fastTyping\`:
\`\`\`$commandInfo[fastTyping;description]
└─ Aliases#COLON# $replaceText[$commandinfo[fastTyping;aliases];,;, ]\`\`\`}
  {field:••• 5\) \`$getGuildVar[prefix]findEmoji\`:
\`\`\`$commandInfo[findEmoji;description]
└─ Aliases#COLON# $replaceText[$commandinfo[findEmoji;aliases];,;, ]\`\`\`}
  {field:••• 6\) \`$getGuildVar[prefix]flood\`:
\`\`\`$commandInfo[flood;description]
└─ Aliases#COLON# $replaceText[$commandinfo[flood;aliases];,;, ]\`\`\`}
  {field:••• 7\) \`$getGuildVar[prefix]snake\`:
\`\`\`$commandInfo[snake;description]
└─ Aliases#COLON# $replaceText[$commandinfo[snake;aliases];,;, ]\`\`\`}
  {field:••• 8\) \`$getGuildVar[prefix]tebakgambar\`:
\`\`\`$commandInfo[tebakgambar;description]
└─ Aliases#COLON# $replaceText[$commandinfo[tebakgambar;aliases];,;, ]\`\`\`}
  {field:••• 9\) \`$getGuildVar[prefix]tictactoe [user]\`:
\`\`\`$commandInfo[tictactoe;description]
└─ Aliases#COLON# $replaceText[$commandinfo[tictactoe;aliases];,;, ]\`\`\`}
  {field:••• 10\) \`$getGuildVar[prefix]wordle\`:
\`\`\`$commandInfo[wordle;description]
└─ Aliases#COLON# $replaceText[$commandinfo[wordle;aliases];,;, ]\`\`\`}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {footer:${footer}}
  {timestamp}
};${selectMenu}
{actionRow:
  {button:Halaman berikutnya:secondary:game2_$authorID:yes}
  {button:Halaman sebelumnya:secondary:game1_$authorID:yes}
}]

${onlyAuthorInter}

$onlyIf[$interactionData[values[0]]==game1;]`
}, { //level menu (selectMenu)
  type: 'interaction',
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {field:••• 1\) \`$getGuildVar[prefix]level (user)\`:
\`\`\`$commandInfo[level;description]
└─ Aliases#COLON# $replaceText[$commandinfo[chatai;aliases];,;, ]\`\`\`}
  {field:••• 2\) \`$getGuildVar[prefix]leaderboard\`:
\`\`\`$commandInfo[leaderboard;description]
└─ Aliases#COLON# $replaceText[$commandinfo[leaderboard;aliases];,;, ]\`\`\`}
  {field:••• 3\) \`$getGuildVar[prefix]dailyexp\`:
\`\`\`$commandInfo[dailyexp;description]
└─ Aliases#COLON# $replaceText[$commandinfo[dailyexp;aliases];,;, ]\`\`\`}
  {field:••• 4\) \`$getGuildVar[prefix]monthlyexp\`:
\`\`\`$commandInfo[monthlyexp;description]
└─ Aliases#COLON# $replaceText[$commandinfo[monthlyexp;aliases];,;, ]\`\`\`}
{field:••• 4\) \`$getGuildVar[prefix]weekexp\`:
\`\`\`$commandInfo[weekexp;description]
└─ Aliases#COLON# $replaceText[$commandinfo[weekexp;aliases];,;, ]\`\`\`}
{field:••• 5\) \`$getGuildVar[prefix]hourexp\`:
\`\`\`$commandInfo[hourexp;description]
└─ Aliases#COLON# $replaceText[$commandinfo[hourexp;aliases];,;, ]\`\`\`}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {footer:${footer}}
  {timestamp}
};${selectMenu}
{actionRow:
  {button:Halaman berikutnya:secondary:special2_$authorID:yes}
  {button:Halaman sebelumnya:secondary:special1_$authorID:yes}
}]

${onlyAuthorInter}
$onlyIf[$interactionData[values[0]]==level1;]`
}, { //Special Menu (selectmenu)
  type: 'interaction',
  prototype: "selectMenu",
  code: `
  $interactionUpdate[;
{newEmbed:
  {author:$userTag:$userAvatar}
  {title:♡ ── CROSS.'s Help Commands}
  {field:••• 1\) \`$getGuildVar[prefix]chatai [text]\`:
\`\`\`$commandInfo[chatai;description]
└─ Aliases#COLON# $replaceText[$commandinfo[chatai;aliases];,;, ]\`\`\`}
  {field:••• 2\) \`$getGuildVar[prefix]addcmd [trigger] [respond]\`:
\`\`\`$commandInfo[addcmd;description]
└─ Aliases#COLON# $replaceText[$commandinfo[addcmd;aliases];,;, ]\`\`\`}
  {field:••• 3\) \`$getGuildVar[prefix]delcmd [trigger]\`:
\`\`\`$commandInfo[delcmd;description]
└─ Aliases#COLON# $replaceText[$commandinfo[delcm;aliases];,;, ]\`\`\`}
  {field:••• 4\) \`$getGuildVar[prefix]cmdlist\`:
\`\`\`$commandInfo[cmdlist;description]
└─ Aliases#COLON# $replaceText[$commandinfo[cmdlist;aliases];,;, ]\`\`\`}
  {thumbnail:$userAvatar[$clientID]}
  {color:$getGuildVar[color]}
  {footer:${footer}}
  {timestamp}
};${selectMenu}
{actionRow:
  {button:Halaman berikutnya:secondary:special2_$authorID:yes}
  {button:Halaman sebelumnya:secondary:special1_$authorID:yes}
}]

${onlyAuthorInter}
$onlyIf[$interactionData[values[0]]==special1;]`
}]