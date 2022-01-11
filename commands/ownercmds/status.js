module.exports = {
    name: 'status',
    description: 'Sets bots status to idle',
    execute(message, client, args, Discord) {
        if (message.author.id === '418876976963649536') {
            if(args[0] == 'sleep') {
                client.user.setStatus('idle');
                const SleepEmbed = new Discord.MessageEmbed()
                    .setColor(`YELLOW`)
                    .setTitle(`🌙 Night Night, My status is now \`\`Idle!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [SleepEmbed]
                })
            }

            if (args[0] == 'dont-talk-to-me') {
                client.user.setStatus('dnd');
                const DNDEmbed = new Discord.MessageEmbed()
                    .setColor(`RED`)
                    .setTitle(`❌ BRO STOP TALKING TO ME, My status is now \`\`DND!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [DNDEmbed]
                })
            }

            if (args[0] == 'beeo-boop') {
                client.user.setStatus('online');
                const OnlineEmbed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`🛒 i dont see your messages, My status is now \`\`Online!\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [OnlineEmbed]
                })
            }
        }
    }
}
