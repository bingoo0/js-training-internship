var takeLi = "";

var addToDo = function addInToDo() {

    var li = document.createElement('li');

    var value = document.getElementById("todo").value;
    var text = document.createTextNode(value);
    li.appendChild(text);

    if (value === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("todo").value = "";

    takeLi = li;

    deleteToDo();

}

var closeToDo = function close() {

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    takeLi.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var deleteToDo = function delToDo() {

    closeToDo();

    var deleteField = document.getElementsByClassName("close");

    for (let i = 0; i < deleteField.length; i++) {
        deleteField[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
}


var selectToDoTask = function selectTask() {

    var list = document.querySelector('UL');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}