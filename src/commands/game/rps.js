module.exports = {
  name: "rps",
  description: "Bermain Batu, Kertas, Gunting! dengan user yang kamu mention!",
  code: `$djsEval[const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Batu, Kertas, Gunting',
    color: '$getGuildVar[color]',
    description: 'Tekan tombol di bawah untuk menentukan pilihan.'
  },
  buttons: {
    rock: 'Batu',
    paper: 'Kertas',
    scissors: 'Gunting'
  },
  emojis: {
    rock: '🌑',
    paper: '📰',
    scissors: '✂️'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  pickMessage: '**[CHOOSE]**: Kamu memilih {emoji}.',
  winMessage: '**[END]**: {player} Memenangkan permainan!',
  tieMessage: '**[END]**: Permainan Seri! Tidak ada yang menang!',
   timeoutMessage: '**[END]**: Permainan tidak selesai! Tidak ada yang menang!',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} dan {opponent} bisa mengakses button permainan.'
});

Game.startGame();]
$onlyIf[$message[1]!=;**[ERROR]**: Mention 1 pemain untuk bermain dengan anda!]
$suppressErrors`
}