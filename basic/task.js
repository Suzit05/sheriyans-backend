const port = 4000;
const express = require("express")
const app = express()
const path = require("path")

const fs = require("fs");
const { fileLoader } = require("ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))  //to not show password in the url
app.use(express.static(path.join(__dirname, "public"))) //setting up static public file



app.set("view engine", "ejs")

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render("task", { files: files })  //task render krega, aur files(folder) ka files(content) task ko bhejega
    })

})



app.get("/file/:filename", (req, res) => {  //filename ko dynamic bnao qk wo (title) change hoga
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {  //utf-8--english
        console.log(filedata)
        res.render('show', { filename: req.params.filename, filedata: filedata }) //jo jaha hai usko ejs m bhej do
    })

})

app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function (err) {
        res.redirect("/")  //title m space ho skta hai ..isliye split and join kr rhe
    })


})

app.listen(port, () => {
    console.log(`listening on ${port}💥`)
})