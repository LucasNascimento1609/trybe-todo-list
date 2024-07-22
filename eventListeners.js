import {
  addTask,
  addTaskOnEnterKey,
  clearTodoList,
  clearCompletedTasks,
  saveTasks,
  loadTasks,
  moveTaskUp,
  moveTaskDown,
  removeSelectedTask,
} from './script.js';

loadTasks();

document.getElementById('criar-tarefa').addEventListener('click', addTask);
document.getElementById('texto-tarefa').addEventListener('keypress', addTaskOnEnterKey);
document.getElementById('apaga-tudo').addEventListener('click', clearTodoList);
document.getElementById('remover-finalizados').addEventListener('click', clearCompletedTasks);
document.getElementById('salvar-tarefas').addEventListener('click', saveTasks);
document.getElementById('mover-cima').addEventListener('click', moveTaskUp);
document.getElementById('mover-baixo').addEventListener('click', moveTaskDown);
document.getElementById('remover-selecionado').addEventListener('click', removeSelectedTask);
