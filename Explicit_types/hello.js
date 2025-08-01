function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toLocaleDateString(), "!"));
}
//greet("Maddison", Date());
greet("Maddison", new Date());
