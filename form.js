let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let password = document.getElementById('PassEntry');
let strengthBadge = document.getElementById('StrengthDisp');
function validate(){

  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  if(regexp.test(email.value))
  {
    
   error.innerHTML="valid";
   error.style.color="green";
  
}
else{

    error.innerHTML=("please enter a valid email address!!");
    error.style.color="black";
    error.style.border="red solid 1px"
    error.style.background="red"


    return false;
}

}



