const express = require("express");
const app = express();
const { data } = require("./data.js");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get("/search", (req, res) => {
    try {
        const search = req.query.search;
        const type = req.query.type;

        const pattern = new RegExp(search);
        const result = data.filter((obj) => obj[type].match(pattern));
        res.json({
            status: "success",
            data: result
        })
    } catch {
        res.json({
            status: "failed",
            data: []
        })
    }
})

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log("server is runiing on port", PORT));