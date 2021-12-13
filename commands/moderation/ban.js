const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "bans a user",
    execute(message, client, args, Discord) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            const permsbad = new Discord.MessageEmbed()
                .setColor(`RED`)
                .setTitle(`<a:cross:910840621097447475> You dont have the correct permissions!`)
                .setDescription(`Sorry ${message.author} you dont have \`BAN_MEMBERS\``)
                .setTimestamp();
            message.channel.send({
                embeds: [permsbad]
            })
            return
        }
        // Code to kick the member
        // Reason Kick
        try {
            const messageArray = message.content.split(' ');
            const args = messageArray.slice(2).join(' ');
            const target = message.mentions.users.first();
            const memberTarget = message.guild.members.cache.get(target.id);
            if (args) {
                const reasonbanembed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`<a:tick:910903522663489556> ${target.tag} Was Banned!`)
                    .setDescription(`Member: \`${target.tag}\` was bANNED \n For: \`${args}\``)
                    .addFields(
                        { name: `User's Discord`, value: `${target.tag}`, inline: true },
                        { name: `User's ID`, value: `${target.id}`, inline: true },
                        { name: 'Banned By', value: `${message.author.tag}`, inline: true },
                    )
                    .setTimestamp();
                message.channel.send({
                    embeds: [reasonbanembed]
                })
                memberTarget.ban();
                return;
            }

            // No Reason ban
            if (target) {
                const banembed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`<a:tick:910903522663489556> ${target.tag} Was Banned!`)
                    .addFields(
                        { name: `User's Discord`, value: `${target.tag}`, inline: true },
                        { name: `User's ID`, value: `${target.id}`, inline: true },
                        { name: 'Banned By', value: `${message.author.tag}`, inline: true },
                    )

                memberTarget.ban();
                message.channel.send({
                    embeds: [banembed]
                })
            } else {
                message.channel.send("Please mention a user!")
            }
        } catch (err) {
            const errrorembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("There was a error!")
                .setDescription(`Error details \n \`${err}\``)
            message.channel.send({
                embeds: [errrorembed]
            })
        }
    }
}