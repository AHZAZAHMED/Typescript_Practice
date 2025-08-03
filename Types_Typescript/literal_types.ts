//Literal types

//variable with literal types
let direction: "up" | "down" ;

direction = "up"; // valid
//direction= "right"; // Error: Type '"right"' is not assignable to type '"up" | "down"'

type Direction = "up" | "down";

// Function that accepts a literal type
function move(movement : Direction){
    console.log(`Moving ${movement}`);
}
move("up")
//move("left") // Error: Type '"left"' is not assignable to type 'Direction'