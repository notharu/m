module.exports = {
  name: "say",
  description: "Untuk membuat saya mengatakan apa pun yang Anda inginkan!",
  $if: "old",
  code: `$if[$checkContains[$noEscapingMessage;-del]==true]
  $sendMessage[$replaceText[$noEscapingMessage;-del;]]
  $deletecommand
  $endif

  $if[$checkContains[$noEscapingMessage;-del]==false]
  $sendMessage[$noEscapingMessage]
  $endif
  $onlyIf[$noEscapingMessage!=;**[ERROR]**: Tambahkan teks. {extraOptions:{deleteCommand}{delete:2s}}]`
}