const   express = require("express"),
        router = express.Router(),
        Campground = require("../models/campground");
        
// home page
router.get("/", function(req, res){
    res.render("landing");
});


//INDEX - show all campgrounds - this get all the campgrounds from the mongodb database
router.get("/campgrounds", function(req,res){  
    // console.log(req.user);
    //Get All campgrounds from DB
    //when the function find() is done then it call the callback and render the data
    Campground.find({}, function(err, allCampgrounds){//callback
        if(err){
            console.log(err);
        }else{
                            //name          data
            res.render("campgrounds/index",{campgrounds:allCampgrounds, currentUser: req.user});      //then render it
        }
    });
    
});

//CREATE - add new campground to DB
router.post("/campgrounds", function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    
    let newCampGround = {name: name, image: image, description: desc};
    Campground.create(newCampGround, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});


//NEW - show form to create new campground - Restful convention show the form to send the data to post/campgrouds
router.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");    
});

//the new has to come before SHOW
//SHOW - shows more infor about a specific campground
router.get("/campgrounds/:id", function(req, res){
    //find campground with provided ID
    Campground.findById(req.params.id).
    populate("comments").
    exec(function(err, foundCampground){
        if(err){
            console.log(err);   
        }else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show",{campground: foundCampground});
        };
    });
});

module.exports = router;