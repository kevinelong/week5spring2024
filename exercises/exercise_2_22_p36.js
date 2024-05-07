let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function idFinder(soughtID){
    for(course of courses){ //LOOK MA NO INDEXES
        if(course.CourseId === soughtID){
            return course; //send back the matching object and exit function now.
        }
    }
    return false; //never here?
}

function showProperty(item, propertyName){
    console.log(item[propertyName])
}

///LIST FUNCTIONS
function findCheapOnes(costLimit){
    const outputList = [];
    for(course of courses){ 
        if(Number(course.Fee) <= costLimit){
            outputList.push(course);
        }
    }
    return outputList;
}
function findOnLocation(locationName){
    const outputList = [];
    for(course of courses){ 
        if(course.Location === locationName){
            outputList.push(course);
        }
    }
    return outputList;
}
function showPropertyForList(list, propertyName){
    for(item of list){
        showProperty(item, propertyName);
    }
}

///TESTS

// When does the PROG200 course start?
// showProperty(idFinder("PROG200"), "StartDate");

// What is the title of the PROJ500 course?
// showProperty(idFinder("PROJ500"), "Title");

// What are the titles of the courses that cost $50 or less?
showPropertyForList(findCheapOnes(50), "Title");

// // What classes meet in "Classroom 1"?
// showPropertyForList(findOnLocation("Classroom 1"), "CourseId");