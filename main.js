const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

const PREFIX = "%";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  

client.on("message", message => {
    let input = message.content;
    let addInput = new RegExp('^%add');
    
    // stop if the message author is a bot 
    if (message.author.bot) return;

    if (addInput.test(input)) {
        parseInput(message, input);
    }
});

function parseInput (msg, input) {
    msg.reply(input);
}

client.login(configuration.TOKEN);