/* eslint-disable*/
import _ from "lodash";
import "./style.css";

import displayTodo from "./modules/render.js";

export const listBox = document.getElementById("listBox");
const form = document.getElementById("todoform");
const formInput = document.getElementById("text");

export let todosArr = JSON.parse(localStorage.getItem("todo")) || [];
let editToDo = -1;

displayTodo();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
  displayTodo();
  localStorage.setItem("todo", JSON.stringify(todosArr));
});

// Add to do

function addTodo() {
  const todoValue = formInput.value;

  const isDuplicate = todosArr.some(
    (todo) => todo.description.toUpperCase() === todoValue.toUpperCase()
  );

  if (todoValue === "") {
    alert("Todo's input is empty!");
  } else if (isDuplicate) {
    alert("Todo's already exist");
  } else {
    if (editToDo >= 0) {
      todosArr = todosArr.map((todo, index) => ({
        ...todo,
        description: index === editToDo ? todoValue : todo.description,
      }));
      editToDo = -1;
    } else {
      const todo = {
        description: todoValue,
        completed: false,
        index: todosArr.length + 1,
      };

      todosArr.push(todo);
    }
    formInput.value = "";
  }
}

// render function

// Listen for a click event on the todos
listBox.addEventListener("click", (e) => {
  const { target } = e;
  const parentElement = target.parentNode;

  if (parentElement.className !== "list-items") return;

  const todo = parentElement;

  const todoId = Number(todo.id);
  const { action } = target.dataset;

  action === "check" && checkTodo(todoId);
  action === "edit" && editTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});

function checkTodo(todoId) {
  todosArr = todosArr.map((todo, index) => ({
    ...todo,
    completed: index === todoId ? !todo.completed : todo.completed,
  }));

  displayTodo();
  localStorage.setItem("todo", JSON.stringify(todosArr));
}

function editTodo(todoId) {
  formInput.value = todosArr[todoId].description;
  editToDo = todoId;
}

function deleteTodo(todoId) {
  todosArr = todosArr.filter((todo, index) => index !== todoId);
  editToDo = -1;
  displayTodo();
  localStorage.setItem("todo", JSON.stringify(todosArr));
}
