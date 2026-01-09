console.log('Exercise 3: Student Grade Management System');

/*
Given an array of students with: name, courses (array of {courseName, grade, credits})

Tasks:
1. Calculate GPA for each student (sum of (grade * credits) / total credits)
2. Find the student with the highest GPA
3. Get a list of all unique courses offered
4. Create an object showing how many students are taking each course
5. Filter students who have a GPA above 3.5 and are taking more than 3 courses
6. Find the course with the highest average grade across all students
*/

const students = [
    {
        name: "Emma",
        courses: [
            { courseName: "Math", grade: 3.8, credits: 4 },
            { courseName: "Physics", grade: 3.5, credits: 3 },
            { courseName: "Chemistry", grade: 4.0, credits: 3 },
            { courseName: "English", grade: 3.7, credits: 3 }
        ]
    },
    {
        name: "Liam",
        courses: [
            { courseName: "Math", grade: 3.2, credits: 4 },
            { courseName: "History", grade: 3.9, credits: 3 },
            { courseName: "English", grade: 3.6, credits: 3 }
        ]
    },
    {
        name: "Sophia",
        courses: [
            { courseName: "Physics", grade: 4.0, credits: 3 },
            { courseName: "Chemistry", grade: 3.9, credits: 3 },
            { courseName: "Biology", grade: 3.8, credits: 4 },
            { courseName: "Math", grade: 3.7, credits: 4 }
        ]
    },
    {
        name: "Noah",
        courses: [
            { courseName: "History", grade: 3.4, credits: 3 },
            { courseName: "English", grade: 3.3, credits: 3 },
            { courseName: "Art", grade: 4.0, credits: 2 }
        ]
    }
];

// YOUR CODE HERE