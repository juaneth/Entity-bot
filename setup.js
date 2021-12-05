//Run this script using node "node setup.js" to create config files

const fs = require('fs');
try {
    fs.mkdirSync('../flask-config');
    console.log(`Setup made folder: ../flask-config`);
}
catch {
    console.log('Folder already exists: ../flask-config');
}

const defaultconfig = {
    "token": "Place token here!",
    "prefix": "fl."
}
try {
    fs.writeFileSync("../flask-config/config.json", JSON.stringify(defaultconfig, null, 4), 'utf-8');
    console.log('Writing file finished, open file in ../flask-config/config.json (Next to the base Flask folder inside flask-config) and write in the token that can be found at https://discord.com/developers/applications');
}
catch {
    console.log('Writing file failed: ../flask-config/config.json');
}