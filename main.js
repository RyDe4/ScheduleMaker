const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on("message", msg => {
    input = msg.content;
    parseInput(msg, input);
});

function parseInput (msg, input) {
    msg.reply('hello again');
}

client.login(configuration.TOKEN);