module.exports = {
    name: 'stop',
    description: 'stop the bot and leave the channel',
    async execute(message, client, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the video!");
        await voiceChannel.leave();
        const stopembed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setTitle(`<a:bongocat:911375197003722752> You Stopped The Video`)
            .addFields(
                { name: `Stopped By`, value: `🛑 ${message.author.stop}`, inline: true },
            )
            .setTimestamp();
        await message.channel.send({
            embeds: [stopembed]
        })
    }
}