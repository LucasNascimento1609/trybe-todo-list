import {
  addTask,
  addTaskOnEnterKey,
  clearTodoList,
  clearCompletedTasks,
  saveTasks,
  loadTasks,
} from './script.js';

loadTasks();

document.getElementById('criar-tarefa').addEventListener('click', addTask);
document.getElementById('texto-tarefa').addEventListener('keypress', addTaskOnEnterKey);
document.getElementById('apaga-tudo').addEventListener('click', clearTodoList);
document.getElementById('remover-finalizados').addEventListener('click', clearCompletedTasks);
document.getElementById('salvar-tarefas').addEventListener('click', saveTasks);
