const User = require("../models/user");

// exports.getAllUsers = (req, res) => {
//     User.find({})
//     .exec()
//     .then(users => {
//         res.render("users", {users: users})
//     })
//     .catch((error) => {
//         console.log(error);
//         return [];
//     })
//     .then(() => {
//         console.log("promise complete");
//     })
// };

//get signup form
exports.showSignUp = (req, res) => {
    res.render("signup", {formData: "temp", userFields: "temp", errorInfo: "temp", optional: "temp", sec: "temp"});
};

//post reqs
//save user data    
exports.checkUser = (req, res, next) => {
    let userIsValid = false;
    let errorInfo = "";
    
    let newUser = new User({
        firstName: req.body.firstNameTxt,
        lastName: req.body.lastNameTxt,
        username: req.body.usernameTxt,
        gender: req.body.ddGender,
        location: req.body.locationTxt,
        email: req.body.emailInput, 
        password: req.body.passwordInput,
        securityQ: req.body.secQ,
        securityA: req.body.secQAnswer
    });

    //get form values as well as elements to display the error if there is one
    let userConfirmPassword = req.body.confirmPasswordInput; //to check against the user password later
    let userFieldValues = [newUser.firstName, newUser.lastName, newUser.username, newUser.email, newUser.password, userConfirmPassword]; //make it an array so we can see which element fails
    let optionalFields = [newUser.gender, newUser.location];
    let fieldError = ["First Name cannot be left empty", "Last Name cannot be left empty", 
        "Username cannot be left empty", "Email cannot be left empty", 
        "Password cannot be left empty", "Confirm Password cannot be left empty"];
    let secqs = [newUser.securityQ, newUser.securityA];
    //let fieldElement = ["firstNameTxt", "lastNameTxt", "usernameTxt", "emailInput", "passwordInput", "confirmPasswordInput"];

    
    
    //check if required fields are filled - must check first/last/user name, both passwords and the security question to make sure they are not blank
    userIsValid = true;
    for(let i = 0; i < userFieldValues.length; i++){
        if(userFieldValues[i] == ""){
            //pass userdata to fill out rendered form with the info they entered plus the errInfo to display which element had an error
            userIsValid = false;
        }
    }
    if(userIsValid){
        next();
    }
    else{
        // newUser = JSON.stringify(newUser);
        res.render("signup", {formData: newUser, userFields: userFieldValues, errorInfo: fieldError, optional: optionalFields, sec: secqs});
    }
    
}

exports.saveUser = (req, res) => {
    
    let newUser = new User({
        firstName: req.body.firstNameTxt,
        lastName: req.body.lastNameTxt,
        username: req.body.usernameTxt,
        gender: req.body.ddGender,
        location: req.body.locationTxt,
        email: req.body.emailInput, 
        password: req.body.passwordInput,
        securityQ: req.body.secQ,
        securityA: req.body.secQAnswer
    }); 

    newUser.save()
    .then(() => {
        res.render("thanks");
    })
    .catch(error => {res.send(error)});

};

exports.getLogIn = (req, res) => {
    res.render("signin");
};


exports.logIn = (req, res) => {
    //check database to see if credentials exist and render home if they do otherwise give that error
    let emailToCheck = req.body.emailInput;
    let passwordToCheck = req.body.passwordInput;
};