const Discord = require("discord.js");
const configuration = require('./configuration');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on("message", msg => {
    if (msg.content === "ping") {
        let reply = "hello again"
        msg.reply(reply);
    }
});

client.login(configuration.TOKEN);