let titlehead = document.getElementById("title");
let inpname = document.getElementById("name");
let register = document.getElementById("reg");
let login = document.getElementById("log");

var namerr = document.getElementById("name-err");
var emailerr = document.getElementById("email-err");
var passworderr = document.getElementById("password-err");
var logerr = document.getElementById("log-err");
var regerr= document.getElementById("log-err");

login.onclick = function (e) {
    e.preventDefault();
    inpname.style.display = "none";
    title.innerHTML = "Sign-In";
    register.classList.add("disable");
    login.classList.remove("disable");
}
register.onclick = function (e) {
    e.preventDefault();
    inpname.style.display = "flex";
    titlehead.innerHTML = "Sign-Up";
    register.classList.remove("disable");
    login.classList.add("disable");
}

function validatename() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        namerr.innerHTML = "please write name";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        namerr.innerHTML = "write full name";
        return false;
    }
    namerr.innerHTML="";
    return true;
}
function validatemail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailerr.innerHTML = "enter email";
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailerr.innerHTML = "write correct email";
        return false;
    }
    emailerr.innerHTML="";
    return true;
}
function validatepw() {
    var pw = document.getElementById("contact-pw").value;
    var p=document.createElement(p);
    if (pw.length == 0) {
        passworderr.innerHTML = "enter password";
        return false;
    }
    if (pw.length < 8) {
        passworderr.innerHTML = "password length should atleast be 8"
        return false;
    }
    if (!pw.match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
    
        passworderr.innerHTML = "password must contain an integer,alphabet,character";
        return false;
    }
    passworderr.innerHTML="";
    return true;
}

function validateform(){
    if(!validatename() || !validatemail() || !validatepw()){
        logerr.innerHTML="please fix error ";
        regerr.innerHTML="please fix error ";
        logerr.style.display="block";
        regerr.style.display="block";
        setTimeout(() => {
            logerr.style.display="none";
            regerr.style.display="none";
        }, 3000);
        return false;
    }

}
register.addEventListener("click",()=>{
    validateform();
})
login.addEventListener("click",()=>{
    validateform();
})
