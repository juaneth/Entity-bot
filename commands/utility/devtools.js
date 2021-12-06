const Discord = require('discord.js')
const devtoolslist = require('../../../flask-config/server-data/devtools.json');
const apilist = require('../../../flask-config/server-data/apikeys.json');

module.exports = {
    name: "devtools",
    description: "These are the developer tools",
    execute(message, client, args) {
        //Check if user has manage server or administrator permissions
        if (message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR')) {
            //If user is turning on devtools
            if (args[0] === 'on') {


                let server = message.guild.id;
                let user = message.author.id;

                const username = client.users.cache.get(user);

                console.log(new Date().toLocaleString() + " ::Devtools on:: SERVER: " + server + " - " + message.guild.name + " || USER: " + user + " - " + message.author.tag);

                const devtoolsonembed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`💻 Developer tools are now on!`)
                    .addFields(
                        { name: '**For User**', value: `${username}`, inline: true },
                        { name: '**In Server**', value: `*${message.guild.name}*`, inline: true },
                        { name: '**Need help?**', value: `Go to https://github.com/Flask-Discord/Flask/blob/main/devtools.MD for more info on how to use them.`, inline: false }
                    )
                    .setTimestamp();

                message.channel.send({
                    embeds: [devtoolsonembed]
                })
            }
        } else {
            if (args[0] === 'on') {
                let server = message.guild.id;
                let user = message.author.id;

                const username = client.users.cache.get(user);

                console.log(new Date().toLocaleString() + " ::Devtools tried on - No perms:: SERVER: " + server + " - " + message.guild.name + " || USER: " + user + " - " + message.author.tag);

                const nopermsembed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`💻 Developer tools need manage server permissions to run.`)
                    .addFields(
                        { name: '**For User**', value: `${username}`, inline: true },
                        { name: '**In Server**', value: `*${message.guild.name}*`, inline: true },
                        { name: '**Need help?**', value: `Go to https://github.com/Flask-Discord/Flask/blob/main/devtools.MD for more info on how to use them.`, inline: false }
                    )
                    .setTimestamp();

                message.channel.send({
                    embeds: [nopermsembed]
                })
            }
        }
    }
}