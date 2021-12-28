function addTask() {
  const createLi = document.createElement('li');
  const positionOl = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');

  createLi.innerText = inputText.value;
  positionOl.appendChild(createLi);

  inputText.value = '';

  /* Tomei como base essa explicação: https://pt.stackoverflow.com/questions/341329/inserir-li-e-a-via-javascript */
}

const button = document.getElementById('criar-tarefa');

button.addEventListener('click', addTask);
