// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

var testGrade= Math.floor(Math.random() * 100);

console.log(testGrade);

if (testGrade >= 0 && testGrade <= 65) {
    console.log('You got an F');

} 

else if (testGrade > 65 && testGrade <= 70) { 
    console.log('You got a D');

}

else if (testGrade >=71 && testGrade <=79) {
    console.log('You got a C');
}
else if (testGrade >=80 && testGrade <=89) {
    console.log(' You got a B');
}

else if (testGrade >= 90 && testGrade <= 100) {
    console.log('You got a A');
}

else {
    console.log("You have to retake the test");
}
