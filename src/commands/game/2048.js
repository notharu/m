module.exports = {
  name: "2048",
  description: "Bermain Game 2048! Cara bermain game ini ialah mengkontrol semua block yang ada angka yang sama disekitarnya!",
  code: `$djsEval[const { TwoZeroFourEight } = require('discord-gamecord');

const Game = new TwoZeroFourEight({
  message: message,
  isSlashGame: false,
  embed: {
    title: '2048',
    color: '$getGuildVar[color]'
  },
  emojis: {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  playerOnlyMessage: '**[ERROR]**: Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  msg.reply('**[END]**: Game over!');
});]
$suppressErrors`
}