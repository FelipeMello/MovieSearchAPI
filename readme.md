#Mongoose Code
* Is in models directory
* module.exports
* Require

#Seeds File
* Run the seed file every time the server starts

#Add a Comment model!
* Debug
* Display comments on campground show page

#Comment New/Create
* Nested Routes
* Comment new and create routes
* Comment form


#RESTful Routes
#name   url             verb        desc
==================================================
INDEX   /campgrounds    GET         Campgrounds
NEW     /campground/new GET         NewCampground
CREATE  /campgrounds    POST        AddCampground
SHOW    /campground/:id GET         ShowCampground

#comments Nested Route
NEW    /campgrounds/:id/comments/new    GET
CREATE /campgrounds/:id/comments        POST

==================================================