const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const istatistik = new Discord.RichEmbed()
        .setColor("BLACK")
       .setDescription(`Kullanıcılar: **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n Sunucu Sayısı: **${client.guilds.size.toLocaleString()}** \n Ping: **${client.ping}** \n Bellek kullanımı: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB** \n Sürüm: **v0.8**\n Yapımcım: <@338653730930950144>`)
    
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(istatistik);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
    permLevel: 0
};

exports.help = {
    name: 'istatistik',
};