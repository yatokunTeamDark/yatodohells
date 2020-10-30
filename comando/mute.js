  
var Discord = require('discord.js');
var ms = require('ms');

exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('sem permissão cafajeste');

    var user = message.mentions.users.first();
    if(!user) return message.reply('voce nao mencionou ninguem');

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return message.reply('ele nao esta no server');
    if(member.hasPermission('MENAGE_SERVER')) return message.reply('voce nao pode mutar essa pessoa');


    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return message.reply('coloque o tempo');

    var reason = args.splice(2).join(' ');
    if(!reason) return message.reply('expeçifique o motivo');

    var log = new Discord.MessageEmbed()
    .setTitle('informaçoes do mute')
    .addField('usuario:', user, true)
    .addField('por:', message.author, true)
    .addField('acaba:', rawTime)
    .addField('razao:', reason)
    message.channel.send(log);

    var role = message.guild.roles.cache.find(r => r.name === 'Mutado');

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
    }, time);

    message.channel.send(`**${user}** foi mutado por: **${message.author}** pelo tempo: **${rawTime}**!`);
}
exports.help = {
    name: "mute"
}