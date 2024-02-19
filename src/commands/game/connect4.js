module.exports = {
  name: "connect4",
  description: "Bermain Connect4! Cara bermain ialah Menyambungkan 4 Coin Merah/Biru secara Diagonal, Horizontal, Vertikal dan mengalahkan Pemain yang kamu lawan!",
  code: `$djsEval[const { Connect4 } = require('discord-gamecord');

const Game = new Connect4({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Game Connect4',
    statusTitle: 'Status',
    color: '$getGuildVar[color]'
  },
  emojis: {
    board: '⚪',
    player1: '🔴',
    player2: '🔵'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  turnMessage: '**[TURN]**: Giliran {player}.',
  winMessage: '**[END]**: {player} Memenangkan permainan Connect4!',
  tieMessage: '**[END]**: Permainan Seri! Tidak ada yang menang!',
  timeoutMessage: '**[END]**: Permainan tidak selesai! Tidak ada yang menang!',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} dan {opponent} bisa mengakses button permainan.'
});

Game.startGame();]
$onlyIf[$message[1]!=;**[ERROR]**: Mention 1 pemain untuk bermain dengan anda!]
$suppressErrors`
}