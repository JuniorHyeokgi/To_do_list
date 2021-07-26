var delete_button = document.getElementById('delete');

button.addEventListener('click', clickButton);

function clickButton() {
    var temp = document.createElement('li');
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button type='button' class='btn btn-outline-secondary' onclick='remove("+cnt+")' style='float: right;'>삭제</button>";
    list.appendChild(temp);
    cnt++;
  }

function remove(con) {
    var sql = "DELETE FROM list WHERE content = " + con;
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
  }