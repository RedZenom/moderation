const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\

if(!["814859431292305458"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
  let ramo = "<a:aveng_ok1:815200926570512405>**Sesli Kanalda Olan Yetkililer:**\n\n";
  let ramo2 = "<a:aveng_ok1:815200926570512405>**Sesli Kanalda Olmayan Yetkililer:**\n\n";
  message.guild.roles.cache.get("814859460929388595").members.map(r => {
    ramo += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    ramo2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const ramoembed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("BLACK")
    .setTimestamp()
    .setImage(`https://images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
    .setFooter(`Developed By RedZenom`)
    .setDescription("" + ramo + "" + ramo2 + "")
  message.channel.send(ramoembed).then(s => s.s);
};
module.exports.conf = {
  aliases: ["vyetkili"]
};

module.exports.help = {
  name: "sesteki-yetkililer"
};