let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let pass_strength = document.getElementById("exampleInputPassword1");
let error2 = document.getElementById("error2");

function validate()
{
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  let regexa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  if(regexp.test(email.value))
   {
    error.innerHTML="valid";
    error.style.color="black";
    error.style.border="black solid 1px";
    error.style.background="green";
    if(regexa.test(pass_strength.value))
    {
        
    }
   }
else
   {
    error.innerHTML=("please enter a valid email address!!");
    error.style.color="black";
    error.style.border="red solid 1px"
    error.style.background="red"
    return false;
   }
}