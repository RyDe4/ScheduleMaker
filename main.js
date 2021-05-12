const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

const PREFIX = "%";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/*
client.on("message", message => {
    let input = message.content;
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
    ...
    error handling
}

x();
y();
...
*/
client.on("message", msg => {
    let input = msg.content;
    let addInput = new RegExp('^%add');
    let updateInput = new RegExp('^%update');
    let deleteInput = new RegExp('^%delete');
    
    // stop if the message author is a bot 
    if (message.author.bot) return;

    if (addInput.test(input)) {
        addEvent(message);
    } else if (updateInput.test(input)) {
        updateEvent(message);
    } else if (deleteInput.test(input)) {
        deleteEvent(message);
    }
});

function addEvent (message) {
    message.reply(message.content);
}

function updateEvent (message) {
    
}

function deleteEvent (message) {

}

client.login(configuration.TOKEN);