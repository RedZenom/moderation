const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["814859437776175124"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "798149707535745064"; // SUNUCU ID
  
var msg = message;
var taglılar = 0;
let tag = "⍣";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
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
  
  var masculin = message.guild.roles.cache.get("814859468332073000").members.size
var masculin = masculin.toString().replace(/ /g, "    ")
var üs5 = masculin.match(/([0-9])/g)
masculin = masculin.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
masculin = masculin.replace(/([0-9])/g, d => {
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
  
   var femme = message.guild.roles.cache.get("814859467543281704").members.size
var femme = femme.toString().replace(/ /g, "    ")
var üs5 = femme.match(/([0-9])/g)
femme = femme.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
femme = femme.replace(/([0-9])/g, d => {
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
  
  var vip = message.guild.roles.cache.get("814859464804794378").members.size
var vip = vip.toString().replace(/ /g, "    ")
var üs5 = vip.match(/([0-9])/g)
vip = vip.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
vip = vip.replace(/([0-9])/g, d => {
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
  
  var yetkili = message.guild.roles.cache.get("814859460929388595").members.size
var yetkili = yetkili.toString().replace(/ /g, "    ")
var üs5 = yetkili.match(/([0-9])/g)
yetkili = yetkili.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
yetkili = yetkili.replace(/([0-9])/g, d => {
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
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setFooter(`Developed By RedZenom`)
 .setDescription(`
<a:aveng_ok1:815200926570512405> **Taglı Üye Sayısı:** ${taglılar}
<a:aveng_ok1:815200926570512405> **Erkek Üye Sayısı:** ${masculin}
<a:aveng_ok1:815200926570512405> **Kadın Üye Sayısı:** ${femme}
<a:aveng_ok1:815200926570512405> **VIP Üye Sayısı:** ${vip}
<a:aveng_ok1:815200926570512405> **Yetkili Üye Sayısı:** ${yetkili}`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say2"],
  permLevel: 0
};
exports.help = {
  name: 'say2'
}