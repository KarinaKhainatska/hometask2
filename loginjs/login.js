let login="User_123";
let email="user123@gmail.com";
let password="User1234";
let phoneNumber="+380661234567";

let tLogin = /^[a-zA-Z0-9_]{5,20}$/;
let tEmail= /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let tPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let tphoneNumber= /^\+380\d{9}$/; 

if(login.match(tLogin)){
    console.log("Login is correct");
}
else{
    console.log("Login is incorrect");
}
if(email.match(tEmail)){
    console.log("Email is correct");
}       
else{
    console.log("Email is incorrect");
}       
if(password.match(tPassword)){
    console.log("Password is correct");
}
else{
    console.log("Password is incorrect");
}
if(phoneNumber.match(tphoneNumber)){
    console.log("Phone number is correct");
}
/*
if (login.search(tLogin) !== -1) {
    console.log("Login is correct");
}
else{
    console.log("Login is incorrect");
}
if (email.search(tEmail) !== -1) {
    console.log("Email is correct");
}
else{
    console.log("Email is incorrect");
}
if (password.search(tPassword) !== -1) {
    console.log("Password is correct");
}
else{
    console.log("Password is incorrect");
}
if (phoneNumber.search(tphoneNumber) !== -1) {
    console.log("Phone number is correct");
}
else{
    console.log("Phone number is incorrect");
}
*/

if (correctLogin.match(/^[a-zA-Z0-9_]{5,20}$/)) {
    alert(correctLogin);
} else {
    alert("Login is incorrect");
}





