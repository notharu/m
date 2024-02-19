module.exports = [{
  name: "translate",
  aliases: ['tr'],
  description: "Untuk menerjemahkan teks Anda! Untuk kode bahasa periksa commands bahasa",
  code: `$reply
  $title[# Google Translate:]
  $thumbnail[https://cdn.discordapp.com/attachments/1101275803850899577/1113389144002011227/d66744a03656033d902168de255660bb-removebg-preview.png]
  $color[$getGuildVar[color]]
$addField[# $advancedTextSplit[$replaceText[$readFile[./src/config/language.txt];
;];,;$findTextSplitIndex[$message[1]]]:;$getObjectProperty[text];true]
$addField[# Text untuk ditranslate:;$messageSlice[1];true]
  

$djsEval[const translate = require('@iamtraction/google-translate');

translate('$messageSlice[1]', { to: '$splitText[$findTextSplitIndex[$message[1]]]'}).then(res => {
   d.object.text = res.text
});
]
$createObject[{}]

$onlyIf[$findTextSplitIndex[$message[1]]!=0;**[ERROR]**: Kode bahasa invalid. Silahkan gunakan \`$getGuildVar[prefix]codelanguage\` untuk melihat kode bahasa yang tersedia!]
$onlyIf[$messageSlice[1]!=;**[ERROR]**: Kamu melupakan kode bahasa dan text untuk di translate!]
$textSplit[$replaceText[$readFile[./src/config/language_short.txt];
;];,]`
}, {
  name: "codelanguage",
  description: "Untuk melihat kode bahasa buat command translate!",
  code: `$reply
  $title[Kode Bahasa:]
  $thumbnail[https://cdn.discordapp.com/attachments/1101275803850899577/1113389144002011227/d66744a03656033d902168de255660bb-removebg-preview.png]
  $color[$getGuildVar[color]]
$description[\`\`\`
"Automatic"	"auto"
"Afrikaans": "af"
"Albanian": "sq"
"Amharic": "am"
"Arabic": "ar"
"Armenian": "hy"
"Azerbaijani": "az"
"Basque": "eu"
"Belarusian": "be"
"Bengali": "bn"
"Bosnian": "bs"
"Bulgarian": "bg"
"Catalan": "ca"
"Cebuano": "ceb"
"Chichewa": "ny"
"Chinese Simplified": "zh-cn"
"Chinese Traditional": "zh-tw"
"Corsican": "co"
"Croatian": "hr"
"Czech": "cs"
"Danish": "da"
"Dutch": "nl"
"English": "en"
"Esperanto": "eo"
"Estonian": "et"
"Filipino": "tl"
"Finnish": "fi"
"French": "fr"
"Frisian": "fy"
"Galician": "gl"
"Georgian": "ka"
"German": "de"
"Greek": "el"
"Gujarati": "gu"
"Haitian Creole": "ht"
"Hausa": "ha"
"Hawaiian": "haw"
"Hebrew": "iw"
"Hindi": "hi"
"Hmong": "hmn"
"Hungarian": "hu"
"Icelandic": "is"
"Igbo": "ig"
"Indonesian": "id"
"Irish": "ga"
"Italian": "it"
"Japanese": "ja"
"Javanese": "jw"
"Kannada": "kn"
"Kazakh": "kk"
"Khmer": "km"
"Korean": "ko"
"Kurdish (Kurmanji)": "ku"
"Kyrgyz": "ky"
"Lao": "lo"
"Latin": "la"
"Latvian": "lv"
"Lithuanian": "lt"
"Luxembourgish": "lb"
"Macedonian": "mk"
"Malagasy": "mg"
"Malay": "ms"
"Malayalam": "ml"
"Maltese": "mt"
"Maori": "mi"
"Marathi": "mr"
"Mongolian": "mn"
"Myanmar (Burmese)": "my"
"Nepali": "ne"
"Norwegian": "no"
"Pashto": "ps"
"Persian": "fa"
"Polish": "pl"
"Portuguese": "pt"
"Punjabi": "pa"
"Romanian": "ro"
"Russian": "ru"
"Samoan": "sm"
"Scots Gaelic": "gd"
"Serbian": "sr"
"Sesotho": "st"
"Shona": "sn"
"Sindhi": "sd"
"Sinhala": "si"
"Slovak": "sk"
"Slovenian": "sl"
"Somali": "so"
"Spanish": "es"
"Sundanese": "su"
"Swahili": "sw"
"Swedish": "sv"
"Tajik": "tg"
"Tamil": "ta"
"Telugu": "te"
"Thai": "th"
"Turkish": "tr"
"Ukrainian": "uk"
"Urdu": "ur"
"Uzbek": "uz"
"Vietnamese": "vi"
"Welsh": "cy"
"Xhosa": "xh"
"Yiddish": "yi"
"Yoruba": "yo"
"Zulu": "zu" 
\`\`\`]
$footer[Gunakan ini di $getGuildVar[prefix]translate !]`
}]