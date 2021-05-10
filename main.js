const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

const PREFIX = "%";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  

client.on("message", message => {
<<<<<<< Updated upstream
    let input = message.content;
=======
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        InterpretCommand(messageWithout Prefix)
    }

});

InterpretCommand(message) {
    let command = message -> get command
    if(command == 'x') {

    }
    if(command == 'y') {

    }
}

x();
*/
client.on("message", msg => {
    let input = msg.content;
>>>>>>> Stashed changes
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