import { qs } from './ToDos.js';
import ToDos from './ToDos.js';
let myVar = 3;

const myToDos = new ToDos(qs('#taskList'), 'todo');

console.log(myToDos.key);