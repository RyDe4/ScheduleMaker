const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

const PREFIX = "%";
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"]
const MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    let input = msg.content;
    let addInput = new RegExp('^%add');
    let updateInput = new RegExp('^%update');
    let deleteInput = new RegExp('^%delete');
    
    // stop if the message author is a bot 
    if (msg.author.bot) return;

    if (addInput.test(input)) {
        addEvent(msg);
    } else if (updateInput.test(input)) {
        updateEvent(msg);
    } else if (deleteInput.test(input)) {
        deleteEvent(msg);
    }
});

function addEvent (message) {
    let terms = message.content.split(" ")
    if (WEEKDAYS.includes(terms[1])) {
        message.reply('Event on ' + terms[1])
    } else if (MONTHS.includes(terms[1])) {

    } 
}

function updateEvent (message) {
    message.reply(message.content);
}

function deleteEvent (message) {
    message.reply(message.content);
}

client.login(configuration.TOKEN);