//Here isArray is a ststic method of class Array so it can be directly called without making any object 
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("Alice");
welcomePeople(["Alice", "Bob", "Charlie"]);
