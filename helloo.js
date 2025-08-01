const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 2000); // resolves after 2 seconds
});
promise.then((result) => {
    console.log(result); // "Done!" after 2 seconds
});
function getBear() {
    return {
        name: "Grizzly",
        honey: true
    };
}
let bear = getBear();
console.log(`Bear Name: ${bear.name}, Loves Honey: ${bear.honey}`);
