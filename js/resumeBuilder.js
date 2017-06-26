/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Ayaat Eldor",
    "role" : "front end web developer",
    "contacts" : {
        "mobile" : "0111-750-7322",
        "email" : "ayaatahmedhamedeldor@gmail.com",
        "github" : "ayaatEldor",
        "twitter" :  "@yoota",
        "location" : "quwesna, cairo, egypt",
        "blog" : "awesome"
    },
    "welcomeMessage" : "hello in front end web developer", 
    "skills" : [
        "HTML", "CSS", "JAVA Script", "JQuery", "BootStrap"
    ],
    "biopic" : "images/myPic.jpg"
};

var work = {
    "jobs": [
             {
              "employer" : "Ali Yosef Help Disk",
              "title" : "ecoSoft company", 
              "location" : "cairo,nase city", 
              "dates" : "january in 2003",
              "description" : "doing project for student to graduation anh help hten to be doog in programming language ane they helpful doing project for student to graduation anh help hten to be doog in programming language ane they helpful doing project for student to graduation anh help hten to be doog in programming language ane they helpful doing project for student to graduation anh help hten to be doog in programming language ane they helpful"
             },
             {
              "employer" : "mohamed mostafa employer",
              "title" : "pizza shop delivery", 
              "location" : "cairo,october city", 
              "dates" : "jmarch 2003 future",
              "description" : "doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it doing pizza for customer to eating it "
             }
    ]
    };

var projects = {
    "projects" : [
        {
         "title" : "online airline resevation",
         "dates" : "24/4/1994",
         "description" : "help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online help people to reserve online",
         "images" : ["images/img.jpg", "images/img.jpg"]
        }
    ]
    };

var education = {
    "schools" : [
        {
         "name" : "faculty of science",
         "location" : "shebien elkom",
         "degree" : "final degree",
         "majors" : ["math and computerScience"],
         "dates" : "20 may 1990",
         "url" : "www.facultyofscience.com"
        },
        {
         "name" : "faculty of art",
         "location" : "bemha el kalubya",
         "degree" : "master degree",
         "majors" : ["3lm el nafs and egtema3"],
         "dates" : "7 april 1990",
         "url" : "www.facultyofart.com"
        }
    ],
    "onlineCourses" : [
          {
           "title" : "web design",
           "school" : "udacity",
           "dates" : "5/3/2017",
           "url" : "www.udacitycorsesudacity.com"
          }
      ]
    };

bio.display = function(){
    var myName = HTMLheaderName.replace("%data%",bio.name);
    var myRole = HTMLheaderRole.replace("%data%",bio.role);
    var HtmlBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var HtmlMelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").prepend(myName + myRole).append(HtmlMelcomeMsg ,HtmlBioPic);
    $("#header").append(HTMLskillsStart);
    for(var i =0;i<bio.skills.length;i++) {
        var HtmlSkills = HTMLskills.replace("%data%",bio.skills[i]);
        $("#header").append(HtmlSkills);
    }
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile , formattedEmail , formattedTwitter , formattedGithub , formattedBlog , formattedlocation);    
}; 

work.display = function() {
    for(var i=0;i<work.jobs.length;i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        $(".work-entry:last").append(formattedworkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $(".work-entry:last").append(formattedWorkDescription); 
    }
};

projects.display = function() {
    for(i=0;i<projects.projects.length;i++){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedDrojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $(".project-entry:last").append(formattedDrojectDescription);
        if(projects.projects[i].images.length>0){
            for(var image in projects.projects[i].images){
                var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedprojectImage);
            }
         }
    }
};

education.display = function(){  
    for(var i=0 ; i<education.schools.length ; i++) {
      $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
  for(i=0; i<education.onlineCourses.length;i++) {
      $("#education").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineURL);
    }
};        
 

  $("#mapDiv").append(googleMap);
    
bio.display();
work.display();
projects.display(); 
education.display();

 