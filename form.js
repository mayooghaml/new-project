let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let temp=0;
let temps=0;

function validate()
{
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  
 
  if(regexp.test(email.value))
   {
      error.innerHTML="your Email Id is valid";
      error.style.color="black";
      error.style.border="black solid 1px";
      error.style.background="green";
      temp=1;
   }
else
   {
    error.innerHTML=("Please enter a valid email address!!");
    error.style.color="black";
    error.style.border="red solid 1px"
    error.style.background="red"
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
         strength.innerHTML = '<span style="color:white"></span>';
         strength.style.background="Black"
     } else if (false == enoughRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:white">More Characters</span>';
         strength.style.background="Black"
     } else if (strongRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:green">Strong Password!!</span>';
         strength.style.background="black"
         temps=1;
     } else if (mediumRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:orange">Medium Password!!</span>';
         strength.style.background="Black"
     } else {
         strength.innerHTML = '<span style="color:red">Weak Password!</span>';
         strength.style.background="Black"
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