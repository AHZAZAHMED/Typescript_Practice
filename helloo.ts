const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 2000); // resolves after 2 seconds
});

promise.then((result) => {
  console.log(result); // "Done!" after 2 seconds
});


interface Animal {
  name: string
}

interface Bear extends Animal {
  honey : boolean
}

interface Bear{
  legs?: number
}
function getBear(): Bear {
  return{
    name : "Grizzly",
    honey : true,
    legs:4

  }
}

 let bear = getBear();
console.log(`Bear Name: ${bear.name}, Loves Honey: ${bear.honey}`);
