
type userTuple = [string, number];

let user1 : userTuple = ["Alice", 20]

//let user2 : userTuple = [25 , "bob"] // In tuples, the order and type of elements matter'

function getUserInfo(user: userTuple): string {
  return `User Name: ${user[0]}, Age: ${user[1]}`;
}

let info = getUserInfo(["bob", 25])
console.log(info); 
//getUserInfo([25, "bob"]) //Error
