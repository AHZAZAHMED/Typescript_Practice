
interface student {
    name: string,
    rollno: string,
    major : string,
    address1: string,
    address2: string
}

//using practice utility type 
let student1 : Partial<student> = {
    name: "ahzaz",
    rollno: "231156",
    major: "CS",
    address1: "s-2 shanti nagar lahore"
}

//implementing partial utility type in function

function getStudentData(data:Partial<student>){
  console.log(`Student Name: ${data.name} \n Rollno: ${data.rollno}
    Major: ${data.major} \n Address: ${data.address1}`)
}

getStudentData({name:"ali" , rollno: "23232" , major: "CS" , address1 :"s-2 shanti nagar lahore"})

//Required utility type

interface user {
    id: number,
    name:string,
    address?:string
}

let User1 : Required<user> = {
    id: 23, 
    name: "ali",
    address: "s-2 shanti nagar lahore"
}

//Readonly utility type

let user2 : Readonly<user> = {
    id: 23,
    name: "ahmed",
    address: "s-2 shanti nagar lahore"
}

//user2.id = 24; //Error because its readonly

//PICK utility type

let User3 : Pick<user, "id"| "name"> = {
    id: 23, 
    name: "ali",
}

//OMIT utility type

let User4 : Omit<user, "address"> = {
    id: 55,
    name: "Muhmmad",
}

