import React, { useState } from "react";
import ListComponents from "./ListComponents";
import InputComponents from "./InputComponents";

const App = () => {
  const [todoList, setTodoList] = useState([
    { textValue: "First todo", dateValue: "2022-04-12" },
    { textValue: "Second todo", dateValue: "2022-05-12" },
  ]);

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

  function deleteTodo(id: number) {
    const list = todoList;
    // setTodoList((prevState) => {
    //   const updatedState = prevState.splice(id, 1);
    //   return updatedState;
    // });

    console.log(typeof list);
    console.log(id, todoList[id], list);
  }

  return (
    <div className="App bg-slate-400 p-3">
      <div className="input-wrapper m-5 p-2 bg-yellow-100 rounded-xl">
        <InputComponents handleSubmit={newTodo} />
      </div>
      <div className="list-wrapper m-2 p-3 bg-yellow-500 rounded-xl ">
        <ListComponents content={todoList} handleDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
