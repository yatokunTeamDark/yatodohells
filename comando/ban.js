const Discord = require("discord.js");
const express = require("express")

exports.run = (bot,message,args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão!");
if(args.length === 0) return message.reply("Utilize <prefixo>ban <usuario> <motivo>");
let banMember = message.mentions.users.first() || message.guild.users.get(args[0 === null]);
if(!banMember) return message.reply("Não foi possivel encontrar este usuario.");
if(message.guild.me.roles.highest.position) return message.channel.send("Usuario não pode ser banido :/")
let banReason = args.join(" ").slice(22) || args.slice(1).join(" ")
if(!banReason){
    banReason = "A razão não foi encontrada."
}

try {
    message.guild.members.ban(banMember);
    message.channel.send(`O usuario ${banMember} foi **punido** com sucesso pelo **motivo** ${banReason}`);
} catch (error) {
    console.log(`${error}`)
}
}

exports.help = {
    name: "ban"
}