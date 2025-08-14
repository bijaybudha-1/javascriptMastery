const language = ["js", "c++", "c", "java", "python"];

// 1. Method 1:

language.forEach(function (item) {
    // console.log(item);
});

// Method 2:

language.forEach((item) => {
    // console.log(item);
    
});

// Method 3:

// language.forEach((item) => console.log(item));

// Method 4:
function displayItem(item) {
    // console.log(item);
};

// language.forEach(displayItem);

// Method 5:
language.forEach((item, index, arrayList) => {
    // console.log(index, item, arrayList);
});

// Method 6:

const courses = [
    {
        courseName: "Web Developement",
        price: 2999,
        duration: '2.5M'
    },
    {
        courseName: "Basics Python",
        price: 1999,
        duration: '1.5M'
    },
    {
        courseName: "JavaScript Masterry",
        price: 3999,
        duration: '2M'
    }
    
];

courses.forEach((item) => {
    console.log(item.courseName);
})