const Discord = require('discord.js')
const config = require('../../../flask-config/config.json')

module.exports = {
    name: "help",
    description: "Sends a embed of all the commands of flask",
    execute(message) {
        const helpembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Flask's Help Page!`)
            .setDescription(`Prefix: \`${config.prefix}\``)
            .addFields(
                { name: '**:tools: Utillty Commands**', value: "`ping` `staff`" },
            )
            .setFooter(`Asked by ${message.author.tag}`)
            .setTimestamp();
        message.channel.send({
            embeds: [helpembed]
        });
    }
}
//funne command