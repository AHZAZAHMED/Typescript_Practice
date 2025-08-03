// Object types in TypeScript 
// The parameter's type annotation is an object type
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 2});
// function Name(name: { firstname: string; lastname?:string}){
//   console.log(`Hello ${name.firstname} ${name.lastname}`);
// }
// Name({ firstname: "Ahzaz", lastname: "Ahmed" });
function printName(obj) {
    // if (obj.last !== undefined) {
    //   // OK
    //   console.log(obj.last.toUpperCase());
    // }
    var _a;
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "John" });
