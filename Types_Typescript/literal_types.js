//Literal types
//variable with literal types
var direction;
direction = "up"; // valid
// Function that accepts a literal type
function move(movement) {
    console.log("Moving ".concat(movement));
}
move("up");
//move("left") // Error: Type '"left"' is not assignable to type 'Direction'
