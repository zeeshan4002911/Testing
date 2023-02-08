var QRCode = require('qrcode');
const express = require("express");
const path = require("path");
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index.ejs");    
})

app.post("/", (req, res) => {
  QRCode.toDataURL(req.body.text, function (err, url) {
    if (err) return console.log(err);
    res.json(url);
})
})

app.listen(8080, function(error){
    if(error) throw error
    console.log("Server is running on port 8080")
})