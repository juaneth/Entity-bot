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
                { name: '**:notes: Media Player**', value: "`play` `stop` `These will not work intill fervor notice`"},
                { name: '**:tada: Fun Commands**', value: "`cah` `hangman`" },
                { name: '**:lock: moderation Commands**', value: "`ban` `kick` `clear`" },
                { name: '**:tools: Utillty Commands**', value: "`changelog` `devtools` `ping` `staff`" },
            )
            .setFooter(`Asked by ${message.author.tag}`)
            .setTimestamp();
        message.channel.send({
            embeds: [helpembed]
        });
    }
}
//funne command