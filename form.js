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
        var passed = 0;
        for (var i = 0; i < regexa.length; i++) {
            if (new RegExp(regex[i]).test(exampleInputPassword1)) {
                passed++;
            }
        }
        if (passed > 2 && exampleInputPassword1.length > 7) {
            passed++;
        }
 
        
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Poor";
                color = "red";
                break;
            case 2:
                strength = "Medium";
                color = "orange";
                break;
            case 3:
            case 4:
                strength = "Medium";
                color = "orange";
                break;
            case 5:
                strength = "Strong";
                color = "green";
                break;
        }
        error2.innerHTML = strength;
        error2.style.color = color;

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