const Discord = require("discord.js");

exports.run = (bot,message,args) => {

let splitarg = args.join(" ").split(" / ");
if(!message.member.hasPermission("MENAGE_MESSAGE")){
    return message.reply("Você não tem permissão");
}
if(args.length === 0){
    return message.reply("Utilize: <prefixo>anunciar <titulo> / <anuncio>");
}
let aTitle = splitarg[0];
if(!aTitle){
    return message.reply("Coloque o titulo!")
}
let aAnnoucement = splitarg[1]
if(!aAnnoucement){
    return message.reply("Coloque o anuncio!")
}

let aEmbed = new Discord.MessageEmbed()
.setTimestamp()
.setTitle(aTitle)
.setColor("RANDOm")
.setDescription(aAnnoucement)
.setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL);

let aChannel = bot.channels.cache.get("771365706053845032");
try {
aChannel.send(aEmbed);
} catch (error) {
    console.log(error);
}
}
exports.help = {
    name: "aviso"
}