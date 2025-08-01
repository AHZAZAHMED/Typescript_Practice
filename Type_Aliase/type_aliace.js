function printName(name) {
    console.log("Hello ".concat(name.first_name, " ").concat(name.last_name));
}
printName({ first_name: "Ahzaz", last_name: "Ahmed" });
function printID(id) {
    console.log("Your ID is: ".concat(id));
}
printID("12345");
printID(67890);
