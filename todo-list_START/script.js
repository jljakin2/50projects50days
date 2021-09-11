// 1. grab form, input, and todosUL
// 2. pull any existing todos from localStorage
//  - if there are any, show them, otherwise skip
// 3. listen for form submit, and add todo
//  - get input value
//  - ***if there was a todo passed in, use that value
//  - create todo element
//  - ***if one was passed in, check if it is complete and add complete class
//  - add text to created element
//  - add listener for each todo item
//      - left click = complete
//      - right click = delete
//  - append todo to todosUL
//  - restart input value
//  - update local storage appropriately

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoValue = input.value;

  if (todo) {
    todoValue = todo.text;
  }

  const todoEl = document.createElement("li");

  if (todoValue) {
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoValue;

    // handle clicks for complete and delete
    // left-click
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLocalStorage();
    });

    // right-click
    todoEl.addEventListener("contextmenu", e => {
      e.preventDefault();

      todoEl.remove();
      updateLocalStorage();
    });

    todosUL.appendChild(todoEl);

    input.value = "";
  }

  updateLocalStorage();
}

function updateLocalStorage() {
  todoEls = document.querySelectorAll("li");

  const todos = [];

  todoEls.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
