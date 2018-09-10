const   express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        Campground      = require("./models/campground"),
        Comment         = require("./models/comment"),
        User            = require("./models/user"),
        seedDB          = require("./seeds");
    

//requiring routes
const   commentRoutes    = require("./routes/comments"),
        campgroundRoutes = require("./routes/campgrounds"),
        indexRoutes      = require("./routes/index");

//Using mongoose to connect to cloud mongodb Atlas
mongoose.connect("mongodb://localhost/yelp_camp_v6");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();
//Connect to the yelp_cap databse

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Here we go with this thing called salt!",
    resave: false,
    saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this will run for every single route middleware
//Check if the user is logged in
//req.user will be empty or it will contain the username and id
app.use((req, res, next) =>{
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});