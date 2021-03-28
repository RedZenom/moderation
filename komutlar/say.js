const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["814859437776175124"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "798149707535745064"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
            '0': `<a:aveng_0:815200288146980904>`,
            '1': `<a:aveng_1:815200267975917568>`,
            '2': `<a:aveng_2:815200289257685032>`,
            '3': `<a:aveng_3:815200289287176192>`,
            '4': `<a:aveng_4:815200289668726858>`,
            '5': `<a:aveng_5:815200290231812107>`,
            '6': `<a:aveng_6:815200291184050177>`,
            '7': `<a:aveng_7:815200293935513630>`,
            '8': `<a:aveng_8:815200293200855061>`,
            '9': `<a:aveng_9:815200292794400779>`}[d];})}
  
  
var sesli = count.toString().replace(/ /g, "    ")
var üs2 = sesli.match(/([0-9])/g)
sesli = sesli.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sesli = sesli.replace(/([0-9])/g, d => {
return {
            '0': `<a:aveng_0:815200288146980904>`,
            '1': `<a:aveng_1:815200267975917568>`,
            '2': `<a:aveng_2:815200289257685032>`,
            '3': `<a:aveng_3:815200289287176192>`,
            '4': `<a:aveng_4:815200289668726858>`,
            '5': `<a:aveng_5:815200290231812107>`,
            '6': `<a:aveng_6:815200291184050177>`,
            '7': `<a:aveng_7:815200293935513630>`,
            '8': `<a:aveng_8:815200293200855061>`,
            '9': `<a:aveng_9:815200292794400779>`}[d];})}
 
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
            '0': `<a:aveng_0:815200288146980904>`,
            '1': `<a:aveng_1:815200267975917568>`,
            '2': `<a:aveng_2:815200289257685032>`,
            '3': `<a:aveng_3:815200289287176192>`,
            '4': `<a:aveng_4:815200289668726858>`,
            '5': `<a:aveng_5:815200290231812107>`,
            '6': `<a:aveng_6:815200291184050177>`,
            '7': `<a:aveng_7:815200293935513630>`,
            '8': `<a:aveng_8:815200293200855061>`,
            '9': `<a:aveng_9:815200292794400779>`}[d];})}
  
var booster = message.guild.roles.cache.get("808013392739827772").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
            '0': `<a:aveng_0:815200288146980904>`,
            '1': `<a:aveng_1:815200267975917568>`,
            '2': `<a:aveng_2:815200289257685032>`,
            '3': `<a:aveng_3:815200289287176192>`,
            '4': `<a:aveng_4:815200289668726858>`,
            '5': `<a:aveng_5:815200290231812107>`,
            '6': `<a:aveng_6:815200291184050177>`,
            '7': `<a:aveng_7:815200293935513630>`,
            '8': `<a:aveng_8:815200293200855061>`,
            '9': `<a:aveng_9:815200292794400779>`}[d];})}
  
const embed1 = new Discord.MessageEmbed()
.setColor('#000000')
.setFooter(`Developed By RedZenom`)
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`<a:aveng_ok1:815200926570512405> **Toplam Üye Sayısı:** ${üyesayısı}
<a:aveng_ok1:815200926570512405> **Toplam Çevrimiçi Üye Sayısı:** ${cevirimici}
<a:aveng_ok1:815200926570512405> **Toplam Sesteki Üye Sayısı:** ${sesli}
<a:aveng_ok1:815200926570512405> **Toplam Booster Üye Sayısı:** ${booster}`)
msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['say1'],
  permLevel: 0
};
exports.help = {
  name: 'say1'
}