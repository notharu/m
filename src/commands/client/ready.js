module.exports = {
  type: 'ready',
  channel: "1157851428740665375",
  code: `$title[1;$username[$clientId] System is Started!]
  $description[1;started at :
  **<t:$truncate[$divide[$dateStamp;1000]]:R> | <t:$truncate[$divide[$dateStamp;1000]]:d> <t:$truncate[$divide[$dateStamp;1000]]:t>**]
  $color[1;$getGuildVar[color]]
  $log[$userTag[$clientID] is Ready!]
  $setVar[uptime;<t:$truncate[$divide[$dateStamp;1000]]:R> | <t:$truncate[$divide[$dateStamp;1000]]:d> <t:$truncate[$divide[$dateStamp;1000]]:t>;cou]
  $appendFile[./log/start.log;$get[log]]
$let[log;//$replaceText[$formatDate[$dateStamp;DD MM YYYY]; ;-]_$hour_$minute_$second
data: [{ ready: true }]

]
$timeZone[Asia/Seoul]
  `
}