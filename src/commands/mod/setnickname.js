/**  module.exports = {
  name: "setnickname",
  $if: 'old',
  code: `$if[$messageSlice[1]==]
  $reply
**[SUCCESS]**: Menghapus nickname <@$get[user]>
  $changeNickname[$get[user];]
  $endif
  $if[$messageSlice[1]!=]
  $reply
**[SUCCESS]**: Mengganti nickname <@$get[user]> menjadi \`$messageSlice[1]\`
  $changeNickname[$get[user];$messageSlice[1]]
  $endif
  $let[user;$findUser[$message[1]]]
  
  $onlyPerms[managenicknames;**[ERROR]**: Anda tidak memiliki perms \`managenicknames\`]`
}