module.exports = [{
  name: "test",
  code: `$reply
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Hi! Aku **"Zvenn"** Aku bisa membantumu dengan apa saja join official server saya [zvenn](https://discord.gg/7NTrnBhEUx) untuk mengetahui update mengenai saya !]
$color[$getGuildVar[color]]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$footer[$getVar[version]]

$log[
data: [{ isOnline: true, isRespond: true, onConsole: true }]
]
$appendFile[./log/start.log;$get[log]]
$let[log;//$replaceText[$formatDate[$dateStamp;DD MM YYYY]; ;-]_$hour_$minute_$second
data: [{ isOnline: true, isRespond: true, onConsole: true }, version: "$getVar[version]"]

]
$timeZone[Asia/Seoul]`
}, {
  name: "ms", 
  $if: 'old',
  code: `$reply
  $if[$checkCondition[$ping<=99]==true]
**[PING]**: 🟩 $pingMS
$endif
$if[$checkCondition[$ping>=100]==true]
**[PING]**: 🟨 $pingMS
$endif
$if[$checkCondition[$ping>=151]==true]
**[PING]**: 🟥 $pingMS
$endif`
}]