import { Task } from './task.js';

let tasks = [];

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    loadTasks();
}

// Using the onclick property - define functions
window.addTask = addTask;
window.loadTasks = loadTasks;
window.activeTasks = activeTasks;
window.doneTasks = doneTasks;

function addTask() {
    const newTask = new Task(
        document.getElementById('content').value
    );

    tasks.push(newTask);

    saveTasks(tasks);
    loadTasks();
    clearFields();
}

function clearFields() {
    document.querySelector('#content').value = '';
}

function clearTasks() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function activeTasks() {
    clearTasks();

    tasks.forEach(
        (task) => {
            // Build a Table
            let tr = document.createElement('tr');
            let tdContent = document.createElement('td');

            // If a task is complete make add it to the complete 'class'
            if (task.done)
            {
                tr.classList.add('complete');
            }

            // Displaying NOT-done tasks only
            if(!task.done)
            {
            // Table Elements
            let tdDone = document.createElement('td');
            let tdEdit = document.createElement('td');

            let aDone = document.createElement('a');
            aDone.textContent = 'Done';
            aDone.addEventListener('click', doneTask.bind(null, task), false);

            tdContent.textContent = task.content;

            let aDelete = document.createElement('a');
            aDelete.addEventListener('click', deleteTask.bind(null, task), false);
            aDelete.textContent = 'X';

            tdDone.appendChild(aDone);
            tdEdit.appendChild(aDelete);

            tr.appendChild(tdDone);
            tr.appendChild(tdContent);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);
            }
        }
    );
}

function doneTasks() {
    clearTasks();

    tasks.forEach(
        (task) => {
            // Build a Table
            let tr = document.createElement('tr');
            let tdContent = document.createElement('td');

            // If a task is complete make add it to the complete 'class'
            if (task.done)
            {
                tr.classList.add('complete');
            }

            // Displaying done tasks only
            if(task.done)
            {
            // Table Elements
            let tdDone = document.createElement('td');
            let tdEdit = document.createElement('td');

            let aDone = document.createElement('a');
            aDone.textContent = 'Done';
            aDone.addEventListener('click', doneTask.bind(null, task), false);

            tdContent.textContent = task.content;

            let aDelete = document.createElement('a');
            aDelete.addEventListener('click', deleteTask.bind(null, task), false);
            aDelete.textContent = 'X';

            tdDone.appendChild(aDone);
            tdEdit.appendChild(aDelete);

            tr.appendChild(tdDone);
            tr.appendChild(tdContent);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);
            }
        }
    );
}

function loadTasks() {
    clearTasks();

    tasks.forEach(
        (task) => {
            // Build a Table
            let tr = document.createElement('tr');
            let tdContent = document.createElement('td');

            // If a task is complete make add it to the complete 'class'
            if (task.done)
            {
                tr.classList.add('complete');
            }

            // Table Elements
            let tdDone = document.createElement('td');
            let tdEdit = document.createElement('td');

            let aDone = document.createElement('a');
            aDone.textContent = 'Done';
            aDone.addEventListener('click', doneTask.bind(null, task), false);

            tdContent.textContent = task.content;

            let aDelete = document.createElement('a');
            aDelete.addEventListener('click', deleteTask.bind(null, task), false);
            aDelete.textContent = 'X';

            tdDone.appendChild(aDone);
            tdEdit.appendChild(aDelete);

            tr.appendChild(tdDone);
            tr.appendChild(tdContent);
            tr.appendChild(tdEdit);

            document.querySelector('tbody').appendChild(tr);
        }
    );
}

function saveTasks(task) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function doneTask(task) {

    if(task.done)
    {
        task.done = false;
    }
    else task.done = true;

    saveTasks(tasks);
    loadTasks();
}

function deleteTask(task) {
    let pos = tasks.indexOf(task);
    
    if (pos < 0) {
        return;
    }

    tasks.splice(pos, 1);

    saveTasks(tasks);
    loadTasks();
}