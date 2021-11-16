const { json } = require("express");
var express = require("express");
var app = express();
app.listen(1455, () => {
    console.log("Server running on http://localhost:1455");



    app.get("/usercount", (req, res, next) => {
        if (req.query.apikey == undefined) {
            res.status(400);
            res.send('API Key not defined, you can request one by following the instructions at https://github.com/Flask-Discord/Flask/blob/main/api/README.md');
        } else {
            res.status(200);
            var serverid = req.query.serverid;

            console.log("Server ID: " + serverid + " API Key: " + req.query.apikey);
            res.json({
                "usercount": "42",
                "server": "Flask",
                "server-id": "909232074253295638",
            });
        }
    });

    app.get("/settings", (req, res, next) => {
        if (req.query.apikey == undefined || "") {
            res.status(400);
            res.send('API Key not defined, you can request one by following the instructions at https://github.com/Flask-Discord/Flask/blob/main/api/README.md');
        } else {
            res.status(200);
            var serverid = req.query.serverid;

            console.log("ServerID:" + serverid + " API Key: " + req.query.apikey);
            res.json({
                "usercount": "42",
                "server": "Flask",
                "server-id": "909232074253295638",
            });
        }
    });
});