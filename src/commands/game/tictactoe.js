module.exports = {
  name: "tictactoe",
  aliases: ['ttt'],
  description: "Bermain TicTacToe! Kalahkan pemain yang kamu mention!",
  code: `$djsEval[const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: '$getGuildVar[color]',
    statusTitle: 'Status',
    overTitle: 'Game Over'
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'SECONDARY',
  oButtonStyle: 'SECONDARY',
  turnMessage: '**[TURN]**: Giliran {player}.',
  winMessage: '**[END]**: {player} Menangkan permainan TicTacToe.',
  tieMessage: '**[END]**: Permainan Seri! Tidak ada yang menang!',
  timeoutMessage: '**[END]**: Permainan tidak selesai! Tidak ada yang menang!',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} dan {opponent} bisa mengakses button permainan.'
});

Game.startGame();]
$onlyIf[$message[1]!=;**[ERROR]**: Mention 1 user untuk bermain dengan kamu!]
$suppressErrors`
}