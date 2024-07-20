document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });
    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            ${taskText}
            <button>Delete</button>
        `;
        taskList.appendChild(li);
    }
});