const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on("message", msg => {
    let input = msg.content;
    let addInput = new RegExp('^%add');
    if (addInput.test(input)) {
        parseInput(msg, input);
    }
});

function parseInput (msg, input) {
    msg.reply(input);
}

client.login(configuration.TOKEN);