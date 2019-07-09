function validateform()
{
   
    var name=  document.getElementById("name");
    var email= document.getElementById("email");
    var password= document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var phone_no = document.getElementById("phone_no");
    var valid=true;
    var regx = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
   
    if(name.value.length==0)
    {
        name.className="wrong-input";
        name.nextElementSibling.innerHTML="name can't be blank";
        valid=false; 
    } else {
        name.classList.remove("wrong-input");
        name.nextElementSibling.innerHTML="";
        valid=true; 
    }

    if(!regx.test(email.value))
    {
        console.log(regx.test(email.value));
        
        email.className="wrong-input";
        email.nextElementSibling.innerHTML="plz enter valid email";
        valid=false; 
    }
    else {
        email.classList.remove("wrong-input");
        email.nextElementSibling.innerHTML="";
        valid=true; 
    }
    
    if(!email.value.length)
    {
        email.className="wrong-input";
        email.nextElementSibling.innerHTML="plz enter email";
        valid=false; 
    }
    
    if(password.value.length<6)
    {
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="password cannot be less  than 10";
        valid=false;
    }
    else {
        password.classList.remove("wrong-input");
        password.nextElementSibling.innerHTML="";
        valid=true; 
    }
    if(!password.value.length)
    {
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="plz enter password ";
        valid=false;    
    }
    if(password.value !== confirm_password.value)
    {
        confirm_password.className="wrong-input";
        confirm_password.nextElementSibling.innerHTML="password does not match";
        valid=false;
    }
    else {
        confirm_password.classList.remove("wrong-input");
        confirm_password.nextElementSibling.innerHTML="";
        valid=true; 
    }
    if(!confirm_password.value.length)
    {
        confirm_password.className="wrong-input";
        confirm_password.nextElementSibling.innerHTML="plz enter confirm password";
        valid=false;  
    }
    if(phone_no.value.length < 10)
    {
        phone_no.className="wrong-input";
        phone_no.nextElementSibling.innerHTML="enter 10 digit in number";
        valid=false;
    }
    else {
        confirm_password.classList.remove("wrong-input");
        confirm_password.nextElementSibling.innerHTML="";
        valid=true; 
    }
    if(!phone_no.value.length)
    {
        phone_no.className="wrong-input";
        phone_no.nextElementSibling.innerHTML="plz enter phone number";
        valid=false;
    }
    else
    {
        alert("record has been submitted");
    }
    return valid;
} 
