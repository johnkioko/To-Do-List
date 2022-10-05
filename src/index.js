/* eslint-disable*/
import _ from "lodash";
import "./style.css";

const todoArr = [
  {
    description: "Take a walk",
    completed: false,
    index: 0,
  },
  {
    description: "Go shopping",
    completed: false,
    index: 1,
  },
];

function component() {
  const element = document.createElement("div");
  element.classList.add = "list-items";

  todoArr.forEach((item, index) => {
    if (item.index === index) {
      element.innerHTML += `<div class="list-items border">
            <input type="checkbox" class="start"></i> 
            <p> ${item.description}</p>
            <i class="bi bi-three-dots-vertical end"></i>
        
            </div>`;
    }
  });

  return element;
}

document.querySelector("#listBox").appendChild(component());
