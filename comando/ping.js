const Discord = require("discord.js");
exports.run = (bot,message,args) => {
 let embed = new Discord.MessageEmbed()
 .setTitle("PING DO BOT!")
 .setColor("RANDOM")
 .setDescription(`📡ping é ${Date.now() - message.createdTimestamp}ms`)
 .setFooter(`Comando de ping`, bot.user.displayAvatarURL);

 message.channel.send(embed);
}

exports.help = {
    name: "ping"
}