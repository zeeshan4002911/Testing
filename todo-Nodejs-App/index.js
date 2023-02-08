const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Array of todo
let todos = [];

app.get("/", (req, res) => {
    res.render("index", { todos: todos });
})

app.post("/", (req, res) => {
    todos.push(req.body.todo);
    console.log(todos);
    res.json({ status: "success", });
})

app.delete("/", (req, res) => {
    todos.splice(req.body.idx, 1);
    res.json({ status: "success", });
})

app.put("/", (req, res) => {
    todos.splice(req.body.idx, 1, req.body.new_data)
    res.json({ status: "success", });
})

const PORT = 3001;
app.listen(PORT, function (error) {
    if (error) return console.log("ERROR", error)
    console.log("Server is running on port", PORT);
})