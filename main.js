const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

const PREFIX = "%";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        message.reply("Hello there");
    }
});

function parseInput (msg, input) {
    msg.reply('hello again');
}

client.login(configuration.TOKEN);