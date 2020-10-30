const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    message.channel.send(`Oi eu sou o ${bot.user.username}.`);
}

exports.help = {
    name: "mensagem"
}