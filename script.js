const TODO_LIST = document.getElementById('lista-tarefas');
let SELECTED_TASK = null;

function selectTask({ target }) {
  if (SELECTED_TASK) {
    SELECTED_TASK.classList.remove('selected');
  }
  SELECTED_TASK = target;
  SELECTED_TASK.classList.add('selected');
}

function completedTask(event) {
  event.target.classList.toggle('completed');
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
  li.addEventListener('dblclick', completedTask);
  TODO_LIST.appendChild(li);

  taskInput.value = '';
}

export function addTaskOnEnterKey(keyEvent) {
  if (keyEvent.key === 'Enter') {
    addTask();
  }
}

export function clearTodoList() {
  while (TODO_LIST.children.length > 0) {
    TODO_LIST.removeChild(TODO_LIST.children[0]);
  }

  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
}

export function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  console.log(completedTasks);

  for (let index = completedTasks.length; index > 0; index -= 1) {
    TODO_LIST.removeChild(completedTasks[index - 1]);
  }
}
