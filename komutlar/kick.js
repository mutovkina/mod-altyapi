const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  const db = require('quick.db')
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
         const modlog = db.fetch(`modlogKK_${message.guild.id}`)
  if (!modlog) return message.reply('Mod log kanalı ayarlamamışsınız.');
    if (message.mentions.users.size < 1) return message.reply('Kimi kickleyeceğinizi yazmalısın.').catch(console.error);

  if (reason.length < 1) return message.reply('Kick sebebini yazmalısın.');
  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');

  message.guild.ban(user, 2);
message.channel.send(`**${user.username}**, ${message.author} tarafından sunucudan **${reason}** sebebiyle atıldı!`)
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kick')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return message.guild.channels.get(modlog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};