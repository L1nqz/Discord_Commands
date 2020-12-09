const { Channels } = require('@root/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
    client.on('GuildMember.premiumSinceTimestamp', (member) => {
        const channel = member.guild.channels.cache.get(Channels.welcomeChannel)
        const nitroEmbed = new MessageEmbed()
        .setTitle(`${member.id} Boosted The Server!`)
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`THANK YOU MESSAGE HERE`)
        .setFooter('FOOTER')
        .setTimestamp();
        channel.send(nitroEmbed)
    })
}
