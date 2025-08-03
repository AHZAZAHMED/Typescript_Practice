var user1 = ["Alice", 20];
//let user2 : userTuple = [25 , "bob"] // In tuples, the order and type of elements matter'
function getUserInfo(user) {
    return "User Name: ".concat(user[0], ", Age: ").concat(user[1]);
}
var info = getUserInfo(["bob", 25]);
console.log(info);
//getUserInfo([25, "bob"]) //Error
