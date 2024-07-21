import { addTask, addTaskOnEnterKey, clearTodoList, clearCompletedTasks } from './script.js';

document.getElementById('criar-tarefa').addEventListener('click', addTask);

document.getElementById('texto-tarefa').addEventListener('keypress', addTaskOnEnterKey);

document.getElementById('apaga-tudo').addEventListener('click', clearTodoList);

document.getElementById('remover-finalizados').addEventListener('click', clearCompletedTasks);
