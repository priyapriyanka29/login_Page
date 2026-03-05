function validateForm(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){
alert("Please fill all fields");
return false;
}

alert("Login Successful!");

return true;

}
