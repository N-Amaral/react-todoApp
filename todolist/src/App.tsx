import React, { useEffect } from "react";
import ListComponents from "./ListComponents";
import InputComponents from "./InputComponents";

const App = () => {
  return (
    <div className="App bg-slate-400 p-3">
      <div className="input-wrapper m-5 p-2 bg-yellow-100 rounded-xl">
        <InputComponents />
      </div>
      <div className="list-wrapper m-2 p-3 bg-yellow-500 rounded-xl ">
        <ListComponents />
      </div>
    </div>
  );
};

export default App;
