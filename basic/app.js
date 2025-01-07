
//backend by harsh sir (crud in mongodb)-============================


port = 3002;
const express = require("express")
const app = express()

const userModel = require("./usermodel")
app.get("/", (req, res) => {
    res.send("welcome to crud")
})

app.get("/create", async (req, res) => {        //mongoose code async hota hai, isliye async-AWAIT k use kro
    let createdUser = await userModel.create({
        name: "harsh",                          //model m jo jo h usme value daal do
        email: "haesh@GMAIL.COM",
        username: "harshi99"
    })

    res.send(createdUser)
})


app.listen((port), () => {
    console.log("listeenig on port 3002 ☣")
})