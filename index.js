const express = require('express');

const app = express();

const keep_alive = require('./keep_alive.js')

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('Started Client');
});

const mySecret = process.env['token']

const { AoiClient, LoadCommands, Util } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { setup } = require("aoi.parser");

const bot = new AoiClient({
    token: "MTE0NjY1MDE3MTE5MTU5NTA0OA.Gn75Rw.EyM4ffDIUus07kF_SEMEBbvk7HuxrdsTGVdu6w",
    prefix: ["$getGuildVar[prefix]"],
    intents: ["MessageContent", "Guilds", "GuildMembers", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate","onMessageDelete","onMessageUpdate","onVariableCreate","onVariableDelete","onVariableUpdate", "onJoin", "onFunctionError", "onPresenceUpdate"],
    suppressAllErrors : true,
  respondToBots: false,
   database: {
         db: require('aoi.db'),
         type: "aoi.db",
        tables: ["cou"],
        path: "./db/"
   },
  respondOnEdit : {
        commands: true
  }
});

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: process.env.soundcloud_id,
        youtubegl: "US",
        youtubeClient: "WEB",
    },
    requestOptions: {
        offsetTimeout: 0,
    }
});

voice.bindExecutor(bot.functionManager.interpreter);
voice.addEvent("trackStart");
voice.addEvent("queueEnd");

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./src/commands/")
loader.load(voice.cmds, "./src/voice/")

require("./src/config/status.js")(bot)
require("./src/config/variable.js")(bot)

loader.setColors({
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
});

setup(Util);