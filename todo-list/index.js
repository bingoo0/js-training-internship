var index = -1;

var listItem = document.createElement("li");
var checkBox = document.createElement("input");
var editButton = document.createElement("button"); //edit button
var editInput = document.createElement("input"); //text
//button.edit
var editConfirm = document.createElement("button"); // edin confirm

var createNewTaskElement = function() {

    var taskInput = document.getElementById("new-task");
    var addButton = document.getElementsByTagName("button")[0];
    var incompleteTaskHolder = document.getElementById("incomplete-tasks");
    var completedTasksHolder = document.getElementById("completed-tasks");


    listItem = document.createElement("li");

    checkBox = document.createElement("input"); //checkbx
    //label
    var label = document.createElement("label"); //label
    //input (text)
    editInput = document.createElement("input"); //text
    //button.edit
    editConfirm = document.createElement("button"); // edin confirm

    editButton = document.createElement("button"); //edit button

    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    var getTime = new Date();
    var showTimeLabel = document.createElement("label");

    var value = document.getElementById("new-task").value;

    label.innerText = value;
    showTimeLabel.innerText = getTime;

    listItem.className = "to-do";
    checkBox.type = "checkbox";
    checkBox.id = "checkbox";
    editInput.type = "text";
    editInput.id = "edit";

    editConfirm.innerText = "Confirm";
    editConfirm.className = "confirm";

    editButton.innerText = "Edit";
    editButton.className = "edit";

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    showTimeLabel.id = "time-label";
    showTimeLabel.style.display = "none";


    var inputCheck = document.getElementById("input-checkbox");

    if (value === '') {
        alert("You must write something!");
    } else {

        listItem.appendChild(checkBox)
        listItem.appendChild(label);
        listItem.appendChild(editConfirm);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(showTimeLabel);
        listItem.setAttribute("data-index", 1);
        index++;
        document.getElementById("tasks-incomplete").appendChild(listItem);

    }

    document.getElementById("new-task").value = "";

    listItem.setAttribute("data-index", index);
    checkBox.setAttribute("checkbox-index", index);
    editButton.setAttribute("edit-index", index);
    editConfirm.setAttribute("editConfirm-index", index);
    editInput.setAttribute("editField-index", index);

    document.getElementById("new-task").value = "";

    checkField();
    deleteTask();
    editField();
    countOfEvents();
    countOfAllEvents();
    showTime();

}


var deleteTask = function() {
    var deleteField = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteField.length; i++) {
        deleteField[i].onclick = function() {
            var delField = this.parentElement.parentElement;

            delField.removeChild(this.parentElement);

            countOfAllEvents();
            countOfEvents();

        }

    }
}

var checkField = function() {

    var completedTasks = document.getElementById("completed-tasks");
    var incompleteTasks = document.getElementById("tasks-incomplete");

    count = checkBox.getAttribute("checkbox-index");
    console.log(count);

    checkBox.addEventListener('click', function() {
        var completed = this.parentElement;

        console.log(completed);


        if (checkBox.checked == true) {

            checkBox.classList.toggle('checked');
            completedTasks.appendChild(completed);

            countOfEvents();

            var complitedEvents = document.getElementById("completed-tasks");
            var complitedLists = complitedEvents.children;
            var labelComplited = document.getElementById("complited-events");

            labelComplited.innerHTML = complitedLists.length--;


        }

        if (checkBox.checked != true) {

            checkBox.classList.toggle('uncheked');
            incompleteTasks.appendChild(completed);

            countOfEvents();

            var activeEvents = document.getElementById("tasks-incomplete");

            var activeLists = activeEvents.children;

            var labelActive = document.getElementById("active-events")

            labelActive.innerText = activeLists.length--;

        }
    });

}

var editField = function() {


    editButton.addEventListener('click', function() {

        var label = this.parentElement.children[1];
        var inputField = this.parentElement.children[3];
        console.log(inputField);
        inputField.style.display = "inline";
        editConfirm.style.display = "inline";
        editButton.style.display = "none";

    }, false);


    editConfirm.addEventListener('click', function() {


        var label = this.parentElement.children[1];
        var inputField = this.parentElement.children[3];

        console.log(inputField);

        label.innerHTML = inputField.value;
        inputField.style.display = "none";
        editButton.style.display = "inline";

    }, false);


}

var countOfAllEvents = function() {

    var countOfEvents = document.getElementsByClassName("to-do");

    var label = document.getElementById("all-events");


    label.innerText = countOfEvents.length--;


}

var countOfEvents = function() {

    var activeEvents = document.getElementById("tasks-incomplete");
    var complitedEvents = document.getElementById("completed-tasks");

    var activeLists = activeEvents.children;
    var complitedLists = complitedEvents.children;


    var labelActive = document.getElementById("active-events")
    var labelComplited = document.getElementById("complited-events");

    labelActive.innerText = activeLists.length;
    labelComplited.innerHTML = complitedLists.length;


}

var showTime = function() {

    var showTimeButton = document.getElementsByTagName("button")[1];
    var timeLabel = document.getElementById("time-label");

    showTimeButton.onclick = function(event) {

        timeLabel.style.display = "inline";
    }
}