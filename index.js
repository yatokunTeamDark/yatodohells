const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir("./comando/", (err, files) => {
  if(err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    
    let props = require(`./comando/${f}`);
    console.log(`Comando ${f} carregado com sucesso.`)
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', () => {
  console.log(`O bot ${bot.user.username} ficou online com sucesso.`)
  bot.user.setActivity("shinobi life 2", {type: "PLAYING",});
});

bot.on('message', message => {

  if(message.author.bot) return;

  //let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith("*")) return;

  let arquivocmd = bot.commands.get(command.slice(config.prefix.length));
  if(arquivocmd) arquivocmd.run(bot,message,args);

});

bot.login(config.token);
