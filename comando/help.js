const Discord = require("discord.js");

exports.run = (bot,message,args) => {
const embed = {
    "title": "title ~~(did you know you can have markdown here too?)~~",
    "description": "Aqui você tirará as suas duvidas sobre mim",
    "color": 13528025,
    "timestamp": "2020-10-29T00:34:47.589Z",
    "footer": {
      "icon_url": "https://media1.tenor.com/images/41c9ec5439f5996c900fdd4787514c24/tenor.gif?itemid=12743667",
      "text": "footer text"
    },
    "thumbnail": {
      "url": "https://media1.tenor.com/images/41c9ec5439f5996c900fdd4787514c24/tenor.gif?itemid=12743667"
    },
    "image": {
      "url": "https://media1.tenor.com/images/41c9ec5439f5996c900fdd4787514c24/tenor.gif?itemid=12743667"
    },
    "author": {
      "name": "yato-kun",
      "url": "https://discordapp.com",
      "icon_url": "https://media1.tenor.com/images/41c9ec5439f5996c900fdd4787514c24/tenor.gif?itemid=12743667"
    },
    "fields": [
      {
        "name": "anuncios",
        "value": "!anunciar <titulo> / <anuncio>"
      },
      {
        "name": "mute",
        "value": "!mute <@pessoa> <motivo>"
      },
      {
        "name": "warn",
        "value": "!warn <@pessoa> <motivo>"
      },
      {
        "name": "kick",
        "value": "!kick <@pessoa> <motivo>"
      },
      {
        "name": "ban",
        "value": "!ban <@pessoa> <motivo>"
      },
      {
        "name": "ping",
        "value": "!ping"
      },
      {
        "name": "serverinfo",
        "value": "!serverinfo",
        "inline": true
      }
    ]
  };
  message.author.send({embed});
}
  exports.help = {
    name: "help"
};

