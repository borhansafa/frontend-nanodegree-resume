function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = work.jobs[job]['employer'];
        var title = work.jobs[job]['title'];
        var job_location = work.jobs[job]['location'];
        var job_dates = work.jobs[job]['dates'];
        var job_description = work.jobs[job]['description'];

        var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", title);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", job_location);
        var formattedJobDates = HTMLworkDates.replace("%data%", job_dates);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", job_description);
        var formattedWorkEmployerTitle = formattedEmployer + formattedTitle;

        var workEntryLast = $(".work-entry:last");
        workEntryLast.append(formattedWorkEmployerTitle);
        workEntryLast.append(formattedJobLocation);
        workEntryLast.append(formattedJobDates);
        workEntryLast.append(formattedJobDescription);
    }


}
function displayBio() {
    var name = bio.name;
    var role = bio.role;
    var welcome_message = bio.welcomeMessage;
    var biopic = bio.biopic;
    var mobile = bio.contacts.mobile;
    var email = bio.contacts.email;
    var gitHub = bio.contacts.github;
    var myLocation = bio.contacts.location;

    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcome_message);
    var formattedBioPic = HTMLbioPic.replace("%data%", biopic);
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    var formattedEmail = HTMLemail.replace("%data%", email);
    var formattedGitHub = HTMLgithub.replace("%data%", gitHub);
    var formattedLocation = HTMLlocation.replace("%data%", myLocation);
    var header = $("#header");

    header.append(formattedName);
    header.append(formattedRole);
    header.append(formattedMobile);
    header.append(formattedEmail);
    header.append(formattedGitHub);
    header.append(formattedLocation);
    header.append(formattedWelcomeMessage);
    header.append(formattedBioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[0]
        )
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[1]
        )
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[2]
        )
        $("#skills").append(formattedSkill);
    }
}

var bio = {
    "name": "MD.Borhan Safa",
    "role": "Web Developer",
    "welcomeMessage": "Hello, My name is MD.Borhan Safa and I thank you very much for visiting my website.",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "+4917630157951",
        "email": "borhansafa@yahoo.com",
        "github": "borhansafa",
        "location": "Alfred-Messel-Weg 6A, Darmstadt, 64287, Germany"
    },
    "skills": ["PHP", "MySql", "CakePHP"]
}

var work = {
    "jobs": [{
        "employer": "EBiz Consult",
        "title": "Web Developer",
        "location": "Egelsbach, Darmstadt",
        "dates": "15.04.2016 - 01.08.2016",
        "description": "I worked the as a web deveoper with PHP and MySql technology."
    }, {
        "employer": "UkoWapi",
        "title": "Web and Android Developer",
        "location": "TIZ Building, Darmstadt",
        "dates": "01.12.2016 - Continuing",
        "description": "I am working as a web and android deveoper with PHP and MySql technology for the web portal and Java in Android Studio for the Android App."
    }, {
        "employer": "TU Darmstadt",
        "title": "Web Developer (HiWi)",
        "location": "TU Darmstadt, Darmstadt",
        "dates": "28.03.2017 - Continuing",
        "description": "I am working as a web deveoper with PHP and MySql technology in cakePHP Framework for the web portal."
    }]
}



var education = {
    "schools": [{
        "name": "Cardiff Metropolitan University",
        "location": "London",
        "degree": "BSC",
        "majors": ["DBMS", "Advanced Software Engineering", "OOP"],
        "dates": 2013,
        "url": "www.example.com"
    }, {
        "name": "TU Darmstadt",
        "location": "Darmstadt",
        "degree": "Masters",
        "majors": ["Large Scale Parallel Computing", "TK1", "Software Composition Paradigm"],
        "dates": 2017,
        "url": "www.example.com"
    }],
    "onlineCourses": [{
        "title": "Javascript Syntax",
        "school": "Udacity",
        "dates": 2017,
        "url": "http://www.udacity.com"
    }]
}


displayWork();
displayBio();

/**
 * The following function is to check where the users have clicked on your website.
 * You can view them in the console panel. The logClicks function can be found in the helper.js file.
 */
$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

function inName(name) {
    //trim() removes white spaces from the front and back of a string.
    var newName = name.trim().split(" ");
    console.log(newName);
    newName[1] = newName[1].toUpperCase();
    newName[0] = newName[0].slice(0,1).toUpperCase() +
        newName[0].slice(1).toLowerCase();
    return newName[0] + " " + newName[1];
}

$("#main").append(internationalizeButton);

var projects = {
    "projects": [{
        "title": "BPHF (Bangladesh Poor Health Foundation)",
        "dates": "01.09.2012 - 01.03.2013",
        "description": "Building a non-profit organisation website using Joomla!",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }, {
        "title": "Silent Music Player App (Android)",
        "dates": "01.10.2016 - 01.03.2017",
        "description": "Building a Silent music app with Android Studio and Java",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }]
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = projects.projects[project]['title'];
        var projectDates = projects.projects[project]['dates'];
        var projectDescription = projects.projects[project]['description'];
        var projectImages = [];
        if(projects.projects[project].images.length>0){
            for (image in projects.projects[project]['images']){
                projectImages.push(projects.projects[project]['images'][image]);
            }
        }
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projectDescription);
        var projectEntryLast = $(".project-entry:last");
        projectEntryLast.append(formattedProjectTitle);
        projectEntryLast.append(formattedProjectDates);
        projectEntryLast.append(formattedProjectDescription);
        var formattedProjectImages = [];
        for (image in projectImages) {
            projectEntryLast.append(HTMLprojectImage.replace("%data%", projectImages[image]));
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);
initializeMap();

