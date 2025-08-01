// Object types in TypeScript 
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 2 });
function Name(name) {
    console.log("Hello ".concat(name.firstname, " ").concat(name.lastname));
}
Name({ firstname: "Ahzaz", lastname: "Ahmed" });
