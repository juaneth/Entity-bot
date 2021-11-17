const Discord = require('discord.js')
const prefixfile = require("../../config/config.json")

module.exports = {
    name: "prefix",
    description: "Changes the prefix",
    execute(message, client, args) {
        if (args[0] === 'change') {
            var newprefix = args[1]
            prefixfile[prefixfile] -= prefixfile[prefixfile]
            message.channel.send(`Changed prefix to ${newprefix}!`)
        }
    }
}

//This is in the making