const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})
    
client.on("message", message => {
    if (message.content === "ping") {
        let reply = "hello";
        message.reply(reply);
    }
})
    
client.login(process.env.TOKEN);