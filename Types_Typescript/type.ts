// Object types in TypeScript 
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 2});

function Name(name: { firstname: string; lastname?:string}){
  console.log(`Hello ${name.firstname} ${name.lastname}`);
}

Name({ firstname: "Ahzaz", lastname: "Ahmed" });


