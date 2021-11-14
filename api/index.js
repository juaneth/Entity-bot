const { json } = require("express");
var express = require("express");
var app = express();
app.listen(1455, () => {
    console.log("Server running on port 1455");

    app.get("/usercount", (req, res, next) => {
        res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    });
});