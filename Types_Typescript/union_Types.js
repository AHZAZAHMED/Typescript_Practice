//Union Types in TypeScript
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId(true);
//TypeScript will only allow an operation if it is valid for every member 
// of the union. For example, if you have the union string | number, you 
// can’t use methods that are only available on string:
function print(id) {
    console.log(id.toUpperCase());
}
//Solution
function printIds(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log("Your ID is: " + id);
    }
}
printIds(101); // Your ID is: 101
printIds("202"); // 202
