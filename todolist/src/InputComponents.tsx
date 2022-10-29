import React from "react";

const DateInput = () => {
  return (
    <>
      <div className="date-wrapper basis-1/4 m-1">
        <input className="form-input" type="date" name="todo-date" id="todo-date" />
      </div>
    </>
  );
};

const TextInput = () => {
  return (
    <>
      <div className="text-wrapper basis-1/2 m-1">
        <textarea className="form-textarea" name="text" id="todo-text" cols={50} rows={4}></textarea>
      </div>
    </>
  );
};

const InputComponents = () => {
  function readText() {
    const textArea: NodeListOf<HTMLInputElement> = document.querySelectorAll("#todo-text");
    Array.from(textArea).forEach((input: HTMLInputElement) => {
      console.log(input.value);
    });
  }
  return (
    <>
      <form
        action=""
        className="flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          readText();
        }}
      >
        <div className="flex flex-row">
          <TextInput />
          <DateInput />
        </div>
        <button id="submitContent" className="h-10 bg-red-700 basis-1/6" type="submit" formMethod="GET">
          Hello
        </button>
      </form>
    </>
  );
};

export default InputComponents;
