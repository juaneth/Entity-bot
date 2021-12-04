module.exports = async (client) => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Server's | New pfp coming soon!`, { type: 'WATCHING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    }, 5000)
}