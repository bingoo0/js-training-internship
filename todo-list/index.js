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

    var span = document.createElement("span");
    var x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var selectToDoTask = function selectTask() {

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

var DeleteToDo = function deleteToDo() {


}