const   express = require("express"),
        router = express.Router({mergeParams:true}),
        Campground = require("../models/comment"),
        Comment = require("../models/comment");
        
   //==================//
  // COMMENTS ROUTES  //
 //==================//
 router.get("/campgrounds/:id/comments/new", isLoggedIn, (req, res)=>{
    // find campground by id 
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {campground: campground});
        }
    })
    

 });

 router.post("/campgrounds/:id/comments", isLoggedIn, (req, res) => {
     //Lookup campground by ID
     Campground.findById(req.params.id, function(err, campground){
         if(err){
             console.log(err);
             res.redirect("/campgrounds");
         }else{
            //Create a new comment
            //connect new comment to campground
            //redirect to campground show page.
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/'+campground._id);
                }
            })
         }
     })
     
 })
 //middleware
 function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
