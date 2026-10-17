// Write a complete program that does the following:
// Create a function processStudent(name, m1, m2, m3) that:
// Calculates total and average using an inner function
// Determines Pass/Fail
// Returns a complete report string
// Call this function for three different students and print their reports.
// Additionally, create a separate function compareAverages(avg1, avg2) that returns which average is higher (or if they are equal).
function processStudent(name, m1, m2, m3){
    function total(m1, m2, m3){
        return m1+m2+m3;
    }
    function avg(m1, m2, m3){
        return m1+m2+m3/3;
    }
    if(total())
}