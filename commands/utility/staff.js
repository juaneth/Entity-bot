const Discord = require('discord.js')
const infofile = require("../../config/info.json")

module.exports = {
    name: "staff",
    description: "Sends a embed of all the staff of flask",
    execute(message) {
        const staffembed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`💻 Staff!`)
        .addFields(
            { name: '**Developers**', value: `${infofile.Developers}`, inline: true },
            { name: `**Artist**`, value: `${infofile.Artist}`, inline: true },
             )  
        .setTimestamp();
            message.channel.send({
            embeds: [ staffembed ]
        })
    }
}