// Write a function processMarks(m1, m2) that has an inner function sum to add the two marks and returns the total
function processMarks(m1,m2){
    function sum(m1,m2){
        let total=m1+m2;
        return total;
    }
    return sum(m1,m2);
}
console.log(processMarks(9,90));
