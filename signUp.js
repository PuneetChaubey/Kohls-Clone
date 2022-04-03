document.querySelector("#button").addEventListener("click",myFn);
var infoDetails = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myFn(){
   var  firstName = document.querySelector("#name").value;
  var lstName = document.querySelector("#lstName").value;
  var mail = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;
  console.log(firstName,lstName,mail,password)
  var obj={
      name:firstName,
      lastName:lstName,
      email:mail,
      password: password
  }
  infoDetails.push(obj)
  localStorage.setItem("signUpDetails",JSON.stringify(infoDetails))
  alert("signUp Successfully")
  console.log(infoDetails)
   window.location.reload();
   window.location.href ="createaccount.html"
}

console.log("Hello")