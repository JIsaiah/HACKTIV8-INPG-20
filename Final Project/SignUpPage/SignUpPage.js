//* Dark Mode
var text = document.getElementsByClassName('h1');
function darken() {
    document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
    document.getElementById('signintext').style.color = "rgb(255, 255, 255)";
    document.getElementById('pinfo').style.color = "rgb(255, 255, 255)";
    document.getElementById('pwordfield').style.color = "rgb(255, 255, 255)";
    document.getElementById('miscinfofield').style.color = "rgb(255, 255, 255)";
    document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
}

//* Check if forms are filled
function submit() {
    if(document.getElementById('firstName') == ""){
        console.log("first name")
    }
}