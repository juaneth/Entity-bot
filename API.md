# Flask API
## The API lets you control your servers settings programmatically or you can take data like user count and messages per hour

# How to use
### To get an API key run the command `fl.devtools on` then run `fl.devtools apikey` which will direct message you the api key, this documentation page and our terms of use. If used improperly we will terminate your key and ban you from using our bot again.

The base URL is `https://api.megdb.xyz/` and there are multiple types of requests.

You could send a `GET` request to `https://api.megdb.xyz/usercount?[API KEY]` eg. `https://api.megdb.xyz/usercount?apikey=1234567890`, and then you'd get the response 
```
{
    "usercount": "42",
}
```

# List of endpoints

## `/usercount`
eg. `GET https://api.megdb.xyz/usercount?apikey=[API KEY]`

This will return the user count of the server requested and will return
```
{
    "usercount": "42",
}
```

## `/settings`
eg. `GET https://api.megdb.xyz/serversettings?apikey=[API KEY]&settingid=[SETTING ID]`

This will change a setting for your server and will return
```
{
    "setting": "[SETTING ID]",
    "settingname": "[SETTING NAME]",
    "oldstate": "off",
    "newstate": "on",
}
```

### List of settings
#### These toggle on or off the settings
# 
### - `dashboard`
eg. `GET https://api.megdb.xyz/serversettings?apikey=[API KEY]&setting=dashboard`

This will toggle the dashboard for your server (Disable the dashbaord or turn it back on) and will return
```
{
    "setting": "dashboard",
    "settingname": "Your servers dashboard",
    "oldstate": "off",
    "newstate": "on",
}
```
# 
### - `autoanounce`
eg. `GET https://api.megdb.xyz/serversettings?apikey=[API KEY]&setting=autoannounce`

This will toggle the automatic anouncments feature if this bot goes down or there is important news and will return
```
{
    "setting": "autoannounce",
    "settingname": "Automatic Anouncments",
    "oldstate": "off",
    "newstate": "on",
}
```
# 
### - `devtools`
eg. `GET https://api.megdb.xyz/serversettings?apikey=[API KEY]&setting=devtools`

This will toggle the developer tools which can be used to debug the bot and will return
```
{
    "setting": "devtools",
    "settingname": "Developer Tools",
    "oldstate": "off",
    "newstate": "on",
}
```
# 
### - `antivirus`
eg. `GET https://api.megdb.xyz/serversettings?apikey=[API KEY]&setting=antivirus`

This will toggle the virus total scanning which can be used keep your community safe and will return
```
{
    "setting": "antivirus",
    "settingname": "[SETTING NAME]",
    "oldstate": "off",
    "newstate": "on",
}
```
#

## `/announce`
eg. `GET https://api.megdb.xyz/announce?apikey=[API KEY]&channel=[CHANNELID]&announce=[YOUR MESSAGE]`

This will return the user count of the server requested and will return
```
{
    "channel": "42",
}
```

## `/ping`
eg. `GET https://api.megdb.xyz/ping`

This will return the last known ping (Ping from the last time somebody ran the ping command) and is the only request that doesnt need to be authenticated! This will return
```
{
    "ping": "136",
}
```
