var counter = 0;
var girlfriendCounter = 69
var taskCounter = 6;
var hideTaskVar = false;
function showAlert(){
    var myText = "Welcome to TO-DO List by Joshua Chiyezhan, stop being lazy and get to those tasks bum!\n";
    alert(myText);
}

function addTask(){
    taskCounter += 1;
    var taskName = prompt("What task do you want to add to the list?\n");
    console.log(taskName);
    const task = document.createElement("li");
    task.id = taskCounter;
    // task.setAttribute('class', 'task');
    task.className = 'task';
    task.innerHTML = '<input id="' + taskCounter + 'C' + '" type="checkbox" class="check" onclick="completeTask(this)">'
    + " " + taskName + " " + '<button id="' 
    + taskCounter +'E" class="small" onclick="editTask(this)">Edit Task </button>';
    const list = document.getElementById("list");
    console.log(list);
    list.appendChild(task);
    console.log(task);
    //var text = document.createTextNode(taskName);
    

}

function editTask(editButton){
    console.log(editButton);
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

function completeTask(completeButton){
    console.log(completeButton.id);
    completeID = (completeButton.id).replace('C', "");
   completedTask = document.getElementById(completeID);
   completedTaskText = (completedTask.textContent);
   console.log(completedTaskText);
   console.log(completeID);
   taskCounter-=1;
   completedTask.remove();
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
    if(girlfriendCounter == 2){
        alert("Stop the cap");
    }
    if(girlfriendCounter == 3){
        alert("You're on this app for a reason bum");
    }
    if(girlfriendCounter == 4){
        alert("Didn't she leave you for Marco??");
    }
    if(girlfriendCounter == 5){
        alert("Man theres no way");
    }
    if(girlfriendCounter == 6){
        alert("FOR REAL??");
    }
    if(girlfriendCounter == 7){
        alert("Im proud of you, press it one more time");
    }
    if(girlfriendCounter == 8){
        alert("YOU WIN TODO LIST\n");
    }
}

function hideTask(){
    hideTaskVar=true;
}