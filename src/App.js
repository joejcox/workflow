import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
