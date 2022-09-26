import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Xin chào mn f8!</h1>
    </div>
  );
}

// React 17
// ReactDOM.render(<App />, document.getElementById("root"));

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
