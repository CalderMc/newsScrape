var router = require("express").Router();
const Article = require("../models/Article");

router.get("/", function(req, res){
    console.log("here")
    Article.find({}).then(function(data){
        res.render("home", {
            articles: data
            
        });
    })

    
});


module.exports = router
