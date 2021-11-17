const Discord = require('discord.js')
const infofile = require("../../config/info.json")

module.exports = {
    name: "change",
    description: "Shows Chaneg logs",
    execute(message, client, args) {
        if (args[0] === 'logs') {
            const Changelogembed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`📜 Change logs!`)
                .addFields(
                    { name: '**Developers**', value: `${infofile.Developers}`, inline: true },
                    { name: `**Change Logs**`, value: `${infofile.Changes}`, inline: true },
                )
                .setTimestamp();
            message.channel.send({
                embeds: [Changelogembed]
            })
        }
    }
}