const Discord = require('discord.js')
const infofile = require("../../config/info.json")
const changelog = require(`../../config/changes/${infofile.Version}.json`)

module.exports = {
    name: "changelog",
    description: "Shows Chaneglogs",
    execute(message, client, args) {
        const messageArray = message.content.split(' ');
        const vnumber = messageArray.slice(1).join(' ');

        try {
            if (vnumber) {
                const infofile = require("../../config/info.json")
                const changelog = require(`../../config/changes/${vnumber}.json`)
                const Changelogembed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`📜 Change logs for ${vnumber}!`)
                    .addFields(
                        { name: '**Developers**', value: `${infofile.Developers}`, inline: true },
                        { name: `**Changelogs**`, value: `${changelog.Changes}`, inline: true },
                    )
                    .setTimestamp();
                message.channel.send({
                    embeds: [Changelogembed]
                })
                return;
            }
        } catch (err) {
            message.channel.send(`Changelog \`\`${vnumber}\`\` Wasnt found!`)
            return;
        }

        const Changelogembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`📜 Change logs for ${infofile.Version}!`)
            .addFields(
                { name: '**Developers**', value: `${infofile.Developers}`, inline: true },
                { name: `**Changelogs**`, value: `${changelog.Changes}`, inline: true },
            )
            .setTimestamp();
        message.channel.send({
            embeds: [Changelogembed]
        })

    }
}