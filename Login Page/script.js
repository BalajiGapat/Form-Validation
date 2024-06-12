const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");
    //  signUp = document.querySelector(".signup-btn"),
    //  login = document.querySelector(".login-btn");
   


    /*  js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })*/

    // js code to appear signup and login form
 /*   signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });*/

    function Register(event){
        event.preventDefault();
        var user = {};
var form = document.forms.RegForm;
var fullname = form.elements.fullname.value;
var fullnameMessage = document.getElementById("fullnamemsg");
var email= form.elements.email.value;
var emailMessage =document.getElementById("emailmsg");
var pass = form.elements.password.value;
var passMessage =document.getElementById("passwordMsg");
var cpass = form.elements.cpassword.value;
var cpassMessage = document.getElementById("cpasswordMsg");
if(fullname.trim().length == 0)
    {
        fullnameMessage.style.display="block";
        fullnameMessage.innerHTML="FullName required";
        fullnameMessage.style.color="red";
    }
    else if(email.trim().length == 0)
        {
            emailMessage.style.display="block";
            emailMessage.innerHTML="Email required";
            emailMessage.style.color="red";  
        }
        else if(pass.trim().length == 0 ){
            passMessage.style.display="block";
            passMessage.innerHTML="password required";
            passMessage.style.color="red";
            
        }
        else if(cpass.trim().length == 0)
            {
                cpassMessage.style.display="block";
                cpassMessage.innerHTML="password required";
                cpassMessage.style.color="red";
            }
            else if(pass.length < 8)
                {
                    passMessage.style.display="block";
            passMessage.innerHTML="Minimum 8 character required";
            passMessage.style.color="red";
                }
            else{
                user.fullname = fullname.trim();
                user.email = email.trim();
                user.pass = pass.trim();
                user.cpass = cpass.trim();
                console.log(user);
                Swal.fire({
                    title: "Registration Success!",
                    icon: "success"
                  });
            
            }

    }
    function onInputValid(input,message){
var msg=document.getElementById(message);
msg.innerHTML="";
msg.style.display="none";
    }
    //password hide and show 
    function togglepassword(idOfinput,iconId){
        var password = document.getElementById(idOfinput);
        var icon = document.getElementById(iconId);
        if(password.type == "password")
            {
            password.type ="text";
            icon.className ="fa fa-eye-slash";
        }
        else{
            password.type ="password";
            icon.className ="fa fa-eye";
        }
    }
    function Login(event){
        event.preventDefault();
        var user = {};
        var form = document.forms.LoginForm;
        var email= form.elements.email.value;
        var emailMessage =document.getElementById("emailmsg");
        var pass = form.elements.password.value;
        var passMessage =document.getElementById("passwordMsg");
         if(email.trim().length == 0)
            {
                emailMessage.style.display="block";
                emailMessage.innerHTML="Email required";
                emailMessage.style.color="red";  
            }
            else if(pass.trim().length == 0 ){
                passMessage.style.display="block";
                passMessage.innerHTML="password required";
                passMessage.style.color="red";
            }
            else{
                Swal.fire({
                    title: "Login Success!",
                    icon: "success"
                  });
            }

    }