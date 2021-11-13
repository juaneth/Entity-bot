# API - Flask
### The API lets you control your servers settings programmatically or you can take data like user count and messages per hour

# How to use
The base URL is `https://api.megdb.xyz/flaskapi/v1/` and there are multiple types of requests.

You could send a `GET` request to `https://api.megdb.xyz/flaskapi/v1/usercount/?[API KEY]&[SERVER ID]` eg. `https://api.megdb.xyz/flaskapi/v1/usercount/?1234567890&[YOUR SERVERS ID]`, and then you'd get the response 
```
{
    "usercount": "42",
    "server": "Juaneth's basement",
    "server-id": "YOUR SERVERS ID",
}
```

# List of endpoints

## `/usercount`
eg. `GET https://api.megdb.xyz/flaskapi/v1/usercount/?[API KEY]&[SERVER ID]`

This will return the user count of the server requested and will return
```
{
    "usercount": "42",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```

## `/settings`
eg. `PUT https://api.megdb.xyz/flaskapi/v1/serversettings/?[API KEY]&[SETTING ID]`

This will change a setting for your server and will return
```
{
    "setting": "[SETTING ID]",
    "settingname": "[SETTING NAME]",
    "oldstate": "off",
    "newstate": "on",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```

### List of settings
#### These toggle on or off the settings
# 
### - `dashboard`
eg. `GET https://api.megdb.xyz/flaskapi/v1/serversettings/?[API KEY]&dashboard`

This will toggle the dashboard for your server (Disable the dashbaord or turn it back on) and will return
```
{
    "setting": "dashboard",
    "settingname": "Your servers dashboard",
    "oldstate": "off",
    "newstate": "on",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```
# 
### - `autoanounce`
eg. `GET https://api.megdb.xyz/flaskapi/v1/serversettings/?[API KEY]&autoannounce`

This will toggle the automatic anouncments feature if this bot goes down or there is important news and will return
```
{
    "setting": "autoannounce",
    "settingname": "Automatic Anouncments",
    "oldstate": "off",
    "newstate": "on",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```
# 
### - `devtools`
eg. `GET https://api.megdb.xyz/flaskapi/v1/serversettings/?[API KEY]&devtools`

This will toggle the developer tools which can be used to debug the bot and will return
```
{
    "setting": "devtools",
    "settingname": "Developer Tools",
    "oldstate": "off",
    "newstate": "on",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```
# 
### - `antivirus`
eg. `GET https://api.megdb.xyz/flaskapi/v1/serversettings/?[API KEY]&antivirus`

This will toggle the virus total scanning which can be used keep your community safe and will return
```
{
    "setting": "antivirus",
    "settingname": "[SETTING NAME]",
    "oldstate": "off",
    "newstate": "on",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```
#

## `/announce`
eg. `GET https://api.megdb.xyz/flaskapi/v1/announce/?[API KEY]&`

This will return the user count of the server requested and will return
```
{
    "usercount": "42",
    "server": "[SERVER NAME]",
    "server-id": "[SERVER ID]",
}
```
