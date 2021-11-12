let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let temp=0;
let temps=0;


function validate()
{
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  
 
  if(regexp.test(email.value))
   {
      error.innerHTML="your Email Id is valid!!";
      error.style.color="green";
      error.style.fontSize="17px";
      error.style.padding="5px";
      // error.style.border="black solid 1px";
      error.style.background="white";
      temp=1;
   }
else
   {
     
    error.innerHTML=("Please enter a valid email address!!");
    error.style.color="red";
    error.style.border="red solid 1px"
    error.style.background="white"
    error.style.fontSize="17px";
    error.style.padding="5px";
    return false;
   }
}
function passwordChanged()
    {
      var strength = document.getElementById('strength');
      var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
        var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{4,}).*", "g");
      var pwd = document.getElementById("txtPassword");
      if (pwd.value.length == 0) {
         strength.innerHTML = '<span style="color:white">Please Enter password</span>';
         strength.style.background="Black"
         strength.style.fontSize="17px";
         strength.style.padding="5px";
     } else if (false == enoughRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:white">8 Characters needed</span>';
         strength.style.background="Black"
         strength.style.fontSize="17px";
         strength.style.padding="5px";
     } else if (strongRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:green">Strong Password!!</span>';
         strength.style.background="black"
         strength.style.fontSize="17px";
         strength.style.padding="5px";
         temps=1;
     } else if (mediumRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:orange">Medium Password!!</span>';
         strength.style.background="Black"
         strength.style.fontSize="17px";
         strength.style.padding="5px";
     } else {
         strength.innerHTML = '<span style="color:red">Weak Password!</span>';
         strength.style.background="Black"
         strength.style.fontSize="17px";
         strength.style.padding="5px";
     }
   
    }
function check()
{
   validate();
   if (temp==1 && temps==1)
   {
      return true;
   }
   else{
      return false;
   }
}

function threecheck()
{
   validate();
   
   if (temp==1 && temps==1)
   {
      return true;
   }
   else{
      return false;
   }
}

