module.exports = {
  name: "snake",
  description: "Bermain Game Ular! Versi Discord. Game ini kalian sudah pasti tau.",
  code: `$djsEval[const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Game Ular',
    overTitle: 'Game Over',
    color: '$getGuildVar[color]'
  },
  emojis: {
    board: '◼️',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀' },
  foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
  stopButton: 'Hentikan permainan.',
  timeoutTime: 60000,
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();
Game.on('gameOver', result => {
  msg.reply('**[END]**: Game Over!')
});]
$suppressErrors`
}