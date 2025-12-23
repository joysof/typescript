// array data type 
var userName;
userName = ['sajib', 'hossen', 'joy'];
console.log(userName[0]);
console.log("i am ");
// tuple data type 
// mixed data type 
// work key and value 
var user;
user = [101, "sajib"];
user.push(102, "joy");
console.log(user);
// enum data type 3 proker dopulacake valu use kora jay na 
// numeric enum 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "readData";
    RequestType2["saveData"] = "saveData";
    RequestType2["deleteData"] = "deleteData";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
console.log(RequestType2["saveData"]);
