const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedHeaven = new Discord.MessageEmbed()
  
    .setColor("#000000")
    .setDescription(`**__YÖNETİCİ KOMUTLARI__**
<a:aveng_ok1:815200926570512405> **a?sicil-sıfırla** = \`Üyenin Sicilini Sıfırlar\`
<a:aveng_ok1:815200926570512405> **a?küfür-engel aç/kapat** \`Sunucuda Küfür Etme Engeli Açar\`
<a:aveng_ok1:815200926570512405> **a?reklam-engel aç/kapat** \`Sunucu Reklam Yapma Engeli Açar\``)
   .setFooter(`Developed By RedZenom`)
  .setImage(`https://images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
    .setTimestamp();

  return message.channel.send(EmbedHeaven).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yönetici"],
  permLevel: 0
};

exports.help = {
  name: "yönetici",
  description: "Botun yönetici Listesini Gösterir!",
  usage: "yönetici"
};