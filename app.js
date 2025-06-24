const express = require('express');
const app = express();

app.get("/", function(req, res){
res.send("hid")
});

app.listen(3000);