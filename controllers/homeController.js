//call back functions for different routes
exports.getRoot = (req, res) => {
    res.render("signin", {errorMsg: false, emailData: false});
}
