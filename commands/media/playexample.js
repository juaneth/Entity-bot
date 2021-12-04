const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, client, args, Discord) {
        try {
            const voiceChannel = message.member.voice.channel;
            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

            }
            const video = await videoFinder(args.join(' '));
            const connection = await voiceChannel.join();

            if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
            if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
            if (!args.length) return message.channel.send('You need to send the second argument!');

            const validURL = (str) => {
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if (!regex.test(str)) {
                    return false;
                } else {
                    return true;
                }
            }


            if (validURL(args[0])) {
                const connection = await voiceChannel.join();
                const stream = ytdl(video.url, { filter: 'audioonly' });
                connection.play(stream, { seek: 0, volume: 1 })
                    .on('finish', () => {
                        voiceChannel.leave();
                        const Leaveembed = new Discord.MessageEmbed()
                            .setColor(`#FFBF00`)
                            .setTitle(`<a:bongocat:911375197003722752> You finshed your video`)
                            .addFields(
                                { name: `How Long?`, value: `🎶 ${video.timestamp}`, inline: true },
                            )
                            .setTimestamp();
                        message.channel.send({
                            embeds: [Leaveembed]
                        })
                    });
                const joinEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setThumbnail(video.thumbnail)
                    .setTitle("<a:tick:910903522663489556> Now playing")
                    .setDescription(`[${video.title}](${video.url})`)
                    .addFields(
                        { name: 'Channel', value: `💻 ${video.author.name}`, inline: true },
                        { name: 'Video Duration', value: `🎶 ${video.timestamp}`, inline: true },
                        { name: 'Video Views', value: `📸 ${video.views}`, inline: true },
                        { name: 'Put On By', value: `📜 ${message.author.tag}`, inline: true },
                    )

                message.channel.send({
                    embeds: [joinEmbed]
                })
                return
            }

            if (video) {
                const stream = ytdl(video.url, { filter: 'audioonly' });
                connection.play(stream, { seek: 0, volume: 1 })
                    .on('finish', () => {
                        voiceChannel.leave();
                        const Leaveembed = new Discord.MessageEmbed()
                            .setColor(`#FFBF00`)
                            .setTitle(`<a:bongocat:911375197003722752> You finshed your video`)
                            .addFields(
                                { name: `How Long?`, value: `🎶 ${video.timestamp}`, inline: true },
                            )
                            .setTimestamp();
                        message.channel.send({
                            embeds: [Leaveembed]
                        })
                    });
                const joinEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setThumbnail(video.thumbnail)
                    .setTitle("<a:tick:910903522663489556> Now playing")
                    .setDescription(`[${video.title}](${video.url})`)
                    .addFields(
                        { name: 'Channel', value: `💻 ${video.author.name}`, inline: true },
                        { name: 'Video Duration', value: `🎶 ${video.timestamp}`, inline: true },
                        { name: 'Video Views', value: `📸 ${video.views}`, inline: true },
                        { name: 'Put On By', value: `📜 ${message.author.tag}`, inline: true },
                    )

                message.channel.send({
                    embeds: [joinEmbed]
                })
            } else {
                message.channel.send('No video results found or video already playing.');
            }

        } catch (err) {
            const errrorembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<a:cross:910840621097447475> There was a error!")
                .setDescription(`Error details \n \`${err}\``)
            message.channel.send({
                embeds: [errrorembed]
            })
        }
    }
}
