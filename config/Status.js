<<<<<<< HEAD
module.exports = async (client) => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Server's!`, { type: 'WATCHING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    }, 5000)
=======
module.exports = async (client) => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Server's | New pfp coming soon!`, { type: 'WATCHING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    }, 5000)
>>>>>>> 7ed4a1f007d05ac908bfce86460a762c7f8285a0
}