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
* name   url             verb        desc
* INDEX   /campgrounds    GET         Campgrounds
* NEW     /campground/new GET         NewCampground
* CREATE  /campgrounds    POST        A ddCampground
* SHOW    /campground/:id GET         ShowCampground

#comments Nested Route
* NEW    /campgrounds/:id/comments/new    GET
* CREATE /campgrounds/:id/comments        POST

##Auth Pt 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt 2 - Register
* Configure Passport
* Register Routes
* Register Template

##Auth Pt 3 - Login
* Login Routes
* Login Template

##Auth Pt 4 - Logout/NavBar
* Add logut routes
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

##Auth Pt 5 - Show/Hide Links
* Show/Hide auth links in navbar correctly