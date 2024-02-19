module.exports = {
name:"akinator",
aliases: ['aki'],
description: "Membantu Aki menebak seseorang dari pertanyaan mu!",
code:`
$djsEval[
const akinator = require('discord.js-akinator');
akinator(message, {
            language: "en",
            childMode: "false",
            gameType: "character",  
            embedColor: "$getGuildVar[color]"
        });
]`
}