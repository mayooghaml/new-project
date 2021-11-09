let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
function validate(){

  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  if(regexp.test(email.value))
  {
    
  // error.innerHTML="valid";
  // error.style.color="green";
  return true;
}
else{

    error.innerHTML=("please enter a valid email address!!");
    error.style.color="black";
    error.style.border="red solid 1px"
    error.style.background="red"


    return false;
}
else
}


// The strong and weak password Regex pattern checker

// let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
// let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
