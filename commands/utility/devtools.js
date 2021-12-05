const Discord = require('discord.js')

module.exports = {
    name: "devtools",
    description: "These are the developer tools",
    execute(message, client, args) {
        if (args[0] === 'on') {
            let server = message.guild.id;
            let user = message.author.id;

            const username = client.users.cache.get(user);

            console.log("::Devtools on:: SERVER: " + server + " - " + message.guild.name + " || USER: " + user + " - " + message.author.tag);

            const devtoolsonembed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`💻 Developer tools are now on!`)
                .addFields(
                    { name: '**User**', value: `${username}`, inline: true }
                )
                .setTimestamp();

            message.channel.send({
                embeds: [devtoolsonembed]
            })
        }
    }
}