const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

sessionOptions= {secret: "mysupersecretstring", resave: false, saveUninitialized: true};
app.use(session(sessionOptions));

app.get
// app.use("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;

//     }
//     else{
//         req.session.count = 1;

//     }
//     res.send(`You sent a ${req.session.count} request`);
// });

app.get("/test", (req,res)=>{
    res.send("test successful");

});
app.listen(3000, () => {
    console.log("server is listinging");
});