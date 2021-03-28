const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const heaven = new Discord.MessageEmbed()

  .addField(`<a:aveng_ok1:815200926570512405> Pingim` ,`__**${client.ws.ping}**__ms \n`,true)
  .addField(`<a:aveng_ok1:815200926570512405> Yapımcım` ,`<@679361745248321566>(\`679361745248321566\`)`,true)
.setFooter(`Developed By RedZenom`)
  message.channel.send(heaven)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'ping'],
  permLevel: 0
};
exports.help = {
  name: 'i',
  description: 'İstatistik Komutu',
  usage: 'i'
}; 