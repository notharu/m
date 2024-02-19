module.exports = {
 name: "dev",
 aliases: ['developer','devcmd','developercommand','developercmd','devcommand'],
 $if: "old",
 code: 
 `
 $if[$toLowercase[$message[1]]==eval]
 $error
 $eval[$messageSlice[1]]
 $onlyIf[$message[2]!=;**[ERROR]**: Penggunaan yang benar adalah \`$getGuildVar[prefix]dev eval (Code)\`{delete:10s}]
$endif
  
 $if[$toLowercase[$message[1]]==djseval]
 $error
 $djsEval[$messageSlice[1]]
 $onlyIf[$message[2]!=;**[ERROR]**: Penggunaan yang benar adalah \`$getGuildVar[prefix]dev djseval (Code)\`{delete:10s}]
$endif

 $if[$toLowercase[$message[1]]==serverlist]
 $reply[$messageID;$replaceText[$serverNames;,;\n];no]
 $endif
 
 $if[$toLowercase[$message[1]]==commandinfo]
 $reply
 $commandInfo[$message[2];$message[3]]
$onlyIf[$message[3]!=;**[ERROR]**: Penggunaan yang benar adalah \`$getGuildVar[prefix]dev commandinfo (Command) ]
$onlyIf[$checkContains[$toLowercase[$message[3]];aliases;code;name]==true;**[ERROR]**: Penggunaan yang benar adalah \`$getGuildVar[prefix]dev commandinfo $message[2] (Aliases/Code/Name)\`]
 $onlyIf[$checkCondition[$commandInfo[$message;name]==]==true;Command itu tidak ada!{delete:10s}]
 $endif

 $onlyIf[$checkContains[$toLowercase[$message[1]];eval;djseval;serverlist;commandinfo]==true;**[ERROR]**: Penggunaan yang benar adalah \`$getGuildVar[prefix]dev (Eval/DJSEval/Serverlist/Commandinfo)\`{delete:10s}]

 $onlyForIDs[$clientOwnerIDs;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]

 $suppressErrors[**[ERROR]**: Ada yang salah...]
 `
}