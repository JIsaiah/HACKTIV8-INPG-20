//* Login Form popup
//!PLS PUT THIS BACK IN LATER!!!!!
/*window.onload = function openpopup1() {
    myModal.style.display = "block";
}*/

//* Login Info Check
var username = document.getElementById('usernameInput');
var password = document.getElementById('passwordInput');

function login() {
    if(loginForm.username.value === "Username"){ //! PLACEHOLDER USERNAME N PASSWORD PLS CHANGE
        if(loginForm.password.value === "Password"){
            console.log("this works")
            myModal.style.display = "none";
        }
        else{
            alert("Invalid Password")
        }
    }
    else {
        alert("Invalid Username")
    }
}

//* For the search bar/add button
function addbutton() {
    var textInput = document.getElementById('headerEntry');
    if(textInput != '') {
        console.log('it works')
        //! ONLY ADDS A COPY OF TASKLABEL1 PLZ FIX
        var new_task = document.getElementById('undoneTask1');
        var copy = new_task.cloneNode(true);
        document.getElementById('incompCont').appendChild(copy);
    }
}

//* Check Button
var x = 0;
function check() {
    if (x == 0){
        document.getElementById('checkbox').src = "../indexTESTBUILD/Untitled-5.png"
        x = 1;
    } else{
        document.getElementById('checkbox').src = "../indexTESTBUILD/Untitled-4.png"
        x = 0;
    }
    
    console.log('check works') //!PLACEHOLDER TEXT
}

//* Trash Button
function trash() { //! SO FAR THIS IS ONLY ABLE TO REMOVE THE FINISHED TASK, MAKE IT SO THAT IT CAN MVOE TO COMPLETE TASKS
    console.log('heehee') //!PLACEHOLDER TEXT
    document.getElementById('undoneTask1').remove();
    
}

//* Task Detail Popup
var modal1 = document.getElementById("Modal1");
var taskbtn = document.getElementById("taskButton");

function taskinfo() {
    modal1.style.display = "block";
}

function closetaskdetail() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//* Dark Mode
var x = 0;
function darken() {
    if (x == 0){
        document.getElementById('dmicon').src = "../indexTESTBUILD/i24_photoedit_brightness-512.png"
        document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('incompTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('compTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('finishedCont').style.color = "rgb(100, 100, 100)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = 1;
    } else{
        document.getElementById('dmicon').src = "../indexTESTBUILD/nightmode-512.png"
        document.getElementById('html').style.backgroundColor = "rgb(240, 240, 240, 0.98)";
        document.getElementById('incompTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('compTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('finishedCont').style.color = "rgb(240, 240, 240)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = 0;
    }
    
}