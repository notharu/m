module.exports = {
  name: "hangman",
  description: "Bermain Hangman! Yaitu sebuah game yang harus menebak kata yang diberikan hint atau kalah.",
  code: `$djsEval[const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Hangman',
    color: '$getGuildVar[color]'
  },
  hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
  timeoutTime: 60000,
  theme: '$toLowerCase[$message[1]]',
  winMessage: '**[END]**: Anda menang! Kata itu adalah **{word}**.',
  loseMessage: '**[END]**: Kamu kalah! Kata itu adalah **{word}**.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();]
$onlyIf[$checkContains[$message[1];nature;sport;color;camp;fruit;discord;winter;pokemon]==true;**[ERROR]**: Tema invalid! Tersedia tema: \`nature | sport | color | camp | fruit | discord | winter | pokemon\`]
$suppressErrors`
}