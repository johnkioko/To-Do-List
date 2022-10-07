/* eslint-disable*/
import { todosArr} from '../index.js';

export default function displayTodo() {
  let htmlCode = '';
  todosArr.forEach((todo, index) => {
    htmlCode += `<div class="list-items" id= '${index}'>
    
    <i class="bi ${
  todo.completed ? 'bi-check-circle-fill' : 'bi-circle'
}" data-action = "check" id="flex-start"></i> 
    <p class= "${
  todo.completed ? 'completed' : ''
}" data-action = "edit" data-action = "check"> ${todo.description}</p>
    <i class="bi bi-three-dots-vertical end hide"></i>
    <i class="bi bi-trash flex-end delete-btn" data-action = "delete"></i>

    </div>`;
  });

  listBox.innerHTML = htmlCode;
}
