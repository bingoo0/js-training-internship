
var createNewTaskElement = function () {

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
    var editConfirm = document.createElement("button"); // edin confirm

    var editButton = document.createElement("button"); //edit button

    //button.delete
    var deleteButton = document.createElement("button"); //delete button

    var checkboxButton = document.createElement("button");

    var value = document.getElementById("new-task").value;

    label.innerText = value;

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
    checkboxButton.className = "input-checkbox";

    var inputCheck = document.getElementById("input-checkbox");

    if (value === '') {
        alert("You must write something!");
    } else {

        listItem.appendChild(checkboxButton)
        checkboxButton.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editConfirm);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById("tasks-incomplete").appendChild(listItem);

    }


    document.getElementById("new-task").value = "";

    checkField();
    deleteTask();
    editField();
    countOfEvents();
    countOfActiveEvents();
}


var deleteTask = function () {
    var deleteField = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteField.length; i++) {
        deleteField[i].onclick = function () {
            var delField = this.parentElement.parentElement;

            delField.removeChild(this.parentElement);

            countOfEvents();
            countOfActiveEvents();
        }

    }
}

var checkField = function () {

    var checkBox = document.querySelector("input[type=checkbox]");
    var inputCheck = document.getElementsByClassName("input-checkbox");
    var completedTasks = document.getElementById("completed-tasks");
    var incompleteTasks = document.getElementById("tasks-incomplete");
    var listItem = document.getElementsByClassName("to-do");


    for (let i = 0; i < inputCheck.length; i++) {

        inputCheck[i].onchange = function () {

            var completed = this.parentElement;
            console.log(completed);

            if (checkBox.checked == true) {

                checkBox.classList.toggle('checked');
                completedTasks.appendChild(completed);

                countOfActiveEvents();
            }

            if (checkBox.checked != true) {

                checkBox.classList.toggle('uncheked');
                incompleteTasks.appendChild(completed);

                var activeEvents = document.getElementById("tasks-incomplete");

                var activeLists = activeEvents.children;

                var label = document.getElementById("active-events")

                label.innerText = activeLists.length++;

            }

        }
    }



}

var editField = function () {

    var editInput = document.getElementById('edit');
    var edit = document.getElementsByClassName("edit");
    var editConfirm = document.getElementsByClassName("confirm");

    for (let i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {


            var label = this.parentElement.children[1];
            var inputField = this.parentElement.children[3];

            inputField.style.display = "inline";
            editConfirm = edit;

            for (let i = 0; i < editConfirm.length; i++) {
                editConfirm[i].onclick = function () {


                    if (editConfirm[i]) {

                        label.innerHTML = inputField.value;
                        inputField.style.display = "none";
                    }
                }

            }
        }
    }
}

var countOfEvents = function () {

    var countOfEvents = document.getElementsByClassName("to-do");

    var label = document.getElementById("all-events");


    label.innerText = countOfEvents.length--;


}

var countOfActiveEvents = function () {

    var activeEvents = document.getElementById("tasks-incomplete");

    var activeLists = activeEvents.children;

    var label = document.getElementById("active-events")

    label.innerText = activeLists.length--;

}

