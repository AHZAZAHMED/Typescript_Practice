type Name = {
    first_name: string,
    last_name: string
}

function printName(name: Name){
    console.log(`Hello ${name.first_name} ${name.last_name}`);
}
printName({ first_name: "Ahzaz", last_name: "Ahmed" });

type ID = string | number;

function printID(id: ID) {
    console.log(`Your ID is: ${id}`);
}

printID("12345");
printID(67890);