var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user");
    
// index route
router.get("/", function(req, res){
    res.render("landing");
})

//  show register form
router.get("/register", function(req, res){
    res.render("register");
})

// hanfle sign up logic
router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username)
            res.redirect("/campgrounds");
        })
    })
})

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

// router.post(login, middleware, callback)
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){});

// logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("error", "loged you out");
    res.redirect("/campgrounds");
})

module.exports = router;