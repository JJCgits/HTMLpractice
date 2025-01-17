var counter = 0;
var girlfriendCounter
function showAlert(){
    var myText = "Welcome to TO-DO List by Joshua Chiyezhan, stop being lazy and get to those tasks bum!\n";
    alert(myText);
}

function addTask(){
    var taskName = prompt("What task do you want to add to the list?\n");
    console.log(taskName);
    var task = document.createElement("li");
    var text = document.createTextNode(taskName);
    task.appendChild(text)
    ul.appendChild(task);
}

function editTask(){
    var taskNumber = prompt("What task number do you want to edit?\n");
    var taskName = prompt("What do you want to change this task to?\n");
    console.log(taskName);
    console.log(taskNumber);

}

function clearTask(){
    var confirm = prompt("Are you sure you want to clear all tasks? y/n  \n");
    if(confirm == "y"){
        console.log(confirm);
    }

}

function completeTask(){
    counter += 1;
    console.log(counter);
    if (counter == 5){
        alert("GOOD JOB, KEEP UP THE WORK!!! :)");
    }

}

function hiddenQuest(){
    girlfriendCounter += 1;
    if(girlfriendCounter == 1){
        alert("lying is a sin you know\n");
    }
    elif(girlfriendCounter == 2){
        alert("Stop the cap");
    }
    elif(girlfriendCounter == 3){
        alert("You're on this app for a reason bum");
    }
    elif(girlfriendCounter == 4){
        alert("Didn't she leave you for Marco??");
    }
    elif(girlfriendCounter == 5){
        alert("Man theres no way");
    }
    elif(girlfriendCounter == 6){
        alert("FOR REAL??");
    }
    elif(girlfriendCounter == 7){
        alert("Im proud of you, press it one more time");
    }
    elif(girlfriendCounter == 8){
        alert("YOU WIN TODO LIST\n");
    }
}