var mongoose        = require("mongoose"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment");

var data = [
    {
        name: "Camp 1",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.vox-cdn.com%2Fthumbor%2FcJsjf1KCt0lSO7wyOe6Vm6nFxGk%3D%2F0x271%3A5225x3210%2F1600x900%2Fcdn0.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F54137641%2Fcamping_tents.0.jpg&f=1&nofb=1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem culpa accusantium animi! Aperiam consequatur laudantium impedit quidem deleniti, inventore atque odit illo voluptatum excepturi quisquam veritatis delectus vitae quas. Laborum, asperiores. Repellendus blanditiis voluptates aperiam, vitae accusantium quia alias repudiandae doloribus eaque a ratione amet, natus qui praesentium exercitationem"
    },
    {
        name: "Camp 2",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-NhpdVu1zqLtLmsrkiq1EAHaE7%26pid%3DApi&f=1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem culpa accusantium animi! Aperiam consequatur laudantium impedit quidem deleniti, inventore atque odit illo voluptatum excepturi quisquam veritatis delectus vitae quas. Laborum, asperiores. Repellendus blanditiis voluptates aperiam, vitae accusantium quia alias repudiandae doloribus eaque a ratione amet, natus qui praesentium exercitationem"
    },
    {
        name: "Camp 3",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LctIlCHGhSlqVtTQhfvkRgHaE8%26pid%3DApi&f=1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem culpa accusantium animi! Aperiam consequatur laudantium impedit quidem deleniti, inventore atque odit illo voluptatum excepturi quisquam veritatis delectus vitae quas. Laborum, asperiores. Repellendus blanditiis voluptates aperiam, vitae accusantium quia alias repudiandae doloribus eaque a ratione amet, natus qui praesentium exercitationem"
    }
]
function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
            // add few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                            text: "this place is great, but I wish it had internet",
                            author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created a new comment");
                                }
                        })
                    }
                })
            })
        }
    })
    // add few comments
}

module.exports = seedDB;

