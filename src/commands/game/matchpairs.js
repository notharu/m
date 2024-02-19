module.exports = {
  name: "matchpairs",
  aliases: ['mp'],
  description: "Bermain Pasangan Pertanding, Cara memaikannya ialah samakan emoji buah buah yang akan di bagikan.",
  code: `$djsEval[const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Pasangan Pertanding',
    color: '$getGuildVar[color]',
    description: '**Klik tombol untuk mencocokkan emoji dengan pasangannya.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**[END]**: Kamu memenangkan Game! Kamu mengubah total ubin: \`{tilesTurned}\`.',
  loseMessage: '**[END]**: Kamu kalah dalam Game! Kamu mengubah total ubin \`{tilesTurned}\`.',
   playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();]
$suppressErrors
`
}