var list = [];
var createNewTaskElement = function() {

    var taskInput = document.getElementById("new-task");
    var addButton = document.getElementsByTagName("button")[0];
    var incompleteTaskHolder = document.getElementById("incomplete-tasks");
    var completedTasksHolder = document.getElementById("completed-tasks");


    var listItem = document.createElement("li");

    var checkBox = document.createElement("input"); //checkbx
    //label
    var label = document.createElement("label"); //label
    //input (text)
    var editInput = document.createElement("input"); //text
    //button.edit
    var editButton = document.createElement("button"); //edit button

    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    var value = document.getElementById("new-task").value;

    label.innerText = value;

    listItem.className = "to-do";
    checkBox.type = "checkbox";
    checkBox.id = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    if (value === '') {
        alert("You must write something!");
    } else {

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById("tasks-incomplete").appendChild(listItem);
    }


    document.getElementById("new-task").value = "";

    deleteTask();
    checkField();

}


var deleteTask = function() {
    var deleteField = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteField.length; i++) {
        deleteField[i].onclick = function() {
            var delField = this.parentElement;
            delField.style.display = "none";
        }

    }
}

var checkField = function() {

    var checkBox = document.getElementById("checkbox");
    var completedTasks = document.getElementById("completed-tasks");
    var incompleteTasks = document.getElementById("tasks-incomplete");

    checkBox.onchange = function() {


        var completed = this.parentElement;

        if (checkBox.checked == true) {
            checkBox.classList.toggle('checked');
            completedTasks.appendChild(completed);
        } else {
            checkBox.classList.toggle('uncheked');
            incompleteTasks.appendChild(completed);
        }

    }


}



checkField();