let marks = 85;
const grade = 12;

if (marks >= 90) {
    console.log("Greater than 90");
} else if (marks >= 80) {
    console.log("Greater than 80");
} else if (marks >= 70) {
    console.log("Greater than 70");
} else {
    console.log("Greater than 60");   
}

if (marks > 70 && grade === 12) {
    console.log("You are passed in Grade 12");  
} else {
    console.log("Invaild marks");
}

if (marks > 70 || grade === 11) {
    console.log("You are passed in Grade 12");  
} else {
    console.log("Invaild marks");
}


// Switch Statement

const today = 6;

switch(today) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invaild Number");
}