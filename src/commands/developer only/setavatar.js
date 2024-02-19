module.exports = {
  name: "setavatar",
  code: `$reply **[SUCCESS]**: Sukses menyetel avatarku!!
  $setClientAvatar[$messageAttachment[1]]
  $onlyIf[$messageAttachment[1]!=;**[ERROR]**: Kamu lupa 1 foto untuk avatarku!]
  $onlyForIDs[$clientOwnerIDs;**[ERROR]**: Hanya Developer saya yang bisa akses commands ini...]`
}