module.exports = {
    name: 'status',
    description: 'Sets bots status to idle',
    execute(message, client, args, Discord) {
        if (message.author.id === '418876976963649536') {
            if(args[0] == 'sleep') {
                client.user.setStatus('idle');
                const SleepEmbed = new Discord.MessageEmbed()
                    .setColor(`YELLOW`)
                    .setTitle(`🌙 Night Night, My status is now \`\`idle!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [SleepEmbed]
                })
            }

            if (args[0] == 'dont-talk-to-me') {
                client.user.setStatus('dnd');
                const DNDEmbed = new Discord.MessageEmbed()
                    .setColor(`RED`)
                    .setTitle(`❌ BRO STOP TALKING TO ME, My status is now \`\`dnd!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [DNDEmbed]
                })
            }

            if (args[0] == 'ghosted') {
                client.user.setStatus('offline');
                const OfflineEmbed = new Discord.MessageEmbed()
                    .setColor(`GREY`)
                    .setTitle(`🛒 i dont see your messages, My status is now \`\`offline!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [OfflineEmbed]
                })
            }
        }
    }
}
