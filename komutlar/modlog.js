const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let channel = message.mentions.channels.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`modlogKK_${message.guild.id}`)
    message.channel.send(`Mod-Log Kanalı Başarıyla Sıfırlandı.`)
    return
  }
  
    if (!channel) {
        return message.channel.send(`Mod-Log kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
    db.set(`modlogKK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Mod-Log kanalı başarıyla ${channel} olarak ayarlandı.`)
    .setColor("RANDOM")
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["mod-log"],
    permLevel: 3
}

exports.help = {
    name: 'modlog',
    description: 'Log kanalını ayarlar..',
    usage: 'log-ayarla <#kanal>'
}