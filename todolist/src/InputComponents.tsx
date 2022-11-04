import React from "react";

const DateInput = () => {
  return (
    <>
      <div className="date-wrapper basis-1/4 m-1">
        <input className="form-input font-mono" type="date" name="todo-date" id="todo-date" />
      </div>
    </>
  );
};

const TextInput = () => {
  return (
    <>
      <div className="text-wrapper basis-1/2 m-1 ">
        <textarea className="form-textarea" name="text" id="todo-text" cols={50} rows={4}></textarea>
      </div>
    </>
  );
};

const InputComponents = (props: { handleSubmit: Function }) => {
  return (
    <>
      <form
        action=""
        className="flex flex-col "
        onSubmit={(event) => {
          event.preventDefault();
          props.handleSubmit();
        }}
      >
        <div className="flex flex-row bg-gradient-to-br from-white via-purple-400 to-blue-600 rounded-t-md p-1">
          <TextInput />
          <DateInput />
        </div>
        <button id="submitContent" className="h-10 bg-blue-700 basis-1/6 rounded-b-md" type="submit" formMethod="GET">
          <p className="font-mono font-bold text-2xl text-white"> Submit</p>
        </button>
      </form>
    </>
  );
};

export default InputComponents;
