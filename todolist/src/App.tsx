import React from "react";

function App() {
  const message: string = "Hello in TSX";
  return (
    <div className="App">
      <p className="underline bg-red-800">{message}</p>
    </div>
  );
}

export default App;
