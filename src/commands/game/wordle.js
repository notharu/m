module.exports = {
  name: "wordle",
  description: "Bermain Wordle! Cara bermain ialah Cari 5 huruf yang bisa menghasilkan sebuah kata (dalam bahasa inggris), Jika kotak hurufnya Abu-Abu maka huruf tersebut tidak menghasilkan kata yang benar, Kuning maka huruf tersebut benar tetapi salah posisi, Hijau maka huruf tersebut benar dan posisi pun benar.",
  code: `$djsEval[const { Wordle } = require('discord-gamecord');

const Game = new Wordle({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Wordle',
    color: '$getGuildVar[color]',
  },
  customWord: null,
  timeoutTime: 60000,
  winMessage: '**[END]**: Kamu berhasil! Kata tersebut adalah **{word}**.',
  loseMessage: '**[END]**: Kamu gagal! Kata tersebut adalah **{word}**.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa bermain wordle-nya.'
});

Game.startGame();
Game.on('gameOver', result => {
  msg.reply('**[END]**: Game Over!')
});]
$suppressErrors`
}