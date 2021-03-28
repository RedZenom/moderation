const { MessageEmbed } = require('discord.js')
const data = require('quick.db')

   exports.run = async(client, message, args) => {
    const avenger = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!avenger) {
    const embeds = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`#000000`)
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(avenger);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`<a:aveng_ok1:815200926570512405> Silinen mesaj:\n` + silinen)
.setColor(`#000000`)
  message.channel.send(embed) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 