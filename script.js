function addTask() {

  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}