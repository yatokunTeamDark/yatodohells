const discord = require("discord.js");
const express = require("express")
exports.run = (bot,message,args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('voce nao tem permissao para usar esse comando');
    if (!target) return message.reply('porfavor especifique o membro');
    if (!reason) return message.reply('coloque a razao do kick');
    
    let embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Membro Kickado', `${target.user.username} ID: ${target.user.id}`)
        .addField('Kickado por', `${message.author.username} ID: ${message.author.id}`)
        .addField('Kickado as', message.createdAt)
        .addField('Kickado as', message.channel)
        .addField('motivo', reason)
        .setFooter('informaçoes do usuario', target.user.displayAvatarURL);

    message.channel.send(`${target.user.username} foi kickado por: ${message.author}. motivo: ${reason}.`);
    target.kick(reason);
    message.channel.send(embed)

};

module.exports.help = {
    name: 'kick',
    aliases: []
};