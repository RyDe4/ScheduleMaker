const Discord = require("discord.js");
const configuration = require('./configuration');
const Scanner = require("./Scanner");
const client = new Discord.Client();

const Lexer = require('./Scanner');

const PREFIX = "/";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.startsWith(PREFIX)) {
        let input = message.content.substring(1);

        let scanner = new Scanner(input);
        while(scanner.currentCharacter)
            console.log(scanner.NextToken());
    }
});

client.login(configuration.TOKEN);