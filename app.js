function onReady() {
let toDos = [];
let id = toDos.length || 0;

const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

function deleteToDo(id) {
  return toDos.filter(toDo => toDo.id !== id);
}

function createNewToDo() {

  toDos.push({
  title: newToDoText.value,
  complete: false,
  id: ++id
  });
  newToDoText.value = '';

renderTheUI();
}

function renderTheUI() {

  const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';

toDos.forEach(function(toDo) {

  const newToDo = document.createElement('li');
   const newLi = document.createElement('li');

const checkbox = document.createElement('input');
checkbox.type = "checkbox";

newLi.textContent = toDo.title;

toDoList.appendChild(newLi);
newLi.appendChild(checkbox);

const title = document.createElement('span');
const deleteButton = document.createElement('button');
deleteButton.innerHTML = "<span>Delete</span>";
deleteButton.addEventListener('click', () => {
  toDos = deleteToDo(toDo.id);
  renderTheUI();
});
newLi.appendChild(deleteButton);
title.textContent = toDo.title;

});

}


addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
   newToDoText.value = '';
});

renderTheUI();

}

window.onload = function() {
  onReady();
};
