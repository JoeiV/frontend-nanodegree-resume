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
    $("#header").prepend(formattedRole).prepend(formattedName);
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
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};


//Work Section
var work = {
    "jobs": [
        {
            "employer" : "CACI",
            "title" : "Analyst",
            "location" : "Washington, DC",
            "dates" : "2011 - Present",
            "description" : "Analyze selected material as directed"
        },
        {
            "employer" : "L3 Communications",
            "title" : "Analyst",
            "location" : "United Kingdom",
            "dates" : "2010 - 2011",
            "description" : "Analyze selected material as directed"
        }
    ]
};


//display work object
work.display = function() {
   work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle)
            .append(formattedEmployerLocation)
            .append(formattedDates)
            .append(formattedDescription);
    });
};


//Education Section
var education = {
    "schools" : [
        {
            "name" : "Excelsior College",
            "location" : "Albany, NY",
            "degree" : "Bachelor of Science",
            "majors" : "Liberal Studies",
            "dates" : "2006",
        }],
    "onlineCourses" : [
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "http://www.udacity.com/course/ud804"
        },
        {
            "title" : "HTML and CSS",
            "school" : "Codecademy",
            "dates" : "2014",
            "url" : "http://www.codecademy.com/en/tracks/web"
        },
        {
            "title" : "JavaScript",
            "school" : "Codecademy",
            "dates" : "2014",
            "url" : "http://www.codecademy.com/en/tracks/javascript"
        },
        {
            "title" : "Python",
            "school" : "Codecademy",
            "dates" : "2014",
            "url" : "http://www.codecademy.com/en/tracks/python"
        },
        {
            "title" : "Intro to Programming",
            "school" : "Treehouse",
            "dates" : "2014",
            "url" : "https://teamtreehouse.com/library/introduction-to-programming"
        }]
};


//display education
education.display = function() {
      education.schools.forEach(function(school) {
          $("#education").append(HTMLschoolStart);

          var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
          var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

          $(".education-entry:last").append(formattedSchoolNameDegree)
            .append(formattedSchoolLocation)
            .append(formattedSchoolDates)
            .append(formattedSchoolMajor);
      });

     //Online Classes
      if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};


//Project Section
var projects = {
    "projects" : [
        {
            "title" : "project 1",
            "dates" : "2014",
            "description" : "project 1 description",
            "images" : "image url"
        },
        {
           "title" : "project 1",
            "dates" : "2014",
            "description" : "project 1 description",
            "images" : "image url"
        }]
};


projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle)
            .append(formattedProjectDates)
            .append(formattedProjectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        }
    });
};


function inName(name) {
  name = name.trim().split(" ");
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}


//display all funcitons
bio.display();
work.display();
education.display();
projects.display();

//internationalize button
$('#main').append(internationalizeButton);
//google maps
$("#mapDiv").append(googleMap);