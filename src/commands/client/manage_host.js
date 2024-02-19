module.exports = [{
  name: "update",
  aliases: ['up'],
  $if: 'old',
  code: `$if[$checkContains[$message;-re]==true]
  $reboot
$sendMessage[**[PROGRESS]**: Memuat ulang Sistem...]
$log[
data: [{ reload: { type: "system" }, return: true }]
]

$appendFile[./log/start.log;$get[log]]
$let[log;//$replaceText[$formatDate[$dateStamp;DD MM YYYY]; ;-]_$hour_$minute_$second
data: [{ reload: { type: "system" }, return: true }, version: "$getVar[version]"]

]
$timeZone[Asia/Seoul]
  $endif

  $if[$checkContains[$message;-re]==false]
  $updatecommands
  $editMessage[$get[id1];**[SUCCESS]**: Selesai Memuat ulang commands.
  $log[
data: [{ reload: { type: "cmds.default", add: "cmds.vocal" }, return: true }, version: "$getVar[version]"]
]

$appendFile[./log/start.log;$get[log]]
$let[log;//$replaceText[$formatDate[$dateStamp;DD MM YYYY]; ;-]_$hour_$minute_$second
data: [{ reload: { type: "cmds.default", add: "cmds.vocal" }, return: true }]

]
$timeZone[Asia/Seoul]
  $wait[1s]
  $let[id1;$sendMessage[**[LOAD]**: Memuat ulang commands...;true]]
  $endif
  
  $onlyForIDs[840102690289090560;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]`
}, {
  name: "shutdown",
  aliases: ['off'],
  code: `$shutdown
  $wait[1s]
  $log[
data: [{ reload: { type: "cmds.default", add: "cmds.vocal" }, return: false, signal "off" }]
]
  $appendFile[./log/start.log;$get[log]]
$let[log;//$replaceText[$formatDate[$dateStamp;DD MM YYYY]; ;-]_$hour_$minute_$second
data: [{ reload: { type: "cmds.default", add: "cmds.vocal" }, return: false, signal "off" }, version: "$getVar[version]"]

]
$timeZone[Asia/Seoul]
  $sendMessage[**[PROGRESS]**: Mematikan Sistem..]
   $onlyForIDs[840102690289090560;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]`
}]