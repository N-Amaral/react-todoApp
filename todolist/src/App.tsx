import React, { useState } from "react";
import ListComponents from "./ListComponents";
import InputComponents from "./InputComponents";

const App = () => {
  //startup list of to-do's
  const [todoList, setTodoList] = useState([
    { textValue: "First todo", dateValue: "2022-04-12" },
    { textValue: "Second todo", dateValue: "2022-05-12" },
    { textValue: "Third todo", dateValue: "2022-06-12" },
    { textValue: "Fourth todo", dateValue: "2022-07-12" },
  ]);

  //allow submission of new to-do
  function newTodo() {
    const textArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-text");
    const dateArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-date");
    const text: string = textArea[0].value;
    const date: string = dateArea[0].value;

    if (text.length === 0 || date.length === 0) {
      return;
    }
    setTodoList((prevState) => {
      const updatedState = prevState.concat({ textValue: text, dateValue: date });
      return updatedState;
    });
    textArea[0].value = "";
    dateArea[0].value = "";
  }
  //deletes selected to-do
  function deleteTodo(id: number) {
    setTodoList((prevState) => {
      const updatedState = prevState.filter((item, i) => {
        if (i !== id) {
          return item;
        }
      });
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

    console.log(textArea.innerHTML);
    console.log(btns);
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
