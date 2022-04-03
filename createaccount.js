console.log("Hum hai hindustani");
var getDetailsFromSignUp = JSON.parse(localStorage.getItem("signUpDetails"));
document.querySelector("#signIn").addEventListener("click", myFn);
function myFn(){
    var email = document.querySelector("#mail").value;
        var password= document.querySelector("#pass").value;
       var count = 0;
    getDetailsFromSignUp.map(function(el){
        
        if(email===el.email && password===el.password)
      {
         count++;
      }
     
    })
    if(count>0){
        alert("Loggedin  Successfully")
        window.location.href="home.html"
    }
    else 
      alert("Enterd Wrong Email Or Password")
}