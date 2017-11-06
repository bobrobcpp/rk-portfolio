
//from helper.js

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var model = {
// Projects section and display function definition
projects : {
    "projects": [
        {
            "title": "Neighbourhood Map- London",
            "dates": "August 2017 - September 2017",
            "description": "A responsive neighbourhood map of central London utilising GoogleMaps API and drawing local information from Foursquare API",
            "url": "https://bobrobcpp.github.io/neighbourhood-map/",
            "images": ["../img/nm1-420.jpg", "../img/nm2-420.jpg", "../img/nm3-420.jpg"]
        },

       {
            "title": "Web Performance Project: Performant Pizza",
            "dates": "July 2017",
            "description": "Tuned a janky website to run animations smoothly at 60fps",
            "url": "https://github.com/bobrobcpp/pizza-performance",
            "images": ["../img/pizza-420.jpg"]

        },

               {
            "title": "HTML Canvas Project: Frogger Game",
            "dates": "June 2017",
            "description": "A simple frogger clone using JavaScript and HTML Canvas",
            "url": "https://github.com/bobrobcpp/frontend-nanodegree-arcade-game-",
            "images": ["../img/frog1-420.jpg", "../img/frog2-420.jpg", "../img/frog3-420.jpg"]
        },


        {
            "title": "Portfolio Project",
            "dates": "April 2017 - May 2017",
            "description": "Created a responsive website with HMTL, CSS and media queries",
            "url": "https://github.com/bobrobcpp/portfolio/",
            "images": ["../img/la-420.jpg", "../img/tiber-420.jpg", "../img/salalah-420.jpg"]
        },
        {
            "title": "Unity Project",
            "dates": "April 2017 - May 2017",
            "description": "Experimenting with the Unity editor",
            "url": "https://github.com/bobrobcpp/unity-test-2017/",
            "images": ["../img/unity1-420.jpg", "../img/unity2-420.jpg", "../img/unity3-420.jpg"]
        }
    ]
}

}

var controller = {
    init: function(){
// Function calls to run page and display all sections
        view.displayProjects();
    },

    getProjects: function(){
        return model.projects;
    }

//end of controller
}

var view = {


displayProjects : function() {
    var projects = controller.getProjects();
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formatPTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
        var formatPDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formatPDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formatPTitle);
        $(".project-entry:last").append(formatPDates);
        $(".project-entry:last").append(formatPDescription);

        $("<div class='container imgContain'></div>").insertAfter(".project-entry:last");

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formatPImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

            $(".container:last").append(formatPImages);
            $('img:last').addClass('proj-img');
        }
    }

}

}







controller.init();





