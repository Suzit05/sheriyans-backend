
//crud operation with ejs and server side rendering by harsh sir

const port = 4000;
const express = require("express")
const app = express();
const path = require("path")
const userModel = require("./models/user")


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

////nnot able to find users ................fix this==========
app.get("/", (req, res) => {
    res.render("zapp")

})

app.get("/read", async (req, res) => {
    const usersAll = await userModel.find()  //sare users ko find kr lega
    res.render("read", { users: usersAll })    //agr upr allUsers rhta to ....res.render("read", {users= allUsers})
})


app.post("/create", async (req, res) => {
    const { name, email, imageUrl } = req.body
    let createdUser = await userModel.create({
        name: name,
        email: email,
        imageUrl: imageUrl
    })
    console.log(name, email, imageUrl)
    res.render("read", { name, email, imageUrl })
})



app.listen((port), () => {
    console.log(`listening on ${port} ✅`)
})