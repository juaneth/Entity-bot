// This is needed for discord.js
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


//Stuff added by npm
const fs = require('fs'); //npm i fs

//This code is for reading commands on luanch 
const Status = require('./config/Status.js');
const flaskapi = require('./api/index.js');
const config = require('./config/config.json');
const prefixchecker = require('./config/config.json')
const token = config.token;
const configprefix = prefixchecker.prefix;
client.commands = new Discord.Collection();

// Define a function to load commands from a specific given folder
function loadCommandsFromFolder(folder) {
    const commandFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
// Load commands from folder './commands/moderation'
loadCommandsFromFolder('./commands/moderation');

// Load commands from folder './commands/help'
loadCommandsFromFolder('./commands/help');

// Load commands from folder './commands/utility'
loadCommandsFromFolder('./commands/utility');

// Load commands from folder './commands/test'
loadCommandsFromFolder('./commands/test');

//Prefix for bot
const prefix = configprefix;

//This turns the bot on
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    Status(client);
});

//This is for Commands to register
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Server Checking Commands
    if (command === 'ping') {
        client.commands.get('ping').execute(message, client, args, Discord);
    }
    if (command === 'staff') {
        client.commands.get('staff').execute(message, client, args, Discord);
    }
    if (command === 'help') {
        client.commands.get('help').execute(message, client, args, Discord);
    }
    if (command === 'prefix') {
        client.commands.get('prefix').execute(message, client, args, Discord);
    }
    if (command === 'changelog') {
        client.commands.get('changelog').execute(message, client, args, Discord);
    }
    if (command === 'kick') {
        client.commands.get('kick').execute(message, client, args, Discord);
    } if (command === 'ban') {
        client.commands.get('ban').execute(message, client, args, Discord);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, client, args, Discord);
    }
})

//Bot token below to get token goto: https://discord.com/developers/applications
client.login(token);