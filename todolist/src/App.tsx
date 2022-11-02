// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import ListComponents from "./ListComponents";
import InputComponents from "./InputComponents";
import { state } from "./helper";

const App = () => {
  //startup list of to-do's
  const storage: string | null = localStorage.getItem("todoList");

  const [todoList, setTodoList] = useState(storage === null ? state : JSON.parse(storage));

  function updateLocalStorage(todoList: Array<Object>) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  //allow submission of new to-do
  function newTodo() {
    const textArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-text");
    const dateArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-date");
    const text: string = textArea[0].value;
    const date: string = dateArea[0].value;

    if (text.length === 0 || date.length === 0) {
      return;
    }

    setTodoList((prevState: Array<Object>) => {
      const updatedState = prevState.concat({ textValue: text, dateValue: date });
      updateLocalStorage(updatedState);
      return updatedState;
    });
    textArea[0].value = "";
    dateArea[0].value = "";
  }

  //deletes selected to-do
  function deleteTodo(id: number) {
    setTodoList((prevState: Array<Object>) => {
      // eslint-disable-next-line array-callback-return
      const updatedState = prevState.filter((item: object, i: number) => {
        if (id !== i) {
          return item;
        }
      });
      updateLocalStorage(updatedState);
      return updatedState;
    });
  }

  //allows for editing of selected to-do
  function editTodo(id: number) {
    const todos: NodeListOf<HTMLInputElement> = document.querySelectorAll(".todoListItem");
    const textArea = todos[id].children[0];
    const dateArea = todos[id].children[1];
    const btns = todos[id].children[2].children;

    btns[1].classList.add("hidden");
    btns[2].classList.remove("hidden");
    textArea.removeAttribute("disabled");
    dateArea.removeAttribute("disabled");

    textArea.innerHTML = `${todoList[id].textValue}`;
    dateArea.innerHTML = `${todoList[id].dateValue}`;
  }

  //saves the previously selected for editing to-do
  function saveEditedTodo(id: number) {
    const todos: NodeListOf<HTMLInputElement> = document.querySelectorAll(".todoListItem");
    const textArea = todos[id].children[0];
    const dateArea = todos[id].children[1];
    const btns = todos[id].children[2].children;

    btns[2].classList.add("hidden");
    btns[1].classList.remove("hidden");
    textArea.setAttribute("disabled", "");
    dateArea.setAttribute("disabled", "");
  }

  return (
    <div className="App bg-slate-400 p-3">
      <div className="input-wrapper m-5 p-2 bg-yellow-100 rounded-xl">
        <InputComponents handleSubmit={newTodo} />
      </div>
      <div className="list-wrapper m-2 p-3 bg-yellow-500 rounded-xl ">
        <ListComponents content={todoList} handleDelete={deleteTodo} handleEdit={editTodo} handleSave={saveEditedTodo} />
      </div>
    </div>
  );
};

export default App;
