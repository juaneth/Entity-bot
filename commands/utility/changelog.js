const Discord = require('discord.js')
const infofile = require("../../config/info.json")
const changelog = require(`../../config/changes/${infofile.Version}.json`)

module.exports = {
    name: "changelog",
    description: "Shows Chaneglogs",
    execute(message, client, args) {

        try {
            if (args[0]) {
                const infofile = require("../../config/info.json")
                const changelog = require(`../../config/changes/${args}.json`)
                const Changelogembed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`📜 Change logs for ${args}!`)
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
            message.channel.send(`Changelog \`\`${args}\`\` Wasnt found!`)
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