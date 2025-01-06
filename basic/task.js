const port = 4000;
const express = require("express")
const app = express()
const path = require("path")

const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))  //to not show password in the url
app.use(express.static(path.join(__dirname, "public"))) //setting up static public file



app.set("view engine", "ejs")

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        console.log(files)
    })
    res.render("task")
})

app.listen(port, () => {
    console.log(`listening on ${port}💥`)
})