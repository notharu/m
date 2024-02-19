module.exports = {
  name: "deploy",
  $if: 'old',
  code: `$onlyForIDs[737459156335853648;737905260177391647;]
  $deletecommand
  $if[$checkContains[$message[1];-app]==true]
  $addButton[1;Apply disini!;secondary;step1;no]
  $image[1;https://cdn.discordapp.com/attachments/1101275803850899577/1111260269570703371/aa4149b719bd6578f96cda371e8d9dc9.jpg]
  $title[2;Staff Application]
$description[2;Berminat untuk menjadi staff?
  
\`\`#RIGHT#NOTED!#LEFT#\`\` Kami tidak menerima aplikasi yang mengisi seadanya tanpa kejujuran, dan Kami tidak menerima aplikasi yang di isi lebih dari satu.]
$footer[2;Silahkan tekan tombol di bawah untuk apply!]

$addField[2;Penilaian:;
> \`[1. Graphic Design]\`: Software yang digunakan, Contoh Desain, Kerapian Desain serta menyesuaikan tema.

> \`[2. Event Manager, Partner  Manager, Stafff & Police]\`: Keaktifan di server LostParadise.]
$addField[2;Position:;
> - Partner Manager (1)
> - Staff Only (2)
> - Graphic Design (3)
> - Event Manager (4)]
$addField[2;Syarat:;
> - Aktif di server LostParadise
> - Umur lebih dari 15 tahun
> - Tidak menjadi staff/pengurus di server lain atau memprioritaskan server kami
> - Dapat menjalankan kewajiban dan bertanggung jawab]

  $color[1;$getGuildVar[color]]
  $color[2;$getGuildVar[color]]
  $endif

  $if[$checkContains[$message[1];-menfess]==true]
  $addButton[1;Isi menfess disini!;secondary;isimenfess;false;<a:lp_sunny:995547209502294076>]
  $image[1;https://cdn.discordapp.com/attachments/995575372282335242/1121381903312883722/aa369760d00ae71e3a17f975c65e78ea.gif]
  $color[1;$getGuildVar[color]]
  $title[2;LostParadise Menfess]
  $description[2;**__BARU__**: LostParadise mengadakan Menfess Official untuk server ini!
Sebelum itu, Cara mengirim menfess:
> - Tekan tombol di bawah untuk mengisi teks untuk di kirim seseorang
> - Untuk pengisian kirim ke siapa, silahkan copy username discord dari seseorang yang ingin anda kirimkan menfess.
> - Identitas discord kamu tidak akan diketahui oleh penerima menfess tersebut.

Silahkan coba untuk kirim pesan ke seseorang!

\`\`#RIGHT#NOTED!#LEFT#\`\` Menfess anda akan di awasi oleh moderator atau admin, bila pesan anda berisikan kata kata yang negatif atau tidak pantas akan kami kick atau memungkinan terkena banned. Untuk username, gunakan username profilenya bukan server username ya.]
  $color[2;$getGuildVar[color]]
  $endif

  $if[$checkContains[$message[1];-suggest]==true]
  $title[1;Meyarankan Server LostParadise!]
  $description[1;Tekan dan Isi pesan untuk menyampaikan saran buat server LostParadise kedepannya! Isilah saran yang masuk akal.]
  $thumbnail[1;$guildIcon]
  $color[1;$getGuildVar[color]]
  $addButton[1;Click untuk mengisi.;secondary;isisuggest;false]
  
  $endif

  $onlyIf[$checkContains[$message[1];-app;-menfess;-suggest;-about]==true;**[ERROR]**: Tersedia option \`-app, -menfess, -suggest\`]
  `
}