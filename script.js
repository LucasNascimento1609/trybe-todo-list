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

function addTask() {
  const li = document.createElement('li');
  const ol = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');

  li.innerText = inputText.value;
  li.addEventListener('click', selectTask);
  li.addEventListener('dblclick', completedTask);
  ol.appendChild(li);

  inputText.value = '';

  /* Tomei como base essa explicação: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript */
}

function addTaskOnEnterKey(keyEvent) {
  if (keyEvent.key === 'Enter') {
    addTask();
  }
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);

const input = document.getElementById('texto-tarefa');
input.addEventListener('keypress', addTaskOnEnterKey);
