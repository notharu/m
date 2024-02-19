module.exports = {
  name: "flood",
  description: "Bermain Flood (Banjir)! Cara mainnya ialah Menyamaikan warna kotak di sekitarnya, Putaran akan dibatasi sesuai dengan Mode/Difficulty. Tersedia Mode Easy, Normal, Hard.",
  $if: "old",
  code: `$if[$message[1]==easy]
  $djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood (Banjir)',
    color: '$getGuildVar[color]',
  },
  difficulty: 8,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: '**[END]**: Kamu berhasil! Kamu mengambil **{turns}** putaran.',
  loseMessage: '**[END]**: Kamu gagal! Kamu mengambil **{turns}** putaran.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();]
$endif

$if[$message[1]==normal]
$djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '$getGuildVar[color]',
  },
  difficulty: 13,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: '**[END]**: Kamu berhasil! Kamu mengambil **{turns}** putaran.',
  loseMessage: '**[END]**: Kamu gagal! Kamu mengambil **{turns}** putaran.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();]
$endif

$if[$message[1]==hard]
$djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '$getGuildVar[color]',
  },
  difficulty: 18,
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: '**[END]**: Kamu berhasil! Kamu mengambil **{turns}** putaran.',
  loseMessage: '**[END]**: Kamu gagal! Kamu mengambil **{turns}** putaran.',
  playerOnlyMessage: '**[ERROR]**: Hanya {player} bisa mengakses button permainan..'
});

Game.startGame();]
$endif

$onlyIf[$checkContains[$message[1];easy;normal;hard]==true;**[ERROR]**: Invalid difficulty! use \`easy | normal | hard\`]
$suppressErrors`
}