const Discord = require('discord.js')


module.exports = {
    name: "suggest",
    description: "suggestion commnad",
    execute(message, client) {
        const channelID = '911392837080322089'
        const messageArray = message.content.split(' ');
        const args = messageArray.slice(1).join(' ');

        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Your suggestion")
            .setDescription(`Submitting your suggestion into <#911392837080322089> \n Your Suggestoin \`\`${args}\`\``)
        message.delete()



        message.channel.send({
            embeds: [Embed]
        })
        const sugembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor('New Suggestion')
            .setDescription(`\`\`\`${args}\`\`\``)
            .setTimestamp();

        client.channels.fetch(channelID)
            .then(channel => {
                channel.send({
                    embeds: [sugembed]
                })
            })
    }
}