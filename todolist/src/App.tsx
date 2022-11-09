// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef, useState } from "react";
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
    const currentDate = new Date();
    let currDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const textArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-text");
    const dateArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-date");
    const text: string = textArea[0].value;
    const date: string = dateArea[0].value;

    if (text.length === 0 || date.length === 0) {
      return;
    }

    setTodoList((prevState: Array<Object>) => {
      const updatedState = prevState.concat({ textValue: text, dateValue: date, createdOn: currDate, completed: false });
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
    const todos = document.querySelectorAll(".todoListItem");
    const textArea = todos[id].querySelectorAll(".editForm");
    const textDisplay: NodeListOf<HTMLSpanElement> = todos[id].querySelectorAll(".textDisplay");
    const btns: NodeListOf<HTMLButtonElement> = todos[id].querySelectorAll("button");

    btns[1].parentElement!.classList.add("hidden");
    btns[2].parentElement!.classList.remove("hidden");
    textDisplay[0].classList.add("hidden");
    textArea[0].classList.remove("hidden");
    textArea[0].removeAttribute("disabled");
  }

  //saves the previously selected for editing to-do
  function saveEditedTodo(id: number) {
    const todos: NodeListOf<HTMLInputElement> = document.querySelectorAll(".todoListItem");
    const textArea: any = todos[id].querySelectorAll(".editForm");
    const textDisplay: NodeListOf<HTMLSpanElement> = todos[id].querySelectorAll(".textDisplay");
    const btns: NodeListOf<HTMLButtonElement> = todos[id].querySelectorAll("button");

    btns[2].parentElement!.classList.add("hidden");
    btns[1].parentElement!.classList.remove("hidden");
    textDisplay[0].classList.remove("hidden");
    textArea[0].classList.add("hidden");
    textArea[0].setAttribute("disabled", "");

    const newContent = textArea[0].value;
    setTodoList((prevState: Array<Object>) => {
      // eslint-disable-next-line array-callback-return
      const updatedState = prevState.map((item: object, i: number) => {
        if (id === i) {
          return { ...item, textValue: newContent };
        }
        return item;
      });
      updateLocalStorage(updatedState);
      return updatedState;
    });
  }

  function toggleTodo(id: number) {
    setTodoList((prevState: Array<Object>) => {
      const updatedState = prevState.map((item: { completed?: boolean }, i: number) => {
        if (i === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      updateLocalStorage(updatedState);
      return updatedState;
    });
  }
  return (
    <div className="min-w-screen max-w-full min-h-screen max-h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 ">
      <div className="App w-content h-content p-1 flex justify-center">
        <div className="input-wrapper m-5 p-2  rounded-xl  w-min h-min drop-shadow-lg">
          <InputComponents handleSubmit={newTodo} />
          <ListComponents content={todoList} handleDelete={deleteTodo} handleEdit={editTodo} handleSave={saveEditedTodo} handleToggle={toggleTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
