const inputNewTask = document.querySelector('.input-new-task');
const btnNewTask = document.querySelector('.btn-new-task');
const tasks = document.querySelector('.tasks');

btnNewTask.addEventListener('click', function(e) {
  if (!inputNewTask.value) return alert('Insira uma tarefa');
  addNewTask(inputNewTask.value);
});

inputNewTask.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if (!inputNewTask.value) return alert('Insira uma tarefa');
    addNewTask(inputNewTask.value);
  }
});

document.addEventListener('click', function(e) {
  const element = e.target;

  if(element.classList.contains('apagar')) {
    element.parentElement.remove();
    saveTasks();
  }
})

function addNewTask(inputText) {
  const li = createListItem();
  li.innerHTML = inputText;
  li.innerHTML += ' ';
  tasks.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTasks();
}

function createListItem() {
  const listItem = document.createElement('li');
  return listItem;
}

function createDeleteButton(listItem) {
  const button = document.createElement('button');
  button.innerHTML = 'Apagar';
  button.setAttribute('class', 'apagar');
  button.setAttribute('title', 'Delete this task');
  listItem.appendChild(button);
  return listItem;
}

function clearInput() {
  inputNewTask.value = '';
  inputNewTask.focus();
}

function saveTasks() {
  const taskList = tasks.querySelectorAll('li');
  const formatedTasks = [];
  
  for (const task of taskList) {
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    formatedTasks.push(taskText);
  }

  const listJSON = JSON.stringify(formatedTasks);
  localStorage.setItem('tarefas', listJSON);
}

function addSavedTasks() {
  const tasks = localStorage.getItem('tarefas');
  const tasksList = JSON.parse(tasks);

  for (const task of tasksList) {
    addNewTask(task);
  }
}

addSavedTasks();
