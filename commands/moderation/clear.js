module.exports = {
    name: "clear",
    description: "Clears messages",
    async execute(message, client, args, Discord) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            const pemsmessage = new Discord.MessageEmbed()
                .setColor(`RED`)
                .setTitle(`<a:cross:910840621097447475> You dont have the correct permissions!`)
                .setDescription(`Sorry ${message.author} you dont have \`MANAGE_MESSAGES\``)
                .setTimestamp();
            message.reply({
                embeds: [pemsmessage]
            })
            return;
        }
        if (!args[0]) return message.reply("Please enter the amount of messages that you want to clear");
        if (isNaN(args[0])) return message.reply("Please enter a real number!");

        if (args[0] > 100) return message.reply("You canno't delete more than 100 messages!");
        if (args[0] < 1) return message.reply("You must delete at least 1 message!");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });

        const clearembed = new Discord.MessageEmbed()
            .setColor(`GREEN`)
            .setTitle(`<a:tick:910903522663489556> Cleared messages`)
            .addFields(
                { name: `How Many`, value: `🧹 ${args[0]}`, inline: true },
                { name: `User's ID`, value: `${message.author.id}`, inline: true },
                { name: 'Cleared By', value: `${message.author.tag}`, inline: true },
            )
            .setTimestamp();
        message.channel.send({
            embeds: [clearembed]
        })
    }
}