//backend by harsh sir

const port = 3000;   //npm init, express, port, views folder, app.set, render(ejs file)
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.render("index")
})

const path = require("path")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public"))) //setting up static public file

//dirname: avi kha pr kaam ho rha hai , uska location dega, aur join usko /public k sath jod rha


app.set("view engine", "ejs")
//ejs page m public likhne k jrurt nhi


app.get("/profile/:username", (req, res) => {  //:- lgane se dynamic , req.params- : k baad jo h
    res.send(`welcome, ${req.params.username}`)
})

app.get("/author/:username/:age", (req, res) => {
    res.send(`welcome ${req.params.username} , ${req.params.age}`)
})

app.listen((port), () => {
    console.log(`listening on port ${port}⚡💥⚡`)
})

