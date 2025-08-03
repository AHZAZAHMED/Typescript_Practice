//using practice utility type 
var student1 = {
    name: "ahzaz",
    rollno: "231156",
    major: "CS",
    address1: "s-2 shanti nagar lahore"
};
//implementing partial utility type in function
function getStudentData(data) {
    console.log("Student Name: ".concat(data.name, " \n Rollno: ").concat(data.rollno, "\n    Major: ").concat(data.major, " \n Address: ").concat(data.address1));
}
getStudentData({ name: "ali", rollno: "23232", major: "CS", address1: "s-2 shanti nagar lahore" });
var User1 = {
    id: 23,
    name: "ali",
    address: "s-2 shanti nagar lahore"
};
//Readonly utility type
var user2 = {
    id: 23,
    name: "ahmed",
    address: "s-2 shanti nagar lahore"
};
//user2.id = 24; //Error because its readonly
//PICK utility type
var User3 = {
    id: 23,
    name: "ali",
};
//OMIT utility type
var User4 = {
    id: 55,
    name: "Muhmmad",
};
