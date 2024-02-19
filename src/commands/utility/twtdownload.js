module.exports = {
  name: "twtdl",
  description: "Untuk mengunduh video dari Twitter!",
  $if: 'old',
  code: `
  $if[$checkContains[$message[1];-mp3;-audio]==true]
  $reply
  $attachment[$getObjectProperty[result.audio];result_twt.mp3;url]
  $djsEval[const hx = require('hxz-api');
const link = '$messageSlice[1]'

hx.twitter(link)
  .then(result => {
     d.object.result = result
     console.log(result)
});]
  $endif

  $if[$checkContains[$message[1];-mp4;-video]==true]
  $reply
  $attachment[$getObjectProperty[result.HD];result_twt.mp4;url]
  $djsEval[const hx = require('hxz-api');
const link = '$messageSlice[1]'

hx.twitter(link)
  .then(result => {
     d.object.result = result
     console.log(result)
});]
  $endif

  $if[$checkContains[$message[1];-mp3;-mp4;-audio;-video]==false]
  $reply
  $attachment[$getObjectProperty[result.HD];result_twt.mp4;url]
  $djsEval[const hx = require('hxz-api');
const link = '$message'

hx.twitter(link)
  .then(result => {
     d.object.result = result
     console.log(result)
});]
  $endif

$clientTyping
$createObject[{}]
$suppressErrors
$onlyIf[$message!=;**[ERROR]**: Mohon kirim link Twitter yang berisikan video.]`
}