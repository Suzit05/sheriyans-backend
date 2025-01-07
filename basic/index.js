//sheriyans backend one shot video-----------

const port = 3001;
const express = require("express")
const app = express();

const userModel = require("./models/user")
const dbConnection = require("./config/db")

const morgan = require("morgan");
const { clearCache } = require("ejs");

//middlware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  //to not show password in the url
app.use(express.static("public")) //to serve static files (js, css)

app.set("view engine", 'ejs') //to render html

//get---server to frontend...........//post----frontend to server

app.get("/", (req, res, next) => {    //midlleware k use (req,res,next)

    const a = 1; const b = 4;
    console.log(a + b)
    next()
}, (req, res) => {
    res.render("home")         //file k naam "home"
})

app.post("/getdata", (req, res) => {  //server m data bbhejne ye lene k liye route bnana pdta h
    console.log(req.body)
    res.send("data received")
})

app.get("/about", (req, res) => {
    res.send("about section")
})

app.get("/register", (req, res) => {   //this register route to show/render register.ejs
    res.render("register")
})

app.post("/register", async (req, res) => {     //this register route to post/store data
    const { username, email, password } = req.body;  //destructring of req.body
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })


    res.send(newUser)
})


//READ-
app.get("/get-user", (req, res) => {
    userModel.find().then((users) => {   //user sekch v krna ho to userModel lao
        res.send(users) //find return all user available , find k andr condition v lga skte hai
    })   //find is also example
})



//UPDATE=
app.get("/get-update", async (req, res) => {
    await userModel.findOneAndUpdate(
        {
            username: "chils"
        }, {
        email: "chinga.com"
    }
    )
    res.send("user updated bro")
})

//DELETE

app.get("/get-delete", async (req, res) => {
    await userModel.findOneAndDelete({
        username: "rahil"
    })
    res.send("user deleted ✂")
})

app.get("/profile", (req, res, next) => {
    return next(new Error("something went wriong"))//console m dikhega , return next se niche wala chlega
})

app.use((err, req, res, next) => { //error handlers ko last m rkho
    console.error(err.stack)
    res.status(500).send("something broke") //frontend m dikhega
})

app.listen((port), () => {
    console.log(`listening on port ${port}⚡⚡`)
})

