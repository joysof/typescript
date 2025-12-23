// array data type 

let userName :string[]
userName = ['sajib' , 'hossen' , 'joy']

console.log(userName[0])

console.log("i am ")

// tuple data type 

// mixed data type 

// work key and value 

let user : [number , string];

user = [101, "sajib"]

user.push(102 , "joy")
console.log(user)

// enum data type 3 proker dopulacake valu use kora jay na 

// numeric enum 

enum RequestType {
    readData,
    saveData,
    deleteData,
}
console.log(RequestType)

// string enum 
enum RequestType2 {
    readData = "readData",
    saveData ="saveData",
    deleteData ="deleteData"
}
console.log(RequestType2.deleteData)
console.log(RequestType2["saveData"])