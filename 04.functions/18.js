// Write a function main that contains another function helper which returns "Helper function called". Call helper from inside main and return its result
function main() {
    function helper() {
        return "Helper function called";
    }
    return helper();
}
console.log(main());
