//* Login Form popup
//!PLS PUT THIS BACK IN LATER!!!!!
/*window.onload = function openpopup1() {
    myModal.style.display = "block";
}*/

//* Login Info Check
var username = localStorage.getItem('Username');
var password = localStorage.getItem('Password');

function login() {
    if(loginForm.usernameInput.value === username){
        if(loginForm.passwordInput.value === password){
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
    var label = document.getElementById('headerEntry').value
    var newTask = document.createElement('ul');

    if(label !== '') {
        // Setting the ul id and class
        var ulclass = document.createAttribute('class');
        ulclass.value = 'todo';
        newTask.setAttribute('class', 'todo')
        var ulid = document.createAttribute('id');
        ulid.value = 'incompCont';
        newTask.setAttribute('id', 'incomptCont')

        // Adding the li
        var taskli = document.createElement('li');
        taskli.appendChild(newTask)
        var liid = document.createAttribute('id');
        liid.value = 'undoneTask';
        taskli.setAttribute('id', 'undoneTask');

        // Add label
        var labeltitle = document.createElement('label');
        labeltitle.innerHTML = label;
        newTask.appendChild(labeltitle);
        var labelclass = document.createAttribute('class');
        labelclass.value = 'taskLabel';
        labeltitle.setAttribute('class', 'taskLabel');

        // Adding checkbox button
        var checkbutton = document.createElement('button');
        newTask.appendChild(checkbutton);
        var buttonid = document.createAttribute('id');
        buttonid.value = 'checkbutton';
        checkbutton.setAttribute('id', 'checkbutton');
        var buttonclick = document.createAttribute('onclick');
        buttonclick.value = 'check()';
        checkbutton.setAttribute('onclick', 'check()');

        // Adding the checkbox
        var boximg = document.createElement('img');
        boximg.src = "../index/Untitled-4.png";
        checkbutton.appendChild(boximg);
        var imgid = document.createAttribute('id');
        imgid.value = 'checkbox';
        boximg.setAttribute('id', 'checkbox');

        // Adding the trash button
        var trashbutton = document.createElement('button');
        newTask.appendChild(trashbutton);
        var tbuttonid = document.createAttribute('id');
        tbuttonid.value = 'trashbutton';
        trashbutton.setAttribute('id', 'trashbutton');
        var removetask = document.createAttribute('onclick');
        removetask.value = 'trash()';
        trashbutton.setAttribute('onclick', 'trash()');

        // Adding the trash bin icon
        var trashbinicon = document.createElement('img');
        trashbinicon.src = "../index/Untitled-3.png";
        trashbutton.appendChild(trashbinicon);
        var trashid = document.createAttribute('id');
        trashid.value = 'heejin';
        trashbinicon.setAttribute('id', 'heejin');

        // Appending the final li
        document.getElementById('tasks').appendChild(newTask);

        document.getElementById('headerEntry').value = '';
    }
}

//! FIGURE OUT HOW TO SAVE ADDED TASKS TO LOCAL STORAGE ITS A REAL PAIN THE ASS


//* Check Button
var x = 0;

function check() {
    if (x == 0){
        document.getElementById('checkbox').src = "../index/Untitled-5.png"
        x = 1;
    } else{
        document.getElementById('checkbox').src = "../index/Untitled-4.png"
        x = 0;
    }
    console.log('check works') //!PLACEHOLDER TEXT
}

//* Trash Button
function trash() { //! SO FAR THIS IS ONLY ABLE TO REMOVE THE FINISHED TASK, MAKE IT SO THAT IT CAN MVOE TO COMPLETE TASKS
    console.log('heehee') //!PLACEHOLDER TEXT
    document.getElementById('undoneTask1').remove();
    
}

//* Dark Mode
var x = '0';

function darken() {
    if (x == '0'){
        document.getElementById('dmicon').src = "../index/i24_photoedit_brightness-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('incompTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('compTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = '1';
    } else{
        document.getElementById('dmicon').src = "../index/nightmode-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(240, 240, 240, 0.98)";
        document.getElementById('incompTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('compTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = '0';
    } 
}