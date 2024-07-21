const TODO_LIST = document.getElementById('lista-tarefas');

function selectTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    selectedTask.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function completedTask(event) {
  event.target.classList.toggle('completed');
}

export function addTask() {
  console.log('OI');
  const li = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');

  li.innerText = inputText.value;
  li.addEventListener('click', selectTask);
  li.addEventListener('dblclick', completedTask);
  TODO_LIST.appendChild(li);

  inputText.value = '';

  /* Tomei como base essa explicação: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript */
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
