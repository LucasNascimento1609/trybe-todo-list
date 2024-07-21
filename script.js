const TODO_LIST = document.getElementById('lista-tarefas');
let SELECTED_TASK = null;

function selectTask({ target }) {
  if (SELECTED_TASK) {
    SELECTED_TASK.classList.remove('selected');
  }
  SELECTED_TASK = target;
  SELECTED_TASK.classList.add('selected');
}

function toggleTaskCompletion({ target }) {
  target.classList.toggle('completed');
}

export function addTask() {
  const li = document.createElement('li');
  const taskInput = document.getElementById('texto-tarefa');

  if (!taskInput.value) {
    return alert('Você deve escrever algo para criar uma tarefa');
  }

  li.innerText = taskInput.value;
  li.style.cursor = 'pointer';
  li.style.userSelect = 'none';
  li.addEventListener('click', selectTask);
  li.addEventListener('dblclick', toggleTaskCompletion);
  TODO_LIST.appendChild(li);

  taskInput.value = '';
}

export function addTaskOnEnterKey(keyEvent) {
  if (keyEvent.key === 'Enter') {
    addTask();
  }
}

export function clearTodoList() {
  TODO_LIST.innerHTML = '';
}

export function clearCompletedTasks() {
  const completedTasks = TODO_LIST.querySelectorAll('.completed');
  completedTasks.forEach((task) => task.remove());
}
