document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = function () {
            this.parentNode.removeChild(this);
            saveTasks();
        };
        taskList.appendChild(li);
        taskInput.value = '';
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    for (const task of storedTasks) {
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = function () {
            this.parentNode.removeChild(this);
            saveTasks();
        };
        taskList.appendChild(li);
    }
}
