alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element: ", msg)
function showmessage(){
    alert("welcome to NRIIT Learning Management System")
}
function changeHeading(){
    document.getElementById("welcome").innerHTML ="Welcome Python FullStack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element: ",heading1)
let button=document.getElementById("btnGreeting");button.getEventListener("Click", function
    () {
    alert("Welcome to javascript Event Handling");
});
let registerForm =document.getElementById("registerForm");
registerForm.addEventListener("submit",function (event)){
    event.preventDefault();
    let name = document.getElementById("name").Value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name || email || password)
}