const Discord = require("discord.js");
const moment = require ('moment');
moment.locale('pt-br');

exports.run = (bot,message,args) => {
                           //args = arguments
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/770639158074015758/771013971020218418/tenor.png")
    .setColor("RANDOM")
    .setDescription(`Algumas informações de ${message.guild.name}`)
    .addField(`ID do servidor`, message.guild.id, true)
    .addField(`Fundador do grupo`, message.guild.owner, true)
    .addField(`Região do servidor`, message.guild.region, true)
    .addField(`Total de canais`, message.guild.channels.cache.size, true)
    .addField(`Criada em`, moment(message.guild.createdAt).format('L'))
    .addField(`Você entrou aqui em`, moment(message.member.joinedAt).format('L'))
    .addField(`Entrei aqui em`, moment(bot.user.joinedAt).format('L'))
    .addField(`Total de membros`, message.guild.memberCount)
    .setDescription(`Meu criador: yato-kun`)
    

    message.channel.send(embed)
}

exports.help = {
    name: "serverinfo"
}