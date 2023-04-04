var log=document.getElementById("login");
var reg=document.getElementById("regs");
var hr=document.getElementById("hr");


function register(){
    reg.style.transform="translateX(0px)";
    log.style.transform="translateX(0px)";
    hr.style.transform="translateX(100px)";
}
function login(){
    reg.style.transform="translateX(300px)";
    log.style.transform="translateX(300px)";
    hr.style.transform="translateX(0px)";
}
