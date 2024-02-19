module.exports = {
  name: "findEmoji",
  description: "Bermain Menemukan Emoji! Cara bermainnya ialah Mengingat posisi emoji dan Temukan emoji yang akan di cari.",
  code: `$djsEval[const { FindEmoji } = require('discord-gamecord');

const Game = new FindEmoji({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Menemukan Emoji',
    color: '$getGuildVar[color]',
    description: 'Ingat semua posisi emoji dibawah ini.',
    findDescription: 'Temukan {emoji} sebelum waktu habis!.'
  },
  timeoutTime: 60000,
  hideEmojiTime: 5000,
  buttonStyle: 'SECONDARY',
  emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
  winMessage: '**[END]**: Kamu berhasil! Kamu menemukan {emoji} di posisi yang benar!',
  loseMessage: '**[END]**: Kamu gagal! Kamu tidak menemukan {emoji} di posisi yang benar!',
  timeoutMessage: '**[END]**: Kamu gagal! Waktu kamu habis.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan.'
});

Game.startGame();
]
$suppressErrors`
}