//Run this script using node "node setup.js" to create config files
const fs = require('fs');

const defaultconfig = {
    "token": "Place token here!",
    "prefix": "fl."
}

try {
    fs.mkdirSync('../flask-config');
    fs.mkdirSync('../flask-config/server-data');
    fs.writeFileSync("../flask-config/server-data/devtools.json", '{}', 'utf-8');
    fs.writeFileSync("../flask-config/server-data/apikeys.json", '{}', 'utf-8');
    fs.mkdirSync('./commands/test');
    console.log(`Setup made folder: ../flask-config`);
} catch (err) {
    console.log(err + "\n");
}

try {
    fs.writeFileSync("../flask-config/config.json", JSON.stringify(defaultconfig, null, 4), 'utf-8');
    const readline = require("readline");

    console.log('Writing file finished, go to https://discord.com/developers/applications and create a new bot and get the token, then input below');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        rl.question("Bot Token: ", function (answer) {
            console.log(`Token written (Always keep secret from others): ${answer}`);

            const configwithtoken = {
                "token": `${answer}`,
                "prefix": "fl."
            }

            fs.writeFileSync("../flask-config/config.json", JSON.stringify(configwithtoken, null, 4), 'utf-8');

            rl.close();
        });
    } catch (err) {
        console.log('Error, cannot write token to config: ' + err);
    }

} catch {
    console.log('Writing file failed: ../flask-config/config.json');
}