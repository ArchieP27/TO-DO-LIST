document.getElementById("todo-form").addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("todo-list");

    const row = document.createElement("tr");

    const taskCell = document.createElement("td");
    taskCell.textContent = task;

    const completeCell = document.createElement("td");
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark Complete";
    completeButton.classList.add("complete-button");
    completeButton.onclick = function () {
        taskCell.classList.toggle("completed");
    };
    completeCell.appendChild(completeButton);

    const removeCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
        taskList.removeChild(row);
    };
    removeCell.appendChild(deleteButton);

    row.appendChild(taskCell);
    row.appendChild(completeCell);
    row.appendChild(removeCell);
    taskList.appendChild(row);

    taskInput.value = "";
}
