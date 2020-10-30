const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./usuarios.db');


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

let sql = `SELECT * FROM users WHERE user=?`;
let user = message.author.tag;

db.get(sql, [user], (err, row)=>{
  if(err){
    return console.error(err.message);
  }
  if(!row){
    db.run(`INSERT INTO users (user, xp, lv) VALUES ("${user}",1,1)`);
  }
  else{
    let selXP = row.xp;
    let selLv = row.lv;
    let curLv = Math.floor(0.1 * Math.sqrt(selXP));

    if(selLv < curLv){
      db.run(`UPDATE users SET lv="${curLv}", xp=xp+10 WHERE user="${user}"`, function(err){
        if(err){
          return console.error(err.message);
        }
        message.reply(`Você agora é Lv. **${curLv}**!`);
      })
    }else{
      db.run(`UPDATE users SET xp=xp+10 WHERE user="${user}"`);
      console.log(`Esta no level ${curLv} com ${selXP} xp`);
    }
  }
});

});

bot.login(config.token);