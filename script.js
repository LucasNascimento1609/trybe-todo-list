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

function createTaskElement(taskText, completed = false) {
  const li = document.createElement('li');
  li.innerText = taskText;

  if (completed) {
    li.classList.add('completed');
  }

  li.style.cursor = 'pointer';
  li.style.userSelect = 'none';
  li.addEventListener('click', selectTask);
  li.addEventListener('dblclick', toggleTaskCompletion);
  return li;
}

export function addTask() {
  const taskInput = document.getElementById('texto-tarefa');

  if (!taskInput.value) {
    return alert('Você deve escrever algo para criar uma tarefa');
  }

  const li = createTaskElement(taskInput.value);
  TODO_LIST.appendChild(li);
  taskInput.value = '';
}

export function addTaskOnEnterKey({ key }) {
  if (key === 'Enter') {
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

export function saveTasks() {
  const tasks = [];
  TODO_LIST.querySelectorAll('li').forEach((task) => {
    const taskInfos = {
      text: task.innerText,
      completed: task.classList.contains('completed'),
    };
    tasks.push(taskInfos);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(({ text, completed }) => {
    const li = createTaskElement(text, completed);
    TODO_LIST.appendChild(li);
  });
}

export function moveTaskUp() {
  if (SELECTED_TASK && SELECTED_TASK.previousElementSibling) {
    TODO_LIST.insertBefore(SELECTED_TASK, SELECTED_TASK.previousElementSibling);
  }
}

export function moveTaskDown() {
  if (SELECTED_TASK && SELECTED_TASK.nextElementSibling) {
    TODO_LIST.insertBefore(SELECTED_TASK.nextElementSibling, SELECTED_TASK);
  }
}
