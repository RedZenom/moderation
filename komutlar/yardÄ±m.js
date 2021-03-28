const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedHeaven = new Discord.MessageEmbed()
  
    .setColor("#000000")
    .setDescription(`**__SORGU KOMUTLARI__**
<a:aveng_ok1:815200926570512405> **a?sorgula** = \`Belirtilen ID'nin Ses Kanalında Olup Olmadığını Gösterir\`
<a:aveng_ok1:815200926570512405> **a?vyetkili** = \`Sesteki Yetkilileri Gösterir\`
<a:aveng_ok1:815200926570512405> **a?sicil** = \`Etiketlenen Üyenin Sicil Durumunu Gösterir\`
<a:aveng_ok1:815200926570512405> **a?say1** = \`Sunucu Durumunu Atar\`
<a:aveng_ok1:815200926570512405> **a?say2** = \`Sunucu Durumunu Atar\`
    
    
**__UN İŞLEM KOMUTLARI__**
<a:aveng_ok1:815200926570512405> **a?unban** = \`Yasaklanan Üyenin Banı Açılır\`
<a:aveng_ok1:815200926570512405> **a?unjail** = \`Cezalandırılan Üyenin Cezasını Açar\`
<a:aveng_ok1:815200926570512405> **a?unvmute** = \`Seste Susturulan Üyenin Susturulmasını Açar\`
<a:aveng_ok1:815200926570512405> **a?unmute** = \`Yazı Kanallarında Susturulmasını Kaldırır\`
    
    
**__İŞLEM KOMUTLARI__**
<a:aveng_ok1:815200926570512405> **a?jail** = \`Etiketlenen Üyeyi Belirlediğiniz Süre Boyunca Cezalandırır\`
<a:aveng_ok1:815200926570512405> **a?vmute** = \`Sesteki Üyeye Belirtilen Süre Susturur\`
<a:aveng_ok1:815200926570512405> **a?mute** = \`Etiketlenen Üyeyi Yazı Kanallarında Susturur\`
<a:aveng_ok1:815200926570512405>**a?ban** = \`Etiketlenen Üyeyi Sunucudan Yasaklar\`
<a:aveng_ok1:815200926570512405> **a?banbilgi** = \`Yasaklanan Üyenin Yasaklanma Nedenini Gösterir\`
    
    
**__HERKESE AÇIK KOMUTLAR__**
<a:aveng_ok1:815200926570512405> **a?afk** = \`Klavyeden Uzak Moduna Girersiniz\`
<a:aveng_ok1:815200926570512405> **a?gel** = \`Etiketlenen Kişiyi Yanına Çağırırsınız\`
<a:aveng_ok1:815200926570512405> **a?git** = \`Etiketlenen Kişinin Yanına Gitmek İstersiniz\`


**__YETKİLİ KOMUTLARI__**
<a:aveng_ok1:815200926570512405> **a?snipe** = \`Son Silinen Mesajı Gösterir\`
<a:aveng_ok1:815200926570512405> **a?sil** = \`1-100 Arası Belirlediğiniz Kadar Mesaj Siler\`
<a:aveng_ok1:815200926570512405> **a?kes** = \`Etiketlenen Üyeyi Sesten Atar\``)
   .setFooter(`Developed By RedZenom`)
  .setImage(`https://images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif`)
    .setTimestamp();

  return message.channel.send(EmbedHeaven).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "yardım"
};
