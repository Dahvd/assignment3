const express = require("express"),
app = express(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
usersController = require("./controllers/usersController"),
layouts = require("express-ejs-layouts"),

mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/soc_net", 
    {useNewUrlParser: true});

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.getRoot);

//middlewears
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/signup", usersController.showSignUp);
app.post("/signup", usersController.checkUser);
app.post("/signup", usersController.saveUser);

app.get("/login", usersController.getLogIn);
app.post("login", usersController.logIn);
// app.get("/subscribers", subscribersController.getAllSubscribers);
// app.get("/contact", subscribersController.getSubscriptionPage);
// app.post("/subscribe", subscribersController.saveSubscriber);

//app.get("/contact", homeController.showSignUp);
//app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Sever is running on port: ${app.get("port")}`);
});