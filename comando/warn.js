var Discord = require('discord.js');
const express = require("express")
exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('voce nao pode usar este comando!');

    var user = message.mentions.users.first();
    if(!user) return message.reply('voce nao mencionou niguem!');

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return message.reply('ele nao esta no servidor!');

    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('voce precisa especificar a razao do warn!');

    var log = new Discord.MessageEmbed()
    .setTitle('espeçificaçoes do warn')
    .addField('usuario:', user, true)
    .addField('por:', message.author, true)
    .addField('razao:', reason)
    message.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('foi levou um warn!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.log(err);
    }
    
    messsage.channel.send(`**${user}** foi warnado por **${message.author}**!`);
}
exports.help = {
    name: "warn"
}