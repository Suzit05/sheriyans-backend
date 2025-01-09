
//backend by harsh sir (crud in mongodb)-============================


port = 3002;
const express = require("express")
const app = express()

const userModel = require("./usermodel")
app.get("/", (req, res) => {
    res.send("welcome to crud")
})

//create
app.get("/create", async (req, res) => {        //mongoose code async hota hai, isliye async-AWAIT k use kro
    let createdUser = await userModel.create({
        name: "harsh",                          //model m jo jo h usme value daal do
        email: "haesh@GMAIL.COM",
        username: "harshi99"
    })

    res.send(createdUser)
})

//update 
app.get("/update", async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({ username: "harshi99" }, { name: "harsh raja sharma" }, { new: true })
    res.send(updatedUser)
})

//read
app.get("/read", async (req, res) => {
    let users = await userModel.find({ name: "harsh" });  //find array deta hai , if sb users chaiye = find()
    res.send(users)  //findOne object deta hai
})


//delete
app.get("/delete", async (req, res) => {
    const deletedUsers = await userModel.findOneAndDelete({ name: "harsh" })
    res.send(deletedUsers)
})

app.listen((port), () => {
    console.log("listeenig on port 3002 ☣")
})