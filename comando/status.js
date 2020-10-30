const Discord = require("discord.js");
exports.run = (bot,message,args) => {
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./usuarios.db');
let sql = `SELECT * FROM users WHERE user=?`;
let user = message.author.tag;

    db.get(sql, [user], (err, row)=>{
        if(err){
          return console.error(err.message);
        }
          message.reply('Level:  ' + row.lv + 'XP:  ' + row.xp);
})
}
exports.help = {
    name: "status"
}