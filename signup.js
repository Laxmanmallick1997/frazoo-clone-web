document.querySelector("#createA").addEventListener("submit",createAccount)
var arr=JSON.parse(localStorage.getItem("myLocal"))||[]

function createAccount(event){
    event.preventDefault();

    var number=document.querySelector("#mobile").value
    console.log(number)
    if(number =="9114300307" ){
        alert("successfull")
          window.location.href = "otp.html";
          
        }
        else{
            if(number =="admin" ){
            alert("successfull")
          window.location.href = "admin.html";

        }
        }

    var userData={
    // usernumber:9114300307
    usernumber:number
    
  }
  arr.push(userData)
localStorage.setItem("myLocal",JSON.stringify(arr))

  }