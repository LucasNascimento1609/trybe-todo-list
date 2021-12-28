function selectTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    selectedTask.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function addTask() {
  const li = document.createElement('li');
  const ol = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');

  li.innerText = inputText.value;
  li.addEventListener('click', selectTask);
  ol.appendChild(li);

  inputText.value = '';

  /* Tomei como base essa explicação: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript */
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);
