
let names = ["Alice", "Bob", "Charlie"];
// Contextual typing also applies to arrow functions
// It means TypeScript uses the surrounding code (context) to figure out what type something should be.

names.forEach((s) => {
  console.log(s.toUpperCase());
});