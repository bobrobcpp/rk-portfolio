// var HTMLbootstrapCard =
var HTMLbootstrapRow = '<div class="row proj-row"></div>';
// var HTMLcontainerDiv = '<div class="col-md-4"></div>';
var HTMLbootstrapCard = '<div class="col-md-6 col-lg-4 c-container"><div class="card proj-card"></div></div>';
//from helper.js
var HTMLprojectStart = '<div class="project-entry card-body"></div>';
var HTMLprojectTitle = '<a href="#" class="card-title proj-title">%data%</a>';
var HTMLprojectDates = '<div class="date-text card-subtitle mb-2 text-muted">%data%</div>';
var HTMLprojectDescription = '<p class="card-text"><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var model = {
    // Projects section and display function definition
    projects: {
        projects: [
            {
                title: 'Cryptocurrency Converter',
                dates: 'February 2018 - Present',
                description:
                    'A utility to get cryptocurrency prices and convert them into your international currency of choice.  Utilised HandlebarsJS to create a dynamic template with Bootstrap styling',
                url: 'https://github.com/bobrobcpp/crypto-app',
                images: ['../img/crypto-site-1260px.jpg', '../img/nm2-420.jpg', '../img/nm3-420.jpg']
            },
            {
                title: 'Memory Game',
                dates: 'January 2018 - Present',
                description: 'A snap style card game using React and built with a webpack setup',
                url: 'https://github.com/bobrobcpp/react-memory-game',
                images: ['../img/memory-game-1260px.jpg', '../img/nm2-420.jpg', '../img/nm3-420.jpg']
            },
            {
                title: 'Pixel Art Maker',
                dates: 'September 2017 - November 2017',
                description: 'Used create-react-app to build a table drawing app',
                url: 'https://github.com/bobrobcpp/pixel-art-maker',
                images: ['../img/pixel-maker-1260px.jpg', '../img/nm2-420.jpg', '../img/nm3-420.jpg']
            },
            {
                title: 'Neighbourhood Map- London',
                dates: 'August 2017 - September 2017',
                description:
                    'A responsive neighbourhood map of central London utilising GoogleMaps API and drawing local information from Foursquare API',
                url: 'https://bobrobcpp.github.io/neighbourhood-map/',
                images: ['../img/nm1-420.jpg', '../img/nm2-420.jpg', '../img/nm3-420.jpg']
            },

            {
                title: 'Web Performance Project',
                dates: 'July 2017',
                description: 'Tuned a janky website to run animations smoothly at 60fps',
                url: 'https://github.com/bobrobcpp/pizza-performance',
                images: ['../img/pizza-420.jpg']
            },

            {
                title: 'HTML Canvas: Frogger Game',
                dates: 'June 2017',
                description: 'A simple frogger clone using JavaScript and HTML Canvas',
                url: 'https://github.com/bobrobcpp/frontend-nanodegree-arcade-game-',
                images: ['../img/frog1-420.jpg', '../img/frog2-420.jpg', '../img/frog3-420.jpg']
            },

            {
                title: 'Portfolio Project',
                dates: 'April 2017 - May 2017',
                description: 'Created a responsive website with HMTL, CSS and media queries',
                url: 'https://github.com/bobrobcpp/portfolio/',
                images: ['../img/la-420.jpg', '../img/tiber-420.jpg', '../img/salalah-420.jpg']
            },
            {
                title: 'Unity Project',
                dates: 'April 2017 - May 2017',
                description: 'Experimenting with the Unity editor',
                url: 'https://github.com/bobrobcpp/unity-test-2017/',
                images: ['../img/unity1-420.jpg', '../img/unity2-420.jpg', '../img/unity3-420.jpg']
            }
        ]
    }
};

var controller = {
    init: function() {
        // Function calls to run page and display all sections
        view.displayProjects();
    },

    getProjects: function() {
        return model.projects;
    }

    //end of controller
};

var view = {
    displayProjects: function() {
        var projects = controller.getProjects();
        $('#projects').append(HTMLbootstrapRow);
        for (let i = 0; i < projects.projects.length; i++) {
            $('.proj-row:last').append(HTMLbootstrapCard);
            $('.proj-card:last').append(HTMLprojectStart);
            var formatPTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace(
                '#',
                projects.projects[i].url
            );
            var formatPDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formatPDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            $('.project-entry:last').append(formatPTitle);
            $('.project-entry:last').append(formatPDates);

            $('.project-entry:last').append("<div class='proj-box img-contain'></div>");

            var formatPImages = HTMLprojectImage.replace('%data%', projects.projects[i].images[0]);
            $('.img-contain:last').append(formatPImages);
            $('img:last').addClass('proj-img img-fluid');
            $('.project-entry:last').append(formatPDescription);
        }
    }
};

controller.init();
