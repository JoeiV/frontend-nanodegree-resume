var bio = {
    "name" : "Joei Leonard",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "412-555-5555",
        "email" : "Joei_Leonard@yahoo.com",
        "github" : "JoeiV",
        "location" : "Washington, DC"
    },
    "welcomeMessage" : "Welcome to Joei's Resume",
    "bioPic" : "images/selfie.jpg",
    "skills": ["HTML/CSS", "JavaScript", "Windows | Mac | Linux"]
};


//display bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);
    
    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    
    if (bio.skills.length > 0) {
        $("header").append(HTMLskillsStart);
        for (skills in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").append(formattedSkill);
        }
    }
};


var work = {
    "jobs": [
        {
            "employer": "CACI",
            "title": "Analyst",
            "location": "Washington, DC",
            "dates": "2011-present",
            "description": "insert job description here"
        }, 
        {
            "employer": "L3 Communications",
            "title": "Analyst",
            "location": "United Kingdom",
            "dates": "2010-2011",
            "description": "insert job description here"
        }    
    ]
};


//display work object
work.display = function () {
    for (jobs in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
    $(".work-entry:last").append(formattedDescription);
    }
};


function locationizer(work_obj) {
    var locationArray = [];
    
    for (jobs in work_obj.jobs) {
        var newLocation = work_obj.jobs[jobs].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));


var education = {
    "schools": [
        {
            "name": "Excelsior College",
            "location": "Albany, NY",
            "degree": "Bachelor of Science",
            "major": "Liberal Studies",
            "date": "2006",
            "url": "excelsior.edu"
        }],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud804"
        },
        {
            "title": "HTML and CSS",
            "school": "Codecademy",
            "date": "2014",
            "url": "http://www.codecademy.com/en/tracks/web"
        },
        {
            "title": "JavaScript",
            "school": "Codecademy",
            "date": "2014",
            "url": "http://www.codecademy.com/en/tracks/javascript"
        },
        {
            "title": "Python",
            "school": "Codecademy",
            "date": "2014",
            "url": "http://www.codecademy.com/en/tracks/python"
        },
        {
            "title": "Intro to Programming",
            "school": "Treehouse",
            "date": "2014",
            "url": "https://teamtreehouse.com/library/introduction-to-programming"
        }
    ]
};


education.display() = function() {
    education.schools
}


var projects = {
    "projects": [
        {
            "title": "project 1",
            "dates": "2014",
            "description": "project 1 description",
            "images": "image url"
        },
        {
           "title": "project 1",
            "dates": "2014",
            "description": "project 1 description",
            "images": "image url" 
        }]
};


var displayProjects = function() {
    
}

projects.display = function() {
    for (project in projects.projects) {
        $("projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%".projects.projects[project].images[image]);
                $("projects-entry:last").append(formattedImage);
            }
        }
    }
}

//display all funcitons
bio.display();
work.display()
education.display();
projects.display();

//internationalize button
$('main').append(internationalizeButton); 

//google maps 
$("#mapDiv").append(goodleMap);
