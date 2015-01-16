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
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};


//Work Section
var work = {
    "jobs": [
        {
            "employer": "CACI",
            "title": "Analyst",
            "location": "Washington, DC",
            "dates": "2011-resent",
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
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
    
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   
        $(".work-entry:last").append(formattedEmployerTitle)
            .append(formattedDates)    
            .append(formattedDescription);
    }
};


function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));


//Education Section
var education = {
    "schools": [
        {
            "name": "Excelsior College",
            "location": "Albany, NY",
            "degree": "Bachelor of Science",
            "majors": "Liberal Studies",
            "dates": "2006",
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
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/web"
        },
        {
            "title": "JavaScript",
            "school": "Codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/javascript"
        },
        {
            "title": "Python",
            "school": "Codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/python"
        },
        {
            "title": "Intro to Programming",
            "school": "Treehouse",
            "dates": "2014",
            "url": "https://teamtreehouse.com/library/introduction-to-programming"
        }
    ]
};


//display education
education.display = function() {
      for (school in education.schools) {
          $("#education").append(HTMLschoolStart);
          
          var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
          var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

          $(".education-entry:last").append(formattedSchoolNameDegree)
            .append(formattedSchoolLocation)
            .append(formattedSchoolDates)
            .append(formattedSchoolMajor);
      } 
     
     //Online Classes 
      $("#education").append(HTMLonlineClasses);
      for (course in education.onlineCourses) {
          var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
          var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
          var formattedOnlineTitleSchool = HTMLonlineTitle + HTMLonlineSchool;
          var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
          var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
          
          $(".online-entry:last").append()
      }
};


//Project Section
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


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%".projects.projects[project].images[image]);
                $("projects-entry:last").append(formattedProjectImage);
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
