let liveToDos = [{todo: 'DoStuff'}];

function readFromLS(key) {
    return localStorage.getItem(key);
}

function writeToLS(key) {
    localStorage.setItem(key, JSON.stringify(liveToDos));
}

//writeToLS('todo');
//console.log(readFromLS);


function saveToDo(task, key) {
    const todo = {
        id: new Date(),
        task: task,
        completed: false
    };
    
    
}

function bindTouch(elementSelector, callback) {
    const element = qs(elementSelector);
    element.addEventListener('touchend', event => {
        event.preventDefault();
        callback();
    });
    element.addEventListener('click', callback);
    
}

export function getToDos() {
    return liveToDos;
}

export function qs(className) {
    return document.querySelector(className);
}

class ToDos {
    constructor(listElement, key) {
        this.listElement = listElement;
        this.key = key;
        bindTouch('#addButton', this.addToDo.bind(this));
    }
    addToDo() {
        const input = qs('#taskInput');
        saveToDo(input.value, this.key);
        this.listToDos();
    }
    listToDos() {
        console.log('Worked!')
    }
}
export default ToDos;