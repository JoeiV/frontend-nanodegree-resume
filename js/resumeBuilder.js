var bio = {
"name" : "Joei Leonard",
"role" : "Web Developer",
"contacts" : {
"mobile" : "412-555-5555",
"email" : "myemail@gmail.com",
"twitter" : "@me",
"github" : "JoeiV",
"location" : "Washington, DC",
},
"welcomeMessage" : "Welcome to Joei's Resume",
"bioPic" : "images/selfie.jpg",
"skills": [
 "HTML/CSS", "JavaScript", "Windows/Mac/Linux Proficient"
 ],
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

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
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2015",
            "url": "udacity.com"
        }]
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

function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    
    return locationArray;
}

console.log(locationizer(work));

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

if (bio.skills.length > 0) {
    $("header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

function displayWork() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.job[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
};

displayWork(); 

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


$('main').append(internationalizeButton); 

$("#mapDiv").append(goodleMap);
