module.exports = {
  name: "fastTyping",
  aliases: ['ftype','fasttype'],
  description: "Bermain Ketik cepat! Cara bermain ialah mengetik Angka 1-6 Digit yang akan di bagikan.",
  code: `$djsEval[const { FastType } = require('discord-gamecord');

const Game = new FastType({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Mengetik Cepat!',
    color: '$getGuildVar[color]',
    description: 'Kamu punya waktu {time} detik untuk mengetik angka di bawah ini.'
  },
  timeoutTime: 5000,
  sentence: '$random[1;10000]',
  winMessage: '**[END]**: Kamu berhasil! Anda menyelesaikan permain ketik cepat dalam waktu {time} detik dengan wpm {wpm}.',
  loseMessage: '**[END]**: Kamu gagal! Kamu tidak mengetik angka yang benar dengan tepat waktu.',
});

Game.startGame();]
$suppressErrors`
}